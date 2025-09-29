import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from './theme';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: theme.colors.bg,
    alignItems: 'center', justifyContent: 'center',
  },
  title: { fontSize: 24, fontWeight: '700', color: theme.colors.text },
});
