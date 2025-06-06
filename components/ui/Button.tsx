import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { ButtonProps } from "@/types/ui/Button";

const Button = ({ onPress, title, style, type }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        type === "primary" && styles.primaryContainer,
        style,
      ]}
      onPress={onPress}
    >
      <ThemedText type="subtitle">{title}</ThemedText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    maxWidth: 360,
    width: "100%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryContainer: {
    backgroundColor: Colors.primary,
  },
});
