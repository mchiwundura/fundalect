import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, ScrollView, useColorScheme, useWindowDimensions, Text, View } from "react-native";
import CourseCard from "@/components/CourseCard";
import IconTextButton from "@/components/ui/IconTextButton";
import ActivityCard from "@/components/ui/ActivityCard";
import { useDatabase } from "@/hooks/useDatabase";
import SideBar from "@/components/SideBar";
import Background from "@/components/Background";
import NewCourseCard from "@/components/NewCourseCard";


export default function Courses() {
const { getCourses } = useDatabase()

const {width} = useWindowDimensions();
const [large, setLarge] = useState(width > 600);

    async function getCoursesList() {
        try {    
        const courses = await getCourses()
        for (const row of courses) {
            console.log(row.value);
        }
        setCourses(courses)
        console.log(courses)
        return courses 
    } catch (error) {
        console.error(error)
    }
    }

useEffect(() => {
 setLarge(width > 600);
}, [width])

    useEffect(() => {
        getCoursesList();
    }  , []);

    const [courses, setCourses] = useState<any>([]);


    return (
        <Background>
            <ScrollView style={{ padding: 32 }}>
                <View style={{display: "flex", flexDirection: large? "row" : "column", padding: large? 50: 0, justifyContent: "space-between"}}>
                    <ScrollView style={{ paddingLeft: large ? 110 : 0 }}>
                        <ThemedText style={{marginBottom: 25}} type="title">My Courses</ThemedText>
                            <ScrollView horizontal style={{paddingVertical: 10}}>
                            {
                                courses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                            
                                ))
                            }
                            </ScrollView>
                     
            <ThemedText style={{}} type="subtitle">Discover New Courses</ThemedText>
            <NewCourseCard color="green" title="Physics NBT" icon="🤕"/>
                    </ScrollView>
            
        {large && <SideBar/>}
                </View>
            </ScrollView>
        </Background>
    )
}

const styles = StyleSheet.create({
    coursesContainer: {
        height: 200,
        marginTop: 20,
    }
})