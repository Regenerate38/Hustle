import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Postdetail from '../home/postdetail';
import Orgposts from '../orgui/orgposts';



const OrgPostStackBar = createStackNavigator()

const OrgPostStack = () => {
  return (
    <OrgPostStackBar.Navigator>
    <OrgPostStackBar.Screen name="OrgPosts" component={Orgposts} options={{headerShown:  false}} />             
    <OrgPostStackBar.Screen name="PostDetail" component={Postdetail} options={{headerShown:  false}}/>
   </OrgPostStackBar.Navigator>
  )
}

export default OrgPostStack

