import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Image, StyleSheet } from 'react-native';

export default function ProfileIcon() {
    return (
        <ThemedView style={styles.container}>
                  <Image
          source={require('@/assets/images/avatar.png')}
          style={styles.avatar}
        />
            <ThemedText type="defaultSemiBold">Munyaradzi Chiwundura</ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center"
    },
avatar: {
    width: 50,
    height: 50,
    marginBottom: 10
}
})
