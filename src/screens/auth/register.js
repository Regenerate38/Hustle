import React from 'react';
import { View, ImageBackground, Text, Dimensions, StyleSheet, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Login_screen from './login';
import styles from '../../Styles_holder';
const screenHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;

function Signup_Screen(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.Message}>
            <Text style={styles.Login_screen_text1} >
                Join Us!
            </Text>
            <View style={styles.SignupPage_stats_container}>

                <View style={styles.ProfilePage_csp_container}>
                <Image source={require('../../../src/assets/fakeoda.png')} style={styles.SignupPage_pfp} />

                </View>

                <View style={styles.ProfilePage_psp_container}>
                    <Text style={styles.SignupPage_psp_label}>Select Profile Image</Text>
                   
                </View>
            </View>
            <View style={styles.Align_boxes_signup} >
                <View style={styles.Email} >
                    <TextInput style={styles.Placeholder} placeholder='Enter Name' placeholderTextColor="#808080" keyboardType='default'></TextInput>
                </View>
                <View style={styles.Username_signup} >
                    <TextInput style={styles.Placeholder} placeholder='Enter Mobile Number' placeholderTextColor="#808080" keyboardType='default'></TextInput>
                </View>


            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.Signup_button_signup}>
                    <Text style={styles.Button_text}>Sign Up</Text>
                </View>
            </TouchableOpacity>








        </View>
    );
}


const Signup_page = ({ navigation }) => {
    return (
        <SafeAreaView>

            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#fef9e3" />
            <TouchableOpacity style={styles.Back_button} onPress={() => navigation.goBack()}>

                <Image style={styles.Back_button} source={require('../../assets/icons/back.png')} />
            </TouchableOpacity>
            <ImageBackground
                resizeMode='center'
                style={(styles.Bg_img)}
                fadeDuration={1000}
                source={require('../../assets/Landing_Page_Background.jpg')} >


            </ImageBackground>
            <Signup_Screen />
        </SafeAreaView>
    );
}
export default Signup_page;