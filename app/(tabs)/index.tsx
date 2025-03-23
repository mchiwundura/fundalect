import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, ScrollView, useColorScheme } from "react-native";
import ActivityCard from "@/components/ui/ActivityCard";
import HeaderNavigation from "@/components/HeaderNav";
import StreakTracker from "@/components/StreakTracker";
import ReportStats from "@/components/ReportStats";

export default function Home() {
    const colorScheme = useColorScheme();
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

    useEffect(() => {
        setActivities([
            { id: 1, title: "Central Nervous System", icon: "😰", completion: 55, type: "Flashcards" },
            { id: 2, title: "Colloidal Systems", icon: "🧴", completion: 35, type: "Quiz" },
            { id: 3, title: "Arrays", icon: "🧑‍💻", completion: 55, type: "Flashcards" },
        ]);
    }, []);


    function filterActivities(type: string) {
        if (type === "All") {
            setActivities(activities);
        } else {
            setActivities(activities.filter((x) => x.type === type));
        }
    }

    return (
        <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }} headerImage={<HeaderNavigation />}>
            <ThemedText type="title">Report</ThemedText>
            <ReportStats flashcards={20} tests={4} minutes={300} />
            
            <ThemedText type="subtitle">Streak</ThemedText>
            <StreakTracker currentStreak={5} bestStreak={22} completedDays={completedDays}  />
            
            <ThemedText type="subtitle">Jump Back In</ThemedText>
            <ScrollView>
                {activities.map((x) => (
                    <ActivityCard key={x.id} activity={x} />
                ))}
            </ScrollView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    statsContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
    },
});
