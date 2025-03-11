import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import IconTextButton from "@/components/ui/IconTextButton";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";


export default function Course() {

  const {id} = useLocalSearchParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState();


  async function runDatabase() {
    try {
      const db = await SQLite.openDatabaseAsync('localCourses.db');

      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS courses (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          description TEXT
        );

        CREATE TABLE IF NOT EXISTS lessons (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          course_id INTEGER NOT NULL,
          title TEXT,
          FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE
          );
      `);


      // await db.execAsync(`
      // INSERT INTO courses (title, description) VALUES ('Math', 'Math is the study of numbers, quantities, and shapes. It is used to solve problems and understand the world around us.')
      // `);

    //   await db.execAsync(`
    //     INSERT INTO lessons (course_id, title) VALUES (1, 'Lesson 1');
    //     INSERT INTO lessons (course_id, title) VALUES (1, 'Lesson 2');
    //     INSERT INTO lessons (course_id, title) VALUES (1, 'Lesson 3');
    //     `);

      const courses = await db.getAllAsync(`SELECT * FROM courses WHERE id = ${id}`);
      const lessons = await db.getAllAsync(`SELECT * FROM lessons`);

    //   const lessons = await db.getAllAsync(`
    //     SELECT lessons.* FROM lessons 
    //     JOIN courses ON lessons.course_id = courses.id
    //     WHERE courses.id = ${id};
    //     `);
 
      setCourse(courses[0]);
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
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <IconTextButton color="#FF0000" title="Lessons" onPress={() => navigation.navigate("lesson")} />
      {course && (
        <View>
          <Text>{course.title}</Text>
          <Text>{course.description}</Text>
        {lessons.map((x, y) => (
          <Text key={y}>{x.title}</Text>
        ))}
        </View>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    transform: [{ rotate: '180deg' }],
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
});