import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { User } from '../../../assets'
import { Gap } from '../../Atom'
import { colors, fonts } from '../../../utils'

export default function HomeProfile() {
    return (
        <View style = {{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View >
                 <Image source = {User} style = {styles.ImgUser}/>
            </View>
            <View >
                <Text style = {styles.name}>Aji Banyu Pamungkas</Text>
                <Gap height={5}/> 
                <Text style = {styles.work}>Product Desaigner</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ImgUser : {
        borderRadius: 46 / 2,
        marginRight: 12,
        width: 49,
        height: 45
    },
    name : {
        fontFamily: fonts.primary[400],
        fontSize: 16,
        color: colors.text.default
    },
    work : {
        fontFamily: fonts.primary[300],
        fontSize: 12,
        color: colors.text.secondary
    }
})
