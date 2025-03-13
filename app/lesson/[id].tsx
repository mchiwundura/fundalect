import React, { useEffect, useState } from 'react';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import * as FileSystem from "expo-file-system";
import Markdown from 'react-native-markdown-display';
import IconTextButton from "@/components/ui/IconTextButton";


export default function Lesson() {


    const [fileContent, setFileContent] = useState<string>('');

    useEffect(() => {
        const createAndReadFile = async () => {
           try {
               const fileUri = FileSystem.documentDirectory + 'example.md';
               await FileSystem.writeAsStringAsync(fileUri, `
# Colloids
Welcome to our first lessons on colloids and their properties.

## What are colloids?
> Colloids are mixtures in which one substance is divided into minute particles (called colloidal particles) and dispersed in another substance. The colloidal particles are larger than molecules but smaller than the particles of the suspension.
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
        createAndReadFile();
    }, []);

    return (
        <ThemedView>
            <IconTextButton color="#FF0000" title="flashcards" />
            <Markdown>{fileContent}</Markdown>
        </ThemedView>
    );
}