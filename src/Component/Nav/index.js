import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Nav = () => {
    return (
        <View style = {styles.container_nav}>
             <Text>Aji</Text>
        </View>
    )
}

export default Nav

const styles = StyleSheet.create({
    container_nav: {
        height: 54,
        backgroundColor: "#F1E9E5"
    }
})
