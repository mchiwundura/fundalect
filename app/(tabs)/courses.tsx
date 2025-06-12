import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
  TextInput,
} from "react-native";
import CourseCard from "@/components/CourseCard";
import { useDatabase } from "@/hooks/useDatabase";
import SideBar from "@/components/SideBar";
import Background from "@/components/Background";
import NewCourseCard from "@/components/NewCourseCard";

export default function Courses() {
  // Hooks
  const { getCourses } = useDatabase();

  // State
  const [courses, setCourses] = useState<any>([]);
  const { width } = useWindowDimensions();
  const [search, setSearch] = useState("");
  // Get Courses
  useEffect(() => {
    async function getCoursesList() {
      try {
        setCourses(await getCourses());
      } catch (error) {
        console.error("Error Fetching Courses", error);
      }
    }
    getCoursesList();
  }, []);

  return (
    <Background>
      <ScrollView>
        <View
          style={[
            styles.layoutContainer,
            {
              flexDirection: width > 600 ? "row" : "column",
              padding: width > 600 ? 50 : 32,
              justifyContent: "space-between",
            },
          ]}
        >
          <ScrollView style={{ paddingLeft: width > 600 ? 110 : 0 }}>
            <ThemedText style={{ marginBottom: 25 }} type="title">
              My Courses
            </ThemedText>
            <ScrollView horizontal style={{ paddingVertical: 10 }}>
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </ScrollView>
            <ThemedText style={{ marginVertical: 10 }} type="subtitle">
              Discover New Courses
            </ThemedText>
            <TextInput
              onChangeText={(text) => setSearch(text)}
              value={search}
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#999"
            />
            <NewCourseCard
              onSelected={() => console.log("course selected")}
              level="Third year Rhodes University"
              commingSoon
              description="Dive deeper into the world of medications, exploring adcanced topics like pharmacokinetics, pharmacodynamics and their clinical applications"
              color="green"
              title="Pharmacology"
              icon="💊"
            />
            <NewCourseCard
              color="pink"
              onSelected={() => console.log("course selected")}
              level="Grade 9 IEB"
              title="Mathematics Literacy"
              selected
              icon="➕"
              description="Develp your math skills with this grade 9 course. Master basic concepts, build confidence, and imporve problem-solving abilities"
            />
            <NewCourseCard
              description="Get ready to drive safely, Learn essential rules, signs and procedures to navigate the Zimbabwe roads with confidence and responsibility"
              color="yellow"
              onSelected={() => console.log("course selected")}
              level="Zimbabwe Traffic"
              title="The Highway Code"
              icon="🚦"
            />
          </ScrollView>
          {width > 600 && <SideBar />}
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 200,
  },
});
