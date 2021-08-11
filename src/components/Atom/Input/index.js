import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Input({title}) {
    return (
        <View>
            <Text style = {styles.text}>{title}</Text>
            <TextInput style = {styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        borderColor: '#e9e9e9',
        height: 40
    },
    text:{
        fontSize: 14,
        fontFamily: 'Nunito-Light',
        marginBottom: 10
    }
})
