import {StyleSheet,ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import SettingSwitchInput from '@/components/settingSwitchInput';
import { useEffect, useState } from 'react';
import { syncOnline } from '@/db/syncOnline';
import { resetAllCache } from '@/hooks/useDatabase.native';
import ProfileIcon from '@/components/ui/ProfileIcon';
import Background from '@/components/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings () {

const [notifications, setNotifications] = useState(false)
const [sync, setSync] = useState(false)
const [ nightMode, setNightMode] = useState(true)

useEffect(() => {
  fetch("https://dzoro--h9jzp3tibi.expo.app/api/courses")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log("Fetch error:", err.message); // better context
  });

})

async function usersRecentActivity() {
const activities = [
  {
        "id": 1,
        "title": "Central Nervous System",
        "icon": "😰",
        "completion": 55,
        "type": "Quiz"
    },
    {
        "id": 2,
        "title": "Colloidal Systems",
        "icon": "🧴",
        "completion": 35,
        "type": "Quiz"
    },
  ]

  try {
    const jsonValue = JSON.stringify(activities);
    await AsyncStorage.setItem('@recentActivities', jsonValue);
    console.log("Activities saved successfully");
  } catch (e) {
    console.error("Error saving activities:", e);
  }
}

function syncDatabase() {
  syncOnline()
  setSync(!sync)
}
function deleteDatabase() {
  console.log("Deleting database...")
}

function runDatabase() {
  console.log("Running database...")
}



    return (
      <Background>

      <View style={{display: "flex", width: "100%", alignItems: "center"}}>

<ScrollView style={{padding: 32, width: "90%",maxWidth: 500}}>

<ProfileIcon/>
<SettingSwitchInput onPress={() => usersRecentActivity()} icon={"rectangle.portrait.and.arrow.right"} title='Sign Out'/>
<ThemedText style={styles.sectionTitle}   type='subtitle'>Settings</ThemedText>

<SettingSwitchInput onPress={() => setNotifications(!notifications)} icon={"bell"} radio state={notifications} title='Notifications'/>
<SettingSwitchInput onPress={() => syncDatabase()} icon={"arrow.triangle.2.circlepath"} state={sync} radio title='Sync'/>
<SettingSwitchInput onPress={() => setNightMode(!nightMode)} icon="moon.circle.fill" radio state={nightMode} title='Night mode'/>

<ThemedText style={styles.sectionTitle} type='subtitle'>Help</ThemedText>

<SettingSwitchInput onPress={() => resetAllCache()} icon={"questionmark.circle"} title='Help'/>
      </ScrollView>
      </View>
      </Background>
    )

}

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    sectionTitle: {
    marginVertical: 20
    }
  });