// src/utils/flashcardUtils.ts
import { Flashcard } from "@/context/appContext";
import { FlashcardPerformance } from "@/types/flashcards";
import AsyncStorage from "@react-native-async-storage/async-storage";

// SM-2 Algorithm implementation
export const updateCardPerformance = (
  performance: FlashcardPerformance,
  quality: number, // 0-5 scale (0=worst, 5=best)
): FlashcardPerformance => {
  let { easeFactor, interval, repetitions } = performance;

  if (quality >= 3) {
    // Correct response
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }

    repetitions += 1;
  } else {
    // Incorrect response - reset repetitions but keep ease factor
    repetitions = 0;
    interval = 1;
  }

  // Update ease factor (minimum 1.3)
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  );

  // Calculate next review date (add interval days)
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);

  return {
    ...performance,
    easeFactor: parseFloat(easeFactor.toFixed(2)),
    interval,
    repetitions,
    dueDate: nextDate.toISOString(),
    lastReviewed: new Date().toISOString(),
  };
};

// Calculate deck performance metrics
export const calculateDeckMetrics = (
  performance: FlashcardPerformance[],
): { mastered: number; struggling: number } => {
  const now = new Date();
  let mastered = 0;
  let struggling = 0;

  performance.forEach((card) => {
    const dueDate = new Date(card.dueDate);

    if (card.repetitions >= 3 && dueDate > now) {
      mastered++;
    } else if (card.repetitions === 0 || dueDate < now) {
      struggling++;
    }
  });

  return { mastered, struggling };
};

// Helper to initialize performance data
export const initializePerformance = (
  flashcards: Flashcard[],
): FlashcardPerformance[] => {
  return flashcards.map((card) => ({
    cardId: card.id,
    easeFactor: 2.5,
    interval: 1,
    repetitions: 0,
    dueDate: new Date().toISOString(),
    lastReviewed: new Date().toISOString(),
  }));
};

// Get performance data from storage
export const getDeckPerformance = async (
  deckId: string,
): Promise<Record<string, FlashcardPerformance>> => {
  try {
    const key = `deckPerformance:${deckId}`;
    const json = await AsyncStorage.getItem(key);
    const performanceData: FlashcardPerformance[] = json
      ? JSON.parse(json)
      : [];

    // Convert to map for easier access
    const performanceMap: Record<string, FlashcardPerformance> = {};
    performanceData.forEach((perf) => {
      performanceMap[perf.cardId] = perf;
    });

    return performanceMap;
  } catch (error) {
    console.error("Failed to load performance data", error);
    return {};
  }
};

// Save performance data to storage
export const saveDeckPerformance = async (
  deckId: string,
  performance: Record<string, FlashcardPerformance>,
): Promise<void> => {
  try {
    const key = `deckPerformance:${deckId}`;
    const performanceArray = Object.values(performance);
    await AsyncStorage.setItem(key, JSON.stringify(performanceArray));
  } catch (error) {
    console.error("Failed to save performance data", error);
  }
};
