import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedText } from "./ThemedText";
import ThemedView from "./ThemedView";
import { StreakData } from "@/types/ui/streakTracker";
import { areConsecutive, getDateNumber, getDayLabel, getMidWeekDates, isToday } from "@/utils/streak";



export default function StreakTracker() {
  const STORAGE_KEY = "streakData";
  const [streakData, setStreakData] = useState<StreakData>({
    currentStreak: 0,
    bestStreak: 0,
    activeDays: [],
  });


  useEffect(() => {
    const loadData = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          const data: StreakData = JSON.parse(json);
          const sortedDays = data.activeDays.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
          setStreakData({ ...data, activeDays: sortedDays });
        }
      } catch (error) {
        console.error("Failed to load streak data", error);
      }
    };

    loadData();
  }, []);

  const { currentStreak, bestStreak, activeDays } = streakData;

  const completedDates = new Set(activeDays.map((entry) => entry.date));
  const displayDates = getMidWeekDates();

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.streakText}>🔥 {currentStreak} Days</Text>
      <Text style={styles.bestStreakText}>Best: {bestStreak} Days</Text>

      <View style={styles.weekContainer}>
        {displayDates.map((dateStr, index) => {
          const isCompleted = completedDates.has(dateStr);
          const prevDate = displayDates[index - 1];
          const nextDate = displayDates[index + 1];

          const isPrevConnected =
            isCompleted && completedDates.has(prevDate) && areConsecutive(prevDate, dateStr);
          const isNextConnected =
            isCompleted && completedDates.has(nextDate) && areConsecutive(dateStr, nextDate);

          return (
            <View key={dateStr} style={styles.dayItem}>
              <ThemedView
                style={[

  styles.dayBlock,
  isCompleted ? styles.completed : styles.incomplete,

  // Fully connected streak block (middle)
  isCompleted && isPrevConnected && isNextConnected && styles.fullySquare,

  // Connected to previous only
  isCompleted && !isPrevConnected && isNextConnected && styles.leftRounded,

  // Connected to next only
  isCompleted && isPrevConnected && !isNextConnected && styles.rightRounded,

  // Standalone completed day
  isCompleted && !isPrevConnected && !isNextConnected && styles.fullyRounded,


                ]}
              >
                <ThemedText style={[styles.dayText, isToday(dateStr) && styles.todayText, isCompleted && styles.completedDayText]}>
                  {getDateNumber(dateStr)}
                </ThemedText>
              </ThemedView>
              <ThemedText type="default">{getDayLabel(dateStr)}</ThemedText>
            </View>
          );
        })}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 15,
    height: 150
  },
  streakText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
  },
  bestStreakText: {
    fontSize: 14,
    color: "gray",
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    flexWrap: "nowrap",
    width: "100%",
  },
  dayItem: {
    marginHorizontal: 3,
    position: "relative",
    minWidth: 30,
    height: 55,
    paddingTop: 35,
    display: "flex",
    alignItems: "center",
  },
  dayBlock: {
    paddingHorizontal: 6,
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: 'none'
  },
  completed: {
    backgroundColor: "#9C85FF",
  },
  incomplete: {
    borderWidth: 1,
    borderColor: "#9C85FF",
    borderRadius: 15,
  },
  leftRounded: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: 36,
    marginRight: -6,
  },
  rightRounded: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    width: 33,
    marginLeft: -3,
  },
  fullyRounded: {
    borderRadius: 15,
  },
  fullySquare: {
    borderRadius: 0,
    width: 36,
    marginHorizontal: 0,
  },
  dayText: {
    fontWeight: "bold",
  },
  todayText: {
    color: "#FFD700", 
  },
  completedDayText: {
    color: 'rgba(255, 255, 255, 0.8)',
  }
});
