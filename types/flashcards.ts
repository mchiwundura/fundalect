export interface FlashcardPerformance {
  cardId: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  dueDate: string;
}

export interface FullFlashCardDeckPerformance {
  deckId: string;
  performance: number;
  length: number;
  date: string;
}

export type Activity = {
  id: string; // Changed to string for UUID compatibility
  title: string;
  icon: string;
  completion: number;
  type: string;
  dateCompleted: string;
};
