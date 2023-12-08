import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Paid from './paid';
import Postdetail from './postdetail';
import MoreCategories from './MoreCategories';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CreatePost from './CreatePost';
import styles from '../../Styles_holder';
import LocationPicker from './LocationPicker';
import { LocationContext } from '../../hooks/context';

const PaidStackBar = createStackNavigator()

const PaidStack = ({ navigation, route }) => {
    const [location, setLocation] = useState({
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        latitude: 27.7215,
        longitude: 85.3201,
      });
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "PostDetail" || routeName === "MoreCategories" || routeName ==="CreatePost" | routeName ==="LocationPicker" ){
            navigation.setOptions({tabBarStyle: { display: 'none' }});
        }else {
            navigation.setOptions({tabBarStyle: styles.BottomTabBar});
        }
    }, [navigation, route]);
  return (
    <LocationContext.Provider value={[location, setLocation]}>
        <PaidStackBar.Navigator>
            <PaidStackBar.Screen name="Paid" component={Paid} options={{headerShown:  false}} />             
            <PaidStackBar.Screen name="PostDetail" component={Postdetail} options={{headerShown:  false}} swipeEnabled={false} />
            <PaidStackBar.Screen name="MoreCategories" component={MoreCategories} options={{headerShown:  false}} swipeEnabled={false} />
            <PaidStackBar.Screen name="CreatePost" component={CreatePost} options={{headerShown:  false}} swipeEnabled={false} />
            <PaidStackBar.Screen name="LocationPicker" component={LocationPicker} options={{headerShown:  false}} />             
    </PaidStackBar.Navigator>
    </LocationContext.Provider>

  )
}

export default PaidStack
