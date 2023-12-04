import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../constants';

import MapView, { Marker, Region } from 'react-native-maps';
import styles from '../../Styles_holder'

const { width, height } = Dimensions.get("window");

const Maps = () => {

  const onRegionChange = (region) => {
    console.log(region)
  }

  const [DraggableMarkerCoordinates, setDraggableMarkerCoordinates] = useState([{
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 27.7815,
    longitude: 85.351,
  },
  {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 27.7265,
    longitude: 85.3691,
  },
  {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 27.7495,
    longitude: 85.3201,
  },
  {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 27.7215,
    longitude: 85.3201,
  },
  {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 27.7295,
    longitude: 85.3291,
  },
  {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 27.7115,
    longitude: 85.3251,
  },
]
  );
  

  const onMarkerPressed = (ev) => {
    console.log(ev);
  }



  return (
    <View
      style={{
        flex: 1
      }}>

      <MapView
        style={styles.Map_View}
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
          // draggable
          coordinate={DraggableMarkerCoordinates[0]}
          // onDragEnd={(e) => setDraggableMarkerCoordinates(prev => [e.nativeEvent.coordinate, ...prev])}
          pinColor='#112233'
          // onPress={()=>onMarkerSelected(marker)}
          onPress={onMarkerPressed}
        />
        <Marker
          // id='marker'
          // draggable
          coordinate={DraggableMarkerCoordinates[1]}
          //onDragEnd={(e) => setDraggableMarkerCoordinates(e.nativeEvent.coordinate)}
          pinColor='#112233'
          // onPress={()=>onMarkerSelected(marker)}
          onPress={onMarkerPressed}
        />
        <Marker
          // id='marker'
          // draggable
          coordinate={DraggableMarkerCoordinates[2]}
          //onDragEnd={(e) => setDraggableMarkerCoordinates(e.nativeEvent.coordinate)}
          pinColor='#112233'
          // onPress={()=>onMarkerSelected(marker)}
          onPress={onMarkerPressed}
        />
        <Marker
        // id='marker'
        // draggable
        coordinate={DraggableMarkerCoordinates[3]}
        //onDragEnd={(e) => setDraggableMarkerCoordinates(e.nativeEvent.coordinate)}
        pinColor='#112233'
        // onPress={()=>onMarkerSelected(marker)}
        onPress={onMarkerPressed}
      /><Marker
      // id='marker'
      // draggable
      coordinate={DraggableMarkerCoordinates[4]}
      //onDragEnd={(e) => setDraggableMarkerCoordinates(e.nativeEvent.coordinate)}
      pinColor='#112233'
      // onPress={()=>onMarkerSelected(marker)}
      onPress={onMarkerPressed}
    /><Marker
    // id='marker'
    // draggable
    coordinate={DraggableMarkerCoordinates[5]}
    //onDragEnd={(e) => setDraggableMarkerCoordinates(e.nativeEvent.coordinate)}
    pinColor='#112233'
    // onPress={()=>onMarkerSelected(marker)}
    onPress={onMarkerPressed}
  />
      </MapView>




    </View>
  );
};

export default Maps;