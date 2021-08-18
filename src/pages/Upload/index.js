import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { AddPhoto, ILNullPhoto } from '../../assets'
import { Header, Button, Link, Gap } from '../../components'
import { colors, fonts } from '../../utils'

const Upload = ({navigation}) => {
    return (
        <View style = {{flex: 1, backgroundColor: colors.white}}>
            <Header title = 'Upload' onPress={() => navigation.replace('Register')}/>
            <View style = {styles.pages}>
                <View style = {styles.content}>
                    <View style = {styles.avatar}>
                        <Image source = {ILNullPhoto} style = {styles.imgPhoto} />
                        <AddPhoto style = {styles.icon}/>
                    </View>
                    <Gap height={24} />
                    <Text style = {styles.name}>Aji Banyu Pamungkas</Text>
                    <Text style = {styles.work}>Product Designer</Text>

                </View>
                <View >
                    <Button style = {styles.btnUpload} title = 'Upload and Continue'/>
                    <Gap height = {30}/>
                    <Link title = 'Skip for This' Align= 'center' size = {16}/>
                </View>
            </View>
        </View>
    )
}

export default Upload

const styles = StyleSheet.create({
    avatar : {
        borderWidth: 1,
        width: 130,
        height: 130,
        borderColor: colors.border,
        borderRadius: 130/2, 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
        
    },  
    pages: {
        paddingHorizontal: 40, 
        paddingBottom: 64,
        backgroundColor: colors.white,
         flex: 1, 
         justifyContent: 'space-between'
    },
    content: {
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1
    },
    imgPhoto : {
        width: 110,
        height: 110
    },
    icon : {
        position: 'absolute',
        bottom: 0,
        right: 2
    },
    name : {
        fontSize: 24,
        color: colors.black,
        fontFamily: fonts.primary[600]
    },
    work: {
        fontSize: 16,
        color: colors.text.secondary,
        fontFamily: fonts.primary[600]
    },
  
})
