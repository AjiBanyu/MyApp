import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DocterCategory, HomeProfile, NewsItems, RatedDoctor } from '../../components/Molekul'
import { Gap } from '../../components/Atom'
import { colors, fonts } from '../../utils'


export default function Doctor() {
    return (
        <View style = {styles.pages}>
             <View style = {styles.container}>
                <HomeProfile/>
                <Gap height= {30} />
                <Text style = {styles.title}>Mau konsultasi dengan siapa hari ini ?</Text>
                <Gap height= {30} />
                <View style = {styles.wrapper}>
                    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                        <View style = {{flexDirection: 'row', marginLeft: -16}}>
                            <Gap width={20}/>
                            <DocterCategory/>
                            <Gap width={12}/>
                            <DocterCategory/>
                            <Gap width={12}/>
                            <DocterCategory/>
                            <Gap width={12}/>
                            <DocterCategory/>
                            <Gap width={6}/>
                        </View>
                    </ScrollView>
                </View>
                <Text style = {styles.sectionLabel}>Top Rated Doctors</Text>
                <RatedDoctor/>
                <RatedDoctor/>
                <RatedDoctor/>
                <Text style = {styles.sectionLabel}>Good News</Text>
                <NewsItems/>
                <NewsItems/>
                <NewsItems/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // pages background layar berwarna biru yang di lapisi container di depannya aggar bisa membuat lekukan di bawah kanan dan kiri
    pages: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    container : {
        paddingHorizontal: 16,
        paddingVertical: 30,
        flex: 1,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    },
    title : {
        fontSize: 24,
        fontFamily: fonts.primary[600],
        maxWidth: 300
    },
    wrapper : {
        // marginLeft: -12,
        marginHorizontal: -12
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        marginTop: 30,
        marginBottom: 16
    }
})
