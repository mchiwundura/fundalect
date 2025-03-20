import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as SQLite from "expo-sqlite";
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

export default function Flashcards() {

  const router = useRouter();
  const rotation = useSharedValue(0);
  const windowHeight = Dimensions.get('window').height;
  const {id} = useLocalSearchParams();
  const [currentCard, setCurrentCard] = useState(0);
  const [flashcards, setFlashcards] = useState();
  const [front, setFront] = useState(true);

  async function getFlashcards() {
    const db = await SQLite.openDatabaseAsync('local.db');
    const fetchedFlashcards = await db.getAllAsync(`
        SELECT * FROM flashcards
        WHERE lesson_id = ${id}
    `);
    setFlashcards(fetchedFlashcards);
  }
    
  useEffect(() => {
    getFlashcards();
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
          rotateY: `${interpolate(rotation.value, [0, 180], [0, 180], Extrapolate.CLAMP)}deg`
        }
      ]
    };
  });
    
  return (
    <ThemedView style={styles.page}>
      {flashcards && currentCard < flashcards.length ? (
        <Animated.View
          onTouchEnd={() => handleCardClick()}
          style={[styles.card, animatedStyle, { backgroundColor: front ? "#9584FF" : "#6F61C3" }]}
        >
          {flashcards.length > 0 ? (
            <View>
              <ThemedText style={[styles.cardText, !front && styles.reverseText]} type="title">
                {flashcards[currentCard]?.back
                  ? JSON.parse(flashcards[currentCard].back).title
                  : "No Title"}
              </ThemedText>
              <ThemedText style={[styles.cardText, !front && styles.reverseText]}>
                {front
                  ? flashcards[currentCard]?.front
                    ? JSON.parse(flashcards[currentCard].front).text
                    : "No Front Text"
                  : flashcards[currentCard]?.back
                  ? JSON.parse(flashcards[currentCard].back).text
                  : "No Back Text"}
              </ThemedText>
            </View>
          ) : (
            <ThemedText>Loading...</ThemedText>
          )}
        </Animated.View>
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
        bad={() => handleCardClick()} 
        flip={() => setFront(!front)} 
        good={() => handleCardClick()} 
        skip={() => {
          setCurrentCard(currentCard + 1);
          setFront(true);
        }} 
        active={!front} 
        />
      )}
      {flashcards && currentCard >= flashcards.length && (
        <ConfettiCannon colors={["#9584FF"]} count={300} origin={{x: -10, y: 0}} />
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
  card: {
    width: "90%",
    height: "60%",
    marginTop: 50,
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