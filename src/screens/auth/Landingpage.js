import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Platform ,StatusBar, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Login_screen from './login';
import styles from '../../Styles_holder';
const screenHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;

function Background_Img(props){
  const navigation = useNavigation();

  return (
    <View>
    <TouchableOpacity style={styles.Back_button} onPress={()=>navigation.goBack()}>
    

    <Image  source={require('../../assets/icons/back.png')} />
    </TouchableOpacity>

          <ImageBackground 
     resizeMode='center'
    style={(styles.Bg_img)}
    fadeDuration={1000}
    source={require('../../assets/Landing_Page_Background.jpg')} >

    

    </ImageBackground>
    <Login_screen/>
    </View>

   
  
  );
}


export default Background_Img;
