import React, { useState } from 'react';

import { 
  View, 
  Text, 
  KeyboardAvoidingView, 
  StatusBar, 
  TouchableOpacity
} from 'react-native';

import { 
  PageArea, 
  Title, 
  Slogan, 
  EmailTextInput, 
  PasswordTextInput,
  SignInButton,
  SignUpButton,
} from '../../assets/styles/loginStyles';

const userEmail = () => {
  if(EmailTextInput === '' ) {
    return 'Por favor, informe seu email'
  }
}

const userPassword = () => {
  if(PasswordTextInput === '' || password.length < 4) {
    return 'Informe uma senha'
  }
}

const usr_login = () => {
  if(userEmail === !true && userPassword === !true) {
    alert('Realizando Login')
  } else {
    alert('Login não foi realizado')
  }
}

const login = () => {
    return (
    <PageArea>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='#09A1BC' //#517EEA
      />
        <KeyboardAvoidingView behavior="position">
        <View style={{marginTop:100, width: 350, height:150, alignItems: 'center', justifyContent: 'center'}}>
          <Title>Minhas Tarefas</Title>
        </View>

        <View>
          <Slogan>Gerencie seu tempo {'\n'} e não perca seus prazos</Slogan>
        </View>

        <EmailTextInput 
        placeholderTextColor="grey" 
        placeholder="Informe seu email">
        </EmailTextInput>

        <PasswordTextInput 
        placeholderTextColor="grey" 
        placeholder="Informe sua senha"
        ></PasswordTextInput>

        <View style={{alignItems: 'center', marginTop: 5,}}>
          <SignInButton onPress={() => usr_login()}>
            <Text style={{color: "#FFF", fontSize: 20, textAlign: 'center'}}>Entrar</Text>
          </SignInButton>

          <Text style={{color: "#FFF", fontSize: 20, marginTop: 20}}>Ainda não possui cadastro ?</Text>

          <SignUpButton onPress={() => user_SignUp()}>
            <Text style={{color: "#FFF", fontSize: 20, textAlign: 'center'}}>Cadastre-se</Text>
          </SignUpButton>
        </View>

      </KeyboardAvoidingView>
    </PageArea>
  )
}

export default login;