import { ThemedView } from "./ThemedView";
import { StyleSheet, useColorScheme } from "react-native";
import {LineChart} from "react-native-gifted-charts"

interface ActivityGraphProps {
  data: number[]; // Array representing activity levels per day
}

export default function ActivityGraph({ data }: ActivityGraphProps) {
const colorScheme = useColorScheme()
  return (
    <ThemedView style={[styles.graphContainer, {
            backgroundColor: colorScheme === "light" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.05)",
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 0 0 rgba(0, 0, 0, 0.1)"
    }]}>

      <LineChart textColor="#000" width={240} color={"#9584FF"} yAxisColor={colorScheme === "light" ? "#000" : "#fff"} xAxisColor={colorScheme === "light" ? "#000" : "#fff"} dataPointsColor="#9584FF" yAxisTextStyle={{color: colorScheme === "light" ? "#000" : "#fff", marginRight: 10}} isAnimated data={data} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 10
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
