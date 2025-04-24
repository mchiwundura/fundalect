import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from './ThemedText';

interface OnboardingSectionProps {
  title: string;
  description: string;
  image: any;
  callToAction?: () => void;
  callToActionText?: string;
}

const learningStyles = ['Flalshcards', 'Audio', 'Quizes', 'AI Assitant'];

export default function LearningStyleSelector(props: OnboardingSectionProps) {
  const { width } = useWindowDimensions();
  const [large, setLarge] = useState(false);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  useEffect(() => {
    setLarge(width > 600);
  }, [width]);

  useEffect(() => {
    const loadSelectedStyles = async () => {
      try {
        const stored = await AsyncStorage.getItem('selectedLearningStyles');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setSelectedStyles(parsed);
          }
        }
      } catch (e) {
        console.error('Error loading styles', e);
      }
    };
    loadSelectedStyles();
  }, []);

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const saveStyles = useCallback(async () => {
    try {
      await AsyncStorage.setItem('selectedLearningStyles', JSON.stringify(selectedStyles));
      props.callToAction?.();
    } catch (e) {
      console.error('Error saving styles', e);
    }
  }, [selectedStyles]);

  return (
    <View
      style={[
        styles.page,
        {
          width,
          flexDirection: large ? 'row-reverse' : 'column',
          justifyContent: large ? 'space-around' : 'flex-start',
        },
      ]}
    >
      <View style={styles.container}>
        <ThemedText type="title">Select Your Learning Style</ThemedText>
        <ThemedText type="subtitle">How do you like to learn</ThemedText>
        {learningStyles.map((style) => {
          const isSelected = selectedStyles.includes(style);
          return (
            <Pressable
              key={style}
              onPress={() => toggleStyle(style)}
              style={[
                styles.courseItem,
                isSelected && { borderColor: '#9584FF', borderWidth: 2 },
              ]}
            >
              <ThemedText type="title">{style}</ThemedText>
            </Pressable>
          );
        })}
        <Pressable
          style={[styles.cta, { marginHorizontal: large ? 0 : 'auto' }]}
          onPress={saveStyles}
        >
          <Text style={{ color: '#FFF', fontSize: 22 }}>Save Selection</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
  },
  container: {
    position: 'relative',
    height: '100%',
  },
  courseItem: {
    marginTop: 20,
    backgroundColor: '#121212',
    padding: 20,
    borderRadius: 10,
  },
  cta: {
    backgroundColor: '#9584FF',
    minWidth: '90%',
    maxWidth: 300,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    borderRadius: 25,
    bottom: 0,
    left: 20,
  },
});
