import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { icon } from '@/constants/icon'
import { useTheme } from '@react-navigation/native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface TabBarButtonProps {
    onPress: Function;
    onLongPress: Function;
    isFocused: boolean;
    routeName: string;
    color: string;
    label: string

}

export default function TabBarButton({onPress, onLongPress, isFocused, routeName, color, label}: TabBarButtonProps) {
    const {colors} = useTheme();
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused? 1 : 0) : isFocused, 
        {duration: 350}
    );
    }, [scale, isFocused]);

    const antimatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return {
            opacity
        }
    })

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
        const top = interpolate(scale.value, [0, 1], [0, 9])
        return{
            transform: [{
                scale: scaleValue
            }],
            top
        }
    })

  return (
          <Pressable
          style={[styles.tabbarItem]}
            onPress={onPress}
            onLongPress={onLongPress}
          >
<Animated.View style={[animatedIconStyle]}>
       {icon[routeName]({color: isFocused ? "#9C85FF" : "rgba(255, 255, 255, 0.3)"})}
</Animated.View>

            <Animated.Text style={[{ color: isFocused ? "#9C85FF" : "rgba(255, 255, 255, 0.3)", fontSize: 12 }, antimatedTextStyle]}>
              {label}
            </Animated.Text>
          </Pressable>
  )
}
const styles = StyleSheet.create({
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
})