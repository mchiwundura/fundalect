import { ThemedText } from "./ThemedText";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Course } from "../types/database";
import { Text } from "react-native";


export default function CourseCard({ course }: { course: Course }) {

    const navigation = useRouter();
   
    const rgbaColor = (hex, alpha) => {
        const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
      };



    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: rgbaColor(course.color, 0.2), borderColor: course.color}]} onPress={() => navigation.push(`course/${course.id}`, {id: 1})}>
           <View style={[styles.progression, {height: course.completion * 1.40, backgroundColor: rgbaColor(course.color, 0.8)}]}/>
            <ThemedText type="defaultSemiBold">{course.title}</ThemedText>
            <Text style={styles.icon}>{course.icon}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {        
        padding: 16,
        position: "relative",
        borderRadius: 8,
        backgroundColor: "#8CFF85",
        width: 150,
        height: 150,
        marginBottom: 16,
        marginRight: 16,
        color: "#000",
        borderWidth:2
    }, 
    progression: {
        position: "absolute",
        width: 140,
        backgroundColor: "green", 
        bottom: 3,
        right: 3,
        borderRadius: 5
    },
    icon: {
        fontSize: 36,
        textAlign: "right",
        position: "absolute",
        bottom: 5,
        right: 5
    }
});