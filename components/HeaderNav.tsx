import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedViewOld";
import NavigationButton from "./ui/NavButton";
import ProfileIcon from "./ui/ProfileIcon";

export default function HeaderNavigation() {
    return (
        <ThemedView style={styles.container}>
            <NavigationButton icon={"bell"} onClick={() => console.log("notifications")}/>
              <ProfileIcon/>
            <NavigationButton icon={"magnifyingglass"} onClick={() => console.log("Search")}/>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        marginHorizontal: "auto",
        height: "100%",
        width: "100%",
        padding: "5%",
        top:15,
        left:0
    }
})