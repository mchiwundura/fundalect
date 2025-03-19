import ParallaxScrollView from "@/components/ParallaxScrollView";
import IconTextButton from "@/components/ui/IconTextButton";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import LessonCard from "@/components/ui/LessonCard";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";


export default function Course() {

  const {id} = useLocalSearchParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState();


  async function runDatabase() {
    try {
      const db = await SQLite.openDatabaseAsync('local.db');


      const courses = await db.getAllAsync(`SELECT * FROM courses WHERE id = ${id}`);
      
      console.log(courses)

      const lessons = await db.getAllAsync(`
        SELECT lessons.* FROM lessons 
        JOIN courses ON lessons.course_id = courses.id
        WHERE courses.id = ${id};
        `);
 
      setCourse(courses[0])
      setLessons(lessons);

    } catch (error) {
      console.error('Database error:', error);
    }
  }

  useEffect(() => {
    runDatabase();
  }, []);

  const navigation = useNavigation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#000000' }}
      headerImage={
<ThemedView style={[styles.header, {backgroundColor: course? course.color : "#fff"}]}>
  <ThemedText type="title">
    {course && course.title}

  </ThemedText>
  <Text style={styles.icon}>{course && course.icon}</Text>
</ThemedView>
      }
    >
      <ThemedView style={styles.activityTypeContainer}>
        <IconTextButton link="/flashcards/1" textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton onPress={() => console.log("Quiz")} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     
        <IconTextButton  onPress={() => console.log("going to lesson")}textColor="rgba(100, 170, 255, 1)" color="rgba(100, 170, 255, 0.2)" title="Lessons" icon="doc.plaintext"  />

      </ThemedView>
      {course && (
        <View>
          <ThemedText>{course.description}</ThemedText>
        {lessons.map((x, y) => (
          <LessonCard color={course.color} key={y} title={x.title} link={x.id} completion={x.completion}/>
        ))}
        </View>
      )}
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
  activityTypeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    fontSize: 80,
    height: 120
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
});