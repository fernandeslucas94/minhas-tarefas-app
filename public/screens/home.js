import React from 'react';

import { 
    KeyboardAvoidingView, 
    StatusBar,
    View,
    Text
} from 'react-native';

import {
    PageArea,
    UpContainer,
    WelcomeText,
    NewRegister,
    WelcomeTextInnerContent,
    NewRegisterTitle,
    Toogle
} from '../../assets/styles/homeStyles';

const home = () => {
    return (
        <PageArea>

            <StatusBar 
            barStyle='light-content'
            backgroundColor='#517EEA'
            />

            <UpContainer>
                <Toogle>
                    <View><Text style={{backgroundColor: 'black', width: 40, height: 1.5, marginBottom: 10, backgroundColor: 'white'}}>.</Text></View>
                    <View><Text style={{backgroundColor: 'black', width: 40, height: 1.5, marginBottom: 10, backgroundColor: 'white'}}>.</Text></View>
                    <View><Text style={{backgroundColor: 'black', width: 40, height: 1.5, marginBottom: 10, backgroundColor: 'white'}}>.</Text></View>
                </Toogle>
            </UpContainer>

            <WelcomeText>
                <WelcomeTextInnerContent>
                    Cá entre nós, nós sabemos que tudo o que é importante, não podemos esquecer. Certo ? {'\n'} {'\n'} E pensando nisto, estamos aqui para te ajudar a guardar as datas mais importantes para você, para que você não precise se preocupar com o risco de esquecer. {'\n'} {'\n'} Registre tudo o que for necessário, e deixe conosco o encargo de guardar e te lembrar quando o momento estiver para chegar.
                </WelcomeTextInnerContent>
            </WelcomeText>

            <NewRegister>
                <NewRegisterTitle>Adicionar Novo Registro</NewRegisterTitle>
            </NewRegister>
        </PageArea>
    )
}

export default home;