import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import {Navigator} from './Routes/drawer';

// Screens
import SearchTitle from './Screens/SearchTitle';
import SearchAuthor from './Screens/SearchAuthor';
import About from './Screens/About'
import Resources from './Screens/Resources'


function getFonts() {
  return Font.loadAsync({
    'playfair-display': require('./Assets/PlayfairDisplay-Regular.ttf'),
    'quicksand': require('./Assets/Quicksand-Medium.ttf'),
    'poppins-light': require('./Assets/Poppins-Light.ttf')
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
      {/* TODO: Add stack */}
        <Navigator />
      </View>
    );
  } 
  
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  }
})

