import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';

export default function LandingNavigation() {
    const { width } = useWindowDimensions();
  return (
    <View style={[styles.nav, {width}]}>
        <Text>Dzoro</Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity><Text style={styles.link}>About Us</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.link}>Contact</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.link}>Download</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up / In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    zIndex: 99,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Transparent effect
  },
  linksContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  link: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});
