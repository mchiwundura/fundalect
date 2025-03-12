import { StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

interface LessonCardProps {
    title: string;
}




export default function LessonCard(props: LessonCardProps) {

        const rgbaColor = (hex, alpha) => {
        const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
      };

    const colorScheme = useColorScheme()

    return (
        <ThemedView style={[styles.container, {
            borderColor: rgbaColor(props.color, 0.8),
            backgroundColor : rgbaColor(props.color, 0.2),
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 4px 4px rgba(0, 0, 0, 0.9)"
        }]}>
            <ThemedView style={[styles.progress, {backgroundColor: props.color, width: props.completion * 3}]}>
            </ThemedView>
           <ThemedText type="defaultSemiBold">
                {props.title}
           </ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 8,
        position: "relative",
        flexDirection: "row",   
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        flex: 1,
        borderWidth: 3,
        height: 60 
    },
    progress: {
        position: "absolute",
        left: 2,
        top:2,
        height: 50,
        borderRadius: 5,
    }
})