import { StyleSheet, View } from "react-native";
import NavigationButton from "./ui/NavButton";
import { useRouter } from "expo-router";

export function HeaderButtons() {

  const router = useRouter();

  return <View style={styles.container}>


            <NavigationButton icon={"magnifyingglass"} onClick={() => router.push("/search")} />

            <NavigationButton icon={"bell"} onClick={() => router.push("/notificationsScreen")} />
    </View>;
}
  
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 110,
    marginRight: 20
  },
  searchBar: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    padding: 5,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  }
})