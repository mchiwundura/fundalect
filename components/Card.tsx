import { StyleSheet, Text, TextInput } from "react-native"
import { ThemedView } from "./ThemedView"
import { ThemedText } from "./ThemedText"
import { TouchableOpacity } from "react-native"
import { MultipleChoice } from "./question_type/multipleChoice"

export const Card = ({question}: any) => {
    
    let content
    
    if (question.questionType == "multiple_choice") {
        content = <MultipleChoice question={question}/>
    } else if (question.questionType == "one_word") {
        content = <ThemedView>
                    <ThemedView style={styles.titleContainer}>
                    <ThemedText type="defaultSemiBold">
                        {question.question}
                    </ThemedText>
                    <ThemedView>
                        <TextInput style={styles.answerInput}/>
                    </ThemedView>
            </ThemedView>
                  </ThemedView>


    } else if (question.questionType == "match_opposite") {
        content = <ThemedView>

<ThemedView style={styles.matchOppositeContainer}>
                <ThemedView >
                {
            question.options?.map((x, y) => 
                    <TouchableOpacity
                    key={y}
                    style={styles.button}
                    onPress={() => console.log("selected")}
                    activeOpacity={0.8}>        
                                <ThemedText key={y} type="defaultSemiBold">{x}</ThemedText>
                    </TouchableOpacity>
                )
            }
                </ThemedView>
                <ThemedView>
                {
            question.options?.map((x, y) => 
                    <TouchableOpacity
                    key={y}
                    style={styles.button}
                    onPress={() => console.log("selected")}
                    activeOpacity={0.8}>        
                                <ThemedText key={y} type="defaultSemiBold">{x}</ThemedText>
                    </TouchableOpacity>
                )
            }
                </ThemedView>
            </ThemedView>

                  </ThemedView>
    } else {
        content = <Text>Nothing to display</Text>
    }

    return (
        <ThemedView style={styles.container}>{content}</ThemedView>
    )
 }

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