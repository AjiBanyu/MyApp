import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MessagesDoctor } from '../../components/Molekul'
import { Gap } from '../../components/Atom'
import { colors, fonts } from '../../utils'

export default function Settings() {
    return (
        <View style = {styles.pages}>
            <View style = {styles.container}>
                <Gap height = {30} />
                <Text style = {styles.title}>Messages</Text>
                <View style = {styles.messages}>
                    <MessagesDoctor/> 
                    <MessagesDoctor/> 
                    <MessagesDoctor/> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        // paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        paddingHorizontal: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.default,
        marginBottom: 16
    },
    messages: {
        // marginTop: 10
    }
})
