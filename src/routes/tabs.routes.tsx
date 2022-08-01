import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { scaleSize } from '../styles/mixins';
import { COLORS } from '../styles/colors';
import IconHomeActive from '../assets/icons/icon-home-active.svg';
import IconHomeInative from '../assets/icons/icon-home-inative.svg';
import IconProfileActive from '../assets/icons/icon-profile-active.svg';
import IconProfileInative from '../assets/icons/icon-profile-inative.svg';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: scaleSize(16),
          paddingTop: scaleSize(16),
          height: scaleSize(73),
        },
        tabBarLabelStyle: { marginTop: scaleSize(5), fontSize: scaleSize(12) },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: COLORS.white,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? <IconHomeActive /> : <IconHomeInative />,
        }}
        component={Home}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) =>
            focused ? <IconProfileActive /> : <IconProfileInative />,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
