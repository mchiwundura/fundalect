import React, { useEffect, useState } from 'react';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { rules } from '@/hooks/markdownRules';
import Markdown from 'react-native-markdown-display';
import IconTextButton from "@/components/ui/IconTextButton";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StyleSheet, Text, View} from 'react-native';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Lessons } from '@/db/database';
import { useDatabase } from '@/hooks/useDatabase';
import { useAppContext } from '@/context/appContext';

interface Lesson extends Lessons {
  course_color: string 
}

export default function Lesson() {
const {setFlashcards, setQuizzes} = useAppContext()
  const router = useRouter()

const {lessonId} = useLocalSearchParams();
const {id} = useLocalSearchParams();
const [lesson, setLesson] = useState<Lesson | null>(null)
let getLesson: ((lessonId: number) => Promise<any>) | undefined;

useEffect(() => {
  async function fetchDatabase() {
    const db = await useDatabase();
    getLesson = db.getLesson;
    getContent();
  }
  fetchDatabase();
}, []);

async function getContent() {
  try {
      
      const lesson = await getLesson(lessonId, id)
      console.log(lesson)
        setLesson(lesson)
        setFlashcards(lesson.data.flashcards)
  } catch (error) {
    console.error(error)
  }
}

    useEffect(() => {
        getContent()
    }, []);
    
    return (
        <ParallaxScrollView headerBackgroundColor={{ light: '#9584FF', dark: '#9584FF' }} headerImage={
            <ThemedView style={[styles.header, {backgroundColor: lesson? lesson.course_color : "#fff"}]}>
  <ThemedText type="title">
    {lesson && lesson.data.Title}

  </ThemedText>
  <Text style={styles.icon}>{lesson && lesson.data.icon}</Text>
</ThemedView>
        }>
            
        <View>
                  <View style={styles.activityTypeContainer}>
         <IconTextButton onPress={() => router.push(`/course/${id}/lesson/${lessonId}/flashcards`)} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton onPress={() => router.push(`/quizes/${id}`)} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     

     </View>
            {lesson && <Markdown rules={rules}>{lesson.content}</Markdown>}
        </View>
          <IconTextButton large onPress={() => router.push(`/course/${id}/lesson/${lessonId}/flashcards`)} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton large onPress={() => router.push(`/quizes/${id}`)} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     
<Link asChild href={'/'}>
<ThemedText style={styles.homeLink}>Back to home</ThemedText>
 </Link>
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