import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import HeaderNavigation from '@/components/HeaderNav';
import SettingSwitchInput from '@/components/settingSwitchInput';
import { useState } from 'react';
import { deleteDatabase, runDatabase, syncOnline } from '@/db/database';

export default function Settings () {

const [notifications, setNotifications] = useState(false)
const [sync, setSync] = useState(false)
const [ nightMode, setNightMode] = useState(true)

function syncDatabase() {
  syncOnline()
  setSync(!sync)
}




    return (
<ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
<HeaderNavigation/>
      }>

<SettingSwitchInput onPress={() => deleteDatabase()} icon={"rectangle.portrait.and.arrow.right"} title='Sign Out'/>
<ThemedText   type='subtitle'>Settings</ThemedText>

<SettingSwitchInput onPress={() => setNotifications(!notifications)} icon={"bell"} radio state={notifications} title='Notifications'/>
<SettingSwitchInput onPress={() => syncDatabase()} icon={"arrow.triangle.2.circlepath"} state={sync} radio title='Sync'/>
<SettingSwitchInput onPress={() => setNightMode(!nightMode)} icon="moon.circle.fill" radio state={nightMode} title='Night mode'/>

<ThemedText type='subtitle'>Help</ThemedText>

<SettingSwitchInput onPress={() => runDatabase()} icon={"questionmark.circle"} title='Help'/>
      </ParallaxScrollView>
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
  });