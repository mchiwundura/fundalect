import {
  getMidWeekDates,
  isToday,
  getDayLabel,
  getDateNumber,
  areConsecutive,
} from "../streak"; // Update this path to match your project structure

describe("StreakTracker utility functions", () => {
  describe("getMidWeekDates", () => {
    it("returns 7 dates centered around today", () => {
      const dates = getMidWeekDates();
      expect(dates).toHaveLength(7);

      const today = new Date().toISOString().split("T")[0];
      expect(dates).toContain(today);
    });
  });

  describe("isToday", () => {
    it("returns true for today's date", () => {
      const todayStr = new Date().toISOString().split("F")[0];
      expect(isToday(todayStr)).toBe(true);
    });

    it("returns false for a past date", () => {
      expect(isToday("2000-01-01")).toBe(false);
    });
  });

  describe("getDayLabel", () => {
    it("returns a single letter for the day of the week", () => {
      const label = getDayLabel("2023-12-25"); // Monday
      expect(label).toBe("M");
    });
  });

  describe("getDateNumber", () => {
    it("returns the date number from a string", () => {
      const dateStr = "2023-12-25";
      expect(getDateNumber(dateStr)).toBe(25);
    });
  });

  describe("areConsecutive", () => {
    it("returns true for consecutive dates", () => {
      expect(areConsecutive("2023-12-24", "2023-12-25")).toBe(true);
    });

    it("returns false for non-consecutive dates", () => {
      expect(areConsecutive("2023-12-24", "2023-12-26")).toBe(false);
    });
  });
});
