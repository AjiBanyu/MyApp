import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Input, Link, Gap } from '../../components'
import { colors } from '../../utils'

export default function Login({navigation}) {
    return (
        <View style = {styles.page}>
            <ILLogo style = {styles.logo}/>
            <Text style = {styles.title}>Masuk dan mulai Konsultasi</Text>
            <Input title = 'Email Address'/>
            <Gap height={24}/>
            <Input title = 'Password'/>
            <Gap height = {10} />
            <Link title = "Forgot My Password" size = {12}/>
            <Gap height ={40}/>
            <Button title="Sign In" onPress= {() => navigation.replace('MainApp')}/>
            <Gap height ={10} />
            <Link title = "Create New Account" size = {16} Align = "center" />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontFamily: "Nunito-SemiBold",
        maxWidth: 200,
        marginBottom: 20
    },
    logo: {
        width: 50,
        height: 50
    },
})
