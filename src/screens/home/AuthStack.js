import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Signup_page from '../auth/register';
import Login_page from '../auth/login';
import BottomTabLoader from './BottomTabLoader';
import Background_Img from '../auth/Landingpage';
import Login_screen2 from '../auth/Login_Selection';
import Profile from './profile';
import AuthContext from '../../hooks/context';
import {  } from 'react';

const AuthStackBar = createStackNavigator()

const AuthStack = ({ navigation }) => {
  const auth = (AuthContext);
  return (
    !auth.userInfo ?
      <AuthStackBar.Navigator>
        <AuthStackBar.Screen name="Landing" component={Login_screen2} options={{ headerShown: false }} />
        <AuthStackBar.Screen name="Login" component={Login_page} options={{ headerShown: false }} />
        <AuthStackBar.Screen name="SignUp" component={Signup_page} options={{ headerShown: false }} />
        <AuthStackBar.Screen name="Home" component={BottomTabLoader} options={{ headerShown: false }} />
        <AuthStackBar.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </AuthStackBar.Navigator>
      :
      <AuthStackBar.Navigator>
        <AuthStackBar.Screen name="Home" component={BottomTabLoader} options={{ headerShown: false }} />
        <AuthStackBar.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <AuthStackBar.Screen name="Landing" component={Login_screen2} options={{ headerShown: false }} />
      </AuthStackBar.Navigator>
  )
}

export default AuthStack
