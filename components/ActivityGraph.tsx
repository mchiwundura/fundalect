import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";

interface ActivityGraphProps {
  data: number[]; // Array representing activity levels per day
}

export default function ActivityGraph({ data }: ActivityGraphProps) {
  return (
    <ThemedView style={styles.graphContainer}>
      <ThemedText type="subtitle">Weekly Activity</ThemedText>
      <ThemedView style={styles.graph}>
        {data.map((value, index) => (
          <ThemedView key={index} style={[styles.bar, { height: value * 2 }]} />
        ))}
      </ThemedView>
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
