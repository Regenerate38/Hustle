import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/screens/home/AuthStack';



const App = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});