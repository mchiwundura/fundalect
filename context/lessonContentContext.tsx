// context/LessonContentContext.tsx
import React, { createContext, useContext, useState } from 'react';

export type Flashcard = {
  question: string;
  answer: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

type LessonContentContextType = {
  flashcards: Flashcard[];
  quizzes: QuizQuestion[];
  setFlashcards: (cards: Flashcard[]) => void;
  setQuizzes: (quizzes: QuizQuestion[]) => void;
};

const LessonContentContext = createContext<LessonContentContextType | undefined>(undefined);

export const LessonContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [quizzes, setQuizzes] = useState<QuizQuestion[]>([]);

  return (
    <LessonContentContext.Provider value={{ flashcards, quizzes, setFlashcards, setQuizzes }}>
      {children}
    </LessonContentContext.Provider>
  );
};

export const useLessonContent = () => {
  const context = useContext(LessonContentContext);
  if (!context) throw new Error("useLessonContent must be used within a LessonContentProvider");
  return context;
};
