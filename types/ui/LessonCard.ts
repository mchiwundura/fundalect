import { RelativePathString } from "expo-router";

export interface LessonCardProps {
    title: string;
    onPress: any;
    color: string;
    link: RelativePathString;
    completion: number;
}