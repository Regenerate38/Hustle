import { Button, Image,ImageBackground, StyleSheet, Text, View, Platform ,StatusBar, Dimensions,TouchableOpacity, SafeAreaView } from 'react-native';
import Login_screen from './login';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import styles from '../../Styles_holder';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../useContext/context';
import { useContext } from 'react';

function Login_selection(props){
    const navigation = useNavigation();
    const auth = useContext(AuthContext);
    const signUp = ()=> {
        auth.signIn(); 
        navigation.navigate('Home');
    };

    return(
        <View style={styles.Message}>
        
            <Image style={styles.Logo} source={require("../../assets/logo.png")} />
            <Text style={styles.Title_text}>
            {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}

                Looking to make a quick buck by doing mundane
                 tasks for others?{'\n'}
                 Looking to give back to the society by volunteering for projects of social and
                 environmental welfare?{'\n'}
                 Looking to hire others to do the task you don't have time for right now?{'\n'}{'\n'}
                 <Text style={styles.Title_subtext} >
                    Then you are in the right place.{'\n'}
                 </Text>
            </Text>

            <TouchableOpacity onPress={()=> navigation.navigate('Login') }>
            <View style={styles.Login_button}>
                <Text style={styles.Button_text}>Login</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={signUp}>
            <View style={styles.Signup_button}>
                <Image style={styles.Logo1_signup} source={require("../../assets/Google_Logo.png")} />
                <Text style={styles.Button_text}>Sign In with Google</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
}

function Login_screen2(props){
  return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: 'flex-start',
    }}>
    <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#fef9e3" /> 

          <ImageBackground 
     resizeMode='center'
    style={(styles.Bg_img)}
    fadeDuration={1000}
    source={require('../../assets/Landing_Page_Background.jpg')} >

    

    </ImageBackground>
    <Login_selection />
    </SafeAreaView>

   
  
  );
}
export default Login_screen2;
