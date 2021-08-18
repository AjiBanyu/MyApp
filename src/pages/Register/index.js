import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'

export default function Register({navigation}) {
    return (
        <View style = {styles.page}>
            <Header title = 'Register' onPress = {() => navigation.goBack()}/>
            <View style = {styles.input}>
                <Input title = "Full Name" />
                <Gap height={24}/> 
                <Input title = "Pekerjaan" /> 
                <Gap height={24}/> 
                <Input title = "Email Address" /> 
                <Gap height={24}/> 
                <Input title = "Password" /> 
                <Gap height={40}/> 
                <Button title = "Continue" onPress = {() => navigation.navigate('Upload')}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        // padding: 12
    }, 
    input: {
        paddingHorizontal: 24
    }
})
