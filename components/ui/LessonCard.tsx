import { StyleSheet, Touchable, TouchableOpacity, useColorScheme, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedViewOld";
import { Link, useRouter } from "expo-router";

interface LessonCardProps {
    title: string;
    onPress: any
}




export default function LessonCard(props: LessonCardProps) {
const router = useRouter();
        const rgbaColor = (hex, alpha) => {
        const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
      };
function buttonPressed() {
    props.onPress();
    router.push(props.link);
}
    const colorScheme = useColorScheme()

    return (
        <TouchableOpacity onPress={buttonPressed} style={styles.link} >
           
        <View  style={[styles.container, {
            borderColor: rgbaColor(props.color, 0.8),
            backgroundColor : rgbaColor(props.color, 0.2),
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 4px 4px rgba(0, 0, 0, 0.9)"
        }]}>
            <ThemedView style={[styles.progress, {backgroundColor: props.color, width: props.completion * 3.18}]}>
            </ThemedView>
           <ThemedText type="defaultSemiBold">
                {props.title}
           </ThemedText>
        </View>
      
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        marginVertical: 10,
        height: 60,
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