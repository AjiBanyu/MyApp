import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IDoctor, IDoctorChildren } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function DocterCategory({title}) {
    return (
        <View style = {{
            marginRight: 16
        }}>
            <View style = {styles.card}>
                <IDoctorChildren style = {{marginBottom: 28}}/>
            
                    <Text style = {styles.label}>Saya Butuh</Text>
                    <Text>{title}</Text>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    card: {
        // alignSelf > agar lebar menyesuaikan panjang itemnya
        alignSelf: 'baseline',
        // borderWidth: 1,
        backgroundColor: colors.border,
        borderRadius: 15,
        padding: 12,        
    },
    label : {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    }

})
