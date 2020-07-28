import React from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { Fontisto as Icon, Feather as IconFeather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Constatns from 'expo-constants'

import Styles from './styles'

const Login = () => {

    const navigation = useNavigation()

    function entrar() {
        navigation.navigate('Home')
    }

    return (

        <View style={Styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: 'green',
                    height: Constatns.statusBarHeight
                }}/>
            </View>

            <KeyboardAvoidingView behavior='padding' enabled>

                <View style={Styles.top}>
                    <View>
                        <Text
                            style={Styles.subtitle}>
                            Boleto Digital
                        </Text>
                        <Text
                            style={Styles.title}>
                            PRATICIDADE{'\n'}NA DISTÂNCIA{'\n'}DE UM TOQUE
                            </Text>
                    </View>
                    <View style={Styles.areaIcon}>
                        <Icon

                            name="whatsapp"
                            color="#fff"
                            size={24}
                        />
                        <Text style={Styles.subtitle}>9 9249-2222</Text>
                    </View>
                </View>

                <View>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={Styles.image}
                    />

                    <View style={Styles.areaInput}>

                        <Text style={Styles.infoInput}>Usuário</Text>
                        <TextInput
                            style={Styles.input}
                            placeholder="Insira seu usuário"
                            autoCorrect={false}
                        />

                        <Text style={Styles.infoInput}>Senha</Text>
                        <TextInput
                            style={Styles.input}
                            placeholder="Insira sua senha"
                            secureTextEntry={true}
                        />

                        <RectButton
                            style={Styles.button}
                            onPress={entrar}
                        >
                            <IconFeather
                                style={Styles.iconButton}
                                name="arrow-right"
                                color="#fff"
                                size={26}
                            >
                            </IconFeather>
                            <Text
                                style={Styles.textButton}
                            >Entrar</Text>
                        </RectButton>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login;
