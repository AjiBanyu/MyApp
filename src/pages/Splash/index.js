import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'

export default function Splash() {
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

