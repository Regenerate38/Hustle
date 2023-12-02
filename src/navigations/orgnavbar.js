import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native-ui-lib';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../Styles_holder';
import OrgPostStack from '../screens/orgui/orgpostsstack';
import OrgProfileStack from '../screens/orgui/orgprofilestack';

const Tab = createBottomTabNavigator();

const OrgNavBar =  () => {
  return (
    <Tab.Navigator 
      screenOptions={{

      shifting : 'true',
      tabBarStyle : styles.BottomTabBar,
     }} >
        <Tab.Screen name='Org Tasks' component={OrgPostStack} options={{
                headerShown:  false, 
                tabBarShowLabel: false,
               tabBarLabel: ({ focused }) => {
                  return <Text style={{fontSize: 15, fontWeight: '600', color: "#fff", paddingLeft: 28}}>{focused ? 'Map' : ""}</Text>
                 },
                tabBarActiveBackgroundColor: '#F55943',
                tabBarItemStyle: {  
                    borderRadius: 32,
                    borderWidth: 6  ,
                    borderColor: '#34363A'
                  },
                //tabBarLabelPosition: 'beside-icon',
                tabBarIcon: ({focused}) => (
                <View>
                     <Image 
                      source ={require('../assets/icons/maps.png')}
                      resizeMode = 'contain'
                    style = {{
                     
                      tintColor : focused ? '#ffffff' :  '#F55943'
            }}/>
          </View >

        )
         }}/>
     
        <Tab.Screen name="Org Profile" component={OrgProfileStack} options={{
        headerShown:  false,
        tabBarShowLabel: false,
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

export default OrgNavBar;
