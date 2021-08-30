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

    font-family: OpenSans;
`;

const Title = styled.Text`
    margin-bottom: 60px;
    height: 100px;
    
    font-size: 35px;
    color: #FFF; 

    text-align: center; 

    border-width: 1.3px;
    border-color: #FFF;
    border-radius: 16px;
    
    padding: 20px;

    font-family: 'OpenSans-Regular';
`;

const Slogan = styled.Text`
    color: #FFF;
    font-size: 20px; 

    margin-bottom: 26px;

    font-weight: 400; 
    text-align: center;
    
    font-family: 'OpenSans-Regular';
`;

const EmailTextInput = styled.TextInput`
    backgroundColor: #EEE;

    width: 360px;
    height: 55px;

    margin-top: 50px;

    border-radius: 10px;

    padding-left: 20px;

    font-family: 'OpenSans-Regular';
`;

const PasswordTextInput = styled.TextInput`
    backgroundColor: #EEE;

    width: 360px;
    height: 55px;

    margin-top: 50px;

    border-radius: 10px;

    padding-left: 20px;

    font-family: 'OpenSans-Regular';
`;

// SignInButton = Botão de Login
const SignInButton = styled.TouchableOpacity` 
    backgroundColor: #139CB6;

    margin-top: 40px;
    padding: 10px;

    width: 100px;
    
    border-radius: 15px;
    
    elevation: 7;
`;

// SignUpButton = Botão de Cadastro
const SignUpButton = styled.TouchableOpacity`
    background-color: #139CB6;

    margin-top: 40px;
    padding: 10px;
    width: 160px;

    border-radius: 15px;

    elevation: 7;
`;