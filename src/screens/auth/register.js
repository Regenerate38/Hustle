import React, { useState, useEFfect } from 'react';
import { View, ImageBackground, Text, Dimensions, StyleSheet, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Login_screen from './login';
import styles from '../../Styles_holder';
import axios from 'axios'
import { register } from '../../apiCalls';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-ui-lib';

function Signup_Screen(props) {
    const navigation = useNavigation();
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isSelected, setSelection] = useState(false);

    const handleEmail = (text) => {
        setEmail(text);
    }
    const handleUsername = (text) => {
        setUsername(text);
    }
    const handlePassword = (text) => {
        setPassword(text);
    }
    const handleSubmit = async () => {
        if (!email || !password || !username) {
            console.log("required")
        } else {
            const status = await register({ email, password, name: username, isOrg: isSelected })
            console.log(status);
            if (status) navigation.navigate("Home")
            else console.log("error in register")
        }
    }

    return (
        <View style={styles.Message}>
            <Text style={styles.Login_screen_text1} >
                Join Us!
            </Text>
            <View style={styles.Align_boxes_signup} >
                <View style={styles.Email} >
                    <TextInput style={styles.Placeholder} placeholder='Enter Email' value={email} onChangeText={handleEmail} placeholderTextColor="#808080" keyboardType='default'></TextInput>
                </View>
                <View style={styles.Username_signup} >
                    <TextInput style={styles.Placeholder} placeholder='Enter Username' value={username} onChangeText={handleUsername} placeholderTextColor="#808080" keyboardType='default'></TextInput>
                </View>
                <View style={styles.Password_signup} >
                    <TextInput style={styles.Placeholder} secureTextEntry={true} placeholder='Enter Password' value={password} onChangeText={handlePassword} placeholderTextColor="#808080" keyboardType='default'></TextInput>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isSelected}
                        color='#7dad2f'
                        onValueChange={() => setSelection(!isSelected)}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>Are you an Organization?</Text>
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