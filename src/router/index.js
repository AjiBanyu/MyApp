import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Login, Splash, Register } from '../pages';


// variabel stack > yang mengimport createStackNavigator 
// * note : wajib harus ada create stack navigator

const Stack = createNativeStackNavigator()

export default function Router() {
    return (
        // pembungkus component stack.navigator > pembungkus dari stack.screen
        // initialRouteName > mengatur tampilan saat pertama kali di load/refresh
        // stack.screen > memiliki 2 props yang wajib
        // props name > untuk memberikan nama di setiap halaman yang di navigasi
        // prpos component > props yang menyesuaikan component yang ingin di render
        // props options ={{headerShown: false/true}} > untuk menghilangkan(false)/menampilkan(true) header pada setiap halaman

        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

