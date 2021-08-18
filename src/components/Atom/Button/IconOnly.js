import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrow } from '../../../assets'


/* iconOnly > untuk memanggil icon arrow yang di ubah menjadi tombol/button dengan component react native TouchableOpacity
>> iconOnly menerima dua props >
    - props onPress > membuat sebuah fungsi tombol ketika di press
    - props icon > ketika nama icon di berikan 
>> variabel Icon > agar icon arrow menjadi dinamis di lakukan sebuah logic if di luar return

*/

export default function IconOnly({onPress, icon}) {
    const Icon = () => {
        if (icon === 'back-dark') {
            return( <LeftArrow/> )
        }
        if (icon === 'back-light') {
            return( <LeftArrow/> )
        }
        return <LeftArrow/>
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
