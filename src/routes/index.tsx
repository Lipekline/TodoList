import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import TabRoutes from './tabs.routes';

const AppRoutes: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppRoutes;
