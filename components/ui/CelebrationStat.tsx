import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";

export type StatType = "speed" | "flashcards" | "accuracy";

interface CelebrationStatProps {
  type: StatType;
  value: string | number;
}

const typeStyles = {
  speed: {
    label: "SPEED",
    icon: <Feather name="clock" size={18} color="#00e0ff" />,
    backgroundColor: "#002e4d",
    borderColor: "#00e0ff",
    textColor: "#00e0ff",
  },
  flashcards: {
    label: "FLASHCARDS",
    icon: <FontAwesome5 name="question-circle" size={18} color="#a783ff" />,
    backgroundColor: "#2d1d42",
    borderColor: "#a783ff",
    textColor: "#a783ff",
  },
  accuracy: {
    label: "ACCURACY",
    icon: <MaterialIcons name="my-location" size={18} color="#5dff5d" />,
    backgroundColor: "#1e3b1e",
    borderColor: "#5dff5d",
    textColor: "#5dff5d",
  },
};

const CelebrationStat: React.FC<CelebrationStatProps> = ({ type, value }) => {
  const styles = typeStyles[type];

  return (
    <View
      style={[
        componentStyles.card,
        {
          backgroundColor: styles.backgroundColor,
          borderColor: styles.borderColor,
        },
      ]}
    >
      <Text style={[componentStyles.label, { color: styles.textColor }]}>
        {styles.label}
      </Text>
      <View style={componentStyles.content}>
        {styles.icon}
        <Text style={[componentStyles.value, { color: styles.textColor }]}>
          {value}
        </Text>
      </View>
    </View>
  );
};

const componentStyles = StyleSheet.create({
  card: {
    width: 90,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: "center",
    margin: 6,
  },
  label: {
    fontSize: 10,
    fontWeight: "700",
    marginBottom: 6,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  value: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default CelebrationStat;
