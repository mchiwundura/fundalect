import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  ImageSourcePropType,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { useDatabase } from "@/hooks/useDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "@/initSupabase";
import NewCourseCard from "./NewCourseCard";
import { ScrollView } from "react-native-gesture-handler";

interface OnboardingSectionProps {
  title: string;
  description: string;
  image: ImageSourcePropType;
  callToAction?: () => void;
  callToActionText?: string;
}

export default function CourseSearch(props: OnboardingSectionProps) {
  const { getCourses } = useDatabase();
  const { width } = useWindowDimensions();
  const [large, setLarge] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<number[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status
  useEffect(() => {
    const checkAuthStatus = async () => {
      const { data: session } = await supabase.auth.getSession();
      setIsLoggedIn(!!session?.session?.user);
    };

    checkAuthStatus();

    // Subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session?.user);
      },
    );

    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  // Load courses
  useEffect(() => {
    getCourses().then((res) => {
      if (res) setCourses(res);
    });
  }, []);

  // Load selected subjects from AsyncStorage
  useEffect(() => {
    const loadSelectedSubjects = async () => {
      try {
        const storedSubjects = await AsyncStorage.getItem("selectedSubjects");
        if (storedSubjects) {
          const parsed = JSON.parse(storedSubjects);
          if (Array.isArray(parsed)) {
            setSelectedSubjects(parsed);
          }
        }
      } catch (e) {
        console.error("Error loading selected subjects", e);
      }
    };

    loadSelectedSubjects();
  }, []);

  useEffect(() => {
    setLarge(width > 600);
  }, [width]);

  const toggleSubject = (id: number) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((subj) => subj !== id) : [...prev, id],
    );
  };

  // Sync selected subjects to Supabase
  const syncToSupabase = async (courseIds: number[]) => {
    const { data: session } = await supabase.auth.getSession();
    if (!session?.session?.user) {
      return false; // User not logged in
    }

    try {
      const userId = session.session.user.id;

      // Delete existing records first to avoid duplicates
      await supabase.from("user_courses").delete().eq("user_id", userId);

      // Only insert if there are selected courses
      if (courseIds.length > 0) {
        // Insert new course selections
        const coursesToInsert = courseIds.map((courseId) => ({
          user_id: userId,
          course_id: courseId,
        }));

        const { error } = await supabase
          .from("user_courses")
          .insert(coursesToInsert);

        if (error) throw error;
      }

      // Update last sync timestamp
      await supabase
        .from("users")
        .update({ last_sync: new Date().toISOString() })
        .eq("id", userId);

      return true;
    } catch (error) {
      console.error("Error syncing courses to Supabase:", error);
      return false;
    }
  };

  const saveSubjects = useCallback(async () => {
    try {
      // Save to AsyncStorage
      await AsyncStorage.setItem(
        "selectedSubjects",
        JSON.stringify(selectedSubjects),
      );

      // If user is logged in, sync to Supabase
      if (isLoggedIn) {
        setIsSyncing(true);
        const syncSuccess = await syncToSupabase(selectedSubjects);
        setIsSyncing(false);

        if (!syncSuccess) {
          // Show warning but continue with the flow
          console.warn("Failed to sync courses to the cloud");
        }
      }

      // Proceed to next step regardless of sync status
      props.callToAction?.();
    } catch (e) {
      console.error("Error saving subjects:", e);
      Alert.alert("Error", "Failed to save your subject selection");
    }
  }, [selectedSubjects, isLoggedIn]);

  return (
    <View
      style={[
        styles.page,
        {
          width,
          flexDirection: large ? "row-reverse" : "column",
          justifyContent: large ? "space-around" : "flex-start",
        },
      ]}
    >
      <View style={styles.container}>
        <ThemedText type="title">Search for your Subjects</ThemedText>
        <TextInput
          onChangeText={(text) => setSearch(text)}
          value={search}
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <View>
          {courses
            .filter((course) =>
              course.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map((course) => {
              const isSelected = selectedSubjects.includes(course.id);
              return (
                // <Pressable
                //   key={course.id}
                //   onPress={() => toggleSubject(course.id)}
                //   style={[
                //     styles.courseItem,
                //     isSelected && { borderColor: '#9584FF', borderWidth: 2 },
                //   ]}
                // >
                //   <ThemedText type="title">{course.title}</ThemedText>
                //   <ThemedText type="defaultSemiBold">{course.level}</ThemedText>
                // </Pressable>
                <NewCourseCard
                  color={course.color}
                  description={course.description}
                  selected={isSelected}
                  icon={course.icon}
                  level="2"
                  onSelected={() => toggleSubject(course.id)}
                  title={course.title}
                />
              );
            })}
        </View>
        <Pressable
          style={[styles.cta, { marginHorizontal: large ? 0 : "auto" }]}
          onPress={saveSubjects}
          disabled={isSyncing}
        >
          {isSyncing ? (
            <ActivityIndicator color="#FFF" size="small" />
          ) : (
            <Text style={{ color: "#FFF", fontSize: 22 }}>
              {isLoggedIn ? "Save & Sync Selection" : "Save Selection"}
            </Text>
          )}
        </Pressable>

        {isLoggedIn && (
          <Text style={styles.syncNote}>
            Your selection will be saved to your account
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "relative",
    padding: 20,
  },
  container: {
    height: "80%",
    width: 360,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    marginTop: 20,
    color: "#fff",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#9584FF",
  },
  courseItem: {
    marginTop: 20,
    backgroundColor: "#121212",
    padding: 20,
    borderRadius: 10,
  },
  cta: {
    backgroundColor: "#9584FF",
    width: "100%",
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    position: "absolute",
    borderRadius: 25,
    bottom: 20,
    marginHorizontal: "auto",
  },
  syncNote: {
    color: "#9584FF",
    textAlign: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
    fontSize: 12,
  },
});
