import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ImageSourcePropType } from 'react-native';
import { ThemedText } from '../ThemedText';

interface OnboardingSectionProps {
    title: string;
    description: string;
    image: ImageSourcePropType;
    callToAction?: () => void;
    callToActionText?: string;
}

export default function OnboardingSection(props: OnboardingSectionProps){
const {width} = useWindowDimensions();
const [large, setLarge] = useState(false)
useEffect(() => {
    if (width > 600) {
        setLarge(true)
    } else {
        setLarge(false)
    }
}, [width])

    return(
    <View style={[styles.page, { width, flexDirection: large ? 'row-reverse' : 'column', justifyContent: large? "space-around" : "center" }]}>
        <View style={{marginBottom: large? 20: 0, position: "relative"}}>
        <View style={{
           position: "absolute",
    width: 300,
    height: 500,
    borderRadius: 30,
    backgroundColor: "rgba(149, 132, 255, 0.6)", // Light transparent background
            }}></View>
        <Image source={props.image} style={styles.image} />
        </View>
        <View style={{maxWidth: large? 600 : "100%"}}>
        <ThemedText type='title'  style={[styles.title, {
            fontSize: large? 44 : 32,
            textAlign: large? 'left' : 'center',
        }]}>{props.title}</ThemedText>
        <ThemedText type='defaultSemiBold' style={[styles.description,{
            textAlign: large? 'left' : 'center',
        }]}>{props.description}</ThemedText>
        {props.callToAction &&
        <Pressable style={[styles.cta, {marginHorizontal: large? 0 : "auto"}]} onPress={() => props.callToAction?.()} >
          <Text style={{color: "#FFF", fontSize: 22}} >{props.callToActionText}</Text>
        </Pressable>}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  page: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 500,
  },
  title: {
    color: '#9584FF',
    fontWeight: 'bold',
    marginTop: 30,
  },
  description: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 24,
  },
  cta: {
    backgroundColor: "#9584FF",
    minWidth: "90%",
    maxWidth: 300,
    display: "flex",
    alignItems: 'center',
    padding: 10,

    borderRadius: 25
  }
});
