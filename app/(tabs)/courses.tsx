import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet, ScrollView, useColorScheme } from "react-native";
import CourseCard from "@/components/CourseCard";
import IconTextButton from "@/components/ui/IconTextButton";
import ActivityCard from "@/components/ui/ActivityCard";
// import { getCourses } from "@/hooks/database";
import SQLite from 'expo-sqlite';

// Add activities to database and get them from there
// Add courses to database and get them from there

export default function Courses() {
const colorScheme = useColorScheme()

    // activities db lol

   const activitiesDB =  [
        {
            id: 1,
            title: "Central Nervous System",
            icon: "😰",
            completion: 55,
            type: "Flashcards",
        },
        {
            id: 2,
            title: "Collidal Systems",
            icon: "🧴",
            completion: 35,
            type: "Test",
        },
        {
            id: 3,
            title: "Arrays",
            icon: "🧑‍💻",
            completion: 55,
            type: "Flashcards",
        },
        {
            id: 4,
            title: "Novel Dosage forms",
            icon: "🧑‍💻",
            completion: 21,
            type: "Lesson",
        },
    ]

    async function getCourses() {
        const db = await SQLite.openDatabaseAsync('local.db');
        const createCoursesTable = await db.execAsync(`
            PRAGMA journal_mode=WAL;
            CREATE TABLE IF NOT EXISTS Courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            Title TEXT, 
            color_primary TEXT,
            color_secondary TEXT,
            );
          `);
       
        await db.runAsync('INSERT INTO Courses (Title, color_primary, color_secondary) VALUES (?, ?, ?)', ['Pharmaceurics 3', '#FF0000', '#00FF00']);
        
        const courses = await db.getAllAsync('SELECT * FROM Courses');
       
        for (const row of courses) {
            console.log(row.value);
        }

        console.log(courses);
        
        console.log("Courses table created");
    }

    useEffect(() => {
        getCourses();
        setActivities(activitiesDB);
    }  , []);

    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "Pharmaceutics 3",
            color: "#FFB785",
            completion: 33,
            icon: "🧪",
        },
        {
            id: 2,
            title: "Pharmacology 4",
            color: "#9584FF",
            completion: 75,
            icon: "💊",
        },
        {
            id: 3,
            title: "Clinical Pharmacy 2",
            color: "#8CE99A",
            completion: 50,
            icon: "🏥",
        },
        {
            id: 4,
            title: "Biochemistry 1",
            color: "#6CD3FF",
            completion: 90,
            icon: "🧬",
        },
        {
            id: 5,
            title: "Medicinal Chemistry 5",
            color: "#FF88E5",
            completion: 20,
            icon: "🔬",
        },
        {
            id: 6,
            title: "Pharmacognosy 3",
            color: "#FFD966",
            completion: 60,
            icon: "🌿",
        },
        {
            id: 7,
            title: "Pharmacy Law & Ethics",
            color: "#C290FF",
            completion: 85,
            icon: "⚖️",
        }
    ]);

    const [activities, setActivities] = useState<any>();

    function filterActivities(type: string) {
        if (type === "Test") { 
            setActivities(activitiesDB.filter(x => x.type === "Test"));
        } else if (type === "Flashcards") {
            setActivities(activitiesDB.filter(x => x.type === "Flashcards"));
        } else
        setActivities(activitiesDB);
    }
        

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
            <ThemedText type="title">My Courses</ThemedText>
            <ScrollView horizontal style={styles.coursesContainer}>
            {
                courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))
            }
            </ScrollView>
        <ThemedText type="subtitle">Continue learning</ThemedText>
        <ScrollView horizontal>
        <IconTextButton onPress={() => filterActivities("All")}  
        color={colorScheme === "light"? "rgba( 0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"} 
        textColor={colorScheme === "light"? "rgba( 0, 0, 0, 1)" : "rgba(255, 255, 255, 1)"} 
        title="All" 
        icon="list.dash"
        />
        <IconTextButton onPress={() => filterActivities("Flashcards")} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton onPress={() => filterActivities("Test")} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Tests" icon="doc.plaintext"  />
        </ScrollView>
        <ScrollView>
            
            {activities && activities.map((x ,y)=> {
                return <ActivityCard key={y} activity={x}/>
            })}
 
        </ScrollView>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        alignSelf: 'center'
    },
    coursesContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
})