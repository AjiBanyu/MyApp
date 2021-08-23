import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Doctor1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const MessagesDoctor = () => {
    return (
        <View style = {styles.container}>
            <Image source = {Doctor1} style = {styles.img}/>
            <View>
                <Text style = {styles.name}>Jhon Packer Packet</Text>
                <Text style = {styles.messages}>baik bu, terima kasih atas masukannya</Text>
            </View>
        </View>
    )
}

export default MessagesDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingHorizontal: 16,
        paddingBottom: 16,
        marginBottom: 16

    },
    img:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 12
    },
    name : {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.text.default
    },
    messages: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary
    }

})
