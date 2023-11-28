import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Paid from './paid';
import Postdetail from './postdetail';
import MoreCategories from './MoreCategories';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CreatePost from './CreatePost';



const PaidStackBar = createStackNavigator()

const PaidStack = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "PostDetail" || routeName === "MoreCategories" || routeName ==="CreatePost" ){
            navigation.setOptions({tabBarStyle: { display: 'none' }});
        }else {
            navigation.setOptions({tabBarStyle: {
            position: 'absolute',
            bottom: 8,
            left: 20,
            right: 20,
            backgroundColor: '#34363A',
            borderRadius: 64,
            height: 60,}});
        }
    }, [navigation, route]);
  return (
    <PaidStackBar.Navigator>
    <PaidStackBar.Screen name="Paid" component={Paid} options={{headerShown:  false}} />             
    <PaidStackBar.Screen name="PostDetail" component={Postdetail} options={{headerShown:  false}} swipeEnabled={false} />
    <PaidStackBar.Screen name="MoreCategories" component={MoreCategories} options={{headerShown:  false}} swipeEnabled={false} />
    <PaidStackBar.Screen name="CreatePost" component={CreatePost} options={{headerShown:  false}} swipeEnabled={false} />

   </PaidStackBar.Navigator>
  )
}

export default PaidStack

const styles = StyleSheet.create({})