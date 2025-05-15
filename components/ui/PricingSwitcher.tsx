import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';

interface PricingSwitcherProps {
  selected: 'individual' | 'team';
  onPress: (type: 'individual' | 'team') => void;
}

export default function PricingSwitcher({ selected, onPress }: PricingSwitcherProps) {
  const translateX = useSharedValue(selected === 'individual' ? 0 : 1);

  React.useEffect(() => {
    translateX.value = selected === 'individual' ? withSpring(0) : withSpring(1);
  }, [selected]);

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value * 160 }], // adjust based on width
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.switcher}>
        <Animated.View style={[styles.indicator, indicatorStyle]} />

        <Pressable style={styles.option} onPress={() => onPress('individual')}>
          <ThemedText style={styles.text}>Individual</ThemedText>
        </Pressable>

        <Pressable style={styles.option} onPress={() => onPress('team')}>
          <ThemedText style={styles.text}>Team / Institution</ThemedText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  switcher: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 50,
    padding: 4,
    position: 'relative',
    width: 320,
    height: 60,
    overflow: 'hidden',
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  indicator: {
    position: 'absolute',
    top: 4,
    bottom: 4,
    left: 4,
    width: 152,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    zIndex: 0,
  },
});
