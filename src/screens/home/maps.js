
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants';

import MapView, { Marker, Region } from 'react-native-maps';
import styles from '../../Styles_holder'
import { getPaidJobs, getCommunityJobs } from '../../apiCalls';
import { useIsFocused } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const Maps = () => {
  const isFocused = useIsFocused();
  const [paidMarkerPoints, setPMarkerpoints] = useState([
    {
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
  ]);
  const [communityMarkerPoints, setCMarkerpoints] = useState([
  ] );

  const onRegionChange = (region) => {
  //  console.log(region)
  }
  useEffect(()=>{
   async function getLocations(){
    if(isFocused){
      const paid = await getPaidJobs();

      const community = await getCommunityJobs();
     
      
      let paidLocations = paid.jobs.map((job) => job.location);
    
      setPMarkerpoints([...paidMarkerPoints, ...paidLocations]);
      let communityLocations = community.jobs.map((job)=> job.location)
    
      console.log(communityLocations)
      setCMarkerpoints([... communityMarkerPoints, ...communityLocations])
    }
  }
    getLocations();
  },  [isFocused])

  

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
        {paidMarkerPoints.map((location)=>{
          return (<Marker
           
            coordinate={location}
            pinColor="#ADA82F"
            onPress={onMarkerPressed}
          />)
        })}
        {communityMarkerPoints.map((location)=>{
          return (<Marker
           
            coordinate={location}
            pinColor="#2FAD97"
            onPress={onMarkerPressed}
          />)
        })}
        {/* <Marker
          // id='marker'
          // draggable
          coordinate={markerPoints[0]}
          // onDragEnd={(e) => setmarkerPoint const allJobs = [...paid.jobs, ...community.jobs]
      let found =allJobs.map((job)=>job.location)s(prev => [e.nativeEvent.coordinate, ...prev])}
          pinColor='#112233'
          // onPress={()=>onMarkerSelected(marker)}
          onPress={onMarkerPressed}
        />
        <Marker
          // id='marker'
          // draggable
          coordinate={markerPoints[1]}
          //onDragEnd={(e) => setmarkerPoints(e.nativeEvent.coordinate)}
          pinColor='#112233'
          // onPress={()=>onMarkerSelected(marker)}
          onPress={onMarkerPressed}
        />
        <Marker
          // id='marker'
          // draggable
          coordinate={markerPoints[2]}
          //onDragEnd={(e) => setmarkerPoints(e.nativeEvent.coordinate)}
          pinColor='#112233'
          // onPress={()=>onMarkerSelected(marker)}
          onPress={onMarkerPressed}
        />
        <Marker
        // id='marker'
        // draggable
        coordinate={markerPoints[3]}
        //onDragEnd={(e) => setmarkerPoints(e.nativeEvent.coordinate)}
        pinColor='#112233'
        // onPress={()=>onMarkerSelected(marker)}
        onPress={onMarkerPressed}
      /><Marker
      // id='marker'
      // draggable
      coordinate={markerPoints[4]}
      //onDragEnd={(e) => setmarkerPoints(e.nativeEvent.coordinate)}
      pinColor='#112233'
      // onPress={()=>onMarkerSelected(marker)}
      onPress={onMarkerPressed}
    /><Marker
    // id='marker'
    // draggable
    coordinate={markerPoints[5]}
    //onDragEnd={(e) => setmarkerPoints(e.nativeEvent.coordinate)}
    pinColor='#112233'
    // onPress={()=>onMarkerSelected(marker)}
    onPress={onMarkerPressed}
  /> */}
      </MapView>




    </View>
  );
};

export default Maps;