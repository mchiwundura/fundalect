import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import FlashcardNav from "@/components/FlashcardNav";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useAppContext } from "@/context/appContext";
import Background from "@/components/Background";
import EndDeckCelebration from "@/components/EndDeckCelebration";
import StreakExtensionCelebration from "@/components/StreakExtensionCelebration";
import { StreakData } from "@/types/ui/streakTracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Todo: Implement Spaced repetition algorithm
// Tood: Track Card perfomace
// Todo: Calculate card performance at the end of the deck
// Todo: Add cards progress to local storage
// Todo: Animate page
// Todo: Add day streak after completing a deck
// Todo: Flashcard end of deck screen as separate component (pressing continue from there can trigger streak extended animation)
// Todo: Move Utils and make tests

export default function Flashcards() {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const [streakExtension, setStreakExtension] = useState(true);

  // Animation values
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(1);
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const scale = useSharedValue(1);
  const behindCardScale = useSharedValue(0.95);
  const behindCardY = useSharedValue(-20);
  const behindCardOpacity = useSharedValue(0.8);

  // State
  const [currentCard, setCurrentCard] = useState(0);
  const [front, setFront] = useState(true);
  const { flashcardNavigation } = useAppContext();

  // Hooks
  const { flashcards } = useAppContext();
  const { lessonColor } = useAppContext();

  // Gesture threshold constants
  const SWIPE_THRESHOLD = windowWidth * 0.25;
  const SWIPE_UP_THRESHOLD = windowHeight * 0.15;

  function nextCard() {
    behindCardY.value = withTiming(0, { duration: 300 });
    behindCardOpacity.value = withTiming(1, { duration: 300 });
    behindCardScale.value = withTiming(1, { duration: 300 });

    setTimeout(() => {
      positionX.value = withTiming(0, { duration: 0 });
      positionY.value = withTiming(0, { duration: 0 });
      scale.value = withTiming(1, { duration: 100 });
      opacity.value = withTiming(1, { duration: 100 });
      rotation.value = withTiming(0, { duration: 10 });
      setCurrentCard(currentCard + 1);
      setFront(true);
    }, 300);

    setTimeout(() => {
      behindCardY.value = withTiming(-20, { duration: 300 });
      behindCardOpacity.value = withTiming(0.8, { duration: 300 });
      behindCardScale.value = withTiming(0.95, { duration: 300 });
    }, 300);
  }

  function cardFlip() {
    if (front) {
      rotation.value = withTiming(180, { duration: 300 });
      setFront(false);
    } else {
      rotation.value = withTiming(0, { duration: 300 });
      setFront(true);
    }
  }

  function cardGood() {
    positionX.value = withTiming(front ? 400 : -400, { duration: 300 });
    positionY.value = withTiming(-60, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    nextCard();
  }

  function cardBad() {
    positionX.value = withTiming(front ? -400 : 400, { duration: 300 });
    positionY.value = withTiming(60, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    flashcards.push(flashcards[currentCard]);
    nextCard();
  }

  function cardSkip() {
    positionY.value = withTiming(-280, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    nextCard();
  }

  // Gesture handler for swipe gestures
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX, translationY } = event.nativeEvent;

    // Update position based on drag
    positionX.value = translationX;
    positionY.value = translationY;

    // Calculate rotation based on horizontal movement (subtle effect)
    rotation.value = interpolate(
      translationX,
      [-windowWidth / 2, 0, windowWidth / 2],
      [-15, 0, 15],
      Extrapolate.CLAMP,
    );

    // Scale slightly as card is moved
    scale.value = interpolate(
      Math.abs(translationX) + Math.abs(translationY),
      [0, 100],
      [1, 0.95],
      Extrapolate.CLAMP,
    );

    // Change opacity slightly as card is moved
    opacity.value = interpolate(
      Math.abs(translationX) + Math.abs(translationY),
      [0, 150],
      [1, 0.8],
      Extrapolate.CLAMP,
    );
  };

  const onGestureEnd = (event: PanGestureHandlerGestureEvent) => {
    const { translationX, translationY, velocityX, velocityY } =
      event.nativeEvent;

    // Determine what action to take based on the gesture
    if (translationX > SWIPE_THRESHOLD || velocityX > 800) {
      // Swipe right - Mark as "good"
      runOnJS(cardGood)();
    } else if (translationX < -SWIPE_THRESHOLD || velocityX < -800) {
      // Swipe left - Mark as "bad"
      runOnJS(cardBad)();
    } else if (translationY < -SWIPE_UP_THRESHOLD || velocityY < -800) {
      // Swipe up - Skip to next card
      runOnJS(cardSkip)();
    } else {
      // Return to center if no action is triggered
      positionX.value = withTiming(0, { duration: 200 });
      positionY.value = withTiming(0, { duration: 200 });
      scale.value = withTiming(1, { duration: 200 });
      opacity.value = withTiming(1, { duration: 200 });

      // Reset rotation only if we're on the front side
      if (front) {
        rotation.value = withTiming(0, { duration: 200 });
      }
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(
            rotation.value,
            [0, 180],
            [0, 180],
            Extrapolate.CLAMP,
          )}deg`,
        },
        { translateX: positionX.value },
        { translateY: positionY.value },
        { scale: scale.value },
      ],
      opacity: opacity.value,
    };
  });

  const behindCardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: behindCardScale.value },
        { translateY: behindCardY.value },
      ],
      opacity: behindCardOpacity.value,
    };
  });

  const flashcardContainerHeight = windowHeight - 350;

  // Helper function to check if flashcards exist
  const hasFlashcards = flashcards && flashcards.length > 0;
  const isCompletedDeck = flashcards && currentCard >= flashcards.length;
  const hasNextCard = flashcards && currentCard < flashcards.length - 1;

  // Tracking the streak

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
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
          );
          setStreakData({ ...data, activeDays: sortedDays });
        }
      } catch (error) {
        console.error("Failed to load streak data", error);
      }
    };

    loadData();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, width: "100%" }}>
      <Background>
        <View style={styles.page}>
          {!isCompletedDeck && (
            <View
              style={[
                styles.flashcardsContainer,
                {
                  height: flashcardNavigation
                    ? flashcardContainerHeight
                    : windowHeight * 0.8,
                },
              ]}
            >
              {hasNextCard && (
                <Animated.View
                  style={[
                    styles.behindCard,
                    behindCardAnimatedStyle,
                    {
                      backgroundColor: lessonColor,
                      opacity: 0.5,
                      top: flashcardNavigation ? -5 : -10,
                    },
                  ]}
                >
                  {hasFlashcards && (
                    <View>
                      <ThemedText style={styles.cardText} type="title">
                        {flashcards[currentCard + 1]?.front?.title ||
                          "No Title"}
                      </ThemedText>
                    </View>
                  )}
                </Animated.View>
              )}

              <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onEnded={onGestureEnd}
              >
                <Animated.View
                  sharedTransitionTag="flashcard"
                  style={[
                    styles.card,
                    animatedStyle,
                    { backgroundColor: lessonColor },
                  ]}
                >
                  <TapGestureHandler onActivated={() => runOnJS(cardFlip)()}>
                    <Animated.View
                      style={[
                        styles.cardContent,
                        {
                          backgroundColor: front
                            ? "rgba(0,0,0,0.05)"
                            : "rgba(0,0,0,0.3)",
                        },
                      ]}
                    >
                      {hasFlashcards ? (
                        <View>
                          {front && (
                            <ThemedText style={styles.cardText} type="title">
                              {flashcards[currentCard]?.front?.title ||
                                "No Title"}
                            </ThemedText>
                          )}
                          <ThemedText
                            style={[
                              styles.cardText,
                              !front && styles.reverseText,
                            ]}
                          >
                            {front
                              ? flashcards[currentCard]?.front?.question ||
                                "No Front Text"
                              : flashcards[currentCard]?.back || "No Back Text"}
                          </ThemedText>
                        </View>
                      ) : (
                        <ThemedText>Loading...</ThemedText>
                      )}
                    </Animated.View>
                  </TapGestureHandler>
                </Animated.View>
              </PanGestureHandler>
            </View>
          )}

          {!isCompletedDeck && flashcardNavigation && (
            <FlashcardNav
              bad={() => cardBad()}
              flip={() => cardFlip()}
              good={() => cardGood()}
              skip={() => cardSkip()}
              active={!front}
            />
          )}

          {isCompletedDeck &&
            (streakExtension ? (
              <StreakExtensionCelebration
                {...streakData}
                onContinue={() => setStreakExtension(false)}
              />
            ) : (
              <EndDeckCelebration restart={() => setCurrentCard(0)} />
            ))}
        </View>
      </Background>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
  },
  flashcardsContainer: {
    display: "flex",
    position: "relative",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  behindCard: {
    position: "absolute",
    width: "90%",
    borderRadius: 25,
    height: "100%",
    padding: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    height: "100%",
    display: "flex",
    borderRadius: 25,
    position: "relative",
  },
  cardContent: {
    borderRadius: 25,
    width: "100%",
    padding: 25,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    textAlign: "center",
    marginTop: 20,
  },
  reverseText: {
    transform: [{ rotateY: "180deg" }],
  },
});
