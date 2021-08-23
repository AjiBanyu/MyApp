import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { useForm } from '../../utils';

// ==== SISI INTEGRRASI ====
// 1. Menyimpan dan mengumpulkan data dari 4 form input 
// 2. ada dua cara > cara dengan setState manual dan custom useState()


export default function Register({navigation}) {
    /*
    1. mengumpulkan 4 value form input dengan useState ()
    2. useState('') > bernilai awala string kosong , agar memberikan nilai kosong / default pada form
    */
   const [fullName, setFullName] = useState('');
   const [profession, setProfession] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   // cara kedua dengan state costume 
   const [form, setForm] = useForm({
       fullName: '',
       profession: '',
       email: '',
       password: ''
   }) 


   // function onContinue > fungsi ketika tombol continue di klik data akan tersimpan pada server/local
   
   const onContinue = () => {
    // navigation.navigate('Upload')
    console.log(form)
   }

    return (
        <View style = {styles.page}>
            <Header title = 'Register' onPress = {() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator = {false}>
            {/* 
                props pada input ada 2 > props value dan props onChangeText
                
                props value > nilai yang dikirim dari input ke useState awal , fullName, profession, email dan password
                props onChangeText > ketika text berubah / sedang berubah , dengan setfullname, setProfession setEmail, dan setPassword
            */}
            <View style = {styles.input}>
                <Input title = "Full Name" value = {form.fullName} onChangeText = {(value) => setForm('fullName',value)}/>
                <Gap height={24}/> 
                <Input title = "Pekerjaan" value = {form.profession} onChangeText = {(value) => setForm('profession',value)}/> 
                <Gap height={24}/> 
                <Input title = "Email Address" value = {form.email} onChangeText = {(value) => setForm('email',value)}/> 
                <Gap height={24}/> 
                <Input title = "Password" value = {form.password} onChangeText = {(value) => setForm('password',value)} secureTextEntry/> 
                <Gap height={40}/> 
                <Button title = "Continue" onPress = {onContinue}/>
            </View>
            </ScrollView>
            
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
