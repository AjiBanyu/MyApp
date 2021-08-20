import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DocterCategory, HomeProfile, NewsItems, RatedDoctor } from '../../components/Molekul'
import { Gap } from '../../components/Atom'
import { colors, fonts } from '../../utils'
import { News1, News2, News3 } from '../../assets'


export default function Doctor() {
    return (
        <View style = {styles.pages}>
             <View style = {styles.container}>
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <View style = {styles.sectionProfile}>
                        <Gap height= {30} />
                        <HomeProfile/>
                        <Gap height= {30} />
                        <Text style = {styles.title}>Mau konsultasi dengan siapa hari ini ?</Text>
                        <Gap height= {30} />
                    </View>
                    <View style = {styles.wrapper}>
                        <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                            <View style = {{flexDirection: 'row', marginLeft: -16}}>
                                <Gap width={32}/>
                                <DocterCategory/>
                                <Gap width={12}/>
                                <DocterCategory/>
                                <Gap width={12}/>
                                <DocterCategory/>
                                <Gap width={12}/>
                                <DocterCategory/>
                                <Gap width={12}/>
                            </View>
                        </ScrollView>
                    </View>
                        <Text style = {styles.sectionLabel}>Top Rated Doctors</Text>
                        <View style = {styles.sectionRated}>
                            <RatedDoctor/>
                            <RatedDoctor/>
                            <RatedDoctor/>
                        </View>
                        <Text style = {styles.sectionLabel}>Good News</Text>
                        <NewsItems 
                        title = "is it safe to stay at home during coronavirus"
                        img = {News1}
                        />
                        <NewsItems 
                        title = "consumen yellow sitrus help you heathier"
                        img = {News2}
                        />
                        <NewsItems 
                        title = "learn how make to a propper orange juice at home"
                        img = {News3}
                        />
                    <Gap height={20}/>
            </ScrollView>
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
    sectionProfile: {
        paddingHorizontal: 16
    },
    container : {
        // paddingHorizontal: 16,
        // paddingVertical: 30,
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
        paddingHorizontal: -12
    },
    sectionRated: {
        paddingHorizontal: 16
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        marginTop: 30,
        marginBottom: 16,
        paddingHorizontal: 16
    }
})
