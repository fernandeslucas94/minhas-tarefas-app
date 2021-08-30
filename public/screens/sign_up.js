import React from 'react';

import { 
    Text, 
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native';

import { 
    PageArea,
    PageHeader,
    PageHeaderContent,
    FormFields,
    FormContentField,
    SignUp,
    BackToLogin
} from '../../assets/styles/singUpStyles';

const signUp = () => {
    return (
        <PageArea>

            <StatusBar 
            barStyle='light-content'
            backgroundColor='#09A1BC'
            />
            
            <KeyboardAvoidingView behavior="position" 
            style={{width: "100%"}}>
                <PageHeader>
                    <PageHeaderContent>Cadastre-se</PageHeaderContent>
                </PageHeader>

                <FormFields>
                    <FormContentField
                        placeholder="Informe seu nome"
                        placeholderTextColor='#777'
                    ></FormContentField>

                    <FormContentField
                        placeholder="Informe seu email"
                        placeholderTextColor='#777'
                    ></FormContentField>

                    <FormContentField
                        placeholder="Crie uma senha (No mínimo 4 dígitos)"
                        placeholderTextColor='#777'
                    ></FormContentField>

                    <FormContentField
                        placeholder="Confirme sua senha"
                        placeholderTextColor='#777'
                    ></FormContentField>

                    <SignUp>
                        <Text style={{color: '#FFF', fontSize: 17, fontWeight:'400', fontFamily: 'OpenSans-Regular'}}>Enviar Dados</Text>
                    </SignUp>

                    <BackToLogin>
                        <Text style={{color: '#FFF', fontSize: 17, fontWeight:'400', fontFamily: 'OpenSans-Regular'}}>Voltar</Text>
                    </BackToLogin>
                </FormFields>
            </KeyboardAvoidingView>
        </PageArea>
    )
}

export default signUp;