
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import { IconSymbol } from './IconSymbol'; // Adjust the path if needed
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';

type PricingType = 'free' | 'pro' | 'enterprise' | 'team';

interface PricingCardProps {
  type: PricingType;
}

const offers: Record<PricingType, string[]> = {
  free: [
    'Access to all free courses',
    'Basic flashcard practice',
    'Track limited progress',
    'Community support',
  ],
  pro: [
    'Access to all courses and lessons',
    'Advanced flashcards with spaced repetition',
    'Progress tracking with performance analytics',
    'Unlock badges and achievements',
    'Offline access to content',
  ],
  enterprise: [
    'Custom learning paths for organizations',
    'Dedicated account manager',
    'Analytics dashboard for teams',
    'SSO and security compliance',
    'Priority 24/7 support',
  ],
  team: [
    'Manage team learning accounts',
    'Monitor individual and group progress',
    'Custom challenges for teams',
    'Admin dashboard',
    'Shared resources and notes',
  ],
};

const pricing: Record<PricingType, { price: string; condition: string }> = {
  free: {
    price: 'R0',
    condition: 'Free for everyone',
  },
  pro: {
    price: 'R99',
    condition: 'Per month, billed annually',
  },
  enterprise: {
    price: 'Custom',
    condition: 'Contact sales for pricing',
  },
  team: {
    price: 'R499',
    condition: 'Per month for up to 10 users',
  },
};

export default function PricingCard({ type }: PricingCardProps) {
  const theme = useColorScheme();

  return (
    <View style={[styles.card, { borderColor: Colors.primary }]}>
      <ThemedText style={styles.title}>{type.toUpperCase()}</ThemedText>

      <View style={styles.featuresContainer}>
        {offers[type].map((offer, index) => (
          <View key={index} style={styles.offerRow}>
            <IconSymbol
              name="checkmark.circle.fill"
              color={theme === 'dark' ? '#fff' : '#000'}
              size={20}
            />
            <ThemedText style={styles.offerText}>{offer}</ThemedText>
          </View>
        ))}
      </View>

      <View style={styles.bottomSection}>
        <ThemedText style={styles.priceText}>{pricing[type].price}</ThemedText>
        <ThemedText style={styles.conditionText}>{pricing[type].condition}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    elevation: 3,
    margin: 8,
    minWidth: 380,
    height: 380,
    justifyContent: 'space-between',
  
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  featuresContainer: {
    flexGrow: 1,
  },
  offerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  offerText: {
    marginLeft: 10,
    fontSize: 16,
    flexShrink: 1,
  },
  bottomSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  priceText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  conditionText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
});
