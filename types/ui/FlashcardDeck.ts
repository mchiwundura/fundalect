import { RelativePathString } from "expo-router";
import { ColorValue } from "react-native";

export interface FlashcardDeckProps {
  title: string;
  color: ColorValue;
  link: RelativePathString;
  setDeck: any;
  completion: number;
  courseTitle?: string;
  courseId?: number;
}
