import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/screens/home/AuthStack';
import AuthContext from './src/useContext/context';
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";

const App = () => {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();
  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        "521802120010-morf7ll53vi39dhneoud60vfko6j8rp6.apps.googleusercontent.com",
      androidClientId:
        "521802120010-qf5g8hnvtp29gr8qohg4gdenfm4966o2.apps.googleusercontent.com",
      iosClientId:
        "521802120010-nrcu15qe9kmi09jghegh90lg4h5mnce3.apps.googleusercontent.com",
    });
  };
  
  useEffect(() => {
    configureGoogleSignIn();
  });
  
  const signIn = async () => {
    console.log("Pressed sign in");
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      setError();
      console.log("Worked sign in");
    } catch (e) {
      setError(e);
    }
  };
  
  const logout = () => {
    setUserInfo(undefined);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{userInfo, signIn, logout}}>
        <AuthStack/>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});