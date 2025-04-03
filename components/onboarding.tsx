import React from 'react';
import { ScrollView,StyleSheet, useWindowDimensions, Platform, View } from 'react-native';
import OnboardingSection from './ui/OnboardingSection';
import LandingNavigation from './LandingNavigation';

const Onboarding = (props) => {

  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width, position: 'relative'}]}>
      {Platform.OS === 'web' && <LandingNavigation/>}
    <ScrollView horizontal pagingEnabled style={styles.container}>
    <OnboardingSection 
        description='Elevate your studies with interactive learning tools and personalized study plans' 
        image={require('./img/oldgirl.png')}
        title='Learn Smarter with Dzoro'
        callToAction={() => props.deboard()}
        callToActionText='Get Started'
        />
    <OnboardingSection 
        description='Study flashcards with spaced repetition and test your knowledge with various question types ' 
        image={require('./img/boy.png')}
        title='Flashcards and Quizzes'
        callToAction={() => console.log('Get Started')}
        callToActionText='Sign In'
        />  
    <OnboardingSection 
        title='Advanced Concept Maping' 
        image={require('./img/concept_maping.png')}
        description='Mind Maps to map out your understanding of the topics and identify weak areas'
        callToAction={() => console.log('Get Started')}
        callToActionText='Sign In'
        />
    {Platform.OS === 'web' && 
        <OnboardingSection 
        title='Offline Mode' 
        image={require('./img/app_mockup.webp')}
        description='Use our mobile app to access our material offline anywhere, anytime'
        callToActionText='Download the app'
        callToAction={() => console.log('Download the app')}
        />
      }
    </ScrollView>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    position: 'relative',
  },
});

export default Onboarding;