import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Postdetail from '../home/postdetail'
import Orgprofile from './orgprofile'
import Settings from '../home/settings'



const OrgProfileStackBar = createStackNavigator()

const OrgProfileStack = () => {
  return (
    <OrgProfileStackBar.Navigator>
    <OrgProfileStackBar.Screen name="OrgProfile" component={Orgprofile} options={{headerShown:  false}} />             
    <OrgProfileStackBar.Screen name="Settings" component={Settings} options={{headerShown:  false}} />             
   </OrgProfileStackBar.Navigator>
  )
}

export default OrgProfileStack

