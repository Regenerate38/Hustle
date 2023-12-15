import React, { useEffect, useState } from 'react';

// import { ImageBackground, Image, StyleSheet, Text, View, Platform, StatusBar, Dimensions, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native'
// import styles from '../../Styles_holder';
// import { saveToken } from "../../components/asyncStorage"
// import { saveUser } from "../../components/asyncStorage"

import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Styles_holder";
import { saveToken, saveUser } from "../../hooks/asyncStorage";
import { login } from "../../apiCalls";

function Login_screen(props) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("mukundadeva440@gmail.com");

  const [password, setPassword] = useState("mukundamukunda");

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };
  const handleSubmit = async () => {
    if(!email || !password){
      console.log("required")
    }else{
      // console.log(email, password);
      const status = await login(email, password);
      if (status) navigation.navigate("Home");
      else console.log("error in login");
    };
  };

  return (
    <View style={styles.Message}>
      <Text style={styles.Login_screen_text1}>
        Hello Again{"\n"}
        {"\n"}
      </Text>

      <Text style={styles.Login_screen_text2}>
        Welcome Back!{"\n"}
        You have been missed.
      </Text>
      <View style={styles.Align_boxes}>
        <View style={styles.Username}>
          <TextInput
            style={styles.Placeholder}
            placeholder="Enter Email"
            value={email}
            onChangeText={handleEmail}
            placeholderTextColor="#808080"
            keyboardType="default"
          ></TextInput>
        </View>
        <View style={styles.Password}>
          <TextInput
            style={styles.Placeholder}
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePassword}c
            placeholderTextColor="#808080"
            keyboardType="default"
          ></TextInput>
        </View>
      </View>

      {/* <Text style={styles.Forgot_password} onPress={()=>console.log("Forgot Password")} >Forgot Password?</Text> */}
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.Login_Button}>
          <Text style={styles.Button_text}>Login</Text>
        </View>
      </TouchableOpacity>
      {/* <View style={styles.Continue_with}>
        <Text style={styles.Login_screen_text4}>{"\n"}Continue with:</Text>
        <TouchableOpacity onPress={() => console.log("Login through google")}>
          <Image
            style={styles.Logo1}
            source={require("../../assets/Google_Logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Login through facebook")}>
          <Image
            style={styles.Logo2}
            source={require("../../assets/Facebook_Logo.jpg")}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const Login_page = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="#fef9e3"
      />
      <TouchableOpacity
        style={styles.Back_button}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.Back_button}
          source={require("../../assets/icons/back.png")}
        />
      </TouchableOpacity>

      <ImageBackground
        resizeMode="contain"
        style={styles.Bg_img}
        fadeDuration={1000}
        source={require("../../assets/Landing_Page_Background.jpg")}
      ></ImageBackground>
      <Login_screen />
    </SafeAreaView>
  );
};
export default Login_page;
