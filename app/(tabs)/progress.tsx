import { View, StyleSheet, ScrollView, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import ActivityGraph from "@/components/ActivityGraph";
import CalendarView from "@/components/CalendarView";
import CourseProgressCard from "@/components/CourseProgressCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeaderNavigation from "@/components/HeaderNav";

interface ProgressPageProps {
  activityData: number[]; // Weekly activity data
  completedDays: boolean[]; // Streak tracking
  courses: { id: number; title: string; completion: number; type: string }[];
}


export default function ProgressPage() {

const activityData = [3, 5, 2, 4, 3, 6, 2]
const courses = [
    { id: 1, title: "Central Nervous System", completion: 68, type: "Flashcards" },
    { id: 2, title: "Colloidal Systems", completion: 45, type: "Quiz" },
    { id: 3, title: "Pharmacokinetics Basics", completion: 30, type: "Lesson" },
  ]
  const completedDays = [true, false, true, true, false, true, false]
  const colorScheme = useColorScheme();

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }} headerImage={<HeaderNavigation />}> 
      <ThemedText type="title">Progress this week</ThemedText>
      <ActivityGraph data={activityData} />

      <ThemedText type="subtitle">Calendar</ThemedText>
      <CalendarView completedDays={completedDays} />

      <ThemedText type="subtitle">Course Progress</ThemedText>
      {/* <ScrollView>
        {courses && courses.map((course) => (
          <CourseProgressCard key={course.id} course={course} />
        ))}
      </ScrollView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
