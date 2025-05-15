import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

export default function LandingNavigation({scrollTo, signIn}: any) {
    const { width } = useWindowDimensions();
  return (
    <View style={[styles.nav, {width}]}>
      <TouchableOpacity onPress={() => scrollTo("Home")}>
        <Text style={[styles.logo, {color: Colors.primary}]}>FUNDEKA</Text>
        </TouchableOpacity>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => scrollTo("About Us")}><Text style={styles.link}>About Us</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => scrollTo("Contact")}><Text style={styles.link}>Contact</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => scrollTo("Download")}><Text style={styles.link}>Download</Text></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=> signIn()} style={[styles.button, {backgroundColor: Colors.primary}]}>
        <ThemedText style={styles.buttonText}>Sign In</ThemedText>
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
    backgroundColor: 'rgba(0,0, 0, 0.6)', // Transparent effect
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  linksContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  link: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25
  },
  buttonText: {
    fontSize: 16,
  },
});
