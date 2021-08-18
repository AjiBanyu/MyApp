import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'

export default function Link({title, size, Align}) {
    return (
        <View>
            <Text style = {styles.text(size, Align)}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: (size, Align) => ({
        fontSize: size,
        color: colors.text.secondary,
        textDecorationLine: 'underline',
        textAlign: Align
        
    })
})
