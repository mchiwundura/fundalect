import { render } from "@testing-library/react-native";
import FlashcardDeck from "../FlashcardDeck";
import { RelativePathString } from "expo-router";

describe("Flashcard Deck Test", () => {
  it("Renders the card component", () => {
    const tree = render(
      <FlashcardDeck
        title="Pharmacology"
        color="yellow"
        completion={20}
        link={"/courses" as RelativePathString}
        setDeck={() => {}}
        courseId={1}
        courseTitle="pharmacology"
        key={2}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
