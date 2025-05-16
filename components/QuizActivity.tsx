import { StyleSheet, View } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemedText } from './ThemedText';

interface QuizActivityProps {
  title: string;
  color: string;
  link: string;
  completion: number;
  courseTitle?: string;
}

const QuizActivity = ({ title, color, link, completion, courseTitle }: QuizActivityProps) => {
  return (
    <TouchableOpacity style={[styles.container, { borderLeftColor: color }]}>
      <View style={styles.content}>
        <ThemedText type="subtitle" style={styles.title}>
          {title}
        </ThemedText>
        {courseTitle && (
          <ThemedText type="default" style={styles.courseTitle}>
            {courseTitle}
          </ThemedText>
        )}
        <ThemedText type="subtle" style={styles.completion}>
          {`Completion: ${Math.round(completion * 100)}%`}
        </ThemedText>
      </View>
    </TouchableOpacity>
  )
}

export default QuizActivity

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    borderLeftWidth: 5,
    backgroundColor: '#fff', // Can be themed dynamically if needed
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseTitle: {
    color: '#666',
    marginBottom: 4,
  },
  completion: {
    color: '#444',
  },
})
