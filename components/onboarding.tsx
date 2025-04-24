import React, { useState, useEffect } from 'react';
import { StyleSheet, View, useWindowDimensions, Image, Platform } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

import ConfettiCannon from 'react-native-confetti-cannon';
import OnboardingSection from './ui/OnboardingSection';
import CourseSearch from './courseSearch';
import LearningStyleSelector from './learningStyleSelector';
import AuthSection from './AuthSection';
import LandingNavigation from './LandingNavigation';

const Onboarding = ({ deboard }) => {
  const { width } = useWindowDimensions();
  const [step, setStep] = useState(0);
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

  const nextStep = () => {
    if (step === slides.length - 1) {
      deboard?.(); // Final step exits onboarding
    } else {
      setStep(step + 1);
    }
  };

  const slides = [
    <OnboardingSection
      key="intro"
      title="Learn, Play, Master"
      description="Learn smarter, not harder, with personalized and interactive learning experiences."
      image={require('./img/oldgirl.png')}
      callToAction={nextStep}
      callToActionText="Next"
    />,
    <AuthSection skip={nextStep} key="auth" />,
    <CourseSearch
      key="course"
      title="Advanced Concept Mapping"
      description="Mind Maps to map out your understanding of the topics and identify weak areas"
      image={require('./img/concept_maping.png')}
      callToAction={nextStep}
      callToActionText="Next"
    />,
    <LearningStyleSelector
      key="style"
      title="What's your learning style?"
      description="Pick how you learn best, so we tailor content just for you."
      image={require('./img/concept_maping.png')}
      callToAction={nextStep}
    />,
    <OnboardingSection
      key="end"
      title="You are all set 🎉"
      description="Your journey starts now, let’s unlock your full potential!"
      image={require('./img/boy.png')}
      callToAction={nextStep}
      callToActionText="Start Learning"
    />,
  ];

  return (
    <View style={[styles.container, { width }]}>
      <Animated.View style={[styles.background, animatedStyle]}>
        <Image
          source={width < 600 ? require('./img/gaus.png') : require('./img/gauslg.png')}
          style={styles.bgImage}
        />
      </Animated.View>

        {step == 4 && <ConfettiCannon autoStartDelay={500} colors={["#9584FF"]} count={300} origin={{ x: 400, y: 0 }} />}
      {Platform.OS === 'web' && <LandingNavigation />}
      <View style={styles.slideWrapper}>
        {slides[step]}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  slideWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default Onboarding;
