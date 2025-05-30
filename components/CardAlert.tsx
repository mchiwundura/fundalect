import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedViewOld"
import { StyleSheet } from "react-native"

interface Alert {
    message: string;
    type: boolean;
}

export const CardAlert = (alert: Alert) => {

    return (
        <ThemedView style={alert.type == true? styles.correctMessageContainer: styles.wrongMessageContainer}>
            <ThemedText>
            {alert.message}
            </ThemedText>
        </ThemedView>
    )
}

const messgeContainer = {
    marginVertical:10,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontWeight: "500",
}

const styles = StyleSheet.create({
    correctMessageContainer: {
        ...messgeContainer,
        backgroundColor: "green",
    },
    wrongMessageContainer: {
        ...messgeContainer,
        backgroundColor: "red"
    }
})