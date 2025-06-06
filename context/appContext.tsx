// context/LessonContentContext.tsx
import React, { createContext, useContext, useState } from "react";

export type Flashcard = {
  question: string;
  answer: string;
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
  setLessonColor: (color: string) => void;
  setFlashcards: (cards: Flashcard[]) => void;
  setQuizzes: (quizzes: QuizQuestion[]) => void;
  flashcardNavigation: boolean;
  setFlashcardNavigation: (flashCardNavigation: boolean) => void;
  currentCourse: number;
  setCurrentCourse: (courseId: number) => void;
};

const appContext = createContext<appContextType | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
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
        setFlashcards,
        setQuizzes,
        setLessonColor,
        setFlashcardNavigation,
        setCurrentCourse,
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
