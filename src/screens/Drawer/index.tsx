import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet } from 'react-native'

import { Fontisto as Icon, FontAwesome5 as IconAwesome} from '@expo/vector-icons'

import Login from '../../pages/Login'
import Home from '../../pages/Home'

import StylesNavigator from './styles'

const Drawer = createDrawerNavigator()
const iconWhats = <Icon name="whatsapp" color="#fff" size={28} />
const iconPlan = <Icon name="wifi" color="#fff" size={28} />
const iconPerfil = <IconAwesome name="user-alt" color="#fff" size={28} />

const MyDrawer = () => {

    return (
        <Drawer.Navigator
            drawerContentOptions={{
                itemStyle: StylesNavigator.itemStyle,
                labelStyle: StylesNavigator.labelStyle,
                style: StylesNavigator.style
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerLabel: 'Home',
                    swipeEnabled: true,
                    drawerIcon: ({  }) => (
                        iconPerfil
                    )
                }}
            />
            <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                    drawerLabel: 'Login',
                    swipeEnabled: false,
                    drawerIcon: ({  }) => (
                        iconPlan
                    )
                }}
            />
            <Drawer.Screen
                name="Fale Conosco"
                component={Home}
                options={{
                    drawerLabel: 'Fale Conosco',
                    drawerIcon: ({  }) => (
                        iconWhats
                    ),
                }}
                
            />            

        </Drawer.Navigator>
    )
}

const Styles = StyleSheet.create({
    item: {
        backgroundColor: 'red'
    },
    texto: {
        color: 'green'
    }
})

export default MyDrawer
