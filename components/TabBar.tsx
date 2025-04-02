import { View, Platform, StyleSheet, useColorScheme, LayoutChangeEvent } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { IconSymbol } from './ui/IconSymbol';
import TabBarButton from './ui/TabBarButton';
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const colorScheme = useColorScheme()
  const [dimensions, setDimensions] = useState<any>({height:20, width: 100});
  const buttonWidth = dimensions.width  / state.routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
        height: e.nativeEvent.layout.height,
        width: e.nativeEvent.layout.width
    })
  }

  const tabPositionX = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
        transform: [{translateX: tabPositionX.value}]
    }
  })

  return (
    <View onLayout={onTabbarLayout} style={[styles.tabbar, 
    {
      backgroundColor: colorScheme === "light" ? "rgba(255, 255, 255, 1)" : "rgba(0,0,0,1)",
      borderColor: colorScheme === "light" ? "rgba(0,0,0,0.2)" : "rgba(255, 255, 255, 0.1)",
            boxShadow: colorScheme === "light" ? "0 4px 8px rgba(0, 0, 0, 0.5)" : "0 0 0 rgba(0, 0, 0, 0.1)"
      }]}>
        <Animated.View style={[animatedStyle, {
            position: "absolute", 
            backgroundColor: "#A294EB",
            opacity: 0.3,
            borderRadius: 50,
            marginHorizontal: 8,
            height: dimensions.height - 15,
            width: buttonWidth - 16
        }]}></Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            tabPositionX.value = withSpring(buttonWidth * index, {duration: 1500} )
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? "#9C85FF" : "rgba(255, 255, 255, 0.3)"}
            label={label}
            />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabbar: {
        position: "absolute",
        bottom: 50, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {width: 20, height: 20},
        shadowRadius: 20,
        shadowOpacity: 1,
        // borderWidth: 2
    }

})