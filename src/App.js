import React from 'react';
import { StyleSheet } from 'react-native';
import { GetStarted, Splash } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

// import navigationContainer > di ambil dari react-navigation sebelumnya harus menginstall terlebih dahulu 

/*
1. membuat splash di folder pages/Splash/index.js
2. membuat GetStarted di folder pages/GetStarted/index.js



pembungkus navigation container > agar halaman bisa berpindah 
*/
const App = () => {
    return(
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
    )
}

export default App;

const styles = StyleSheet.create({})
