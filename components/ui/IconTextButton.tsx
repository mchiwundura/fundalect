import { Touchable, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { IconSymbol } from "./IconSymbol";

import { IconSymbolName } from "./IconSymbol";
import { View } from "react-native";



export default function IconTextButton({title, color, onPress, icon, textColor}: {title: string, color: string, onPress?: () => void, icon: IconSymbolName, textColor: string}) {

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color, borderColor: textColor } ]} onPress={onPress}>
            <IconSymbol size={16} color={textColor} name={icon} />
            <ThemedText style={[styles.text, {color: textColor}]}>{title}</ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
button: {
    position: "relative",
    marginHorizontal: 4,
    // width: 80,
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: "auto",
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
},

text: {
    fontSize: 11,
    fontWeight: "bold",
}

});