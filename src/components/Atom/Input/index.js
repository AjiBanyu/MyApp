import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils'




export default function Input({title, value, onChangeText, secureTextEntry}) {
    // const [border, setBorder] > bertugas untuk memberikan nilai perubahan terhadap border input awal dan setBorder merubah border 
    // useState() > berisi nilai default sebelum di rubah
    const [border, setBorder] = useState(colors.border)

    // function onFocusForm > berisi perubahan border pada useState hooks yang dirubah ole setBorder
    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }

    // function onBlurForm > berisi perubahan border default
    const onBlurForm = () => {
        setBorder(colors.border)
    }


    return (
        // TextInput > 2 props , onFocus dan onBlur
        // onFocus > ketika form di klik maka form menampilkan effect avtice
        // onBlur > ketika form input di pindah maka yang tadi active menjadi blur
        // function input(border) > param border dikirim oleh useState border agar di isi nilai secara default oleh useState(color.border)
        // props value > nilai yang dikirimkan pada TextInput 
        // onChangeText > ketika text berubah harus menerima value function
        <View>
            <Text style = {styles.text}>{title}</Text>
            <TextInput style = {styles.input(border)} onFocus={onFocusForm} onBlur={onBlurForm} onChangeText={onChangeText} value = {value} secureTextEntry={secureTextEntry}/>
        </View>
    )
}

const styles = StyleSheet.create({
    // input : border > dikirim dari TextInput , dimana borderColor bernilai border yang sudah di isi nilai default oleh useState(colors.border)
    input: (border) =>( {
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        borderColor: border,
        height: 40
    }),
    text:{
        fontSize: 14,
        fontFamily: 'Nunito-Light',
        marginBottom: 10
    }
})
