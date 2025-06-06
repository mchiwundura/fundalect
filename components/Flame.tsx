import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  interpolate,
  interpolateColor,
  Easing,
  withDelay,
} from "react-native-reanimated";

const width = 1080;
const flameColors = {
  yellow: "#FFDC01",
  orange: "#FDAC01",
  red: "#F73B01",
};

const Flame = ({ delay }: { delay: number }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        false,
      ),
    );
  }, [delay, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 0.25, 1], [0, 1, 0]);
    const translateY = interpolate(progress.value, [0, 1], [0, -560]);
    const translateX = interpolate(progress.value, [0, 0.25, 1], [0, 10, 10]);
    const bgColor = interpolateColor(
      progress.value,
      [0, 0.4, 1],
      [flameColors.yellow, flameColors.orange, flameColors.red],
    );

    return {
      transform: [{ translateY }, { translateX }, { scale }],
      backgroundColor: bgColor,
      opacity: 1 - progress.value,
    };
  });

  return <Animated.View style={[styles.flame, animatedStyle]} />;
};

export const Fire = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fire}>
        <View style={styles.flames}>
          <Flame delay={0} />
          <Flame delay={375} />
          <Flame delay={750} />
          <Flame delay={1125} />
          <Flame delay={1500} />
          <Flame delay={1875} />
          <Flame delay={2250} />
          <Flame delay={2500} />
        </View>
        <View style={styles.logs}>
          <View style={[styles.log, styles.log1]} />
          <View style={[styles.log, styles.log2]} />
        </View>
      </View>
    </View>
  );
};

const flameSize = width * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  fire: {
    width: width * 0.3,
    height: width * 0.3,
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  flames: {
    position: "absolute",
    bottom: "10%",
    width: "60%",
    height: "60%",
    transform: [{ rotate: "45deg" }],
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  flame: {
    position: "absolute",
    width: flameSize,
    height: flameSize,
    borderRadius: flameSize / 4,
    backgroundColor: flameColors.yellow,
  },
  logs: {
    position: "absolute",
    bottom: "25%",
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  log: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  log1: {
    backgroundColor: "#612E25",
    transform: [{ rotate: "-20deg" }],
  },
  log2: {
    backgroundColor: "#70392F",
    transform: [{ rotate: "20deg" }],
  },
});
