import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils';
import { TabItem } from '../../Atom';

export default function BottomNavigator({ state, descriptors, navigation }) {
    // isi dari content ini menggunakan content dari react native navigation bottom yang sudah di sediakan 

    return (
        
    <View style={styles.container}>
        {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
            options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
            }
        };

        const onLongPress = () => {
            navigation.emit({
            type: 'tabLongPress',
            target: route.key,
            });
        };

        return (
            /*
                component TabItem > membuat component komplex untuk item bottom navigator

                props title > dikirimkan dari file compponents/atom/TabItem 
                props title diberikan nilai label , label > nilai setiap masing2 nama navigation

                props active > dikirimkan dari tabItem
                props active > bernilai isFocused dari react native tab bottom navigator,
                isFocused > index yang saat ini di klik, bernilai true atau false
            */
            <TabItem title={label} active={isFocused} onPress={onPress} onLongPress={onLongPress}/>
            // <TouchableOpacity
            // accessibilityRole="button"
            // accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            // onPress={onPress}
            // onLongPress={onLongPress}
            // style={{ flex: 1 }}
            // >
            // <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
            //     {label}
            // </Text>
            // </TouchableOpacity>
        );
        })}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        justifyContent: 'space-between',
        paddingHorizontal: 53,
        paddingVertical: 12
    }
})
