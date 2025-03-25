import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

interface CalendarViewProps {
  completedDays: boolean[]; // Array where true = completed, false = missed
}

export default function CalendarView({ completedDays }: CalendarViewProps) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <ThemedView style={styles.calendarContainer}>
      {days.map((day, index) => (
        <ThemedView key={index} style={[styles.day, completedDays[index] && styles.completed]}>
          <ThemedText>{day}</ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    marginVertical: 10,
  },
  graph: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 100,
    backgroundColor: "#eee",
    padding: 10,
  },
  bar: {
    width: 20,
    backgroundColor: "#6200ea",
  },
  calendarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  day: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
  completed: {
    backgroundColor: "#4CAF50",
  },
  courseCard: {
    backgroundColor: "#fafafa",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
});
