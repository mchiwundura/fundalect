import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import * as SQLite from "expo-sqlite"
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function Flashcards() {

const {id} = useLocalSearchParams();
const [currentCard, setCurrentCard] = useState<number>(0)
const [flashcards, setFlashcards] = useState<any>()
const [front, setFront ] = useState<boolean>(true)

async function getFlashcards() {
    const db = await SQLite.openDatabaseAsync('local.db');
    const fetchedFlashcards = await db.getAllAsync(`
        SELECT * FROM flashcards
        WHERE lesson_id = ${id}
        `);
        setFlashcards(fetchedFlashcards) 
    }
    
    useEffect(() => {
        getFlashcards();
    }, [])

    const handleCardClick = () => {
        if (front) {
            setFront(false);
        } else {
            // setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
            setCurrentCard(currentCard + 1)
            setFront(true);
        }
    }
    
    return (
<ThemedView style={styles.page}>
  {flashcards && currentCard < flashcards.length ? (
    <TouchableOpacity
      onPress={() => handleCardClick()}
      style={[styles.card, { backgroundColor: "#9584FF" }]}
    >
      {flashcards.length > 0 ? (
        <View>
          <ThemedText type="title">
            {flashcards[currentCard]?.back
              ? JSON.parse(flashcards[currentCard].back).title
              : "No Title"}
          </ThemedText>
          <ThemedText>
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
    </TouchableOpacity>
  ) : (
    <ThemedText>Congratulations</ThemedText>
  )}
</ThemedView>

    )
}

const styles = StyleSheet.create({
    page: {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    card : {
        width: "90%",
        height: "60%",
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        borderRadius: 25,
        padding: 25,
    }
})