import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../constants';
import { Image } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
// import MapView from 'react-native-maps-osmdroid';
import MapView, { Marker, Region } from 'react-native-maps';
import styles from '../../Styles_holder';


const { width, height } = Dimensions.get("window");



const LocationPicker = ({navigation}) => {
    const [coordinate, setCoordinate]=useState({})
  
  const onRegionChange = (region ) =>{
    // console.log(region)
  }

  const[DraggableMarkerCoordinates,setDraggableMarkerCoordinates ] = useState({
    // latitude:27.43303,
    // longitude: 85.19217,
    latitude: 27.700769,
      longitude: 85.300140,
  });

  const onMarkerPressed = (marker) =>{
  setCoordinate(marker.nativeEvent.coordinate)
    console.log(coordinate)
    // console.log(marker.nativeEvent.coordinate)
  }

const backHandler=()=>{
    // onBackPressed() 
    console.log(DraggableMarkerCoordinates)
    navigation.navigate("CreatePost", {coordinate:DraggableMarkerCoordinates});
}


  return (
  <View
  style={{
    flex: 1
  }}>
  <View style={styles.PostDetailPage_back_container}>
      <Image source ={require('../../assets/icons/back.png')}
              style = {styles.PostDetailPage_back}    onPress={backHandler}  /> 
    </View>
        <MapView
         style={styles.map}
        onRegionChange={onRegionChange}
    initialRegion={{
      latitude: 27.700769,
      longitude: 85.300140,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  
  >
<Marker
// id='marker'
  draggable
  coordinate={DraggableMarkerCoordinates}
  onMarkerDragEnd={(e)=> setDraggableMarkerCoordinates(e.nativeEvent.coordinate)}
  pinColor='#FF0000'
  // onPress={()=>onMarkerSelected(marker)}
 onPress={onMarkerPressed}
/>
  </MapView>
  </View> 
  );
};

export default LocationPicker;
