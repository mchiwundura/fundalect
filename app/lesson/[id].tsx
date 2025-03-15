import React, { useEffect, useState } from 'react';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import * as FileSystem from "expo-file-system";
import Markdown, {getUniqueID} from 'react-native-markdown-display';
import IconTextButton from "@/components/ui/IconTextButton";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StyleSheet, Text, Image } from 'react-native';
import ContinueButton from '@/components/ui/ContunueButton';

interface CourseMeta {
title: string;
color: string;
id: number;
icon: string;

}

export default function Lesson() {


    const [fileContent, setFileContent] = useState<string>('');
    const [lessonMeta, setLessonMeta] = useState<CourseMeta>()

    const getLessonMetaData = async () => {
        setLessonMeta({
            title : "Colloids",
            color : "#FFB785",
            id: 1,
            icon: "🧪"
        })
    }

    const createAndReadFile = async () => {
       try {
           const fileUri = FileSystem.documentDirectory + 'example.md';
           await FileSystem.writeAsStringAsync(fileUri, `
Welcome to our first lessons on colloids and their properties.

## What are colloids?
> Colloids are mixtures in which one substance is divided into minute particles (called colloidal particles) and dispersed in another substance. The colloidal particles are larger than molecules but smaller than the particles of the suspension.
 
![image](https://picsum.photos/200/300)

hello
           `);
           const fileInfo = await FileSystem.getInfoAsync(fileUri);
           console.log(fileInfo);

           const content = await FileSystem.readAsStringAsync(fileUri);
           setFileContent(content);
           console.log(content);

       } catch (error) {
           console.error('File system error:', error);
       }
    };

    useEffect(() => {
        createAndReadFile();
        getLessonMetaData();
    }, []);

    const rules = {
    heading1: (node, children, parent, styles) =>
      <Text key={getUniqueID()} style={[styles.heading, styles.heading1]}>
        {children}
      </Text>,
    heading2: (node, children, parent, styles) =>
      <ThemedText key={getUniqueID()} style={[styles.heading, styles.heading2, {marginVertical: 10}]}>
        {children}
      </ThemedText>,
    heading3: (node, children, parent, styles) =>
      <Text key={getUniqueID()} style={[styles.heading, styles.heading3]}>
        {children}
      </Text>,
    blockquote: (node, children, parent, styles) => 
      <ThemedText key={getUniqueID()} style={[styles.blockquote, {backgroundColor: "black", marginVertical: 10}]}>
        {children}
      </ThemedText>,
    paragraph: (node, children, parent, styles) => 
        <ThemedText key={getUniqueID()} style={[styles]}>
            {children}
            </ThemedText>,
    image: (node, children, parent, styles) => {
        const { src, alt } = node.attributes;
        return (
            <Image
                key={getUniqueID()}
                style={[styles.image, {width: "100%", height: 200, margin: 10}]}
                source={{ uri: src }}
                accessible={true}
                accessibilityLabel={alt}
            />
        );
    }
};

    return (
        <ParallaxScrollView headerBackgroundColor={{ light: '#FFFFFF', dark: '#000000' }} headerImage={
            <ThemedView style={[styles.header, {backgroundColor: lessonMeta? lessonMeta.color : "#fff"}]}>
  <ThemedText type="title">
    {lessonMeta && lessonMeta.title}

  </ThemedText>
  <Text style={styles.icon}>{lessonMeta && lessonMeta.icon}</Text>
</ThemedView>
        }>
            
        <ThemedView>
                  <ThemedView style={styles.activityTypeContainer}>
         <IconTextButton onPress={() => filterActivities("Flashcards")} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton onPress={() => filterActivities("Quiz")} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     

     </ThemedView>
            <Markdown rules={rules} style={{backgroundColor: "green"}}>{fileContent}</Markdown>
        </ThemedView>
          <IconTextButton large onPress={() => filterActivities("Flashcards")} textColor="rgba(128, 184, 147, 1)" color="rgba(128, 184, 147, 0.2)"  title="Flashcards" icon="bolt" />
        <IconTextButton large onPress={() => filterActivities("Quiz")} textColor="rgba(149, 132, 255, 1 )" color="rgba(149, 132, 255, 0.2 )" title="Quizes" icon="doc.plaintext"  />     
<ThemedText style={styles.homeLink}>Back to home</ThemedText>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
  header: {
  height: "100%",
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 20
  },
  heading: {
    backgroundColor: "green"
  },
  activityTypeContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20
  },
  icon: {
    fontSize: 80,
    height: 120
  },
  image: {
    width: '100%',
    height: 200,
  },
  blockquote: {
    fontStyle: 'italic',
    color: 'gray'
  },
  homeLink: {
    color: "#9584FF",
    width: "100%",
    textAlign:"center",
    
  }
})