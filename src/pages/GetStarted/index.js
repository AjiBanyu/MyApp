import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
export default function GetStarted() {
    // membuat dua pembungkus(Grouping) <view> pada getstarted > karna untuk membuat button selalu berada di bawah
    // >> pembungkus pertama berisi logo dan text title
    // >> pembungkus kedua berisi button 

    return (
        // ImageBackground > gambar yang akan tampil di belakang / backgroundnya gambar
            <ImageBackground source = {ILGetStarted} style = {styles.pages}>
                <View>
                    <ILLogo width={50} height= {50}/>
                    <Text style = {styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
                </View>

                <View>
                    {/* component button ini > component button yg dibuat sendiri di folder components/button 
                    >> title > dari props button 

                    >> type > dikirim dari props button
                     Button > dimana type tergantung dari nilai yang di berikan , jika secondary maka akan berwarna putih , dan default-nya berwarna biru 
                     Text > dimana type tergantung dari nilai yang di berikan jjika secondary maka warna color text berwarna hitam , jika tidak maka text berwarna putih
                    */}
                    <Button title = 'Get Started'/>
                    {/* 
                        > component gap di import dari folder component/Atom/Gap
                        > Gap pada button agar memberi jarak di setiap button 
                        > height di dambil dari props height pada component Gap

                        note : untuk memberikann jarak/Gap pada component kecil / Atom tidak boleh di dalam file component kecil , karna setiap device berbeda2 layarnya, maka memberikan jarak di file yang di butuhkan untuk componnent kecil
                    */}
                    <Gap height={10}/>
                    <Button type = 'secondary' title = 'Sign In'/>
                </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    pages: {
        padding : 40,
        justifyContent: "space-between",
        flex: 1, // agar layar menjadi full 
        backgroundColor: 'white'
    },
    text: {
        fontSize: 24,
        // fontWeight: '600',
        fontFamily: 'Nunito-SemiBold',
        color: 'white',
        marginTop: 91
    }
})
