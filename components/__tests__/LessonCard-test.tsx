import { render } from "@testing-library/react-native";
import LessonCard from "../ui/LessonCard";
import { RelativePathString } from "expo-router";

describe("Lesson Card snapshot tests", () => {
    it("renders correctly and matches snapshot", () => {
        const tree = render(
            <LessonCard
                title="Test Lesson"
                onPress={() => {}}
                color="#FF5733"
                link={"/course/1/lesson/1" as RelativePathString}
                completion={0.5}
            />
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
})