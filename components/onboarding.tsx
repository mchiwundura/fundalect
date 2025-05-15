import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';
import OnboardingSection from './ui/OnboardingSection';
import CourseSearch from './courseSearch';
import LearningStyleSelector from './learningStyleSelector';
import AuthSection from './AuthSection';
import LandingNavigation from './LandingNavigation';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';
import PricingCard from './ui/PricingCard';
import PricingSwitcher from './ui/PricingSwitcher';
import { IconSymbol } from './ui/IconSymbol.ios';

const Onboarding = ({ deboard }) => {
  const { width, height } = useWindowDimensions();
  const [step, setStep] = useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scrollRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const downloadRef = useRef(null);
  const contactRef = useRef(null);
  const [large, setLarge] = useState(width > 600);
  const [planType, setPlanType] = useState<'individual' | 'team'>('individual');

  useEffect(() => {
    setLarge(width > 600);
  }, [width]);

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
      deboard?.();
    } else {
      setStep(step + 1);
    }
  };

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'About Us':
        ref = aboutRef;
        break;
      case 'Download':
        ref = downloadRef;
        break;
      case 'Contact':
        ref = contactRef;
        break;
      case 'Home':
        ref = homeRef;
        break;
      default:
        return;
    }
    if (ref.current && scrollRef.current) {
      ref.current.measureLayout(
        scrollRef.current.getInnerViewNode(),
        (x, y) => {
          scrollRef.current.scrollTo({ y, animated: true });
        }
      );
    }
  };

  const slides = [
    <OnboardingSection
      key="intro"
      title="Learn, Play, Master"
      description="Learn smarter, not harder, with personalized and interactive learning experiences."
      image={require('./img/oldgirl.png')}
      callToAction={nextStep}
      callToActionText="Get Started"
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

      {step === 4 && (
        <ConfettiCannon
          autoStartDelay={500}
          colors={['#9584FF']}
          count={300}
          origin={{ x: 400, y: 0 }}
        />
      )}

      {step === 0 && Platform.OS === 'web' && <LandingNavigation signIn={() => setStep(1)} scrollTo={scrollToSection} />}

      <View style={styles.slideWrapper}>
        {step === 0 && Platform.OS === 'web' ? (
          <ScrollView ref={scrollRef} style={{ flex: 1 }}>
            <View  style={{ padding: 20 }}>
              <View ref={homeRef} style={{ height }}>
                {slides[0]}
              </View>

<TouchableOpacity onPress={() => scrollToSection('About Us')} style={[styles.learnMoreButton]}>
  <ThemedText >Learn More</ThemedText>
</TouchableOpacity>
              <View ref={aboutRef} style={[styles.page, { width, flexDirection: large ? 'row-reverse' : 'column', justifyContent: large ? "space-around" : "center", paddingTop: 20 }]}>
                <View style={{ marginBottom: large ? 20 : 0, maxWidth: large ? 600 : "100%", padding: 32 }}>
                  <ThemedText style={{marginVertical: 20, color: Colors.primary}} type='title'>About Us</ThemedText>
                  <ThemedText type='default'>We are a team of passionate educators and developers dedicated to revolutionizing the way students learn.</ThemedText>
                  <ThemedText type='default'>Our mission is to create an engaging and personalized learning experience that empowers students to reach their full potential.</ThemedText>
                </View>
                <View style={{ width: large ? 600 : "100%", padding: 32, marginTop: large ? 32 : 20, position: "relative" }}>
                  <Image source={require('./img/aboutUs.png')} style={{ width: "100%", maxHeight: 400, resizeMode: 'contain', borderRadius: 25 }} />
                </View>
              </View>

              <View style={{padding: 32, display: 'flex', alignItems: 'center'}}>
                <ThemedText style={{color: Colors.primary, marginBottom: 20}} type='title'>Pricing</ThemedText>
                <ThemedText type='default'>We believe quality education should be accessible. Start for free and upgrade only when you're ready, with generous offers for individuals, teams and institutions.</ThemedText>
                
                
              </View>
              <PricingSwitcher selected={planType} onPress={(type) => setPlanType(type)} />
                { planType === 'individual' ? 
              <View style={{display: 'flex', flexDirection: large ? 'row' : 'column', alignItems: 'center', width: '100%', padding: 32, justifyContent: 'center'}}>

                  <PricingCard type='free'/>
                <PricingCard type='pro'/>
              </View>
              : 
                   <View style={{display: 'flex', flexDirection: large ? 'row' : 'column', alignItems: 'center', width: '100%', padding: 32, justifyContent: 'center'}}>

                  <PricingCard type='team'/>
                <PricingCard type='enterprise'/>
              </View>  }
              <View ref={downloadRef} style={[styles.page, { width, flexDirection: large ? 'row' : 'column', justifyContent: large ? "space-around" : "center", alignItems: 'center', marginTop: 50 }]}>
                <View style={{ maxWidth: large ? 600 : "100%" }}>
                  <Image source={require('./img/app_mockup.webp')} style={{ maxWidth: '100%', maxHeight: 500, resizeMode: 'contain' }} />
                </View>
                <View style={[styles.downloadsSection, { marginTop: large ? 0 : 20, maxWidth: large ? 600 : "100%", alignItems: large ? 'flex-start' : 'center' }]}>
                  <ThemedText style={{color: Colors.primary}} type='title'>Download the App</ThemedText>
                  <ThemedText style={{textAlign: 'center', marginVertical: 10}} type='default'>Get the full experience on your phone or tablet. Learn anywhere, anytime.</ThemedText>
                  <TouchableOpacity style={[styles.cta, {marginHorizontal: large? 0:'auto'}]} onPress={() => Linking.openURL('#')}>
                    <ThemedText type='defaultSemiBold'>Download Now</ThemedText>
                  </TouchableOpacity>
                </View>
              </View>

              <View ref={contactRef} style={[styles.page, { width: '100%', flexDirection: large ? 'row' : 'column', justifyContent: "space-around", alignItems: 'flex-start', gap: 20, padding: 32 }]}>
                <View style={{  width: large ? 600 : "100%" }}>
                  <ThemedText style={{color: Colors.primary}} type='title'>Contact Us</ThemedText>
                  <TextInput style={styles.input} placeholder="Your Name" />
                  <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" />
                  <TextInput style={[styles.input, { height: 100 }]} placeholder="Message" multiline />
                  <TouchableOpacity style={[styles.cta, {marginHorizontal: large? 0:'auto', width: '100%'}]} onPress={() => alert('Message sent!')}>
                    <ThemedText type='subtitle' style={{ color: 'white' }}>Send Message</ThemedText>
                  </TouchableOpacity>
                </View>
                <View style={{  width: large ? 600 : "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', height: large? '100%' : 'auto' }}>

                  <ThemedText style={{color: Colors.primary}} type='title'>Connect with us</ThemedText>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{display: 'flex', flexDirection: 'row'}}></View>
                  <TouchableOpacity style={styles.socialIcon} onPress={() => Linking.openURL('https://twitter.com')}>
                    <FontAwesome name='twitter' size={42} color={"#fff"}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.socialIcon} onPress={() => Linking.openURL('https://facebook.com')}>
                    <FontAwesome name='facebook' size={42} color={"#fff"}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.socialIcon} onPress={() => Linking.openURL('https://instagram.com')}>
                    <FontAwesome name='instagram' size={42} color={"#fff"}/>
                  </TouchableOpacity>               
                     <TouchableOpacity  style={styles.socialIcon} onPress={() => Linking.openURL('https://instagram.com')}>
                    <FontAwesome name='youtube-play' size={42} color={"#fff"}/>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (
          slides[step]
        )}
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
  page: {
    marginVertical: 40,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  downloadsSection: {
display: 'flex',
    justifyContent: 'center',
    padding: 32,
    width: '100%',
  },
  learnMoreButton: {
    marginHorizontal: 'auto',
    borderWidth: 2,
    borderColor: '#9584FF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: -80,
  },
  sectionBox: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#ffffffaa',
    borderRadius: 12,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15,
    color: '#c2c2c2',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9584FF',
  },
  cta: {
    backgroundColor: '#9584FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  socialIcon: {
    margin: 10,
  }
});

export default Onboarding;
