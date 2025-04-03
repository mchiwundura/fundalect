import { View, Platform, StyleSheet, useColorScheme, LayoutChangeEvent, useWindowDimensions } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import TabBarButton from './ui/TabBarButton';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions(); // Get screen width
  const isMediumOrLarger = width >= 768; // Adjust breakpoint if needed

  const [dimensions, setDimensions] = useState<{ height: number; width: number }>({ height: 20, width: 100 });
  const buttonWidth = isMediumOrLarger ? dimensions.height / state.routes.length : dimensions.width / state.routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: isMediumOrLarger ? [{ translateY: tabPositionX.value }] : [{ translateX: tabPositionX.value }]
    };
  });

  return (
    <View
      onLayout={onTabbarLayout}
      style={[
        styles.tabbar,
        isMediumOrLarger ? styles.sidebar : styles.bottomBar, // Apply styles conditionally
        {
          backgroundColor: colorScheme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(0,0,0,1)',
          borderColor: colorScheme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255, 255, 255, 0.1)',
        }
      ]}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            position: 'absolute',
            backgroundColor: '#A294EB',
            opacity: 0.3,
            borderRadius: 50,
            marginHorizontal: 8,
            height: isMediumOrLarger ? buttonWidth - 16 : dimensions.height - 15,
            width: isMediumOrLarger ? dimensions.width - 15 : buttonWidth - 16
          }
        ]}
      ></Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, { duration: 1500 });
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? '#9C85FF' : 'rgba(255, 255, 255, 0.3)'}
            label={label}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  bottomBar: {
    bottom: 50,
    width: '90%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 50
  },
  sidebar: {
    left: 0,
    top: 0,
    height: '100%',
    width: 80, // Adjust width for a sidebar
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  }
});
