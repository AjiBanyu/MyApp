import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BottomNavigator } from '../components';
import { GetStarted, Home, Login, Register, Splash, Upload, Settings, Doctor } from '../pages';

// variabel stack > yang mengimport createStackNavigator 
// * note : wajib harus ada create stack navigator
const Stack = createNativeStackNavigator();

// variabel tab > yang mengimport createTabBottomnavigatior
// untuk membuat tab bottom navigator posisi navigasi berada di bawah 
const Tab = createBottomTabNavigator();


// function component MainApp> memanggil sebuah tab bottom navigator yang nanti akan di panggil pada function router
const MainApp = () => {
    return (
            // tabBar > untuk menjalankan BottomNavigator sesuai documentasinya di react native navigation
            <Tab.Navigator tabBar={props => <BottomNavigator {...props} />} >
                <Tab.Screen name = 'Home' component = {Home} options = {{headerShown: false}}/>
                <Tab.Screen name = 'Doctor' component = {Doctor} options = {{headerShown: false}}/>
                <Tab.Screen name = 'Settings' component = {Settings} options = {{headerShown: false}}/>
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

