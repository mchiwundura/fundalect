import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { useAppContext } from '@/context/appContext'
import { IconSymbol } from './IconSymbol'

const FlashcardOptionsMenu = () => {
    const [open, setOpen] = useState<boolean>(false)
    const colorScheme = useColorScheme()
    const {flashcardNavigation, setFlashcardNavigation} = useAppContext()

  return (
    <View style={[styles.container]}>

      <TouchableOpacity onPress={()=> setFlashcardNavigation(!flashcardNavigation)} style={[styles.button, {backgroundColor: colorScheme !== "light"? "rgba(255, 255, 255, 0.1)" : "rgba(0 , 0 , 0 , 0.1)"}]}>
  
       <IconSymbol name={flashcardNavigation? 'hand.draw' : 'hand.thumbsup.fill'} color={colorScheme === "light"? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'}/>
      </TouchableOpacity>
    </View>
  )
}

export default FlashcardOptionsMenu

const styles = StyleSheet.create({
    container : {
        position: "relative"
    },
    button : {
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        borderRadius: 25
    }

})