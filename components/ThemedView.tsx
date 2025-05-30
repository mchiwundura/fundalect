import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { FC } from 'react'


const ThemedView = ({children, style}) => {
    const colorScheme = useColorScheme()
  return (
    <View style={[{backgroundColor: colorScheme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.05)",
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 0 0 rgba(0, 0, 0, 0.1)"}, style]}>
        {children}
    </View>
  )
}

export default ThemedView

const styles = StyleSheet.create({})