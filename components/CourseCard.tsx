import { ThemedText } from "./ThemedText";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Course } from "../types/database";
import { Text } from "react-native";
import Background from "./Background";


export default function CourseCard({ course }: { course: Course }) {

    const navigation = useRouter();
   
    return (
        <TouchableOpacity style={[styles.container, { borderColor: course.color}]} onPress={() => navigation.push(`course/${course.id}`)}>
           <View style={[styles.background, {backgroundColor: course.color}]}/>
           <View style={[styles.progression, {height: course.completion * 1.40, backgroundColor: course.color, opacity: 0.8}]}/>
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
        bottom: 3,
        right: 3,
        borderRadius: 5
    },
    background: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.2
    },
    icon: {
        fontSize: 36,
        textAlign: "right",
        position: "absolute",
        bottom: 5,
        right: 5
    }
});