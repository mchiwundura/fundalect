import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { ThemedText } from './ThemedText';
import Background from './Background';

interface NewCourseCardProps {
title: string;
color: string;
icon: string;
}

const NewCourseCard : FC<NewCourseCardProps> = ({title, color, icon}) => {
  return (
    <TouchableOpacity style={[styles.container, {borderColor: color}]}>
        <View style={[styles.background, {backgroundColor: color}]}>
        </View>
            <ThemedText style={{}}>
                {title}
            </ThemedText>  
            <ThemedText style={{fontSize: 20}}>{icon}</ThemedText>  
    </TouchableOpacity>
  )
}

export default NewCourseCard

const styles = StyleSheet.create({
    container : {
        borderWidth: 2,
        position: 'relative',
        width: "100%",
        height: 80,
        borderRadius: 5,
        marginVertical: 10,
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between",
        padding: 10,
        alignItems: 'center'
    },
    background: {
        opacity: 0.3,
        position: 'absolute',
        borderRadius: 2,
        top: 2,
        bottom: 2,
        left: 2,
        right: 2
    } 
})