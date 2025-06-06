import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { StreakData } from "@/types/ui/streakTracker";
import { getMidWeekDates } from "@/utils/streak";
import { Fire } from "./Flame";
import Button from "./ui/Button";
import { StreakCelebrationDayItem } from "./ui/StreakCelebrationDayItem";
import Animated, { BounceIn, FadeInLeft } from "react-native-reanimated";

type StreakExtensionCelebrationProps = StreakData & {
  onContinue: () => void;
};

const StreakExtensionCelebration = ({
  activeDays,
  currentStreak,
  onContinue,
}: StreakExtensionCelebrationProps) => {
  const displayDates = getMidWeekDates();
  const completedDates = new Set(activeDays.map((entry) => entry.date));
  const today = displayDates[Math.floor(displayDates.length / 2)];

  return (
    <View style={[styles.container, { height: "100%", width: "100%" }]}>
      <Animated.Text
        entering={BounceIn}
        style={{
          color: "#FDAC01",
          fontSize: 48,
          fontWeight: "bold",
          height: 68,
          // position: "absolute",
        }}
      >
        {currentStreak} Day Streak!
      </Animated.Text>

      <Fire />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Animated.View entering={FadeInLeft.duration(1000)}>
          <ThemedText type="subtitle" style={styles.motivation}>
            You are on fire!
          </ThemedText>
        </Animated.View>
        <View style={styles.weekContainer}>
          {displayDates.map((dateStr, index) => {
            const isCompleted = completedDates.has(dateStr);
            const isToday = dateStr === today;

            return (
              <StreakCelebrationDayItem
                key={dateStr}
                dateStr={dateStr}
                index={index}
                isCompleted={isCompleted}
                isToday={isToday}
              />
            );
          })}
        </View>
        <ThemedText type="subtle">
          Complete flashcards every day to grow your streak.
        </ThemedText>
        <Button
          title={"Continue"}
          type="primary"
          onPress={() => onContinue()}
        />
      </View>
    </View>
  );
};

export default StreakExtensionCelebration;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    paddingVertical: 80,
    position: "relative",
    height: "100%",
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,

    width: 360,
    paddingHorizontal: 16,
  },
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
  motivation: {
    fontSize: 24,
  },
  tip: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 4,
    color: "#666",
  },
});
