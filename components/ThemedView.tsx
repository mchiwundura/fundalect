import { useColorScheme, View, ViewStyle, StyleProp } from 'react-native'

interface ThemedViewProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const ThemedView = ({children, style}: ThemedViewProps)=> {
    const colorScheme = useColorScheme()
  return (
    <View style={[{backgroundColor: colorScheme === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.05)",
            boxShadow: colorScheme === "light" ? "0 4px 4px rgba(0, 0, 0, 0.25)" : "0 0 0 rgba(0, 0, 0, 0.1)",
            }, style]}>
        {children}
    </View>
  )
}

export default ThemedView

