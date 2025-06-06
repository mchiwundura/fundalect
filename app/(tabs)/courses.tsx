import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, ScrollView, useWindowDimensions, View } from "react-native";
import CourseCard from "@/components/CourseCard";
import { useDatabase } from "@/hooks/useDatabase";
import SideBar from "@/components/SideBar";
import Background from "@/components/Background";
import NewCourseCard from "@/components/NewCourseCard";


export default function Courses() {

// Hooks
const { getCourses } = useDatabase()

// State
const [courses, setCourses] = useState<any>([]);
const {width} = useWindowDimensions();

// Get Courses
useEffect(() => {
    async function getCoursesList() {
        try {    
        setCourses(await getCourses())
        } catch (error) {
        console.error("Error Fetching Courses" ,error)
        }
    }
    getCoursesList();
    }  , []);



    return (
        <Background>
            <ScrollView>
                <View style={[styles.layoutContainer, {flexDirection: width > 600 ? "row" : "column", padding: width > 600 ? 50: 0, justifyContent: "space-between"}]}>
                    <ScrollView style={{ paddingLeft: width > 600 ? 110 : 0 }}>
                        <ThemedText style={{marginBottom: 25}} type="title">My Courses</ThemedText>
                            <ScrollView horizontal style={{paddingVertical: 10}}>
                            {
                                courses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))
                            }
                            </ScrollView>                     
                        <ThemedText type="subtitle">Discover New Courses</ThemedText>
                        <NewCourseCard color="green" title="Physics NBT" icon="🤕"/>
                    </ScrollView>
                    {width > 600 && <SideBar/>}
                </View>
            </ScrollView>
        </Background>
    )
}

const styles = StyleSheet.create({
layoutContainer: {
    display: "flex",
    justifyContent: "space-between"
}
})