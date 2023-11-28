import React from 'react';
import { View,ImageBackground, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Login_screen from './login';
import styles from '../../Styles_holder';
const screenHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;

function Signup_Screen(props) {
    const navigation = useNavigation();

    return(
        <View style={styles.Message}>
        <Text style={styles.Login_screen_text1} >
            Join Us!
        </Text>
        <View style={styles.Align_boxes_signup} >
            <View style={styles.Email} >
                <TextInput style={styles.Placeholder} placeholder='Enter Email' keyboardType='default'></TextInput>
            </View>
            <View style={styles.Username_signup} >
                <TextInput style={styles.Placeholder} placeholder='Enter Username' keyboardType='default'></TextInput>
            </View>
            <View style={styles.Password_signup} >
                <TextInput style={styles.Placeholder} placeholder='Enter Password' keyboardType='default'></TextInput>
            </View>

        </View>
         <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <View style={styles.Signup_button_signup}>
                <Text style={styles.Button_text}>Sign Up</Text>
            </View>
            </TouchableOpacity>
        <View style={styles.Signup_with}>
            <Text style={styles.Signup_screen_text2}>Continue with:</Text>
            <TouchableOpacity onPress={()=>console.log("Signup through google")}>
            <Image style={styles.Logo1_signup} source={require("../../assets/Google_Logo.png")} />

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("Signup through facebook")}>
            <Image style={styles.Logo2_signup} source={require('../../assets/Facebook_Logo.jpg')} />           

            </TouchableOpacity>
            </View>


        </View>
    );
}


function Signup_page(props){
  return (
    <View>
    <TouchableOpacity style={styles.Back_button} onPress={()=>navigation.navigate.back()}>
    

    <Image  source={require('../../assets/icons/back.png')} />
    </TouchableOpacity>
<ImageBackground 
     resizeMode='center'
    style={(styles.Bg_img)}
    fadeDuration={1000}
    source={require('../../assets/Landing_Page_Background.jpg')} >


    </ImageBackground>
    <Signup_Screen />
</View>
  );
}
export default Signup_page;