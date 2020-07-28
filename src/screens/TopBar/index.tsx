import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Foundation as IconFoundation } from '@expo/vector-icons'
import Drawer from '../Drawer'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const TopBar = () => {

    const navigate = DrawerActions
    const navigation = useNavigation()

    function openDraw() {
        navigation.dispatch(navigate.openDrawer())
    }

    return (
        <View style={Styles.topBar}>

            <Text style={Styles.text}>
                OnNet Telecom
            </Text>

            <IconFoundation
                color="#000"
                name="list"
                size={32}
                onPress={openDraw}
            />

        </View>
    )

}

const Styles = StyleSheet.create({
    topBar: {
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        height: 52,
    },
    text: {
        fontSize: 22,
    }
})

export default TopBar
