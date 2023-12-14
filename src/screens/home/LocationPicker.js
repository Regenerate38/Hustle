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
  const [location, setLocation] = useContext(LocationContext);
  const [confirmed, setConfirmed]= useState(false)

  const onMarkerPressed = (event) => {
    const { coordinate } = event.nativeEvent;
    setConfirmed(true);
    setLocation(coordinate);
  };

  const backHandler = (event) => {
    // Assuming you want to call onMarkerPressed before navigating

     const { coordinate } = event.nativeEvent;
     setLocation(coordinate);
     console.log(location)
    // Now, navigate to "CreatePost" with the correct coordinate
    navigation.navigate("CreatePost", { coordinate: location });
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
     {confirmed&& <View style={styles.PostDetailPage_back_container}>
        <Image
          source={require("../../assets/icons/tick-outline.png")}
          style={styles.PostDetailPage_back}
          onPress={backHandler}
        />
      </View>}
      <MapView
        style={styles.Map_View}
        //onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 27.700769,
          longitude: 85.30014,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={location}
          onMarkerDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
          pinColor="#FF0000"
          onPress={onMarkerPressed}
        />
      </MapView>
    </View>
  );
};

export default LocationPicker;
