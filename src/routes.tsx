import React from 'react'
import { StyleSheet } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MyDrawer from './screens/Drawer'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const Routes = () => {

    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',

    }
})

/*
            <Drawer.Navigator
                initialRouteName="Login"
                drawerContentOptions={{
                    contentContainerStyle: Styles.container
                }}
            >
                <Drawer.Screen
                    name="Login"
                    component={Login}
                    options={{ swipeEnabled: false }}
                />
                <Drawer.Screen
                    name="Home"
                    component={Home}
                />
            </Drawer.Navigator>
*/

export default Routes
