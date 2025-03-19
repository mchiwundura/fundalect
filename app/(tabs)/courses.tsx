import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet, ScrollView, useColorScheme } from "react-native";
import CourseCard from "@/components/CourseCard";
import IconTextButton from "@/components/ui/IconTextButton";
import ActivityCard from "@/components/ui/ActivityCard";
// import { getCourses } from "@/hooks/database";
import * as SQLite from 'expo-sqlite';
import HeaderNavigation from "@/components/HeaderNav";

// Add activities to database and get them from there


export default function Courses() {

const colorScheme = useColorScheme()

    // activities db lol

   const activitiesDB = [
    {
        "id": 1,
        "title": "Central Nervous System",
        "icon": "😰",
        "completion": 55,
        "type": "Flashcards"
    },
    {
        "id": 2,
        "title": "Colloidal Systems",
        "icon": "🧴",
        "completion": 35,
        "type": "Quiz"
    },
    {
        "id": 3,
        "title": "Arrays",
        "icon": "🧑‍💻",
        "completion": 55,
        "type": "Flashcards"
    },
    {
        "id": 4,
        "title": "Novel Dosage Forms",
        "icon": "💊",
        "completion": 21,
        "type": "Lesson"
    },
    {
        "id": 5,
        "title": "Drug Delivery Systems",
        "icon": "🧪",
        "completion": 40,
        "type": "Lesson"
    },
    {
        "id": 6,
        "title": "Pharmacokinetics Basics",
        "icon": "📉",
        "completion": 30,
        "type": "Lesson"
    },
    {
        "id": 7,
        "title": "Biopharmaceutics",
        "icon": "🧬",
        "completion": 25,
        "type": "Lesson"
    }
]


    async function getCourses() {
   
        try {    
        const db = await SQLite.openDatabaseAsync('local.db');      
        const courses = await db.getAllAsync('SELECT * FROM courses');
        for (const row of courses) {
            console.log(row.value);
        }

        console.log(courses);
        
        console.log("Courses table created");
        setCourses(courses)
        return courses 
    } catch (error) {
        console.error(error)
    }

    }

    useEffect(() => {
        getCourses();
        setActivities(activitiesDB);
    }  , []);

    const [courses, setCourses] = useState<any>([]);
    const [activities, setActivities] = useState<any>();

    function filterActivities(type: string) {
        if (type === "Quiz") { 
            setActivities(activitiesDB.filter(x => x.type === "Quiz"));
        } else if (type === "Flashcards") {
            setActivities(activitiesDB.filter(x => x.type === "Flashcards"));
        } else if (type === "Lesson") {
            setActivities(activitiesDB.filter(x => x.type === "Lesson"))
        } else
        setActivities(activitiesDB);
    }
        

    return (
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
       <HeaderNavigation/> 
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
        <IconTextButton onPress={() => filterActivities("Quiz")} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     
        <IconTextButton onPress={() => filterActivities("Lesson")} textColor="rgba(100, 170, 255, 1)" color="rgba(100, 170, 255, 0.2)" title="Lessons" icon="doc.plaintext"  />
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