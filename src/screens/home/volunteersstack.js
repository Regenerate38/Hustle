import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Postdetail from './postdetail';
import MoreCategories from './MoreCategories';
import Volunteers from './volunteers';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import styles from '../../Styles_holder';

const VolunteersStackBar = createStackNavigator()

const VolunteersStack = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "VPostDetail"){
            navigation.setOptions({tabBarStyle: { display: 'none' }});
        }else {
            navigation.setOptions({tabBarStyle: styles.BottomTabBar});
        }
    }, [navigation, route]);
  return (
    <VolunteersStackBar.Navigator>
    <VolunteersStackBar.Screen name="Paid" component={Volunteers} options={{headerShown:  false}} />             
    <VolunteersStackBar.Screen name="VPostDetail" component={Postdetail} options={{headerShown:  false}} swipeEnabled={false}/>
   </VolunteersStackBar.Navigator>
  )
}

export default VolunteersStack

