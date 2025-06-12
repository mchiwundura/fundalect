// Performance
// Get the flashcard deck performance array from local storage
// Get calculated value of flashcard performance at the end of the deck
// Set that as the latest peformance key for the flashcards in localstorage and append to the array

import { Activity } from "@/types/flashcards";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ACTIVITIES_KEY = "@recentActivities";
const FLASHCARD_DECK_PERFORMANCE_KEY = "@flashcardDeckPerformance";
// Activity
// Get the activities from local storage
// Append the latest activity to the array of activities

// Streak
// Check if the streak for the day has already been set
// if not append the active days and do the necessary calculations
// set local storage

export function useDeckPerformance() {
  // Keys
}

export function useActivities() {
  return {
    addActivity: async (activity: Activity) => {
      try {
        const userActivities = await AsyncStorage.getItem(ACTIVITIES_KEY);
        if (userActivities) {
          const jsonActivities = JSON.parse(userActivities);
          jsonActivities.push(activity);
          try {
            await AsyncStorage.setItem(
              ACTIVITIES_KEY,
              JSON.stringify(jsonActivities),
            );
          } catch (error) {
            console.error("Error adding activity to local storage", error);
          }
        }
      } catch (error) {
        console.error("Error adding activity", error);
      }
    },
    getActivities: async () => {
      try {
        const usersRecentActivity =
          await AsyncStorage.getItem("@recentActivities");
        if (usersRecentActivity) {
          const jsonActivities = JSON.parse(usersRecentActivity);
          console.log(
            "Recent activities found in local storage:",
            jsonActivities,
          );
          return jsonActivities;
        }
      } catch (error) {
        console.error("Error fetching recent activities:", error);
      }
    },
  };
}
