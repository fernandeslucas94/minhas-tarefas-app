import React from 'react';

import { 
    Text, 
    KeyboardAvoidingView,
    StatusBar 
} from 'react-native';

import { 
    PageArea,
    PageHeader,
    PageHeaderContent,
    FormFields,
    FormContentField,
    SignUp
} from '../../assets/styles/singUpStyles';

const signUp = () => {
    return (
        <PageArea>

            <StatusBar 
            barStyle='light-content'
            backgroundColor='#517EEA'
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
                        <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600'}}>Enviar Dados</Text>
                    </SignUp>
                </FormFields>
            </KeyboardAvoidingView>
        </PageArea>
    )
}

export default signUp;