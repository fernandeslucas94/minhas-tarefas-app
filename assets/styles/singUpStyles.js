import styled from 'styled-components/native';

export { 
    PageArea,
    PageHeader,
    PageHeaderContent,
    FormFields,
    FormContentField,
    SignUp,
    BackToLogin
};

const PageArea = styled.SafeAreaView`
    background-color: #FFF;

    flex: 1;
    align-items: center;
`;

const PageHeader = styled.View`
    background-color: #09A1BC;

    height: 160px;
    width: 100%;

    align-items: center;
    justify-content: center;
`;

const PageHeaderContent = styled.Text`
    color: #FFF;

    font-size: 30px;
    font-weight: 600;

    border-color: #FFF;
    border-width: 1.5px;
    border-radius: 10px;

    padding: 15px;
`;

const FormFields = styled.View`
    height: 600px;
    align-items: center;

    margin-top: 40px;
`;

const FormContentField = styled.TextInput`
    margin-top: 35px;

    border: 1px solid grey;
    border-radius: 15px;

    width: 330px;
    height: 60px;

    padding-left: 10px;
`;

const SignUp = styled.TouchableOpacity`
    backgroundColor: #09A1BC;

    height: 60px;
    width: 160px;

    margin-top: 40px;
    margin-bottom: 20px;

    border-radius: 20px;

    align-items: center;
    justify-content: center;
    
    padding: 0;

    elevation: 7;
`;

const BackToLogin = styled.TouchableOpacity`
    margin-top: 30px;
    
    background-color: #09A1BC;

    height: 60px;
    width: 160px;

    align-items: center;
    justify-content: center;

    elevation: 7;

    border-radius: 20px;
`;