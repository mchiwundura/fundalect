import { render } from "@testing-library/react-native";
import Button from "../ui/Button";

describe("Button Component Test", () => {
  it("renders correctly as default", () => {
    const tree = render(
      <Button onPress={() => {}} title="Testing Primary" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with primary type", () => {
    const tree = render(
      <Button type="primary" onPress={() => {}} title="Testing Primary" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
