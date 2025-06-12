import { Flashcard } from "@/context/appContext"; // Assuming this path is correct
import { FlashcardPerformance as SingleFlashcardPerformance } from "@/types/flashcards"; // Renamed to avoid conflict
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid"; // For generating unique activity IDs

// --- TYPE DEFINITIONS (Adjust these based on your exact needs) ---

// Represents the performance data for a single flashcard
export type FlashcardPerformance = {
  cardId: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  dueDate: string; // ISO string
};

// Represents the full performance data for a deck, including new fields
export type FullFlashCardDeckPerformance = {
  deckId: string;
  performance: SingleFlashcardPerformance[]; // Array of individual card performances
  length: number; // Number of cards in the deck at the time of calculation
  date: string; // ISO string of when the performance was last updated/calculated
};

// Represents an individual activity item
export type Activity = {
  id: string; // Changed to string for UUID compatibility
  title: string;
  icon: string;
  completion: number;
  type: string;
};

// --- UTILITY FUNCTION: getOrCreateDeckPerformance (improved) ---

const getOrCreateDeckPerformance = async (
  deckId: string,
  flashcards: Flashcard[],
): Promise<FullFlashCardDeckPerformance> => {
  const key = `deckPerformance:${deckId}`;
  let storedDeckPerformance: FullFlashCardDeckPerformance | null = null;

  try {
    const json = await AsyncStorage.getItem(key);
    if (json) {
      try {
        // Parse the stored JSON
        const parsedData: FullFlashCardDeckPerformance = JSON.parse(json);

        // Basic validation: ensure it has the expected structure and performance array
        if (parsedData && Array.isArray(parsedData.performance)) {
          storedDeckPerformance = parsedData;
        } else {
          console.warn(
            `Corrupted or malformed data for deck ${deckId}, re-initializing.`,
          );
          await AsyncStorage.removeItem(key); // Clear corrupted data
        }
      } catch (parseError) {
        console.warn(
          `Error parsing stored deck performance JSON for ${deckId}:`,
          parseError,
        );
        await AsyncStorage.removeItem(key); // Clear corrupted data
      }
    }
  } catch (error) {
    console.error(`Error retrieving deck performance for ${deckId}:`, error);
    // Continue to initialize if retrieval fails
  }

  if (storedDeckPerformance) {
    return storedDeckPerformance;
  }

  // If no existing performance or corrupted, create new
  const initialCardPerformances: SingleFlashcardPerformance[] = flashcards.map(
    (card) => ({
      cardId: card.id,
      easeFactor: 2.5,
      interval: 1,
      repetitions: 0,
      dueDate: new Date().toISOString(),
    }),
  );

  const initialFullDeckPerformance: FullFlashCardDeckPerformance = {
    deckId,
    performance: initialCardPerformances,
    length: flashcards.length, // Set length based on initial flashcards
    date: new Date().toISOString(), // Set current date
  };

  try {
    await AsyncStorage.setItem(key, JSON.stringify(initialFullDeckPerformance));
  } catch (error) {
    console.error(
      `Error saving initial deck performance for ${deckId}:`,
      error,
    );
    // Important: Even if saving fails, return the data so the app can proceed
  }

  return initialFullDeckPerformance;
};

// --- HOOK: useDeckPerformance (with activity tracking) ---

export function useDeckPerformance() {
  const ACTIVITIES_KEY = "activities";

  const updateActivities = async (newActivity: Activity) => {
    try {
      const json = await AsyncStorage.getItem(ACTIVITIES_KEY);
      let activities: Activity[] = [];

      if (json) {
        try {
          activities = JSON.parse(json);
          if (!Array.isArray(activities)) {
            console.warn("Activities data is not an array, re-initializing.");
            activities = []; // Reset if not an array
          }
        } catch (parseError) {
          console.warn(
            "Error parsing activities data, re-initializing.",
            parseError,
          );
          activities = []; // Reset on parse error
        }
      }

      // Append the new activity
      activities.push(newActivity);

      // Save the updated activities array
      await AsyncStorage.setItem(ACTIVITIES_KEY, JSON.stringify(activities));
    } catch (error) {
      console.error("Error updating activities:", error);
    }
  };

  return {
    setDeckPerformance: async ({
      deckId,
      performance,
      length, // This should now come from the caller, or calculated
      date, // This should now come from the caller, or calculated
    }: FullFlashCardDeckPerformance) => {
      const key = `deckPerformance:${deckId}`;
      const deckPerformanceToSave: FullFlashCardDeckPerformance = {
        deckId,
        performance,
        length,
        date,
      };
      try {
        await AsyncStorage.setItem(key, JSON.stringify(deckPerformanceToSave));

        // --- Update Activities Here ---
        // Assuming 'deckId' and 'length' are sufficient for the activity entry.
        // You'll need to decide on 'title', 'icon', 'completion', 'type' for the activity.
        // For simplicity, let's use the deckId as title and a default icon/type.
        // The completion might be something you calculate after a session.
        // For now, let's assume a placeholder completion if this is just a 'study session started' activity.
        const newActivity: Activity = {
          id: uuidv4(), // Generate a unique ID for the activity
          title: `Flashcards: ${deckId}`, // Use deckId or fetch deck title if available
          icon: "🧠", // Placeholder icon
          completion: 0, // Placeholder, you might update this after a session
          type: "Flashcards",
        };
        await updateActivities(newActivity);
      } catch (error) {
        console.error("Error setting deck performance", error);
      }
    },

    getDeckPerformance: async (
      deckId: string,
      flashcards: Flashcard[], // You need flashcards to initialize if no data exists
    ): Promise<FullFlashCardDeckPerformance> => {
      return getOrCreateDeckPerformance(deckId, flashcards);
    },

    // Optional: A helper to get all activities
    getActivities: async (): Promise<Activity[]> => {
      const json = await AsyncStorage.getItem(ACTIVITIES_KEY);
      if (json) {
        try {
          const activities = JSON.parse(json);
          if (Array.isArray(activities)) {
            return activities;
          }
        } catch (parseError) {
          console.warn(
            "Error parsing activities, returning empty array.",
            parseError,
          );
        }
      }
      return [];
    },
  };
}
