import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { IconSymbol, IconSymbolName } from "./IconSymbol";

interface NavigationButton {
    icon: IconSymbolName;
    onClick: () => void;
}

export default function NavigationButton({icon, onClick }: NavigationButton) {

    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity onPress={onClick} style={[styles.button, {
            backgroundColor: colorScheme == "light"? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)" 
        }]}>
            <IconSymbol size={24} name={icon} color={colorScheme == "light"? "black" : "white"} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    }
})