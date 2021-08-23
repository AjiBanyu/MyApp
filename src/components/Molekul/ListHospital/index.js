import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Hospital3 } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function ListHospital({img}) {
    return (
        <View style = {styles.container}>
            <Image source = {img} style = {styles.imgHospital}/>
            <View>
                <Text style = {styles.title}>Rumah Sakit</Text>
                <Text style = {styles.title}>Citra Bunga Merdeka</Text>
                <Text style = {styles.address}>Jl Surya 16 Merdeka</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 16,
    },
    imgHospital: {
        width: 90,
        height: 70,
        borderRadius: 15,
        marginRight: 16
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.text.default
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary
    }
})
