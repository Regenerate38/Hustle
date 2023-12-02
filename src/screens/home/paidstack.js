import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Paid from './paid';
import Postdetail from './postdetail';
import MoreCategories from './MoreCategories';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CreatePost from './CreatePost';
import styles from '../../Styles_holder';
import LocationPicker from './LocationPicker';


const PaidStackBar = createStackNavigator()

const PaidStack = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "PostDetail" || routeName === "MoreCategories" || routeName ==="CreatePost" | routeName ==="LocationPicker" ){
            navigation.setOptions({tabBarStyle: { display: 'none' }});
        }else {
            navigation.setOptions({tabBarStyle: styles.BottomTabBar});
        }
    }, [navigation, route]);
  return (
    <PaidStackBar.Navigator>
    <PaidStackBar.Screen name="Paid" component={Paid} options={{headerShown:  false}} />             
    <PaidStackBar.Screen name="PostDetail" component={Postdetail} options={{headerShown:  false}} swipeEnabled={false} />
    <PaidStackBar.Screen name="MoreCategories" component={MoreCategories} options={{headerShown:  false}} swipeEnabled={false} />
    <PaidStackBar.Screen name="CreatePost" component={CreatePost} options={{headerShown:  false}} swipeEnabled={false} />
    <PaidStackBar.Screen name="LocationPicker" component={LocationPicker} options={{headerShown:  false}} />             
   </PaidStackBar.Navigator>
  )
}

export default PaidStack
