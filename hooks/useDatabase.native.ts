import { Platform } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://urkxjkoluoqekmnhgxnw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVya3hqa29sdW9xZWttbmhneG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MjI5MzAsImV4cCI6MjA1ODI5ODkzMH0.GtqtWKhxY6yUy02eHzlTZQcXtxZIweLEeLLSzVpApBQ';

export async function useDatabase() {
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  if (Platform.OS === 'web') {
    // Fallback for web: Use Supabase or API calls
    return {
      getCourses: async () => {
        const { data, error } = await supabase.from('courses').select('*');
        if (error) throw new Error(`Courses fetch failed: ${error.message}`);
        return data;
      },
      getLessons: async () => {
        const { data, error } = await supabase.from('lessons').select('*');
        if (error) throw new Error(`Lessons fetch failed: ${error.message}`);
        return data;
      },
      // Add more API-based methods as needed
    };
  } else {
    // Use expo-sqlite for supported platforms

    const SQLite = require('expo-sqlite')
    const db = SQLite.openDatabaseAsync('local.db');

    return {
getCourses: async () => {
  const courses = (await db).getAllAsync('SELECT * FROM courses');
  return courses
},
getLessons: async () => {
  const lessons = (await db).getAllAsync('SELECT * FROM lessons');
return lessons
},
getLesson: async (lessonId: number) => {
const lesson = (await db).getFirstAsync(`SELECT * FROM lessons WHERE id = ${lessonId}`)
return lesson
},
getFlashcards: async (lessonId: number) => {
  const flashcards = (await db).getAllAsync(`SELECT * FROM flashcards WHERE lesson_id = ${lessonId}`)
return flashcards
},

    };
  }
}