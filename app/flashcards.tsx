import { StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { Link } from "expo-router";
import { questions } from "@/db/questions";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Card } from "@/components/Card";

export default function Flashcards() {

   const windowHeight = Dimensions.get('window').height;

// An attempt at the anki algorithm for now lets just make something to display my questions and answersYe
// Learn testing whilst implementing the algorithm

    function getQuestions() {
        return questions
    }

    function nextButton() {
        questions[currentQuestion] !== undefined?
        setCurrentQuestion(() => currentQuestion + 1)
        :
        console.log("uploading to database and sending to home")
    }

    const [currentQuestion, setCurrentQuestion] = useState(0)



    return (
        <ThemedView style={[styles.flashcardView, {height: windowHeight}]}>
            <ThemedView style={styles.header}>
                
            </ThemedView>
            {questions[currentQuestion] !== undefined? 
            <Card question={questions[currentQuestion]}/>
            : 
            <ThemedText>
                Cards Finished, Congratulations
            </ThemedText>}
            <ThemedView style={styles.submitButtonContainer}>
                <TouchableOpacity
                        style={styles.button}
                        onPress={() => nextButton()}
                        activeOpacity={0.8}>        
                        <ThemedText type="defaultSemiBold">{questions[currentQuestion] !== undefined? "Submit" : "Back to Home"}</ThemedText>
                </TouchableOpacity>
            </ThemedView>
        </ThemedView>
    )

}

const styles = StyleSheet.create({
    flashcardView: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        paddingVertical: 10
    },
    button: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5
    },
    header: {

    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      answerInput: {
            backgroundColor: "green"
      },
      answerContainer: {
        gap: 8,
        marginBottom: 8,
      },
      optionContainer: {

      },
      optionButton: {

      },
      matchOppositeContainer: {
        display: "flex",
        flexDirection: "row"

      },
      submitButtonContainer: {
        gap: 8,
        marginBottom: 8,
        display: "flex",
        flexDirection: "row"
      },
      goodButton: {
        // find a way to extend button
      }
})