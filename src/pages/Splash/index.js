import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'

export default function Splash({navigation}) {
    // useEffetct > memberikan efek pada splash beberapa detik lalu masuk ke getstarted
    // props navigation > di ambil dari router 
    // navigation.replace('value') > agar ketika bepindah ke halaman lain, ketika tombol back di pencet tidak bisa kembali ke halaman sebelumnya
    //  navigation.navigate(value) > bisa berpindah ke halaman lain dan bisa kembali saat tombol back di pencet
    //value > halaman yang ingin di tuju
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    },[navigation])
    return (
        <View style = {styles.pages}>
            <ILLogo style = {styles.logo}/>
            <Text style = {styles.title}>My App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    // flex 1 pada pembungkus agar pembungkus menjadi full 1 layar hp
    // aligItem > center secara horizontal , secara default flexdirection > coloum (kolom)
    // justifyContent > center secara vertikal , flexdirection > row (baris)
    pages: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 20,
        // fontWeight: '600', di ganti dengan nunito-semibold di fontFamily
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginTop: 20
    }
})

