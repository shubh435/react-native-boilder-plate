import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MAINSTACK } from '../constant/navigator';
import SplashScreens from '../screen/SplashScreens';
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';

const MainStack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={MAINSTACK.SPLASH}
    >
      <MainStack.Screen
        name={MAINSTACK.SPLASH}
        component={SplashScreens}
      />
      <MainStack.Screen name={MAINSTACK.LOGIN} component={LoginScreen} />
      <MainStack.Screen name={MAINSTACK.HOME} component={HomeScreen} />
    </MainStack.Navigator>
  );
};
export default MainNavigation;
