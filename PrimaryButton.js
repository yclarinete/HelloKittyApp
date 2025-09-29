import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from './theme';

export default function PrimaryButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]} activeOpacity={0.85}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 240,                 // igual ao mock
    height: 44,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: { color: '#fff', fontWeight: '600', fontSize: 15 },
});
