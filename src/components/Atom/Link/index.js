import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        color: '#7D8797',
        textDecorationLine: 'underline',
        textAlign: Align
        
    })
})
