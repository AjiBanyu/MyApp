import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { useForm } from '../../utils';

// import firebase
import { Firebase } from '../../config';
// import untuk flash message
import { showMessage, hideMessage } from "react-native-flash-message";

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
   // 1. buat file useForm untuk meng costume useState
   const [form, setForm] = useForm({
       fullName: '',
       profession: '',
       email: '',
       password: ''
   }) 


   // state loading
   const [loading, setLoading] = useState(false);

   // function onContinue > fungsi ketika tombol continue di klik data akan tersimpan pada server/local
   
   const onContinue = () => {
    // navigation.navigate('Upload')

    // setLoading > ketika tombol di klik muncul setLoading 
    setLoading(true)

    // Autentikasi Sandi dengan firebase
    // import firebase dari folder config/fire
    // param di ambil dari value input yang dikirim dari form.email untuk email, dan form.password untuk password
    Firebase.auth().createUserWithEmailAndPassword(form.email, form.password)

    // .then > menampilkan jika berhasil
    .then((userCredential) => {
    //     Signed in
        var user = userCredential.user;

        // setLoading menjadi false / menghilang ketika sukses
        setLoading(false)

        // jika setForm typeform-nya reset , maka reset formnya
        setForm('reset');

        // jika sukses menampilkan flash message sukses
        showMessage({
            message: "Simple message",
            type: "success",
            position: "bottom",
            icon: "success"
          });

        // jika sukses data di simpan pada firebase.database()
        // menyimpan data dengan .set()
        // const data > berisi object data yang dikirimkan dari state form
        const data = {
            fullName: form.fullName,
            profession: form.profession,
            email: form.email
        }
        Firebase.database()
        .ref('users/' + user.uid + '/')
        .set(data);
        console.log('register success',user);
        // ...
    })
    // .catch > mengirimkan pesan error jika gagal
    .catch((error) => {
    //     const errorCode = error.code;
        const errorMessage = error.message;

        // setLoading menjadi false / menghilang ketika gagals
        setLoading(false)
        
        // jika gagal menampilkan flash message gagal
        showMessage({
            message: errorMessage,
            type: "danger",
            position: "bottom",
            icon: "danger"
          });
        console.log(error)
    });
    // console.log(form)
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
            {/* membuat kondisi ketika loading bernilai false maka loading menghilang 
                loading di ambil dari useState default
            */}
            {loading && <Loading/> }
             
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
