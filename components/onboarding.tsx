import React, { useEffect } from 'react';
import { ScrollView,StyleSheet, useWindowDimensions, Platform, View, Image } from 'react-native';
import OnboardingSection from './ui/OnboardingSection';
import LandingNavigation from './LandingNavigation';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

const Onboarding = (props) => {

  const {width} = useWindowDimensions();
   const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(20, { duration: 1000 }), // move 10px over 5s
      -1, // infinite
      true // reverse back and forth
    );
    translateY.value = withRepeat(
      withTiming(20, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ]
  }));

  return (
    <View style={[styles.container, {width, position: 'relative'}]}>
<Animated.View style={[
        {
          position: 'absolute',
          top: -20,
          left: -20,
          width: '110%',
          height: '110%',
          zIndex: -1,
        },
        animatedStyle
      ]}>
        <Image 
          source={width < 600 ? require('./img/gaus.png') : require('./img/gauslg.png')} 
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }} 
        />
      </Animated.View>
      {Platform.OS === 'web' && <LandingNavigation/>}
    <ScrollView horizontal pagingEnabled style={styles.container}>
    <OnboardingSection 
        description='Elevate your studies with interactive learning tools and personalized study plans' 
        image={require('./img/oldgirl.png')}
        title='Learn Smarter with Dzoro'
        callToAction={() => props.deboard()}
        callToActionText='Get Started'
        />
    <OnboardingSection 
        description='Study flashcards with spaced repetition and test your knowledge with various question types ' 
        image={require('./img/boy.png')}
        title='Flashcards and Quizzes'
        callToAction={() => console.log('Get Started')}
        callToActionText='Sign In'
        />  
    <OnboardingSection 
        title='Advanced Concept Maping' 
        image={require('./img/concept_maping.png')}
        description='Mind Maps to map out your understanding of the topics and identify weak areas'
        callToAction={() => console.log('Get Started')}
        callToActionText='Sign In'
        />
    {Platform.OS === 'web' && 
        <OnboardingSection 
        title='Offline Mode' 
        image={require('./img/app_mockup.webp')}
        description='Use our mobile app to access our material offline anywhere, anytime'
        callToActionText='Download the app'
        callToAction={() => console.log('Download the app')}
        />
      }
    </ScrollView>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    position: 'relative',
  },
});

export default Onboarding;