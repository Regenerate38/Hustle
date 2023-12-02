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

  const [DraggableMarkerCoordinates, setDraggableMarkerCoordinates] = useState({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    latitude: 27.7215,
    longitude: 85.3201,
  });

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
          draggable
          coordinate={DraggableMarkerCoordinates}
          onDragEnd={(e) => setDraggableMarkerCoordinates(e.nativeEvent.coordinate)}
          pinColor='#009988'
          // onPress={()=>onMarkerSelected(marker)}
          onPress={onMarkerPressed}
        />
      </MapView>




    </View>
  );
};

export default Maps;