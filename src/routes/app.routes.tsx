/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';

import {FundDetails} from '../pages/FundDetails';
import {Account} from '../pages/Account';
import {Home} from '../pages/Home';
import {Trade} from '../pages/Trade';
import {colors} from '../utils/colors';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="FundDetails" component={FundDetails} />
    </HomeStack.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'home'}
              size={24}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'repeat'}
              size={24}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'user'}
              size={24}
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
