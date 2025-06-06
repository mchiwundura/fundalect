import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedViewOld";
import { useRouter } from "expo-router";
import { LessonCardProps } from "@/types/ui/LessonCard";

export default function LessonCard(props: LessonCardProps) {
  const router = useRouter();
  const colorScheme = useColorScheme();

  function buttonPressed() {
    props.onPress();
    router.push(props.link);
  }

  return (
    <TouchableOpacity onPress={buttonPressed} style={styles.link}>
      <View style={[styles.background, { backgroundColor: props.color }]} />
      <View
        style={[
          styles.container,
          {
            borderColor: props.color,
            boxShadow:
              colorScheme === "light"
                ? "0 4px 4px rgba(0, 0, 0, 0.25)"
                : "0 4px 4px rgba(0, 0, 0, 0.9)",
          },
        ]}
      >
        <ThemedView
          style={[
            styles.progress,
            { backgroundColor: props.color, width: props.completion * 3.18 },
          ]}
        />
        <ThemedText
          type="defaultSemiBold"
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.title}
        >
          {props.title}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    marginVertical: 10,
    height: 60,
    position: "relative",
  },
  container: {
    padding: 10,
    borderRadius: 8,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flex: 1,
    borderWidth: 3,
    height: 60,
  },
  progress: {
    position: "absolute",
    left: 2,
    top: 2,
    height: 50,
    borderRadius: 5,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
    opacity: 0.2,
  },
  title: {
    flex: 1,
    marginLeft: 8,
  },
});
