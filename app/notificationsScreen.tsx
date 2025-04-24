// app/(tabs)/notifications.tsx
import React from 'react';
import { FlatList, Pressable, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

type Notification = {
  id: string;
  title: string;
  message: string;
  link: string;
  type: 'general' | 'ad';
};

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Daily Reminder',
    message: 'Don’t forget to review your flashcards today!',
    link: '/flashcards',
    type: 'general',
  },
  {
    id: '2',
    title: 'New Lesson Available',
    message: 'Check out the new lesson on Electrostatics.',
    link: '/lessons/electrostatics',
    type: 'general',
  },
  {
    id: '3',
    title: 'Sponsored: Learn Faster!',
    message: 'Try SpeedyTutor – the AI tutor that boosts your marks.',
    link: 'https://speedytutor.co.za',
    type: 'ad',
  },
  {
    id: '4',
    title: 'Quiz Time!',
    message: 'A new quiz is ready for your Natural Science course.',
    link: '/quizzes/natural-science',
    type: 'general',
  },
];

export default function notificationsScreen() {
  const router = useRouter();

  const handlePress = (link: string) => {
    if (link.startsWith('http')) {
      // Optional: handle external links with WebBrowser
    } else {
      router.push(link);
    }
  };

  const renderItem = ({ item }: { item: Notification }) => (
    <Pressable
      onPress={() => handlePress(item.link)}
      style={({ pressed }) => [
        styles.notification,
        pressed && { opacity: 0.6 },
        item.type === 'ad' && styles.adNotification,
      ]}
    >
      <ThemedText type="title">{item.title}</ThemedText>
      <ThemedText>{item.message}</ThemedText>
    </Pressable>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    paddingBottom: 20,
  },
  notification: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    backgroundColor: 'rgba(100, 100, 255, 0.1)', // subtle primary tint
  },
  adNotification: {
    backgroundColor: 'rgba(255, 215, 0, 0.15)', // highlight ads differently
  },
});

