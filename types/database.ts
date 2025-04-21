export interface CourseInterface {
  id: number;
  title: string;
  level: string;
  description: string;
  color: string;
  icon: string; 
}

export interface FlashcardInterface {
  front: {
    title: string;
    question: string;
  };
  back: string;
}

export interface LessonInterface {
  title: string;
  icon: string; // could be emoji or URL
  flashcards: FlashcardInterface[];
  contentMarkdownLink?: string; // optional: raw markdown content for rendering lesson body
}
