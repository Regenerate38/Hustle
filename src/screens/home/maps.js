import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Switch } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';
import { Image } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps-osmdroid';



const { width, height } = Dimensions.get("window");

const Maps = () => {
  return (
  <View
  style={{
    flex: 1
  }}>
        <MapView
         style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  </View> 
  );
};

export default Maps;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
