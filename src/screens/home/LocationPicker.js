import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { COLORS } from '../../constants';
import { Image } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
// import MapView from 'react-native-maps-osmdroid';
import MapView, { Marker, Region } from 'react-native-maps';
import styles from '../../Styles_holder';
import { LocationContext } from '../../hooks/context';

const { width, height } = Dimensions.get("window");



const LocationPicker = ({ navigation }) => {
  const [coordinate, setCoordinate] = useState({})

  //const [DraggableMarkerCoordinates, setDraggableMarkerCoordinates] = useContext(LocationContext);
  const [DraggableMarkerCoordinates, setDraggableMarkerCoordinates] = useState({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 27.7215,
    longitude: 85.3201,
  });

  const onMarkerPressed = (marker) => {
    setCoordinate(marker.nativeEvent.coordinate)
    console.log(coordinate)
  }

  const backHandler = () => {
    console.log(DraggableMarkerCoordinates)
    navigation.navigate("CreatePost", { coordinate: DraggableMarkerCoordinates });
  }


  return (
    <View
      style={{
        flex: 1
      }}>
      <View style={styles.PostDetailPage_back_container}>
        <Image source={require('../../assets/icons/back.png')}
          style={styles.PostDetailPage_back} onPress={backHandler} />
      </View>
      <MapView
        style={styles.Map_View}
        //onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 27.700769,
          longitude: 85.300140,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={DraggableMarkerCoordinates}
          onMarkerDragEnd={(e) => setDraggableMarkerCoordinates(e.nativeEvent.coordinate)}
          pinColor='#FF0000'
          onPress={onMarkerPressed}
        />
      </MapView> 
    </View>
  );
};

export default LocationPicker;
