import React, { cloneElement } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Platform ,StatusBar, Dimensions,TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles_holder';

function Login_screen(props) {
    const navigation = useNavigation();

    return(
        <View style={styles.Message}>

            <Text style={styles.Login_screen_text1} >
                Hello Again{'\n'}{'\n'}
            </Text>

            <Text style={styles.Login_screen_text2} >
                Welcome Back!{'\n'}
                You have been missed.
            </Text>
            <View style={styles.Align_boxes}> 
            <View style={styles.Username} >
                <TextInput style={styles.Placeholder} placeholder='Enter Username' placeholderTextColor="#808080" keyboardType='default'></TextInput>
            </View>
            <View style={styles.Password} >
                <TextInput style={styles.Placeholder} placeholder='Enter Password' placeholderTextColor="#808080" keyboardType='default'></TextInput>
            </View>
            </View>
            
           
            <Text style={styles.Forgot_password} onPress={()=>console.log("Forgot Password")} >Forgot Password?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <View style={styles.Login_Button}>
                <Text style={styles.Button_text}>Login</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.Continue_with}>
            <Text style={styles.Login_screen_text4}>{'\n'}Continue with:</Text>
            <TouchableOpacity onPress={()=>console.log("Login through google")}>
            <Image style={styles.Logo1} source={require("../../assets/Google_Logo.png")} />

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("Login through facebook")}>
            <Image style={styles.Logo2} source={require('../../assets/Facebook_Logo.jpg')} />           

            </TouchableOpacity>
            </View>
        </View>
    );
}


function Login_page(props){
  return (
    
    <SafeAreaView style={{
        flex: 1,
    }}>
    <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#fef9e3" />
    <TouchableOpacity style={styles.Back_button} onPress={()=>navigation.back()}>
    

    <Image style={styles.Back_button} source={require('../../assets/icons/back.png')} />
    </TouchableOpacity>

          <ImageBackground 
     resizeMode='contain'
    style={(styles.Bg_img)}
    fadeDuration={1000}
    source={require('../../assets/Landing_Page_Background.jpg')} >

    

    </ImageBackground>
    <Login_screen />
    </SafeAreaView>

   
  
  );
}
export default Login_page;

