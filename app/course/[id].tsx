import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
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

      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS courses (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          description TEXT,
          color TEXT,
          completion INTEGER,
          icon TEXT
        );
      `);

      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS lessons (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          course_id INTEGER NOT NULL,
          title TEXT,
          completion INTEGER,
          FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE
        );
      `);
      
        // await db.execAsync(`
        //   INSERT INTO lessons (course_id, title, completion) 
        //   VALUES 
        //     (1, 'Antibiotics', 100), 
        //     (1, 'Novel dosage forms', 30), 
        //     (1, 'Creams', 10);
        // `);

        // await db.execAsync(`
        //   DROP TABLE lessons
        //   `)

        // await db.execAsync(`
        // INSERT INTO courses (title, description) VALUES ('Math', 'Math is the study of numbers, quantities, and shapes. It is used to solve problems and understand the world around us.')
        // `);
      

      const courses = await db.getAllAsync(`SELECT * FROM courses WHERE id = ${id}`);
      const lessons = await db.getAllAsync(`SELECT * FROM lessons`);

    //   const lessons = await db.getAllAsync(`
    //     SELECT lessons.* FROM lessons 
    //     JOIN courses ON lessons.course_id = courses.id
    //     WHERE courses.id = ${id};
    //     `);
 
      // setCourse(courses[0]);
      setCourse({
        course_id: 1,
        title: "Pharmaceutics",
        description: "the course where you learn to make lotions",
        color: "#FFB785",
        icon: "🧪"
      })

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
        <IconTextButton onPress={() => filterActivities("Flashcards")} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton onPress={() => filterActivities("Quiz")} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     
        <IconTextButton  onPress={() => navigation.navigate("lesson/1")}textColor="rgba(100, 170, 255, 1)" color="rgba(100, 170, 255, 0.2)" title="Lessons" icon="doc.plaintext"  />
      </ThemedView>
      {course && (
        <View>
          <ThemedText>{course.description}</ThemedText>
        {lessons.map((x, y) => (
          <LessonCard color={course.color} key={y} title={x.title} completion={x.completion}/>
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