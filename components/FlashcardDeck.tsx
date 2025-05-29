import { StyleSheet, Text, Touchable, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { ThemedText } from './ThemedText';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import  Animated  from 'react-native-reanimated';

type FlashcardDeckProps = {
  title: string;
  color: string;
  link: string;
  setDeck: any;
  completion: number;
  courseTitle?: string;
  courseId?: number;
};

const FlashcardDeck = ({
  title,
  color,
  link,
  completion,
  courseTitle,
  setDeck
}: FlashcardDeckProps) => {
  const router = useRouter();
  const {width} = useWindowDimensions();
  return (
    <TouchableOpacity 
      style={[styles.wrapper, { width: width > 600 ? 300 : "100%", marginHorizontal: width > 600 ? 10 : 0, }]}
      activeOpacity={0.85}
      onPress={() => {
        router.push(link)
        setDeck()
      }}
    >
      {/* Peeking background card */}
      <View style={[styles.cardPeek, { backgroundColor: color }]} />

      {/* Main card */}
      <Animated.View sharedTransitionTag="flashcard" style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.topRow}>
          <Text style={styles.courseTitle}>{courseTitle}</Text>
          <FontAwesome name="bookmark" size={20} color="white" />
        </View>

        <ThemedText type="title" style={styles.title}>
          {title}
        </ThemedText>

        <View>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Completion: {completion}%
        </ThemedText>

        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${completion}%` },
            ]}
            />
        </View>
            </View>
            </Animated.View>
    </TouchableOpacity>
  );
};

export default FlashcardDeck;

const styles = StyleSheet.create({
  wrapper: {
    height: 210,
    position: 'relative',
    marginVertical: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPeek: {
    position: 'absolute',
    top: -8,
    left: 8,
    right: 8,
    height: 200,
    borderRadius: 20,
    opacity: 0.3,
    zIndex: 0,
  },
  container: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    zIndex: 1,
    shadowColor: '#000',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    marginTop: 15,
    fontSize: 32,
    color: 'white',
  },
  subtitle: {
    marginVertical: 10,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00ff9d',
    borderRadius: 5,
  },
});
