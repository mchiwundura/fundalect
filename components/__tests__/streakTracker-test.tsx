import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import StreakTracker from "../StreakTracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe("StreakTracker snapshot tests", () => {
  const mockData = {
    currentStreak: 3,
    bestStreak: 7,
    activeDays: [
      { date: "2025-06-01" },
      { date: "2025-06-02" },
      { date: "2025-06-03" },
    ],
  };

  beforeEach(() => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(
      JSON.stringify(mockData),
    );
  });

  it("renders correctly and matches snapshot", async () => {
    let tree;

    tree = render(<StreakTracker />);

    await waitFor(() => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
