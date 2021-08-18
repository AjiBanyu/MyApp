import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrow } from '../../../assets'
import { colors } from '../../../utils'
import { Button } from '../../Atom'

export default function Header({onPress, type, icon, title}) {
    return (
        <View style = {styles.container}>
            <Button type = "icon-only" icon = "back-dark" onPress = {onPress}/>
            <Text style = {styles.text} >{title}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 16,
    },
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        // color text di ambil dari component color yang sudah di export pada folder utils/colors
        color: colors.text.default
    }
})
