/*
membuat komponent button yang dapat di panggil berulang kali
-- komponent ini akn di export dan di import pada file Atom/index.js 
*/

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


/*
pada komponen button > menrima 2 props yang akan di munculkan ketika di panggil
1. props type > jenis button yang akan di tentukan pada tampilan layar
2. props title > membuat title secara dinamis 
*/
export default function Button({type, title}) {
    return (
        // merubah style button menjadi sebuah function yang menerima parameter
        // parameter function button > props type
        <View style = {styles.button(type)}>
            <Text style = {styles.text(type)}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    // background dan text di jadikan sebuah function 
    // function button dan text > yang me- retrun sebuah object di dalamnya
    // parameter type di kirim dari props type
    button: (type) => ({
        // borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
        // pada object backgroundcolor > jika pada 'type' sama dengan nilainya secondary maka warnanya putih
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4'
    }),
    text: (type) => ( {
        // fontWeight: '600',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 18,
        color: type === 'secondary' ? 'black' : 'white'
    })
})
