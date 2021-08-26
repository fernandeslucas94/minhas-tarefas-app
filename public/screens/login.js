import React from 'react';

import { 
  View, 
  Text, 
  KeyboardAvoidingView, 
  StatusBar 
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

const login = () => {
    return (
    <PageArea>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='#517EEA'
      />
        <KeyboardAvoidingView behavior="position">
        <View style={{marginTop:100, width: 350, height:150, alignItems: 'center', justifyContent: 'center'}}>
          <Title>Minhas Tarefas</Title>
        </View>

        <View>
          <Slogan>Gerencie seu tempo e {'\n'} não perca seus compromissos</Slogan>
        </View>

        <EmailTextInput 
        placeholderTextColor="grey" 
        placeholder="Informe seu email">
        </EmailTextInput>

        <PasswordTextInput 
        placeholderTextColor="grey" 
        placeholder="Informe sua senha"
        ></PasswordTextInput>

        <View style={{alignItems: 'center', marginTop: 15,}}>
          <SignInButton >
            <Text style={{color: "#FFF", fontSize: 20, textAlign: 'center'}}>Entrar</Text>
          </SignInButton>

          <Text style={{color: "#FFF", fontSize: 20, marginTop: 20}}>Ainda não possui cadastro ?</Text>

          <SignUpButton >
            <Text style={{color: "#FFF", fontSize: 20, textAlign: 'center'}}>Cadastre-se</Text>
          </SignUpButton>
        </View>
      </KeyboardAvoidingView>
    </PageArea>
    )
}

export default login;