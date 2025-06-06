import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { ThemedText } from "./ThemedText";
import { RelativePathString, useRouter } from "expo-router";
import { IconSymbol } from "./ui/IconSymbol";
import Button from "./ui/Button";
import { useAppContext } from "@/context/appContext";
import { Rocket } from "./ui/Rocket";
import Animated, {
  BounceIn,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import CelebrationStat from "./ui/CelebrationStat";
import FlashcardDeck from "./FlashcardDeck";

interface EndDeckCelebrationProps {
  restart: () => void;
}

const EndDeckCelebration = ({ restart }: EndDeckCelebrationProps) => {
  const { height, width } = useWindowDimensions();
  const { currentCourse } = useAppContext();
  const router = useRouter();

  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const isLaunched = useSharedValue(false);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 300 }),
        withTiming(0, { duration: 300 }),
      ),
      3,
      true,
      () => {
        isLaunched.value = true;
        translateX.value = withTiming(0);
        translateY.value = withTiming(-height, { duration: 1000 });
      },
    );

    translateX.value = withRepeat(
      withSequence(
        withTiming(-5, { duration: 100 }),
        withTiming(5, { duration: 100 }),
      ),
      6,
      true,
    );
  }, [height, isLaunched, translateX, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value },
    ],
  }));

  return (
    <>
      <View style={[styles.mainContainer, { height: height * 0.9 }]}>
        <View style={styles.topTextContainer}>
          <Animated.View
            entering={BounceIn}
            style={{ width: "100%", alignItems: "center" }}
          >
            <ThemedText
              type="title"
              style={[styles.congrats, { color: "#9584FF" }]}
            >
              Congratulations
            </ThemedText>
            <ThemedText type="subtitle">
              You have finished this deck of Flashcards
            </ThemedText>
          </Animated.View>
        </View>

        <View style={styles.smokeContainer}>
          <View style={styles.statsRow}>
            <Animated.View entering={FadeInDown.delay(2000)}>
              <CelebrationStat type="speed" value="0:17" />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(2300)}>
              <CelebrationStat type="flashcards" value={55} />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(2600)}>
              <CelebrationStat type="accuracy" value="74%" />
            </Animated.View>
          </View>

          <Animated.View
            entering={FadeInDown.delay(3000)}
            style={styles.recommendedDeckContainer}
          >
            <ThemedText type="subtitle" style={styles.deckSubtitle}>
              Try another Deck
            </ThemedText>
            <FlashcardDeck
              // TODO: Replace these props with state
              color="pink"
              completion={22}
              link={"/" as RelativePathString}
              setDeck={() => console.log("pakaipa")}
              title="Recomended Deck"
            />
          </Animated.View>
        </View>

        <Animated.View style={[animatedStyle, styles.animatedRocketContainer]}>
          <Rocket height={300} />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(3000)}
          style={styles.buttonContainer}
        >
          <Button
            type="primary"
            title="Back to Course"
            onPress={() => router.push(`/course/${currentCourse}/`)}
          />

          <TouchableOpacity style={styles.restartButton} onPress={restart}>
            <ThemedText style={styles.restartText}>Restart Deck</ThemedText>
          </TouchableOpacity>

          <View style={styles.homeIconWrapper}>
            <TouchableOpacity
              onPress={() => router.push("/")}
              style={styles.homeButton}
            >
              <IconSymbol name="house.fill" size={36} color="#9584FF" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>

      <ConfettiCannon
        explosionSpeed={500}
        colors={["#9584FF"]}
        fallSpeed={2000}
        count={150}
        origin={{ x: width * 0.5, y: -height }}
      />
    </>
  );
};

export default EndDeckCelebration;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topTextContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
  congrats: {
    fontWeight: "bold",
    marginVertical: 20,
  },
  smokeContainer: {
    width: "90%",
    height: "60%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
    top: 120,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  recommendedDeckContainer: {
    alignItems: "center",
    width: "100%",
  },
  deckSubtitle: {
    marginBottom: 10,
  },
  animatedRocketContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: -20,
    width: "90%",
    alignItems: "center",
  },
  restartButton: {
    height: 20,
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
    marginTop: 35,
  },
  restartText: {
    color: "#9584FF",
    textDecorationLine: "underline",
  },
  homeIconWrapper: {
    alignItems: "center",
  },
  homeButton: {
    width: 60,
    height: 60,
    backgroundColor: "#000",
    marginTop: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
