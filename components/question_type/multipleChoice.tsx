import { useState } from "react"
import { ThemedText } from "../ThemedText"
import { ThemedView } from "../ThemedView"
import { StyleSheet, TouchableOpacity } from "react-native"
import { CardAlert } from "../CardAlert"

export const MultipleChoice = ({question}: any) => {
// A function called set completed that when we have completed a question it changes that state at the parent component
// Multiple choice logic like we increase the difficulty with increased failing at the question, this can be abstracted ot abother file

    const [answerState, SetAnswerState] = useState(null)

    function selectAnswer(answer: number) {
        if (answer == question.answer){
            SetAnswerState(true)
        } else {
            SetAnswerState(false)
        }
    }

    return(
                    <ThemedView>
                        <ThemedView style={styles.titleContainer}>
                            <ThemedText type="defaultSemiBold">
                                {question.question}
                            </ThemedText>
                        </ThemedView>
                            <ThemedView style={styles.optionContainer}>           
                            {
                            question.options?.map((x: string, y: number) => 
                                    <TouchableOpacity
                                    key={y}
                                    style={styles.button}
                                    onPress={() => selectAnswer(y)}
                                    activeOpacity={0.8}>        
                                                <ThemedText key={y} type="defaultSemiBold">{x}</ThemedText>
                                    </TouchableOpacity>
                                )
                            }
                            </ThemedView>
                            {answerState !== null &&
                            <CardAlert message={answerState == true? "Correct" : "wrong"}  type={answerState}/> 
                            }
                      </ThemedView>
)}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    button: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      optionContainer: {

      },
      answerInput: {
        backgroundColor: "green"
  },
  matchOppositeContainer: {
    display: "flex",
    flexDirection: "row"

  },
 })