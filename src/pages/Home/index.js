import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Hospital1, Hospital2, Hospital3, IHospital } from '../../assets'
import { ListHospital } from '../../components/Molekul'
import { colors, fonts } from '../../utils'

export default function Home() {
    return (
        <View style = {styles.container}>
            <ImageBackground source = {IHospital} style = {{height: 250}}>
                <Text style = {styles.title}>Nearby Hospital</Text>
                <Text style = {styles.count}>3 Tersedia</Text>
            </ImageBackground>
            <View style = {styles.content}>
                <ListHospital img = {Hospital1}/>
                <ListHospital img = {Hospital2}/>
                <ListHospital img = {Hospital3}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: colors.secondary,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderRadius: 24,
        marginTop: -20,
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.primary[700],
        color: colors.white,
        marginTop: 20,
        textAlign: 'center'
    },
    count: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.white
    }
})
