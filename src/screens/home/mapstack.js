import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Maps from './maps';
import Postdetail from './postdetail';
import MoreCategories from './MoreCategories';


const MapStackBar = createStackNavigator()

const MapStack = () => {
  return (
    <MapStackBar.Navigator>
    <MapStackBar.Screen name="Maps" component={Maps} options={{headerShown:  false}} />             
    <MapStackBar.Screen name="PostDetail" component={Postdetail} options={{headerShown:  false}}/>
    <MapStackBar.Screen name="MoreCategories" component={MoreCategories} options={{headerShown:  false}} />
   </MapStackBar.Navigator>
  )
}

export default MapStack

