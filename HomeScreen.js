import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { theme } from './theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {}
        <Image
          source={require('./assets/kitty.jpg')} 
          style={styles.image}
        />
      </View>

      <PrimaryButton
        title="Serviços"
        onPress={() => navigation.navigate('Servicos')}
        style={{ marginBottom: theme.spacing(1) }}
      />
      <PrimaryButton
        title="Conta"
        onPress={() => navigation.navigate('Conta')}
        style={{ marginBottom: theme.spacing(1) }}
      />
      <PrimaryButton
        title="Galeria"
        onPress={() => navigation.navigate('Galeria')}
      />

      <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
        Ainda não tem conta?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing(3),
  },
  card: {
    width: 220,
    height: 160,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  link: {
    marginTop: theme.spacing(2),
    color: theme.colors.subtle,
    fontSize: 12,
  },
});
