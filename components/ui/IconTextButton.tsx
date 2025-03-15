import { Touchable, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { IconSymbol } from "./IconSymbol";

import { IconSymbolName } from "./IconSymbol";
import { View } from "react-native";



export default function IconTextButton({title, color, onPress, icon, textColor, large}: {title: string, color: string, onPress?: () => void, icon: IconSymbolName, textColor: string, large: boolean}) {

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color, borderColor: textColor, height: large? 50 : "auto" } ]} onPress={onPress}>
            <IconSymbol size={large? 32 : 16} color={textColor} name={icon} />
            <ThemedText style={[styles.text, {color: textColor, fontSize: large? 18 : 11}]}>{title}</ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
button: {
    position: "relative",
    marginHorizontal: 4,
    // width: 80,
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: "auto",
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
},

text: {
    fontSize: 11,
    fontWeight: "bold",
}

});