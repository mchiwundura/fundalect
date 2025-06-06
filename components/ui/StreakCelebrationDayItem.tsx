import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import ThemedView from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { getDateNumber, getDayLabel } from "@/utils/streak";

export const StreakCelebrationDayItem = ({
  dateStr,
  index,
  isCompleted,
  isToday,
}: {
  dateStr: string;
  index: number;
  isCompleted: boolean;
  isToday: boolean;
}) => {
  const scale = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = withDelay(index * 150, withTiming(1, { duration: 400 }));
  }, []);

  return (
    <View style={styles.dayItem}>
      <Animated.View style={[styles.daySquircleWrapper, animatedStyle]}>
        <ThemedView
          style={[
            styles.daySquircle,
            isCompleted && styles.completedSquircle,
            isToday && styles.todaySquircle,
          ]}
        >
          <ThemedText
            style={[styles.dayText, isCompleted && styles.completedDayText]}
          >
            {getDateNumber(dateStr)}
          </ThemedText>
        </ThemedView>
      </Animated.View>
      <ThemedText type="default" style={styles.dayLabel}>
        {getDayLabel(dateStr)}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  dayItem: {
    alignItems: "center",
    flex: 1,
  },
  daySquircleWrapper: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  daySquircle: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    transform: [{ rotate: "45deg" }],
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  completedSquircle: {
    backgroundColor: "#FDAC01",
  },
  todaySquircle: {
    borderWidth: 2,
    borderColor: "#ff9800",
  },
  dayText: {
    fontSize: 16,
    color: "#000",
    transform: [{ rotate: "-45deg" }],
    justifyContent: "center",
  },
  completedDayText: {
    color: "#fff",
    fontWeight: "bold",
  },
  dayLabel: {
    fontSize: 12,
  },
});
