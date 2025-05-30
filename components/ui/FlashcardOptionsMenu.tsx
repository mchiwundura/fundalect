import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from '../ThemedText'
import Background from '../Background'
import { useAppContext } from '@/context/appContext'

const FlashcardOptionsMenu = () => {
    const [open, setOpen] = useState<boolean>(false)
    const colorScheme = useColorScheme()
    const {flashcardNavigation, setFlashcardNavigation} = useAppContext()

  return (
    <View style={[styles.container]}>
      
      {/* The Button to toggle the menu*/}
      <TouchableOpacity onPress={()=> setOpen(!open)} style={[styles.button, {backgroundColor: colorScheme === "light"? "rgba(255, 255, 255, 0.2)" : "rgba(0 , 0 , 0 , 0.2)"}]}>
       {/* use the text as placeholder we shall get a hamburger menu later */}
       <Text style={{color: "white"}}>0</Text>
      </TouchableOpacity>
      
      {/* The dropdown Menu */}
      {open && <View style={[styles.dropdown, {backgroundColor: colorScheme === "light"? "rgba(255, 255, 255, 0.6)" : "rgba(0 , 0 , 0 , 0.6)"}]}>
                    {/* <TouchableOpacity style={styles.dropdownOption}><ThemedText>Reset Deck</ThemedText></TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setFlashcardNavigation(!flashcardNavigation)} style={styles.dropdownOption}><ThemedText>{flashcardNavigation? "Hide" : "Show"} Buttons</ThemedText></TouchableOpacity>
              </View>}
    </View>
  )
}

export default FlashcardOptionsMenu

const styles = StyleSheet.create({
    container : {
        position: "relative"
    },
    button : {
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        borderRadius: 25
    },
    dropdown: {
        position: "absolute",
        top: 55,
        width: 130,
        right: 0,
        padding: 15,
        borderRadius: 5
    },
    dropdownOption: {
        height: 20,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10
    }
})