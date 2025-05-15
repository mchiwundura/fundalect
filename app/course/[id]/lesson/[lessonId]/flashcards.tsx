import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import FlashcardNav from "@/components/FlashcardNav";
import ConfettiCannon from 'react-native-confetti-cannon';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  GestureHandlerRootView
} from 'react-native-gesture-handler';
import IconTextButton from "@/components/ui/IconTextButton";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useDatabase } from "@/hooks/useDatabase";
import { useAppContext } from "@/context/appContext";

// Define TypeScript interfaces for the flashcard data
interface FlashcardFront {
  title: string;
  question: string;
}

interface Flashcard {
  id?: string;
  front: FlashcardFront;
  back: string;
}

export default function Flashcards() {
  const router = useRouter();
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  
  // Animation values
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(1);
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const scale = useSharedValue(1);
  const behindCardScale = useSharedValue(0.95);
  const behindCardY = useSharedValue(-20);
  const behindCardOpacity = useSharedValue(0.8);
  
  // Get parameters
  const { id, lessonId } = useLocalSearchParams<{ id: string; lessonId: string }>();
  
  // State
  const [currentCard, setCurrentCard] = useState(0);
  const [flashcardz, setFlashcards] = useState<Flashcard[]>([]);
  const [front, setFront] = useState(true);
  const [navigationVisible, setNavigationVisible] = useState(false);
  
  // Hooks
  const { getFlashcards } = useDatabase();
  const { flashcards } = useAppContext();

  // Gesture threshold constants
  const SWIPE_THRESHOLD = windowWidth * 0.25;
  const SWIPE_UP_THRESHOLD = windowHeight * 0.15;

  async function getDeck() {
    try {
      const fetchedFlashcards = await getFlashcards(id, lessonId);
      setFlashcards(fetchedFlashcards);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  }

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
    positionX.value = withTiming(400, { duration: 300 });
    positionY.value = withTiming(-60, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    nextCard();
  }

  function cardBad() {
    positionX.value = withTiming(-400, { duration: 300 });
    positionY.value = withTiming(60, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    nextCard();
  }

  function cardSkip() {
    positionY.value = withTiming(-280, { duration: 300 });
    opacity.value = withTiming(0, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    nextCard();
  }

  useEffect(() => {
    getDeck();
  }, []);

  // Gesture handler for swipe gestures
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX, translationY, velocityX, velocityY } = event.nativeEvent;
    
    // Update position based on drag
    positionX.value = translationX;
    positionY.value = translationY;
    
    // Calculate rotation based on horizontal movement (subtle effect)
    rotation.value = interpolate(
      translationX,
      [-windowWidth / 2, 0, windowWidth / 2],
      [-15, 0, 15],
      Extrapolate.CLAMP
    );
    
    // Scale slightly as card is moved
    scale.value = interpolate(
      Math.abs(translationX) + Math.abs(translationY),
      [0, 100],
      [1, 0.95],
      Extrapolate.CLAMP
    );
    
    // Change opacity slightly as card is moved
    opacity.value = interpolate(
      Math.abs(translationX) + Math.abs(translationY),
      [0, 150],
      [1, 0.8],
      Extrapolate.CLAMP
    );
  };

  const onGestureEnd = (event: PanGestureHandlerGestureEvent) => {
    const { translationX, translationY, velocityX, velocityY } = event.nativeEvent;
    
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
            Extrapolate.CLAMP
          )}deg`,
        },
        { translateX: positionX.value },
        { translateY: positionY.value },
        { scale: scale.value }
      ],
      opacity: opacity.value
    };
  });

  const behindCardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: behindCardScale.value },
        { translateY: behindCardY.value }
      ],
      opacity: behindCardOpacity.value
    };
  });

  const flashcardContainerHeight = windowHeight - 350;

  // Helper function to check if flashcards exist
  const hasFlashcards = flashcards && flashcards.length > 0;
  const isCompletedDeck = flashcards && currentCard >= flashcards.length;
  const hasNextCard = flashcards && currentCard < flashcards.length - 1;

  return (
    <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
      <ThemedView style={styles.page}>
        {!isCompletedDeck ? (
          <View style={[
            styles.flashcardsContainer, 
            { height: navigationVisible ? flashcardContainerHeight : windowHeight * 0.8 }
          ]}>
            {hasNextCard && (
              <Animated.View 
                style={[styles.behindCard, behindCardAnimatedStyle, { backgroundColor: "#6F61C3" }]}
              >
                {hasFlashcards && (
                  <View>
                    <ThemedText style={styles.cardText} type="title">
                      {flashcards[currentCard + 1]?.front?.title || "No Title"}
                    </ThemedText>
                  </View>
                )}
              </Animated.View>
            )}
            
            <PanGestureHandler 
              onGestureEvent={onGestureEvent} 
              onEnded={onGestureEnd}
            >
              <Animated.View style={[
                styles.card, 
                animatedStyle, 
                { backgroundColor: front ? "#9584FF" : "#6F61C3" }
              ]}>
                <TapGestureHandler onActivated={() => runOnJS(cardFlip)()}>
                  <Animated.View style={styles.cardContent}>
                    {hasFlashcards ? (
                      <View>
                        {front && (
                          <ThemedText style={styles.cardText} type="title">
                            {flashcards[currentCard]?.front?.title || "No Title"}
                          </ThemedText>
                        )}
                        <ThemedText style={[styles.cardText, !front && styles.reverseText]}>
                          {front
                            ? flashcards[currentCard]?.front?.question || "No Front Text"
                            : flashcards[currentCard]?.back || "No Back Text"
                          }
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
        ) : (
          <View style={{
            width: "100%", 
            height: windowHeight * 0.9, 
            position: "absolute", 
            alignItems: "center", 
            display: "flex", 
            justifyContent: "space-between"
          }}>
            <View style={{
              display: "flex", 
              width: "100%", 
              alignItems: "center", 
              paddingTop: 20
            }}>
              <ThemedText type="title" style={[styles.congrats, { color: "#9584FF" }]}>
                Congratulations
              </ThemedText>
              <ThemedText type="defaultSemiBold">
                You have finished this deck of Flashcards
              </ThemedText>
            </View>
            
            <View style={{ width: "90%" }}>
              <IconTextButton
                large
                onPress={() => router.push(`/quizes/${id}`)}
                textColor="rgba(149, 132, 255, 1)"
                color="rgba(149, 132, 255, 0.2)"
                title="Take the quiz"
                icon="doc.plaintext"
              />
              
              <TouchableOpacity 
                style={styles.restartButton} 
                onPress={() => setCurrentCard(0)}
              >
                <ThemedText style={{ color: "#9584FF", textDecorationLine: "underline" }}>
                  Restart Deck
                </ThemedText>
              </TouchableOpacity>
              
              <View style={{ display: "flex", alignItems: "center" }}>
                <TouchableOpacity 
                  onPress={() => router.push("/")} 
                  style={styles.homeButton}
                >
                  <IconSymbol name="house.fill" size={36} color={"#9584FF"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        
        {!isCompletedDeck && navigationVisible && (
          <FlashcardNav 
            bad={() => cardBad()} 
            flip={() => cardFlip()} 
            good={() => cardGood()} 
            skip={() => cardSkip()} 
            active={!front} 
          />
        )}
        
        {isCompletedDeck && (
          <>
            <ConfettiCannon colors={["#9584FF"]} count={300} origin={{ x: -10, y: 0 }} />
            <ConfettiCannon autoStartDelay={500} colors={["#9584FF"]} count={300} origin={{ x: 400, y: 0 }} />
            <ConfettiCannon 
              explosionSpeed={20} 
              autoStartDelay={1000} 
              colors={["#9584FF"]} 
              count={300} 
              origin={{ x: -250, y: 0 }} 
            />
          </>
        )}
      </ThemedView>
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
    justifyContent: "space-between"
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
    padding: 25,
  },
  cardContent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    textAlign: "center",
    marginTop: 20,
  },
  reverseText: {
    transform: [{ rotateY: "180deg" }]
  },
  congrats: {
    fontWeight: "bold",
    marginVertical: 20,
  },
  restartButton: {
    height: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
    bottom: 20,
    marginTop: 35
  },
  homeButton: {
    width: 60,
    height: 60,
    backgroundColor: "#000",
    marginTop: -20,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});