
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://urkxjkoluoqekmnhgxnw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVya3hqa29sdW9xZWttbmhneG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MjI5MzAsImV4cCI6MjA1ODI5ODkzMH0.GtqtWKhxY6yUy02eHzlTZQcXtxZIweLEeLLSzVpApBQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export function useDatabase() {

    return {
      getCourses: async () => {
        // const { data, error } = await supabase.from('courses').select('*');
        // if (error) throw new Error(`Courses fetch failed: ${error.message}`);
        const data = [
  {
    id: 1,
    title: "Physical Science Grade 11",
    description: "Dive into the fascinating world of physics and chemistry. This course covers mechanics, waves, chemical reactions, and more to prepare you for Grade 12 and beyond.",
    color: "#FFB785",
    completion: 30,
    icon: "🧪"
  },
  {
    id: 2,
    title: "Natural Science Grade 12",
    description: "Explore key concepts in life and physical sciences, from ecosystems and genetics to chemical changes and energy principles.",
    color: "#9584FF",
    completion: 20,
    icon: "🌿"
  },
  {
    id: 3,
    title: "Pharmacology 3",
    description: "Advance your understanding of drug interactions, therapeutic applications, and the principles of pharmacokinetics and pharmacodynamics.",
    color: "#4CAF50",
    completion: 50,
    icon: "💊"
  },
  {
    id: 4,
    title: "Grade 10 Mathematics",
    description: "Build a strong foundation in algebra, geometry, and trigonometry to excel in high school mathematics.",
    color: "#3498DB",
    completion: 25,
    icon: "➗"
  },
  {
    id: 5,
    title: "Grade 10 Science",
    description: "Discover the fundamental principles of physics, chemistry, and biology to develop critical thinking and problem-solving skills.",
    color: "#E67E22",
    completion: 30,
    icon: "🔬"
  },
  {
    id: 6,
    title: "Grade 12 Physical Science",
    description: "Master the principles of physics and chemistry with in-depth lessons on electromagnetism, organic chemistry, and more.",
    color: "#D35400",
    completion: 40,
    icon: "⚛️"
  },
  {
    id: 7,
    title: "Grade 12 Mathematics",
    description: "Tackle advanced calculus, statistics, and algebraic functions to prepare for university-level math.",
    color: "#9B59B6",
    completion: 35,
    icon: "📐"
  }
];
        return data;
      },
      getLessons: async () => {
        const { data, error } = await supabase.from('lessons').select('*');
        if (error) throw new Error(`Lessons fetch failed: ${error.message}`);
        return data;
      }
    };
}