import { StyleSheet, Image, useWindowDimensions, View, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

const Background = ({children}) => {

    const { width } = useWindowDimensions();

    const colorScheme = useColorScheme();

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

      useEffect(() => {
    translateX.value = withRepeat(withTiming(20, { duration: 1000 }), -1, true);
    translateY.value = withRepeat(withTiming(20, { duration: 1000 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <View style={{ flex: 1, position: "relative"}}>

          <Animated.View style={[styles.background, animatedStyle]}>
        {colorScheme === 'dark' ?
            <Image
            source={width < 600 ? require('./img/gaus.png') : require('./img/gauslg.png')}
            style={styles.bgImage}
            />
            :
                 <Image
            source={width < 600 ? require('./img/gauswt.png') : require('./img/gauslgwt.png')}
            style={styles.bgImage}
            />
        }    
      </Animated.View>
      {children}
          </View>
  )
  
}

export default Background

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: -20,
    left: -20,
    width: '110%',
    height: '110%',
    zIndex: -1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})