import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from './theme';

export default function GalleryScreen() {
  const itens = ['🎀', '💖', '🌸', '🐻', '🍓', '🧸', '🌷', '🍰', '☁️', '🧁', '🐱', '⭐'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria</Text>

      <ScrollView contentContainerStyle={styles.grid}>
        {itens.map((it, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.emoji}>{it}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const CARD = 96;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    paddingTop: 16,
  },
  title: {
    fontSize: 24, fontWeight: '700', color: theme.colors.text,
    textAlign: 'center', marginBottom: 8,
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginLeft: 400,
    marginRight: 400,
  },
  card: {
    width: CARD, height: CARD,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius,
    borderWidth: 1, borderColor: theme.colors.border,
    alignItems: 'center', justifyContent: 'center',
  },
  emoji: { fontSize: 40 },
});
