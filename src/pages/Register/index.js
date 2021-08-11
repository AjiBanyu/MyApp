import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LeftArrow } from '../../assets'
import { Button, Header, Input } from '../../components'

export default function Register() {
    return (
        <View style = {styles.page}>
            <View>
                <Header/>
            </View>
            <View style = {styles.}>
                <Input title = "Full Name" /> 
                <Input title = "Pekerjaan" /> 
                <Input title = "Email Address" /> 
                <Input title = "Password" /> 
                <Button title = "Continue" />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})
