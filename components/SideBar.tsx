import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileIcon from './ui/ProfileIcon'
import { ThemedText } from './ThemedText'
import StreakTracker from './StreakTracker'
import ReportStats from './ReportStats'
import ActivityCard from './ui/ActivityCard'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SideBar = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        async function fetchActivities() {
            try {
                const usersRecentActivity = await AsyncStorage.getItem('@recentActivities');
                if (usersRecentActivity) {
                    const jsonActivities = JSON.parse(usersRecentActivity);
                    setActivities(jsonActivities);
                    console.log("Recent activities found in local storage:", jsonActivities);
                }
            } catch (error) {
                console.error("Error fetching recent activities:", error);
            }
        }
        fetchActivities();
    }, []);

  return (
        <View style={styles.sidebar}>
        <ProfileIcon />
        <ReportStats minutes={22} flashcards={14} tests={11}/> 
            <ThemedText style={styles.sectionTitle} type="subtitle">Your Streak</ThemedText>
        <StreakTracker/>
            <ThemedText style={styles.sectionTitle} type="subtitle">Recent Activity</ThemedText>       
        <ScrollView>
        {activities && activities.map((x ,y)=> {
            return <ActivityCard key={y} activity={x}/>
        })}
        </ScrollView>
        </View>    
  )
}

export default SideBar

const styles = StyleSheet.create({
        sidebar: {
        width: "20%",
        minWidth: 350,
        padding: 32,
        paddingTop: 50,
    },
       sectionTitle: {
        marginVertical: 10
    },
})