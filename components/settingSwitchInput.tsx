import { StyleSheet, useColorScheme, Switch, View, TouchableOpacity } from "react-native"
import { ThemedView } from "./ThemedView"
import { ThemedText } from "./ThemedText"
import { IconSymbol, IconSymbolName } from "./ui/IconSymbol";

interface SettingSwitchInput {
    title: string;
    radio?: boolean;
    state?: boolean;
    icon: IconSymbolName;
    onPress: ()=> void;
}

export default function SettingSwitchInput({title, icon, radio, state, onPress}: SettingSwitchInput) {

    const colorScheme = useColorScheme()

    return ( 
        <TouchableOpacity onPress={onPress} style={[styles.container, {
              backgroundColor: colorScheme === "light" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.05)",
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 0 0 rgba(0, 0, 0, 0.1)"
            }]}>
            {/* Icon/ text radio, taking state gfrom the top there, radio or not */}
            <View style={styles.textAndIconContainer}>
            <IconSymbol color={colorScheme === "dark"? "white" : "black"} name={icon}/>
            <ThemedText type="defaultSemiBold" style={styles.title}>{title}</ThemedText>
            </View>
                    {radio && <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={state ? '#9584FF' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onPress}
          style={styles.switch}
          value={state}
        />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderRadius: 50
    },
    textAndIconContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }, 
    title : {
        margin: 10
    }
})