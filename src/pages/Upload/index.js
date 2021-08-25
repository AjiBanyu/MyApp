import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { AddPhoto, ILNullPhoto, RemovePhoto } from '../../assets'
import { Header, Button, Link, Gap } from '../../components'
import { colors, fonts } from '../../utils'

// import image-picker untuk menambahkan / upload foto
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Upload = ({navigation}) => {

    // membuat state icon add/remove, secara default bernilai false
    const [icon, setIcon] = useState(false)

    // membuat function onPress getPhoto
    const getPhoto = () => {
        launchImageLibrary({options}, Response => {
                console.log('response data', Response.uri)
                // const source = Response.assets.type
                
        })
    }
    return (
        <View style = {{flex: 1, backgroundColor: colors.white}}>
            <Header title = 'Upload' onPress={() => navigation.replace('Register')}/>
            <View style = {styles.pages}>
                <View style = {styles.content}>
                    <TouchableOpacity style = {styles.avatar} onPress={getPhoto}>
                        <Image source = {ILNullPhoto} style = {styles.imgPhoto} />
                        {/* membuat kondisi jika ada fotonya addPhoto icon nya remove */}
                        {icon && <AddPhoto style = {styles.icon}/>}
                        {!icon && <RemovePhoto style = {styles.icon}/>}
                        
                    </TouchableOpacity>
                    <Gap height={24} />
                    <Text style = {styles.name}>Aji Banyu Pamungkas</Text>
                    <Text style = {styles.work}>Product Designer</Text>

                </View>
                <View >
                    <Button style = {styles.btnUpload} title = 'Upload and Continue' disable/>
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
