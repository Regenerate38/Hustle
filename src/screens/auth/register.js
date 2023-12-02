import React, {useState, useEFfect} from 'react';
import { View,ImageBackground, Text, Dimensions, StyleSheet, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Login_screen from './login';
import styles from '../../Styles_holder';
import axios from 'axios'
import {setToken} from "../../components/asyncStorage"
import {setUser} from "../../components/asyncStorage"
import { useNavigation } from '@react-navigation/native';

function Signup_Screen(props) {
    const navigation = useNavigation();

    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail =(text)=>{
        setEmail(text);
    }
    const handleUsername =(text)=>{
        setUsername(text);
    }
    const handlePassword =(text)=>{
        setPassword(text);
    }
    const handleSubmit = async ()=>{
       await register({email, password, username, isOrg: false})
       
       
    }
   

    return(
        <View style={styles.Message}>
        <Text style={styles.Login_screen_text1} >
            Join Us!
        </Text>
        <View style={styles.Align_boxes_signup} >
            <View style={styles.Email} >
                <TextInput style={styles.Placeholder} placeholder='Enter Email' value={email} onChangeText={handleEmail} placeholderTextColor="#808080" keyboardType='default'></TextInput>
            </View>
            <View style={styles.Username_signup} >
                <TextInput style={styles.Placeholder} placeholder='Enter Username'  value={username} onChangeText={handleUsername} placeholderTextColor="#808080" keyboardType='default'></TextInput>
            </View>
            <View style={styles.Password_signup} >
                <TextInput style={styles.Placeholder} secureTextEntry={true} placeholder='Enter Password'  value={password} onChangeText={handlePassword} placeholderTextColor="#808080" keyboardType='default'></TextInput>
            </View>

        </View>
         <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.Signup_button_signup}>
                <Text style={styles.Button_text}>Sign Up</Text>
            </View>
            </TouchableOpacity>
       


        </View>
    );
}


const Signup_page = ({navigation}) => {
  return (
    <SafeAreaView>

    <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#fef9e3" />
    <TouchableOpacity style={styles.Back_button} onPress={() => navigation.goBack()}>    

    <Image  style={styles.Back_button} source={require('../../assets/icons/back.png')} />
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