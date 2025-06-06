import React from "react";
import { Fire } from "../Flame";
import { render } from "@testing-library/react-native";

// Mock Reanimated before tests
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // Avoid error with createAnimatedComponent
  Reanimated.default.call = () => {};

  return Reanimated;
});

describe("Fire component test", () => {
  it("renders correctly and matches snapshot", () => {
    const tree = render(<Fire />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
