import React, { useEffect } from 'react';
import AppRoutes from './routes';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}
