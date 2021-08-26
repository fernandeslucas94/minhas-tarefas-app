import React from 'react';
import { View, Text, TextInput, SafeAreaView, Pressable, KeyboardAvoidingView, Button, StatusBar } from 'react-native';
import Styles from '../../assets/styles/singUpStyles';

const signUp = () => {
    return (
        <SafeAreaView style={Styles.SafeAreaView}>

            <StatusBar 
            barStyle='light-content'
            backgroundColor='#517EEA'
            />
            
            <KeyboardAvoidingView behavior="position" 
            style={{width: "100%"}}>
                <View style={Styles.signUpHeader}>
                    <Text style={Styles.headerText}>Cadastre-se</Text>
                </View>

                <View style={Styles.formFields}>
                    <TextInput
                        placeholder="Informe seu nome"
                        placeholderTextColor='#777'
                        style={Styles.inputText}
                    ></TextInput>

                    <TextInput
                        placeholder="Informe seu email"
                        placeholderTextColor='#777'
                        style={Styles.inputText}
                    ></TextInput>

                    <TextInput
                        placeholder="Crie uma senha (No mínimo 4 dígitos)"
                        placeholderTextColor='#777'
                        style={Styles.inputText}
                    ></TextInput>

                    <TextInput
                        placeholder="Confirme sua senha"
                        placeholderTextColor='#777'
                        style={Styles.inputText}
                    ></TextInput>

                    <Pressable style={Styles.registerButton}>
                        <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600'}}>Enviar Dados</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default signUp;