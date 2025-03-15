import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

interface ContinueButton {
    text: string;
    onClick: () => void;
}

export default function ContinueButton({text, onClick}: ContinueButton) {
    return (
       <TouchableOpacity  style={styles.button} onPress={()=> onClick}>
            <ThemedText>   
                {text}
            </ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(149, 132, 255, 0.2)",
        borderWidth: 1,
        padding:5,
        alignItems: "center",
        borderColor: "rgba(149, 132, 255, 0.5)",
        borderRadius: 20
    }
})