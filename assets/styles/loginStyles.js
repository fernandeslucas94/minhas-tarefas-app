import styled from 'styled-components/native';

export { 
    PageArea, 
    Title, 
    Slogan, 
    EmailTextInput, 
    PasswordTextInput,
    SignInButton,
    SignUpButton,
};

const PageArea = styled.SafeAreaView`
    background-color: #09A1BC;

    align-items: center;
    flex: 1;
`;

const Title = styled.Text`
    margin-bottom: 60px;
    height: 100px;
    
    font-size: 35px;
    color: #FFF; 

    text-align: center; 

    font-weight: 400;

    border-width: 2px;
    border-color: #FFF;
    border-radius: 16px;
    
    padding: 20px;
`;

const Slogan = styled.Text`
    color: #FFF;
    font-size: 22px; 

    margin-bottom: 26px;

    font-weight: 400; 
    text-align: center;
`;

const EmailTextInput = styled.TextInput`
    backgroundColor: #EEE;

    width: 360px;
    height: 55px;

    margin-top: 50px;

    border-radius: 30px;
    border-width: 1px;
    border-color: #517EEA;

    padding-left: 20px;
`;

const PasswordTextInput = styled.TextInput`
    backgroundColor: #EEE;

    width: 360px;
    height: 55px;

    margin-top: 50px;

    border-radius: 30px;
    border-width: 1px;
    border-color: #517EEA;

    padding-left: 20px;
`;

// SignInButton = Botão de Login
const SignInButton = styled.Pressable` 
    backgroundColor: #139CB6;

    margin-top: 40px;
    padding: 10px;

    width: 100px;

    border-width: 0.5px;
    border-radius: 15px;
    border-color: #04768A;

    elevation: 7;
`;

// SignUpButton = Botão de Cadastro
const SignUpButton = styled.Pressable`
    background-color: #139CB6;

    margin-top: 40px;
    padding: 10px;
    width: 200px;

    border-width: 0.5px;
    border-radius: 15px;
    border-color: #048DA5;

    elevation: 7;
`;