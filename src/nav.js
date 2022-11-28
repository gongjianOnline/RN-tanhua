// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/account/login/index"
import UserInfo from './pages/account/userInfo';
import Home from "./pages/home/index"

const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}} 
        initialRouteName='Login'>
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="UserInfo" component={UserInfo} />
        <Stack.Screen  name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;