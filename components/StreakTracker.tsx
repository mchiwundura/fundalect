import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "./ThemedText";

export default function StreakTracker() {

const currentStreak = 5 
const bestStreak = 22  

const completedDays = [
  { day: "M", status: true, date: 18 },
  { day: "T", status: false, date: 19 },
  { day: "W", status: true, date: 20 },
  { day: "T", status: true, date: 21 },
  { day: "F", status: false, date: 22 },
  { day: "S", status: true, date: 23 },
  { day: "S", status: false, date: 24 },
];

    const colorScheme = useColorScheme()
  return (
    <View style={[styles.container, {
            backgroundColor: colorScheme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.05)",
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 0 0 rgba(0, 0, 0, 0.1)"
    }]}>
      <Text style={styles.streakText}>🔥 {currentStreak} Days</Text>
      <Text style={styles.bestStreakText}>Best: {bestStreak} Days</Text>
      <View style={styles.weekContainer}>
        {completedDays.map((completed, index) => (
          <View key={index} style={{display: 'flex', alignItems: "center"}}>
            <View style={[styles.dayCircle, completed.status ? styles.completed : styles.incomplete]}>
            <ThemedText>{completed.date}</ThemedText>
            </View>
            <ThemedText>{completed.day}</ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { padding: 20,
 
        borderRadius: 15
     },

    title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    streakText: { fontSize: 16, fontWeight: "bold", color: "orange" },
    bestStreakText: { fontSize: 14, color: "gray" },
    weekContainer: { flexDirection: "row", justifyContent: "space-around", marginTop: 10 },
    dayCircle: { width: 25, height: 25, borderRadius: 10, margin: 5, display: "flex", alignItems: 'center' },
    completed: { backgroundColor: "#9C85FF" },
    incomplete: { backgroundColor: "gray" },
    statsContainer: { flexDirection: "row", justifyContent: "space-around", marginTop: 10 },
    statBox: { alignItems: "center" },
    statNumber: { fontSize: 20, fontWeight: "bold" }
  });