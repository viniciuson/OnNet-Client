import React from 'react'
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    top: {
        backgroundColor: '#01af7c',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'stretch',
        position: 'relative',        
        flexWrap: 'wrap',
    },
    bottom: {
        backgroundColor: '#000'
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginRight: '5%',
        height: 160,
        width: 190,
    },
    subtitle: {
        fontWeight: '300',
        paddingLeft: 15,
        color: '#fff',
        fontSize: 24,
    },
    title: {
        fontWeight: 'bold',
        paddingLeft: 15,
        color: '#fcf800',
        fontSize: 32,
    },
    areaIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    areaInput: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#ebedec',
        borderColor: '#d9d9d9',
        borderRadius: 4,
        borderWidth: 1,
        height: 45,
        width: 280,
    },
    infoInput: {
        alignSelf: 'flex-start',
        fontWeight: '900',
        marginLeft: 72,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#34CB79',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        marginTop: 8,
        height: 50,
        width: 230,
    },
    textButton: {
        fontWeight: '200',
        color: '#fff',
        fontSize: 26,
    },
    iconButton: {
        marginRight: 3
    },
    imageBackground: {
        marginTop: 100,
        flex: 1,
    }
}) 


export default Styles
