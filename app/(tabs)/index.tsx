import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import StreakTracker from "@/components/StreakTracker";
import FlashcardDeck from "@/components/FlashcardDeck";
import Background from "@/components/Background";
import LessonCard from "@/components/ui/LessonCard";
import { useDatabase } from "@/hooks/useDatabase";
import { useAppContext } from "@/context/appContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SideBar from "@/components/SideBar";
import { FlashcardDeckProps } from "@/types/ui/FlashcardDeck";

// - API endpoint for indexes where we just get lesson/flashcards and quiz indexes // titles // color and icons, the full lessons are resource taxing surely
// - Fetch flashcards decks (from database if no initial from local storage)
// - Fetch Lessons (from database if no intial from local storage)
// - Fetch Activities from database if no from local storage
// - a simple object procesed backend called new user which posts an array of the enroled subjects and returns the new lessons, activities and flashcards for a new user)
// - if the user is old we can have their synced data from database

// - make the functionally different views for mobile and web so we can be able to use a scrollview for mobile

export default function Home() {
  const { width } = useWindowDimensions();
  const [large, setLarge] = useState(width > 600);
  const { getInitialData } = useDatabase();
  const [flashcards, setFlashcardsLocal] = useState<FlashcardDeckProps[]>([]);
  const [lessons, setLessons] = useState([]);
  const { setFlashcards } = useAppContext();
  const { setLessonColor } = useAppContext();
  const [activities, setActivities] = useState([]);
  const { setCurrentCourse } = useAppContext();
  const { setCurrentDeck } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      const usersRecentActivity =
        await AsyncStorage.getItem("@recentActivities");
      if (usersRecentActivity) {
        const jsonActivities = JSON.parse(usersRecentActivity);
        setActivities(jsonActivities);
        console.log(
          "Recent activities found in local storage:",
          JSON.parse(usersRecentActivity),
        );
      }
      const data = await getInitialData("1,2,3,4,5");
      setFlashcardsLocal(data.flashcards);
      setFlashcards(data.flashcards[0].cards);
      setLessons(data.lessons);
      console.log(lessons, "lessons");
    }
    fetchData();
  }, []);

  useEffect(() => {
    setLarge(width > 600);
  }, [width]);

  return (
    <Background>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              flexDirection: large ? "row" : "column",
              padding: large ? 50 : 0,
            },
          ]}
        >
          <ScrollView style={[{ padding: 32, paddingLeft: large ? 110 : 32 }]}>
            <ThemedText style={{ marginVertical: 12 }} type="subtitle">
              Welcome Back
            </ThemedText>
            <ThemedText style={{ marginBottom: 12 }} type="title">
              Munyaradzi
            </ThemedText>
            {!large && <StreakTracker />}
            <ThemedText style={styles.sectionTitle} type="subtitle">
              Jump Back In Some Flashcards
            </ThemedText>
            <ScrollView horizontal={large}>
              {flashcards &&
                flashcards.map((x, y) => (
                  <FlashcardDeck
                    setDeck={() => {
                      setFlashcards(x.cards);
                      setCurrentDeck(x);
                      setLessonColor(x.color);
                      setCurrentCourse(x.courseId);
                    }}
                    title={x.title}
                    key={y}
                    color={x.color}
                    link={`/course/${x.courseId}/lesson/${x.lessonId}/flashcards`}
                    completion={50}
                    courseTitle={"Natural Science"}
                  />
                ))}
            </ScrollView>

            <ThemedText style={styles.sectionTitle} type="subtitle">
              Start a lesson
            </ThemedText>
            <ScrollView>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {lessons &&
                  lessons.map((x, y) => {
                    return (
                      <View
                        key={y}
                        style={{
                          width: large ? 300 : "95%",
                          marginHorizontal: large ? 10 : "auto",
                        }}
                      >
                        <LessonCard
                          onPress={() => setLessonColor(x.color)}
                          title={x.title}
                          color={x.color}
                          link={`/course/${x.courseId}/lesson/${x.lessonId}`}
                          completion={33}
                        />
                      </View>
                    );
                  })}
              </View>
            </ScrollView>
          </ScrollView>
          {large && <SideBar />}
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    display: "flex",
    marginBottom: 20,
  },
  sectionTitle: {
    marginVertical: 10,
  },
  container: {
    display: "flex",
  },
  sidebar: {
    width: "20%",
    padding: 32,
    paddingTop: 50,
  },
});
