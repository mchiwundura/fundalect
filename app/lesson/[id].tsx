import React, { useEffect, useState } from 'react';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import * as SQLite from "expo-sqlite";
import { rules } from '@/hooks/markdownRules';
import Markdown from 'react-native-markdown-display';
import IconTextButton from "@/components/ui/IconTextButton";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StyleSheet, Text} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Lessons } from '@/db/database';

interface Lesson extends Lessons {
  course_color: string 
}

export default function Lesson() {

  const router = useRouter()

const {id} = useLocalSearchParams();
const [lesson, setLesson] = useState<Lesson | null>(null)

async function getLesson() {
  try {
      const db = await SQLite.openDatabaseAsync('local.db');
      const lesson = await db.getFirstAsync<Lesson>(
        `SELECT lessons.*, courses.color AS course_color
         FROM lessons
         JOIN courses ON lessons.course_id = courses.id
         WHERE lessons.id = ${id}
         `
      );
        setLesson(lesson)
  } catch (error) {
    console.error(error)
  }
}

    useEffect(() => {
        getLesson()
    }, []);
    
    return (
        <ParallaxScrollView headerBackgroundColor={{ light: '#FFFFFF', dark: '#000000' }} headerImage={
            <ThemedView style={[styles.header, {backgroundColor: lesson? lesson.course_color : "#fff"}]}>
  <ThemedText type="title">
    {lesson && lesson.title}

  </ThemedText>
  <Text style={styles.icon}>{lesson && lesson.icon}</Text>
</ThemedView>
        }>
            
        <ThemedView>
                  <ThemedView style={styles.activityTypeContainer}>
         <IconTextButton onPress={() => router.push(`/flashcards/${id}`)} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton onPress={() => router.push(`/quizes/${id}`)} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     

     </ThemedView>
            {lesson && <Markdown rules={rules}>{lesson.content}</Markdown>}
        </ThemedView>
          <IconTextButton large onPress={() => router.push(`/flashcards/${id}`)} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton large onPress={() => router.push(`/quizes/${id}`)} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     
<ThemedText style={styles.homeLink}>Back to home</ThemedText>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
  header: {
  height: "100%",
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 20
  },
  heading: {
    backgroundColor: "green"
  },
  activityTypeContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20
  },
  icon: {
    fontSize: 80,
    height: 120
  },
  image: {
    width: '100%',
    height: 200,
  },
  blockquote: {
    fontStyle: 'italic',
    color: 'gray'
  },
  homeLink: {
    color: "#9584FF",
    width: "100%",
    textAlign:"center",
    
  }
})