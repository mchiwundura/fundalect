import { StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";
import { useEffect, useRef } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

interface FlashcardNavProps {
  flip: () => void;
  good: () => void;
  bad: () => void;
  skip: () => void;
  active: boolean;
}

export default function FlashcardNav({ flip, good, bad, skip, active }: FlashcardNavProps) {
  const colorScheme = useColorScheme();
  
  // Create shared values for button positions
  const goodButtonPosition = useSharedValue("44%");
  const badButtonPosition = useSharedValue("44%");
  
  // Animation configuration
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
  
  // Animated styles for Good button
  const goodButtonStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(goodButtonPosition.value, config),
    };
  });
  
  // Animated styles for Bad button
  const badButtonStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(badButtonPosition.value, config),
    };
  });
  
  // Update button positions when active state changes
  useEffect(() => {
    if (active) {
      goodButtonPosition.value = "70%";
      badButtonPosition.value = "18%";
    } else {
      goodButtonPosition.value = "44%";
      badButtonPosition.value = "44%";
    }
  }, [active]);
  
  // Handle flip event
  function flipEvent() {
    flip();
  }
  
  return (
    <View style={styles.container}>
      {/* Good button */}
      <TouchableOpacity onPress={good}>
        <Animated.View
          style={[
            styles.button,
            goodButtonStyle, styles.sideButton,
            {
              backgroundColor: colorScheme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 1)",
            },
          ]}
        >
          <IconSymbol name="hand.thumbsup" color={"#80B893"} />
        </Animated.View>
      </TouchableOpacity>
      
      {/* Bad button */}
      <TouchableOpacity onPress={bad}>
        <Animated.View
          style={[
            styles.button,
            badButtonStyle, styles.sideButton,
            {
              backgroundColor: colorScheme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 1)",
            },
          ]}
        >
          <IconSymbol name="hand.thumbsdown" color={"#CD6C87"} />
        </Animated.View>
      </TouchableOpacity>
      
      {/* Flip Button */}
      <TouchableOpacity
        onPress={flipEvent}
        style={[
          styles.button,
          {
            backgroundColor: colorScheme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 1)",
            height: 80,
            width: 80,
            left: "40%",
            top: 0,
            zIndex: 10,
          },
        ]}
      >
        <IconSymbol name="repeat" size={40} color={"#9584ff"} />
      </TouchableOpacity>

      {/* Skip Button (optional) */}
      {skip && (
        <TouchableOpacity
          onPress={skip}
          style={[
            styles.skipButton,
            {
              backgroundColor: colorScheme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 1)",
            },
          ]}
        >
          <IconSymbol name="arrow.right.arrow.left" color={"gray"} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 40,
    width: "100%",
    height: 100,
  },
  button: {
    position: "absolute",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    top: 50,
  },
  skipButton: {
    position: "absolute",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    top: 110,
    left: "45%",
  },
  sideButton: {
    top: 25
  }
});