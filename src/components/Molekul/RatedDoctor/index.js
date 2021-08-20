import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Doctor1, IStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function RatedDoctor() {
    return (
        <View style = {styles.page}>
            <Image source = {Doctor1} style = {{width: 50, height: 50, borderRadius: 50/2, marginRight: 12}}/>
            
            <View style = {styles.text}>
                <Text style = {styles.name}>Dr. Mamat Suparman</Text>
                <Text style = {styles.profesi}>Pediatrician</Text>
            </View>
            <View style = {{flexDirection: 'row',}}>
                <IStar/>
                <IStar/>
                <IStar/>
                <IStar/>
                <IStar/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16},
    /* flex 1 pada pembungkus text name dan profesi menjadi full kesamping agar ketika di berikan justify content space between pada style.pages ,posisi pembungkus text berada di kiri */
    text: { flex: 1},
    name: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.default
    },
    profesi: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2
    }
})
