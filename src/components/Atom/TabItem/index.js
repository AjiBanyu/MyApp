import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Home, Scanner, Settings, HomeActive, ScannerActive, SettingsActive } from '../../../assets'
import { colors, fonts } from '../../../utils'


// functional component Tabitem > untuk membuat component item / icon item yang di perlukan
// props title > dikirimkan ke file component/molekul/bottomNavigator, 
// props actvie > menu yang saat ini sedang aktif/diklik  
export default function TabItem({title, active, onPress, onLongPress}) {
    /* variabel Icon > melakukan kondisi pada item dengan props title, 
        props title > ketika title yang di kirimkan dari folder component/molekul/bottomNavigator
    */
    const Icon = () => { 
        if (title === 'Home') {
            // jika active maka icon yang active yang akan tampil
            return active ? <HomeActive/> : <Home/>
            // return <Home/>
        }
        if (title === 'Doctor') {
            // return <Scanner/>
            return active ? <ScannerActive/> : <Scanner/>
        }
        if (title === 'Settings') {
            // return <Settings/>
            return active ? <SettingsActive/> : <Settings />
        }

        return <Home/>
    }
    return (
        <TouchableOpacity style = {styles.container} onPress={onPress} onLongPress={onLongPress}>
            {/* 
            <icon /> > di ambil dari variable Icon 
            nilai text {title} > di ambil dari props title , yang nantinya isinya adalah masing2 label pada navigation 
            
            text(active) > parameter yang di kirimkan props active , memberikan sebuah kondisi jika menu aktif dan tidak

            */}
            <Icon/>
            <Text style = {styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    // text di jadikan function 
    // parameter function text value active > dikirimkan dari props active didalamnya me-retur object
    text : (active) => (
        {
            fontSize: 10,
            // jika active maka rubah text menjadi menuActive, jika tidak maka menuInactive
            color: active ? colors.text.manuActive: colors.text.menuInactive,
            fontFamily: fonts.primary[600],
            marginTop: 3
        }
    )
    
})
