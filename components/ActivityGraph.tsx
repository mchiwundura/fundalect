import { ThemedView } from "./ThemedViewOld";
import { StyleSheet, useColorScheme, View } from "react-native";
import {LineChart} from "react-native-gifted-charts"

interface ActivityGraphProps {
  data: number[]; // Array representing activity levels per day
}

export default function ActivityGraph({ data }: ActivityGraphProps) {
const colorScheme = useColorScheme()
  return (
    <View style={[styles.graphContainer, {backgroundColor: colorScheme !== "light" ? "rgba(255, 255, 255, 0.01)" : "rgba(0, 0, 0, 0.1)"}]}>
      <LineChart textColor="#000" width={240} color={"#9584FF"} yAxisColor={colorScheme === "light" ? "#000" : "#fff"} xAxisColor={colorScheme === "light" ? "#000" : "#fff"} dataPointsColor="#9584FF" yAxisTextStyle={{color: colorScheme === "light" ? "#000" : "#fff", marginRight: 10}} isAnimated data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    marginVertical: 10,
    marginHorizontal: "auto",
    padding: 40,
    borderRadius: 10,
  }
});
