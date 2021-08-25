import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'


//Activityidicator > library dari react menampilkan sebuah spinner


export default function Loading() {
    return (
        <View style = {styles.container}>
            <ActivityIndicator size="large" color= {colors.primary}/>
            <Text style = {styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
        
    },
    text: {
        marginTop: 10,
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.primary
    }
    // spinner: {
    //     width: 50,
    //     height: 50,
    // }
})
