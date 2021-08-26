import React from 'react';
import { View, Text, TextInput, SafeAreaView, Pressable, KeyboardAvoidingView, StatusBar } from 'react-native';
import Styles from '../../assets/styles/homeStyles';

const home = () => {
    return (
        <SafeAreaView style={Styles.SafeAreaView}>

            <StatusBar 
            barStyle='light-content'
            backgroundColor='#517EEA'
            />

            <View style={Styles.Header}></View>

            <View style={Styles.description}>
                <Text 
                    style={{marginTop: 10, fontSize: 16, padding: 20}}
                >
                    Cá entre nós, nós sabemos que tudo o que é importante, não podemos esquecer. Certo ? {'\n'} {'\n'} E pensando nisto, estamos aqui para te ajudar a guardar as datas mais importantes para você, para que você não precise se preocupar com o risco de esquecer. {'\n'} {'\n'} Registre tudo o que for necessário, e deixe conosco o encargo de guardar e te lembrar quando o momento estiver para chegar.
                </Text>
            </View>

            <View style={Styles.bottomView}>
                <Pressable style={Styles.newInfoRegister}>
                    <Text style={{color: '#FFF', fontSize: 15.5, fontWeight: '600'}}>Adicionar Novo Registro</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default home;