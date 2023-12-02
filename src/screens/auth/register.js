import React, {useState} from 'react';
import { View, ImageBackground, Text, Dimensions, StyleSheet, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Login_screen from './login';
import styles from '../../Styles_holder';
const screenHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
import { register } from '../../apiCalls';
import { getUserInfo, saveUser } from '../../hooks/asyncStorage';
const screenWidth = Dimensions.get('window').width;

    
function Signup_Screen(props) {
    const navigation = useNavigation();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleName=(e)=>{
        setName(e)
    }
    const handlePhone=(e)=>{
        console.log(phone)
        setPhone(e)
    }
    const handleSubmit= ()=>{
       const callingFunc=async ()=>{
        const userInfo= await getUserInfo()
        const {email}= await JSON.parse(userInfo)
        const user = await register({email, name, phone, isOrg:true})
        console.log(user.data) 
    }
    callingFunc()
       navigation.navigate("Home")
    }

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
                    <TextInput style={styles.Placeholder} value={name} onChangeText={handleName} placeholder="Enter name" placeholderTextColor="#808080" keyboardType='default'></TextInput>
                </View>
                <View style={styles.Username_signup} >
                    <TextInput style={styles.Placeholder} value={phone} onChangeText={handlePhone} placeholder='Enter Mobile Number' placeholderTextColor="#808080" keyboardType='default'></TextInput>
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