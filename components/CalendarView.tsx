import { StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "./ThemedView";
import {Calendar} from 'react-native-calendars'

interface CalendarViewProps {
  completedDays: boolean[]; // Array where true = completed, false = missed
}

export default function CalendarView({ completedDays }: CalendarViewProps) {

  const theme = useColorScheme()

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <ThemedView style={styles.graphContainer}>
      <Calendar style={{width: 340, borderRadius: 10, 
 boxShadow: theme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 0 0 rgba(0, 0, 0, 0.1)",
    backgroundColor: theme === "light" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.05)",
      }} 
      onDayPress={day => {
        console.log('selected day', day)
      }}
      theme={{
        color: '#9584FF',
        calendarBackground: 'rgba(0,0,0,0)',
         dayTextColor: theme === "light"? '#000' : "#fff",
         textSectionTitleColor: "#9584FF",
         todayTextColor: "#9584FF",
        arrowColor: "#9584FF",
        monthTextColor: "#9584FF"
      }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    marginVertical: 10,
    display: "flex",
    alignItems: "center",
    width: "100%"
  }
});
