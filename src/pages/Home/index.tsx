import React from 'react'
import { RectButton, FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { Fontisto as IconFontisto, createIconSet } from '@expo/vector-icons'

import TopBar from '../../screens/TopBar'

import Styles from './styles'
import { Icon } from '@expo/vector-icons/build/createIconSet'
import { DrawerItem } from '@react-navigation/drawer'

const Home = () => {

    interface data {
        title: string,
        name: string,
        size: number,
        color: string
    }

    const dataIcons: data[] = [
        {title: 'Pagamento', name: 'credit-card', size: 32, color: '#000'},
        {title: 'Desbloqueio', name: 'unlocked', size: 32, color: '#000'},
        {title: 'Diagnóstico', name: 'heartbeat-alt', size: 32, color: '#000'},
        {title: 'Contrato', name: 'paperclip', size: 32, color: '#000'}
    ]

    const navigation = useNavigation()

    function back() {
        navigation.navigate('Login') //Ver pq o goBack não funfa
    }

    return (
        <>
            <View>
                <View style={Styles.statusBar} />

                <TopBar />
            </View>

            <View style={Styles.container}>

                <Text style={Styles.textTitle}>Olá, Cliente</Text>

                <View style={Styles.accountArea}>
                    <Text style={Styles.textAccount}>Fatura em aberto</Text>
                    <Text style={Styles.textAccount}>15/08/2020</Text>
                    <Text style={Styles.textAcountValue}>R$ 99,90</Text>

                    <RectButton style={Styles.button}>
                        <Text style={Styles.textAcountValue}>Pagar</Text>
                    </RectButton>
                </View>

                <FlatList 
                        data={dataIcons}
                        
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <View style={Styles.iconsArea} key={item.name}>
                                    
                                    <IconFontisto name={item.name} color={item.color} size={item.size}/>
                                </View>
                            )
                        }}
                    />
            </View>
        </>
    )
}

export default Home
