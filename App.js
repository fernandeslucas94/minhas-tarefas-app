import React from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView, Pressable, KeyboardAvoidingView } from 'react-native';
import Styles from './assets/styles/styles';

const App = () => {
  return (
    <SafeAreaView style={Styles.SafeAreaView}>
      <KeyboardAvoidingView behavior="position">
        <View style={{marginTop:100, width: 350, height:150, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={Styles.title}>Minhas Tarefas</Text>
        </View>

        <View>
          <Text style={Styles.subtitle}>
            Gerencie seu tempo {'\n'} e não perca seus prazos</Text>
        </View>

        <TextInput style={Styles.input}
        placeholderTextColor="grey" 
        placeholder="Informe seu email">

        </TextInput>

        <TextInput style={Styles.input}
        placeholderTextColor="grey" 
        placeholder="Informe sua senha"
        ></TextInput>

        <View style={{alignItems: 'center', marginTop: 15,}}>
        <Pressable style={Styles.signIn}>
          <Text style={{color: "#FFF", fontSize: 20, textAlign: 'center'}}>Entrar</Text>
        </Pressable>

        <Text style={{color: "#FFF", fontSize: 20, marginTop: 20}}>Ainda não possui cadastro ?</Text>

        <Pressable style={Styles.signUp}>
          <Text style={{color: "#FFF", fontSize: 20, textAlign: 'center'}}>Cadastre-se</Text>
        </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default App;