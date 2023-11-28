import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native-ui-lib';
import { View, StyleSheet, Text } from 'react-native';
import PaidStack from '../screens/home/paidstack';
import MapStack from '../screens/home/mapstack';
import ProfileStack from '../screens/home/profilestack';
import VolunteersStack from '../screens/home/volunteersstack';

const Tab = createBottomTabNavigator();

const Bottomtabnagivator =  () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headershown: false,
      // tabBarItemStyle: {width: "auto", minWidth: "100", height: 70, maxHeight: 70},
      shifting : 'true',
      tabBarStyle : {
        position: 'absolute',
        bottom: 8,
        left: 20,
        right: 20,
        backgroundColor: '#34363A',
        borderRadius: 64,
        height: 70,
      }
    }} >
     <Tab.Screen name='Maps' component={MapStack} options={{
        headerShown:  false, 
        tabBarLabel: ({ focused }) => {
          return <Text style={{fontSize: 16, fontWeight: '600', color: "#fff", paddingLeft: 40}}>{focused ? 'Map' : ""}</Text>
        },
        tabBarActiveBackgroundColor: '#F55943',
         tabBarItemStyle: {  
         borderRadius: 32,
         borderWidth: 5,
         borderColor: '#34363A'
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
            source ={require('../assets/icons/maps.png')}
            resizeMode = 'contain'
            style = {{
              width: 32,
              height: 32,
              marginLeft: 50,
              marginRight: 20,
              tintColor : focused ? '#ffffff' :  '#F55943'
            }}/>
          </View >

        )
         }}/>
      <Tab.Screen name="Paid" component={PaidStack} options={{
        headerShown:  false,
        tabBarLabel: ({ focused }) => {
          return <Text style={{fontSize: 16, fontWeight: '600', color: "#fff", marginLeft: 25}}>{focused ? 'Paid' : ""}</Text>
        },
        tabBarActiveBackgroundColor: '#ADA82F',
        tabBarItemStyle: {  
          align:'center',
          borderRadius: 32,
          borderWidth: 5,
          borderColor: '#34363A'
         },
        tabBarLabelPosition: 'beside-icon',
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
            source ={require('../assets/icons/paid.png')}
            resizeMode = 'contain'
            style = {{
              width: 32,
              marginLeft: 10,
              height: 32,
              tintColor : focused ? '#ffffff' :  '#ADA82F'
            }}/>
          </View >

        )
         }}/>
      <Tab.Screen name="Volunteers" component={VolunteersStack} options={{
        headerShown:  false,
        tabBarLabel: ({ focused }) => {
          return <Text style={{fontSize: 16, fontWeight: '600', color: "#fff", marginLeft: 15, textAlign: 'center'}}>{focused ? 'Volunteers' : ""}</Text>
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: '#2FAD97',
        tabBarItemStyle: {  
          borderRadius: 32,
          borderWidth: 5,
          borderColor: '#34363A'
         },
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
            source ={require('../assets/icons/volunteers.png')}
            resizeMode = 'contain'
            style = {{
              width: 32,
              height: 32,
              tintColor : focused ? '#ffffff' :  '#2FAD97'
            }}/>
          </View >

        )
         }}/>
               <Tab.Screen name="Profile" component={ProfileStack} options={{
        headerShown:  false,
        tabBarLabel: ({ focused }) => {
          return <Text style={{fontSize: 16, fontWeight: '600', color: "#fff", marginLeft: 15}}>{focused ? 'Profile' : ""}</Text>
        },
        tabBarActiveBackgroundColor: '#7DAD2F',
        tabBarItemStyle: {  
         borderRadius: 32,
         borderWidth: 5,
         borderColor: '#34363A',
         
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
            source ={require('../assets/icons/profile.png')}
            resizeMode = 'contain'
            style = {{
              width: 32,
              height: 32,
              tintColor : focused ? '#ffffff' :  '#7DAD2F'
            }}/>
          </View >

        )
         }}/>
    </Tab.Navigator>
  );
}

export default Bottomtabnagivator;

const styles = StyleSheet.create({});