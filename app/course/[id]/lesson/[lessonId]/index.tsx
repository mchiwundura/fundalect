import React, { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { rules } from "@/hooks/markdownRules";
import Markdown from "react-native-markdown-display";
import IconTextButton from "@/components/ui/IconTextButton";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Lessons } from "@/db/database";
import { useDatabase } from "@/hooks/useDatabase";
import { useAppContext } from "@/context/appContext";

interface Lesson extends Lessons {
  course_color: string;
}

export default function LessonPage() {
  const { setFlashcards } = useAppContext();
  const { getLesson } = useDatabase();
  const router = useRouter();

  const { lessonId } = useLocalSearchParams();
  const { id } = useLocalSearchParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);

  const { lessonColor } = useAppContext();
  useEffect(() => {
    async function fetchDatabase() {
      getContent();
    }
    fetchDatabase();
  }, []);

  async function getContent() {
    try {
      const lesson = await getLesson(lessonId, id);
      setLesson(lesson);
      setFlashcards(lesson.data.flashcards);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getContent();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "white", dark: "black" }}
      headerImage={
        <View style={[styles.header, { backgroundColor: lessonColor }]}>
          <ThemedText type="title">{lesson && lesson.data.Title}</ThemedText>
          <Text style={styles.icon}>{lesson && lesson.data.icon}</Text>
        </View>
      }
    >
      <View>
        <View style={styles.activityTypeContainer}>
          <IconTextButton
            onPress={() =>
              router.push(`/course/${id}/lesson/${lessonId}/flashcards`)
            }
            textColor="rgba(128, 184, 147, 1)"
            color="rgba(128, 184, 147, 0.2)"
            title="Flashcards"
            icon="bolt"
          />
          <IconTextButton
            onPress={() => router.push(`/quizes/${id}`)}
            textColor="rgba(149, 132, 255, 1 )"
            color="rgba(149, 132, 255, 0.2 )"
            title="Quizes"
            icon="doc.plaintext"
          />
        </View>
        {lesson && <Markdown rules={rules}>{lesson.content}</Markdown>}
      </View>
      <IconTextButton
        large
        onPress={() =>
          router.push(`/course/${id}/lesson/${lessonId}/flashcards`)
        }
        textColor="rgba(128, 184, 147, 1)"
        color="rgba(128, 184, 147, 0.2)"
        title="Flashcards"
        icon="bolt"
      />
      <IconTextButton
        large
        onPress={() => router.push(`/quizes/${id}`)}
        textColor="rgba(149, 132, 255, 1 )"
        color="rgba(149, 132, 255, 0.2 )"
        title="Quizes"
        icon="doc.plaintext"
      />
      <TouchableOpacity
        onPress={() => router.push("/")}
        style={{ width: "100%", marginTop: 20 }}
      >
        <ThemedText style={styles.homeLink}>Back to home</ThemedText>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "100%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  heading: {
    backgroundColor: "green",
  },
  activityTypeContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  icon: {
    fontSize: 80,
    height: 120,
  },
  image: {
    width: "100%",
    height: 200,
  },
  blockquote: {
    fontStyle: "italic",
    color: "gray",
  },
  homeLink: {
    color: "#9584FF",
    width: "100%",
    textAlign: "center",
  },
});
