import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function NewsItems({title, img}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.wrapper}>
                <View>
                    <Text style = {styles.title}>{title}</Text>
                    <Text style = {styles.date}>Today</Text>

                </View>
            </View>
                <View>
                    <Image source = {img} style = {{width:80 , height: 60, borderRadius: 15}}/> 
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.text.secondary,
        paddingHorizontal: 16
    },
    wrapper: {
        flex: 1,
    },
    title : {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        maxWidth: '90%'
    },
    date: {
        marginTop: 4,
        fontSize: 12,
        fontFamily: fonts.primary.normal

    }
})
