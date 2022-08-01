import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
        }}
        component={Home}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          title: 'Perfil',
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
