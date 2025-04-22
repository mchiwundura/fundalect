import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import FlashcardNav from "@/components/FlashcardNav";
import ConfettiCannon from 'react-native-confetti-cannon';
import {Dimensions} from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  interpolate, 
  Extrapolate 
} from "react-native-reanimated";
import IconTextButton from "@/components/ui/IconTextButton";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { transform } from "@babel/core";
import { useDatabase } from "@/hooks/useDatabase";
import { useAppContext } from "@/context/appContext";


// Actual user performance on the cards (a timer if necesarry)
// Smoothen up the animations 
// that stutter at the end of the flashcards, its probably the confetti but take a look into this pls

export default function Flashcards() {

  const router = useRouter();
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(1)
  const postionX = useSharedValue(0)
  const postionY = useSharedValue(0)
  const scale = useSharedValue(1)
  const behindCardScale = useSharedValue(0.95)
  const behindCardY = useSharedValue(-20)
  const behindCardOpacity = useSharedValue(0.8)
  const windowHeight = Dimensions.get('window').height;
  const {id} = useLocalSearchParams();
  const {lessonId} = useLocalSearchParams();
  const [currentCard, setCurrentCard] = useState(0);
  const [flashcardz, setFlashcards] = useState<[]>();
  const [front, setFront] = useState(true);
const {getFlashcards} = useDatabase()
const { flashcards } = useAppContext()

  async function getDeck() {

    
    const fetchedFlashcards = await getFlashcards(id, lessonId)

    setFlashcards(fetchedFlashcards);
    console.error("the flashcards", fetchedFlashcards)
  }

  function nextCard(){
    behindCardY.value = withTiming(0, {duration: 300})
    behindCardOpacity.value = withTiming(1, {duration: 300})
    behindCardScale.value = withTiming(1, {duration: 300})

    setTimeout(()=> {
 postionX.value = withTiming(0, {duration: 0})
    postionY.value = withTiming(0, {duration: 0})
    scale.value = withTiming(1, {duration: 100})
    opacity.value = withTiming(1, {duration: 100})
    rotation.value = withTiming(0, {duration: 10})
    setCurrentCard(currentCard + 1)
    setFront(true)
    }, 300)

    setTimeout(()=> {
     behindCardY.value = withTiming(-20, {duration: 300})
    behindCardOpacity.value = withTiming(0.8, {duration: 300})
    behindCardScale.value = withTiming(0.95, {duration: 300})
    }, 300)
   
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

  function cardGood(){
    postionX.value = withTiming(-400, {duration: 300})
    postionY.value = withTiming(-60, {duration: 300})
    opacity.value = withTiming(0, {duration: 300})
    scale.value = withTiming(0.8, {duration: 300})
    nextCard()
  }

  function cardBad() {
    postionX.value = withTiming(400, {duration: 300})
    postionY.value = withTiming(60, {duration: 300})
    opacity.value = withTiming(0, {duration: 300})
    scale.value = withTiming(0.8, {duration: 300})
    nextCard()
  }

  function cardSkip() {

    postionY.value = withTiming(-280, {duration: 300})
    opacity.value = withTiming(0, {duration: 300})
    scale.value = withTiming(0.8, {duration: 300})
    nextCard()
  }
    
  useEffect(() => {
    getDeck();
  }, []);

  const handleCardClick = () => {
    if (front) {
      rotation.value = withTiming(180, { duration: 300 });
      setFront(false);
    } else {
      setCurrentCard(currentCard + 1);
      rotation.value = withTiming(0, { duration: 300 });
      setFront(true);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(rotation.value, [0, 180], [0, 180], Extrapolate.CLAMP)}deg`,
        },
        {translateX: postionX.value},
        {translateY: postionY.value},
        {scale: scale.value}
      ],
    opacity: opacity.value
    };
  });

  const behindCardAnimatedStyle = useAnimatedStyle(() => {
  return {
    transform: [
      {
      scale: behindCardScale.value
    }, 
    {translateY: behindCardY.value}
  ],
  opacity: behindCardOpacity.value
  }
})
    
  return (
    <ThemedView style={styles.page}>
      {flashcards && currentCard < flashcards.length ? (
        <View style={styles.flashcardsContainer}>
            {currentCard < flashcards.length - 1 && <Animated.View style={[styles.behindCard, behindCardAnimatedStyle, {backgroundColor: "#6F61C3"}]}>
                        {flashcards.length > 0 ? (
            <View>
              <ThemedText style={[styles.cardText,]} type="title">
                {flashcards[currentCard]?.front
                  ? flashcards[currentCard + 1].front.title
                  : "No Title"}
              </ThemedText>
            </View>
          ) : (
            <ThemedText>Loading...</ThemedText>
          )}
            </Animated.View>}
        <Animated.View
          onTouchEnd={() => cardFlip()}
          style={[styles.card, animatedStyle, { backgroundColor: front ? "#9584FF" : "#6F61C3" }]}
          >
          {flashcards.length > 0 ? (
            <View>
              {front && <ThemedText style={[styles.cardText,]} type="title">
                {flashcards[currentCard]?.front
                  ? flashcards[currentCard].front.title
                  : "No Title"}
              </ThemedText>}
              <ThemedText style={[styles.cardText, !front && styles.reverseText]}>
                {front
                  ? flashcards[currentCard]?.front
                  ? flashcards[currentCard].front.question
                  : "No Front Text"
                  : flashcards[currentCard]?.back
                  ? flashcards[currentCard].back
                  : "No Back Text"}
              </ThemedText>
            </View>
          ) : (
            <ThemedText>Loading...</ThemedText>
          )}
        </Animated.View>
          </View>
      ) : (
        <View style={{width: "100%", height: windowHeight*0.9, position: "absolute", alignItems: "center", display: "flex", justifyContent: "space-between"}}>
          <View style={{display: "flex", width: "100%", alignItems: "center", paddingTop: 20}}>
          <ThemedText type="title" style={[styles.congrats, {color: "#9584FF"}]}>Congratulations</ThemedText>
        <ThemedText type="defaultSemiBold">You have finished this deck of Flashcards</ThemedText>
          </View>
          <View style={{width: "90%"}}>
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
            <ThemedText style={{color: "#9584FF", textDecorationLine: "underline"}}>Restart Deck</ThemedText>
          </TouchableOpacity>
          <View style={{display: "flex", alignItems: "center"}}>
          <TouchableOpacity onPress={()=> router.push("/")} style={styles.homeButton}>
            <IconSymbol name="house.fill" size={36} color={"#9584FF"}/>
          </TouchableOpacity>
          </View>
            </View>
        </View>
      )}
      {flashcards && currentCard < flashcards.length && (
        <FlashcardNav 
        bad={() => cardBad()} 
        flip={() => cardFlip()} 
        good={() => cardGood()} 
        skip={() => {
cardSkip()
        }} 
        active={!front} 
        />
      )}
      {flashcards && currentCard >= flashcards.length && (
        <>
        <ConfettiCannon colors={["#9584FF"]} count={300} origin={{ x: -10, y: 0 }} />
        <ConfettiCannon autoStartDelay={500} colors={["#9584FF"]} count={300} origin={{ x: 400, y: 0 }} />
        <ConfettiCannon explosionSpeed={20} autoStartDelay={1000} colors={["#9584FF"]} count={300} origin={{ x: -250, y: 0 }} /></>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "relative"
  },
  flashcardsContainer: {
    display: "flex",
    position: "relative",
    width: "100%",
    height: "60%",
    marginTop: 50,
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
  },
  card: {
    width: "90%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: 25,
    padding: 25,
  },
  cardText: {
    textAlign: "center",
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
  homeButton : {
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