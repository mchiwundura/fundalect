import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  type?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}
