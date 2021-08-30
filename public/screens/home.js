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
    SideMenuAccess
} from '../../assets/styles/homeStyles';

const home = () => {
    return (
        <PageArea>

            <StatusBar 
            barStyle='light-content'
            backgroundColor='#09A1BC'
            />

            <UpContainer>
                <SideMenuAccess><Text style={{color: '#FFF', textTransform: 'uppercase', fontSize: 18, fontFamily: 'OpenSans-Regular'}}>Menu</Text></SideMenuAccess>
            </UpContainer>

            <WelcomeText>
                <WelcomeTextInnerContent style={{fontFamily: 'OpenSans-Regular', fontSize: 15}}>
                    Cá entre nós, nós sabemos que tudo o que é importante, não podemos esquecer. Certo ? {'\n'} {'\n'} E pensando nisto, estamos aqui para te ajudar a guardar as datas mais importantes para você, para que você não precise se preocupar com o risco de esquecer. {'\n'} {'\n'} Registre tudo o que for necessário, e deixe conosco o encargo de guardar e te lembrar quando o momento estiver para chegar.
                </WelcomeTextInnerContent>
            </WelcomeText>

            <NewRegister>
                <NewRegisterTitle style={{fontFamily: 'OpenSans-Bold'}}>Adicionar Novo Registro</NewRegisterTitle>
            </NewRegister>
        </PageArea>
    )
}

export default home;