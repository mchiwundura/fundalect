import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, ScrollView, Platform, useWindowDimensions, View } from "react-native";
import ActivityCard from "@/components/ui/ActivityCard";
import StreakTracker from "@/components/StreakTracker";
import ReportStats from "@/components/ReportStats";
import { useDatabase } from "@/hooks/useDatabase";
import FlashcardDeck from "@/components/FlashcardDeck";



export default function Home() {
const {width, height} = useWindowDimensions();
const [large, setLarge] = useState(width > 600);

useEffect(() => {
 setLarge(width > 600);
}, [width])
const completedDays = [
  { day: "M", status: true, date: 18 },
  { day: "T", status: false, date: 19 },
  { day: "W", status: true, date: 20 },
  { day: "T", status: true, date: 21 },
  { day: "F", status: false, date: 22 },
  { day: "S", status: true, date: 23 },
  { day: "S", status: false, date: 24 },
];
    const [activities, setActivities] = useState<any>([]);

    const {getLessons} = useDatabase();
    
    useEffect(() => {
        setActivities([
            { id: 1, title: "Central Nervous System", icon: "😰", completion: 55, type: "Flashcards" },
            { id: 2, title: "Colloidal Systems", icon: "🧴", completion: 35, type: "Quiz" },
            { id: 3, title: "Arrays", icon: "🧑‍💻", completion: 55, type: "Flashcards" },
            { id: 3, title: "Arrays", icon: "🧑‍💻", completion: 55, type: "Flashcards" },
            { id: 3, title: "Arrays", icon: "🧑‍💻", completion: 55, type: "Flashcards" },
        ]);

    const fetchLessons = async () => {
        const data = await getLessons();
        console.log(data)
    };
    fetchLessons();
    }, []);


    return (

        <ScrollView  style={{ padding: 32, paddingLeft: large ? 100 : 32 }}>
            <ThemedText type="title">Welcome Back</ThemedText>
            <ThemedText type="subtitle">Streak</ThemedText>
            <StreakTracker currentStreak={5} bestStreak={22} completedDays={completedDays}  />
            
            <ScrollView horizontal={large} 
            // style={{display: 'flex', flexDirection: large ? 'row' : 'column', justifyContent: 'flex-start', alignItems: 'center'}}
            >

            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            </ScrollView>
            {/* <ReportStats flashcards={20} tests={4} minutes={300} />
            
            <ThemedText type="subtitle">Jump Back In</ThemedText>
            <ScrollView>
                {activities.map((x) => (
                    <ActivityCard key={x.id} activity={x} />
                ))}
            </ScrollView> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    statsContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
    },
});
