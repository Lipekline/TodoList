import React, { useEffect } from 'react';
import AppRoutes from './routes';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from './styles/colors';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: COLORS.primary }} />
      <AppRoutes />
    </>
  );
}
