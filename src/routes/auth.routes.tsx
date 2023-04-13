import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../pages/Login';
import {SignUp} from '../pages/SignUp';
import {FundDetails} from '../pages/FundDetails';

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="FundDetails" component={FundDetails} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
