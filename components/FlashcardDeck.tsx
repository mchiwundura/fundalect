import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ThemedText } from './ThemedText';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

type FlashcardDeckProps = {
  title: string;
  color: string;
  link: string;
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
}: FlashcardDeckProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.85}
      onPress={() => router.push(link)}
    >
      {/* Peeking background card */}
      <View style={[styles.cardPeek, { backgroundColor: color }]} />

      {/* Main card */}
      <View style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.topRow}>
          <Text style={styles.courseTitle}>{courseTitle}</Text>
          <FontAwesome name="bookmark" size={20} color="white" />
        </View>

        <ThemedText type="title" style={styles.title}>
          {title}
        </ThemedText>

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
      <View style={{distplay: 'flex', width: '100%', alignItems: 'flex-end', marginTop: 10}}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.primary }]}
          onPress={() => router.push(link)}>
            <ThemedText type="subtitle" style={{ color: 'white' }}>
              Start Deck</ThemedText>
          </TouchableOpacity>
      </View>
            </View>
    </TouchableOpacity>
  );
};

export default FlashcardDeck;

const styles = StyleSheet.create({
  wrapper: {
    width: 350,
    height: 210,
    margin: 15,
    position: 'relative',
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
