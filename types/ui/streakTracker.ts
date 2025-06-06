export interface DayEntry {
  date: string; 
}

export interface StreakData {
  currentStreak: number;
  bestStreak: number;
  activeDays: DayEntry[];
}
