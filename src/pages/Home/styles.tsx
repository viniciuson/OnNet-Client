import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    statusBar: {
        backgroundColor: '#01af7c',
        height: Constants.statusBarHeight
    },
    textTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000',
    },
    accountArea: {
        backgroundColor: '#06c1b5',
        alignSelf: 'center',
        width: '50%',
        height: '15%'
    },
    textAccount: {
        color: '#fff',
        fontSize: 14
    },
    textAcountValue: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#1789f3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50
    },
    iconsArea: {
        backgroundColor: '#dbdad7',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        height: 50,
        width: 50,
        flexGrow: 1
    }
})

export default Styles
