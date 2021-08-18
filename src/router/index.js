import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GetStarted, Home, Login, Register, Splash, Upload, Settings, Barcode } from '../pages';

// variabel stack > yang mengimport createStackNavigator 
// * note : wajib harus ada create stack navigator
const Stack = createNativeStackNavigator();

// variabel tab > yang mengimport createTabBottomnavigatior
// untuk membuat tab bottom navigator posisi navigasi berada di bawah 
const Tab = createBottomTabNavigator();


// function component MainApp> memanggil sebuah tab bottom navigator yang nanti akan di panggil pada function router
const MainApp = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name = 'Home' component = {Home}/>
                <Tab.Screen name = 'Barcode' component = {Barcode}/>
                <Tab.Screen name = 'Settings' component = {Settings}/>
            </Tab.Navigator>
    )
}

export default function Router() {
    return (
        // pembungkus component stack.navigator > pembungkus dari stack.screen
        // initialRouteName > mengatur tampilan saat pertama kali di load/refresh
        // stack.screen > memiliki 2 props yang wajib
        // props name > untuk memberikan nama di setiap halaman yang di navigasi
        // prpos component > props yang menyesuaikan component yang ingin di render
        // props options ={{headerShown: false/true}} > untuk menghilangkan(false)/menampilkan(true) header pada setiap halaman

        //Stack.Screem name="MainApp" component={mainApp} > memanggil sebuat stack navigator dengan component functional mainApp
        <Stack.Navigator initialRouteName = "MainApp">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Upload" component={Upload} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

