'use strict';
import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../utils'
import { RNCamera } from 'react-native-camera'



// membuat variabel untuk icon
const IconWithText = ({title}) => {
    return(
        <View style = {{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 4, width: '50%'}}>
             {/*view ini utk membuat kotak icon karna icon tidak tersedia maka di buatkan kotak polos */}
            <View style = {{
                height: 60,
                width: 60,
                backgroundColor: 'green',
                borderRadius: 60 /2,
                
            }}/>
            <Text style = {{fontSize: 16, textAlign: 'center'}}>{title}</Text>
        </View>
    )
}


class Barcode extends Component{
    takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
      };
    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.page}>
                    <View style = {styles.camera}>
                        {/* <Text>Camera</Text> */}
                            <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={
                                {
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                  }
                            }
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            androidCameraPermissionOptions={{
                                title: 'Permission to use camera',
                                message: 'We need your permission to use your camera',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            androidRecordAudioPermissionOptions={{
                                title: 'Permission to use audio recording',
                                message: 'We need your permission to use your audio',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                console.log(barcodes);
                            }}
                            />
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={this.takePicture.bind(this)} style={
                                {
                                    flex: 0,
                                    backgroundColor: '#fff',
                                    borderRadius: 5,
                                    padding: 15,
                                    paddingHorizontal: 20,
                                    alignSelf: 'center',
                                    margin: 20,
                                  }
                            }>
                                <Text style={{ fontSize: 14 }}> SNAP </Text>
                            </TouchableOpacity>
                            </View>
                    </View>
                    <View style = {styles.content}>
                        <View style = {styles.title}>
                            <Text style = {styles.text1}>More options</Text>
                            <Text style = {{fontSize: 20, fontFamily: fonts.primary[600]}}>shortcut</Text>
                        </View>
                        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style = {{flexDirection: 'row', flex: 1}}>
                                <IconWithText title = "phone Number" />
                                <IconWithText title = "GoPay Codeeee" />
                            </View>
                            <View style = {{flex: 1, maxWidth: 170}}>
                                <Text>Your Recant GoPay receivers will shown here. No admin feels!</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    
    
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.secondary
    },
    page: {
        backgroundColor: colors.white, 
        flex: 1, 
        borderBottomLeftRadius: 24, 
        borderBottomRightRadius: 24
    },
    camera: {
        backgroundColor: colors.black, 
        flex: 1
    },
    content: { 
        height: 180, 
        paddingHorizontal: 16
    },
    title: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 16,
        marginBottom: 14
    },
    text1: {
        fontSize: 28, 
        fontFamily: fonts.primary[700],
         color: colors.text.default
        }
})



export default Barcode;