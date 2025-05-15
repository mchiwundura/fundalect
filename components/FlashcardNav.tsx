import { StyleSheet, Pressable, useColorScheme, View } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";
import { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

interface FlashcardNavProps {
  flip: () => void;
  good: () => void;
  bad: () => void;
  skip?: () => void;
  active: boolean;
}

export default function FlashcardNav({ flip, good, bad, skip, active }: FlashcardNavProps) {
  const colorScheme = useColorScheme();
  const isLight = colorScheme === "light";

  const goodButtonPosition = useSharedValue("44%");
  const badButtonPosition = useSharedValue("44%");

  const animationConfig = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  } as const;

  const goodButtonStyle = useAnimatedStyle(() => ({
    left: withTiming(goodButtonPosition.value, animationConfig),
  }));

  const badButtonStyle = useAnimatedStyle(() => ({
    left: withTiming(badButtonPosition.value, animationConfig),
  }));

  useEffect(() => {
    goodButtonPosition.value = active ? "70%" : "44%";
    badButtonPosition.value = active ? "18%" : "44%";
  }, [active]);

  const buttonBg = isLight ? "rgba(244, 244, 244, 1)" : "rgba(0, 0, 0, 1)";

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={good}>
            <Animated.View style={[styles.button, styles.sideButton, goodButtonStyle, { backgroundColor: buttonBg }]}>
              <IconSymbol name="hand.thumbsup" color="#80B893" />
            </Animated.View>
          </Pressable>

          <Pressable onPress={bad}>
            <Animated.View style={[styles.button, styles.sideButton, badButtonStyle, { backgroundColor: buttonBg }]}>
              <IconSymbol name="hand.thumbsdown" color="#CD6C87" />
            </Animated.View>
          </Pressable>

          <Pressable
            onPress={flip}
            style={[
              styles.button,
              styles.centerButton,
              { backgroundColor: buttonBg },
            ]}
          >
            <IconSymbol name="repeat" size={40} color="#9584ff" />
          </Pressable>
        </View>
      </View>

      {skip && (
        <View style={styles.skipButtonContainer}>
          <Pressable style={[styles.skipButton, { backgroundColor: buttonBg }]} onPress={skip}>
            <IconSymbol name="arrow.right.arrow.left" color="gray" />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "100%",
    height: 200,
    flexDirection: "column",
  },
  buttonRow: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 360,
    height: 50,
    position: "relative",
    left: -6,
  },
  button: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  sideButton: {
    top: 25,
  },
  centerButton: {
    height: 80,
    width: 80,
    left: "40%",
    top: 0,
    zIndex: 10,
  },
  skipButtonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  skipButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
