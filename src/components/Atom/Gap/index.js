import React from 'react'
import { View } from 'react-native'

/*
comoponent Gap > memiliki 2 props
> props height > untuk tinggi 
> props width > untuk lebar 

props ini akan di panggil ketika component gap di butuhkan 
*/


export default function Gap({height, width}) {
    return (
        <View style = {{height: height, width : width}}></View>
    )
}

