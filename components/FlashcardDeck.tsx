import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { useRouter } from "expo-router";
import Animated from "react-native-reanimated";
import { FlashcardDeckProps } from "@/types/ui/FlashcardDeck";

const FlashcardDeck = ({
  title,
  color,
  link,
  completion,
  courseTitle,
  setDeck,
}: FlashcardDeckProps) => {
  //  Hooks
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          width: width > 600 ? 300 : "100%",
          marginHorizontal: width > 600 ? 10 : 0,
        },
      ]}
      activeOpacity={0.85}
      onPress={() => {
        router.push(link);
        setDeck();
      }}
    >
      {/* Peeking background card */}
      <View style={[styles.cardPeek, { backgroundColor: color }]} />

      {/* Main card */}
      <Animated.View style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.topRow}>
          <ThemedText style={styles.courseTitle}>{courseTitle}</ThemedText>
        </View>

        <ThemedText type="title" style={styles.title}>
          {title}
        </ThemedText>

        <View>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Completion: {completion}%
          </ThemedText>

          <View style={styles.progressBarBackground}>
            <View
              style={[styles.progressBarFill, { width: `${completion}%` }]}
            />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default FlashcardDeck;

const styles = StyleSheet.create({
  wrapper: {
    height: 210,
    position: "relative",
    marginVertical: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardPeek: {
    position: "absolute",
    top: -8,
    left: 8,
    right: 8,
    height: 200,
    borderRadius: 20,
    opacity: 0.3,
    zIndex: 0,
  },
  container: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    zIndex: 1,
    shadowColor: "#000",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    marginTop: 15,
    fontSize: 32,
  },
  subtitle: {
    marginVertical: 10,
    opacity: 0.7,
    fontSize: 16,
  },
  progressBarBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#00ff9d",
    borderRadius: 5,
  },
});
