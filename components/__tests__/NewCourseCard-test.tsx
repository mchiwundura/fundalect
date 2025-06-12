import { render } from "@testing-library/react-native";
import NewCourseCard from "../NewCourseCard";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  Reanimated.default.call = () => {};
  return Reanimated;
});

describe("New Course Card Tests", () =>
  it("renders the course card by default", () => {
    const tree = render(
      <NewCourseCard
        onSelected={() => console.log("course selected")}
        level="Third year Rhodes University"
        commingSoon
        description="Dive deeper into the world of medications, exploring adcanced topics like pharmacokinetics, pharmacodynamics and their clinical applications"
        color="green"
        title="Pharmacology"
        icon="💊"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  }));
