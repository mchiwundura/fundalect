import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedViewOld";
import { Image, StyleSheet, View } from 'react-native';

export default function ProfileIcon() {
    return (
        <View style={styles.container}>
                  <Image
          source={require('@/assets/images/avatar.png')}
          style={styles.avatar}
        />
            <ThemedText type="subtitle">Munyaradzi Chiwundura</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        marginVertical: 20
    },
avatar: {
    width: 50,
    height: 50,
    marginBottom: 10
}
})
