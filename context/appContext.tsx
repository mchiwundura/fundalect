// context/LessonContentContext.tsx
import React, { createContext, useContext, useState } from "react";
import { ColorValue } from "react-native";

export type Flashcard = {
  id: string;
  front: {
    title: string;
    question: string;
  };
  back: string;
};

export type FlashcardDeckProps = {
  deckId: string;
  courseId: number;
  lessonId: number;
  color: ColorValue;
  title: string;
  flashcards: Flashcard[];
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

type appContextType = {
  flashcards: Flashcard[];
  quizzes: QuizQuestion[];
  lessonColor: string;
  currentDeck: FlashcardDeck | null;
  flashcardNavigation: boolean;
  currentCourse: number;
  setLessonColor: (color: string) => void;
  setFlashcards: (cards: Flashcard[]) => void;
  setQuizzes: (quizzes: QuizQuestion[]) => void;
  setFlashcardNavigation: (flashCardNavigation: boolean) => void;
  setCurrentCourse: (courseId: number) => void;
  setCurrentDeck: (deck: FlashcardDeck | null) => void;
};

const appContext = createContext<appContextType | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentDeck, setCurrentDeck] = useState<FlashcardDeck | null>(null);
  const [quizzes, setQuizzes] = useState<QuizQuestion[]>([]);
  const [lessonColor, setLessonColor] = useState<string>("");
  const [flashcardNavigation, setFlashcardNavigation] = useState<boolean>(true);
  const [currentCourse, setCurrentCourse] = useState<number>(0);

  return (
    <appContext.Provider
      value={{
        flashcards,
        quizzes,
        lessonColor,
        flashcardNavigation,
        currentCourse,
        currentDeck,
        setFlashcards,
        setQuizzes,
        setLessonColor,
        setFlashcardNavigation,
        setCurrentCourse,
        setCurrentDeck,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (!context)
    throw new Error(
      "useLessonContent must be used within a LessonContentProvider",
    );
  return context;
};
