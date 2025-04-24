import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
  useWindowDimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { ThemedText } from './ThemedText';
import { supabase } from '@/initSupabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';

export default function AuthSection(props) {
  const { width } = useWindowDimensions();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [large, setLarge] = useState(width > 600);
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const rotate = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
  }));

  useEffect(() => {
    setLarge(width > 600);
  }, [width]);

  const startLoadingAnimation = () => {
    rotate.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1
    );
  };

  const stopLoadingAnimation = () => {
    cancelAnimation(rotate);
    rotate.value = 0;
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  // Function to sync user data from Supabase to local storage
  const syncUserData = async (userId) => {
    try {
      setIsSyncing(true);
      
      // 1. Sync selected courses
      const { data: userCourses, error: coursesError } = await supabase
        .from('user_courses')
        .select('course_id')
        .eq('user_id', userId);
      
      if (coursesError) throw coursesError;
      
      if (userCourses && userCourses.length > 0) {
        const courseIds = userCourses.map(course => course.course_id);
        await AsyncStorage.setItem('selectedSubjects', JSON.stringify(courseIds));
      }

      // 2. Sync quiz results if they exist
      const { data: quizResults, error: quizError } = await supabase
        .from('quiz_results')
        .select('*')
        .eq('user_id', userId);
      
      if (quizError) throw quizError;
      
      if (quizResults && quizResults.length > 0) {
        await AsyncStorage.setItem('quizResults', JSON.stringify(quizResults));
      }

      // 3. Sync user preferences
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('preferences')
        .eq('id', userId)
        .single();
      
      if (userError && userError.code !== 'PGRST116') {
        // PGRST116 is "no rows returned" - not an error for new users
        throw userError;
      }
      
      if (userData && userData.preferences) {
        await AsyncStorage.setItem('userPreferences', JSON.stringify(userData.preferences));
      }
      
      console.log('User data synced successfully');
      return true;
    } catch (error) {
      console.error('Error syncing user data:', error);
      return false;
    } finally {
      setIsSyncing(false);
    }
  };

  async function handleSignup() {
    const trimmedEmail = email.trim();

    if (!isValidEmail(trimmedEmail)) {
      return Alert.alert('Invalid Email', 'Please enter a valid email.');
    }

    if (password.length < 6) {
      return Alert.alert('Weak Password', 'Password must be at least 6 characters.');
    }

    if (password !== passwordConfirm) {
      return Alert.alert('Password Mismatch', 'Passwords do not match.');
    }

    if (!agreeTerms) {
      return Alert.alert('Terms Required', 'Please agree to the terms to continue.');
    }

    setIsLoading(true);
    startLoadingAnimation();

    const { data, error } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
    });

    stopLoadingAnimation();
    setIsLoading(false);

    if (error) {
      return Alert.alert('Sign Up Failed', error.message);
    }

    Alert.alert('Account Created', 'Please check your email to confirm your account.');
    setIsSignup(false);
  }

  async function handleLogin() {
    const trimmedEmail = email.trim();

    if (!isValidEmail(trimmedEmail)) {
      return Alert.alert('Invalid Email', 'Please enter a valid email address.');
    }

    setIsLoading(true);
    startLoadingAnimation();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password,
    });

    if (error) {
      stopLoadingAnimation();
      setIsLoading(false);
      
      if (error.message.toLowerCase().includes('email not confirmed')) {
        return Alert.alert('Email Not Confirmed', 'Please confirm your email before logging in.');
      }
      return Alert.alert('Login Failed', error.message);
    }

    // If login successful, sync user data
    if (data && data.user) {
      const syncSuccess = await syncUserData(data.user.id);
      
      if (!syncSuccess) {
        // Continue even if sync fails, just warn the user
        console.warn('Failed to sync some user data');
      }
    }

    stopLoadingAnimation();
    setIsLoading(false);
    Alert.alert('Login Successful', 'Welcome back!');
    props.skip();
  }

  // Method to manually trigger sync for cases where automatic sync fails
  // or for use in a settings page
  const manualSync = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session || !session.user) {
      return Alert.alert('Not Logged In', 'Please log in to sync your data.');
    }
    
    setIsLoading(true);
    startLoadingAnimation();
    
    const success = await syncUserData(session.user.id);
    
    stopLoadingAnimation();
    setIsLoading(false);
    
    if (success) {
      Alert.alert('Sync Complete', 'Your data has been successfully synchronized.');
    } else {
      Alert.alert('Sync Failed', 'Failed to synchronize your data. Please try again later.');
    }
  };

  // Method to push local data to the server
  const syncToServer = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session || !session.user) {
      return false;
    }
    
    try {
      setIsSyncing(true);
      
      // 1. Sync selected subjects to user_courses table
      const storedSubjects = await AsyncStorage.getItem('selectedSubjects');
      if (storedSubjects) {
        const selectedSubjects = JSON.parse(storedSubjects);
        
        // Delete existing records first to avoid duplicates
        await supabase
          .from('user_courses')
          .delete()
          .eq('user_id', session.user.id);
        
        // Insert new course selections
        if (selectedSubjects && selectedSubjects.length > 0) {
          const coursesToInsert = selectedSubjects.map(courseId => ({
            user_id: session.user.id,
            course_id: courseId
          }));
          
          const { error } = await supabase
            .from('user_courses')
            .insert(coursesToInsert);
            
          if (error) throw error;
        }
      }
      
      // 2. Sync user preferences if they exist
      const storedPreferences = await AsyncStorage.getItem('userPreferences');
      if (storedPreferences) {
        const { error } = await supabase
          .from('users')
          .upsert({ 
            id: session.user.id, 
            preferences: JSON.parse(storedPreferences),
            updated_at: new Date().toISOString()
          });
          
        if (error) throw error;
      }
      
      // 3. Update last sync timestamp
      await supabase
        .from('users')
        .update({ last_sync: new Date().toISOString() })
        .eq('id', session.user.id);
      
      return true;
    } catch (error) {
      console.error('Error syncing to server:', error);
      return false;
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <View
      style={[
        styles.page,
        {
          width,
          flexDirection: large ? 'row-reverse' : 'column',
          justifyContent: large ? 'space-around' : 'flex-start',
        },
      ]}
    >
      <View style={styles.container}>
        <ThemedText type="title">
          {isSignup ? 'Create an Account' : 'Log in for more features'}
        </ThemedText>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={[styles.input, isLoading && { opacity: 0.5 }]}
          value={email}
          onChangeText={setEmail}
          editable={!isLoading}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={[styles.input, isLoading && { opacity: 0.5 }]}
          value={password}
          onChangeText={setPassword}
          editable={!isLoading}
        />
        {isSignup && (
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={[styles.input, isLoading && { opacity: 0.5 }]}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            editable={!isLoading}
          />
        )}

        {isSignup && (
          <View style={styles.checkboxContainer}>
            <Pressable onPress={() => setAgreeTerms(!agreeTerms)} style={styles.checkbox}>
              <Text style={{ color: '#fff' }}>{agreeTerms ? '☑' : '☐'}</Text>
            </Pressable>
            <Text style={{ color: '#fff' }}>
              I agree to the{' '}
              <Text style={styles.link} onPress={() => setModalVisible(true)}>
                Terms of Service & Privacy Policy
              </Text>
            </Text>
          </View>
        )}

        <View style={styles.oauthContainer}>
          {['Google', 'Facebook', 'TikTok'].map((provider) => (
            <Pressable key={provider} style={styles.oauthButton}>
              <Text style={{ color: '#fff' }}>Continue with {provider}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={[styles.cta, { marginHorizontal: large ? 0 : 'auto', opacity: isLoading ? 0.6 : 1 }]}
          onPress={() => {
            if (isLoading) return;
            isSignup ? handleSignup() : handleLogin();
          }}
        >
          {isLoading ? (
            <Animated.View style={animatedStyle}>
              <ActivityIndicator size="small" color="#FFF" />
            </Animated.View>
          ) : (
            <Text style={{ color: '#FFF', fontSize: 22 }}>
              {isSignup ? 'Sign Up' : 'Log In'}
            </Text>
          )}
        </Pressable>

        <Pressable onPress={toggleMode} style={{ marginTop: 20 }}>
          <Text style={{ color: '#9584FF', textAlign: 'center' }}>
            {isSignup ? 'Already have an account? Log in' : 'New here? Create an account'}
          </Text>
        </Pressable>

        <Pressable style={styles.skip} onPress={() => props.skip()}>
          <Text style={{ color: '#FFF' }}>Skip for now</Text>
        </Pressable>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={{ color: '#fff', fontSize: 16 }}>
                Welcome to our platform! By using this app, you agree to our Terms of Service and
                Privacy Policy, which explain how your data is used and protected.
              </Text>
            </ScrollView>
            <Pressable onPress={() => setModalVisible(false)} style={styles.closeModal}>
              <Text style={{ color: '#FFF' }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80,
  },
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: 400,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9584FF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  checkbox: {
    marginRight: 10,
  },
  link: {
    color: '#9584FF',
    textDecorationLine: 'underline',
  },
  oauthContainer: {
    marginTop: 20,
    gap: 10,
  },
  oauthButton: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    borderColor: '#333',
    borderWidth: 1,
  },
  cta: {
    backgroundColor: '#9584FF',
    minWidth: '90%',
    maxWidth: 300,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    marginTop: 30,
  },
  skip: {
    marginTop: 40,
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  closeModal: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#9584FF',
    padding: 10,
    borderRadius: 10,
  },
});