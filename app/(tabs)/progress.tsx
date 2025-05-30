import { StyleSheet, ScrollView, useColorScheme, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import ActivityGraph from "@/components/ActivityGraph";
import CalendarView from "@/components/CalendarView";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconTextButton from "@/components/ui/IconTextButton";
import ActivityCard from "@/components/ui/ActivityCard";
import Background from "@/components/Background";


export default function ProgressPage() {

const activityData = [ {value:50}, {value:80}, {value:90}, {value:70} ]
const completedDays = [true, false, true, true, false, true, false]
  
  const [activitiesDB, setActivitiesDB] = useState([])
  const [activities, setActivities] = useState([])
  const colorScheme = useColorScheme();

    useEffect(() => {
        async function fetchActivities() {
            try {
                const usersRecentActivity = await AsyncStorage.getItem('@recentActivities');
                if (usersRecentActivity) {
                    const jsonActivities = JSON.parse(usersRecentActivity);
                    setActivitiesDB(jsonActivities);
                    setActivities(jsonActivities);
                    console.log("Recent activities found in local storage:", jsonActivities);
                }
            } catch (error) {
                console.error("Error fetching recent activities:", error);
            }
        }
        fetchActivities();
    }, []);

        function filterActivities(type: string) {
        if (type === "Quiz") { 
            setActivities(activitiesDB.filter(x => x.type === "Quiz"));
        } else if (type === "Flashcards") {
            setActivities(activitiesDB.filter(x => x.type === "Flashcards"));
        } else if (type === "Lesson") {
            setActivities(activitiesDB.filter(x => x.type === "Lesson"))
        } else
        setActivities(activitiesDB);
    }

  return (
    <Background>

    <ScrollView style={{padding: 32}} >
      <View style={styles.container}>
        <View>
      <ThemedText type="title">Progress this week</ThemedText>

      <ThemedText style={[styles.sectionTitle]} type="subtitle">Weekly Activity</ThemedText>
      <ActivityGraph
      showLine
      lineConfig={{
            color: '#F29C6E',
            thickness: 3,
            curved: true,
            hideDataPoints: true,
            shiftY: 20,
            initialSpacing: -30,
          }}
          data={activityData} />

      <ThemedText style={[styles.sectionTitle]} type="subtitle">Active Days</ThemedText>
      <CalendarView completedDays={completedDays} />
      <ThemedText style={[styles.sectionTitle]} type="subtitle">Recent Activity</ThemedText>
              <ScrollView style={[styles.filterButtons]} horizontal>
        <IconTextButton onPress={() => filterActivities("All")}  
        color={colorScheme === "light"? "rgba( 0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"} 
        textColor={colorScheme === "light"? "rgba( 0, 0, 0, 1)" : "rgba(255, 255, 255, 1)"} 
        title="All" 
        icon="list.dash"
        />
        <IconTextButton onPress={() => filterActivities("Flashcards")} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton onPress={() => filterActivities("Quiz")} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     
        <IconTextButton onPress={() => filterActivities("Lesson")} textColor="rgba(100, 170, 255, 1)" color="rgba(100, 170, 255, 0.2)" title="Lessons" icon="doc.plaintext"  />
        </ScrollView>
        <ScrollView style={[styles.recentActivityContainer]}>
            
            {activities && activities.map((x ,y)=> {
                return <ActivityCard key={y} activity={x}/>
              })}
 
        </ScrollView>
              </View> 
</View>
    </ScrollView>
</Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  recentActivityContainer: {
    paddingBottom: 200,
    minHeight: 500
  },
  sectionTitle: {
    marginVertical: 10,
  },
  filterButtons: {
    marginVertical: 20,
  }
});
