
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";

interface ReportStatsProps {
  flashcards: number;
  tests: number;
  minutes: number;
}

export default function ReportStats({ flashcards, tests, minutes }: ReportStatsProps) {
    const colorScheme = useColorScheme();
  return (
    <ThemedView style={[styles.container, {
            backgroundColor: colorScheme === "light" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.05)",
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 0 0 rgba(0, 0, 0, 0.1)"
    }]}>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}><IconSymbol name="bolt" size={36} color={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.8)"}/><ThemedText style={styles.statNumber} type="subtitle">{flashcards}</ThemedText><ThemedText type="subtle">Flashcards</ThemedText></View>
        <View style={styles.statBox}><IconSymbol name="doc.plaintext" size={36} color={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.8)"}/><ThemedText style={styles.statNumber} type="subtitle">{tests}</ThemedText><ThemedText type="subtle">Tests</ThemedText></View>
        <View style={styles.statBox}><IconSymbol name="stopwatch" size={36} color={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.8)"}/><ThemedText style={styles.statNumber} type="subtitle">{minutes}</ThemedText><ThemedText type="subtle">Minutes</ThemedText></View>
      </View>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: { padding: 20, borderRadius: 15 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  streakText: { fontSize: 16, fontWeight: "bold", color: "orange" },
  bestStreakText: { fontSize: 14, color: "gray" },
  weekContainer: { flexDirection: "row", justifyContent: "space-around", marginTop: 10 },
  dayCircle: { width: 20, height: 20, borderRadius: 10, margin: 5 },
  completed: { backgroundColor: "green" },
  incomplete: { backgroundColor: "gray" },
  statsContainer: { flexDirection: "row", justifyContent: "space-around", marginTop: 10 },
  statBox: { alignItems: "center" },
  statNumber: { color: "#9C85FF", fontWeight: "bold" }
});
