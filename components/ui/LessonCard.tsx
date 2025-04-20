import { StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Link } from "expo-router";

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
        <Link style={styles.link} href={props.link} >
        <ThemedView style={[styles.container, {
            borderColor: rgbaColor(props.color, 0.8),
            backgroundColor : rgbaColor(props.color, 0.2),
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 4px 4px rgba(0, 0, 0, 0.9)"
        }]}>
            <ThemedView style={[styles.progress, {backgroundColor: props.color, width: props.completion * 3.18}]}>
            </ThemedView>
           <ThemedText type="defaultSemiBold">
                {props.title}
           </ThemedText>
        </ThemedView>
            </Link>
    )
}

const styles = StyleSheet.create({
    link: {
        marginVertical: 10,
    },
    container: {
        padding: 10,
        borderRadius: 8,
        position: "relative",
        flexDirection: "row",   
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
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