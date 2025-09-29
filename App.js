// App.js
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import ServicesScreen from './ServicesScreen';
import AccountScreen from './AccountScreen';
import SignupScreen from './SignupScreen';
import GalleryScreen from './GalleryScreen';
import { theme } from './theme';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: theme.colors.bg, primary: theme.colors.primary },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontWeight: '700' },
          headerTintColor: theme.colors.text,
          headerShadowVisible: true,
          contentStyle: { backgroundColor: theme.colors.bg },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '🎀 Hello Kitty' }} />
        <Stack.Screen name="Servicos" component={ServicesScreen} options={{ title: 'Serviços' }} />
        <Stack.Screen name="Conta" component={AccountScreen} />
        <Stack.Screen name="Cadastro" component={SignupScreen} />
        <Stack.Screen name="Galeria" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
