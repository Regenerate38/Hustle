import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './profile';


const ProfileStackBar = createStackNavigator()
const ProfileStack = () => {
  return (
    <ProfileStackBar.Navigator>
    <ProfileStackBar.Screen name="Profile" component={Profile} options={{headerShown:  false}} />             
   </ProfileStackBar.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})