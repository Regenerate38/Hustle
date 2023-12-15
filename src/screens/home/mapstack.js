import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import styles from "../../Styles_holder";

import Maps from './maps';
import Postdetail from './postdetail';
import MoreCategories from './MoreCategories';


const MapStackBar = createStackNavigator()

const MapStack = ({navigation, route}) => {
   React.useLayoutEffect(() => {
     const routeName = getFocusedRouteNameFromRoute(route);
     if (
       routeName === "PostDetail" ||
       routeName === "MoreCategories" ||
       (routeName === "CreatePost") | (routeName === "LocationPicker")
     ) {
       navigation.setOptions({ tabBarStyle: { display: "none" } });
     } else {
       navigation.setOptions({ tabBarStyle: styles.BottomTabBar });
     }
   }, [navigation, route]);
  return (
    <MapStackBar.Navigator>
    <MapStackBar.Screen name="Maps" component={Maps} options={{headerShown:  false}} />             
    <MapStackBar.Screen name="PostDetail" component={Postdetail} options={{headerShown:  false}}/>
    <MapStackBar.Screen name="MoreCategories" component={MoreCategories} options={{headerShown:  false}} />
   </MapStackBar.Navigator>
  )
}

export default MapStack

