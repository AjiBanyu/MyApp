import React from 'react';
import { StyleSheet } from 'react-native';
import { GetStarted, Splash } from './pages';

/*
1. membuat splash di folder pages/Splash/index.js
2. membuat GetStarted di folder pages/GetStarted/index.js
*/
const App = () => {
    return(
        
       // meng import dari folder pages/splash
    //    <Splash/>
       
    <GetStarted/>
    )
}

export default App;

const styles = StyleSheet.create({})
