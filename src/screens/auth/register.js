import React, {useState, useEFfect} from 'react';
import { View,ImageBackground, Text, Dimensions, StyleSheet, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Login_screen from './login';
import styles from '../../Styles_holder';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        setUser({email, name:username, password, isOrg:false})
        console.log(user)
        const res =await axios.post("http://10.0.2.2:5000/auth/register", user )
        console.log(res.data)
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