import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { FC, useState } from "react";
import { ThemedText } from "./ThemedText";
import Animated, {
  Easing,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import IconTextButton from "./ui/IconTextButton";
import { Colors } from "@/constants/Colors";

interface NewCourseCardProps {
  title: string;
  color: string;
  icon: string;
  description: string;
  selected?: boolean;
  commingSoon?: boolean;
  level: string;
  onSelected: () => void;
}

const NewCourseCard: FC<NewCourseCardProps> = ({
  title,
  color,
  icon,
  description,
  selected,
  level,
  commingSoon,
  onSelected,
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const height = useSharedValue(80);

  const animatedStyle = useAnimatedStyle(() => {
    const scaleX = height.value;
    return {
      height: scaleX,
    };
  });

  return (
    <TouchableOpacity
      onPress={() => {
        if (opened) {
          setOpened(false);
          height.value = withTiming(80, {
            easing: Easing.inOut(Easing.ease),
          });
        } else {
          setOpened(true);
          height.value = withTiming(300, {
            easing: Easing.inOut(Easing.ease),
          });
        }
      }}
    >
      <Animated.View
        style={[animatedStyle, styles.container, { borderColor: color }]}
      >
        <View
          style={[
            styles.background,
            { backgroundColor: color, opacity: selected ? 0.6 : 0.1 },
          ]}
        ></View>
        <View style={styles.header}>
          <View style={[styles.titleContainer]}>
            <ThemedText type="title" style={[styles.icon]}>
              {icon}
            </ThemedText>
            <View>
              <ThemedText type="defaultSemiBold" style={{}}>
                {title}
              </ThemedText>
              <ThemedText type="subtle">{level}</ThemedText>
            </View>
          </View>
          <ThemedText type="title" style={[styles.checkmark, { color }]}>
            {selected ? "☑" : "☐"}
          </ThemedText>
        </View>
        {opened && (
          <Animated.View
            style={[styles.extensionContainer]}
            entering={FadeInUp}
          >
            <View>
              <View style={styles.contents}>
                <IconTextButton
                  textColor="rgba(100, 170, 255, 1)"
                  color="rgba(100, 170, 255, 0.2)"
                  title="Lessons [10]"
                  icon="doc.plaintext"
                />
                <IconTextButton
                  textColor="rgba(128, 184, 147, 1)"
                  color="rgba(128, 184, 147, 0.2)"
                  title="Flashcards [90]"
                  icon="bolt"
                />
              </View>
              <ThemedText>{description}</ThemedText>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (commingSoon) {
                  alert("this course is not yet available");
                } else {
                  onSelected();
                }
              }}
              style={[
                styles.button,
                { opacity: commingSoon || selected ? 0.2 : 1 },
              ]}
            >
              <ThemedText>{commingSoon ? "Comming Soon" : "Enroll"}</ThemedText>
            </TouchableOpacity>
          </Animated.View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default NewCourseCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    position: "relative",
    width: "100%",
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    paddingTop: 20,
  },
  icon: {
    fontSize: 28,
    marginRight: 10,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
  },
  background: {
    position: "absolute",
    borderRadius: 2,
    top: 2,
    bottom: 2,
    left: 2,
    right: 2,
  },
  extensionContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
  checkmark: {
    alignSelf: "flex-end",
    fontSize: 25,
    height: 38,
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
  },
});
