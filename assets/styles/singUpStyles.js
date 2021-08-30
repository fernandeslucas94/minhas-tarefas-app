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

    height: 120px;
    width: 100%;

    align-items: center;
    justify-content: center;
`;

const PageHeaderContent = styled.Text`
    color: #FFF;

    font-size: 28px;
    font-weight: 400;
    font-family: 'OpenSans-Regular';

    margin-bottom: 15px;

    border: 1.5px solid #FFF;
    border-radius: 10px;

    padding: 10px;
    
`;

const FormFields = styled.View`
    height: 600px;
    align-items: center;

    margin-top: 40px;
`;

const FormContentField = styled.TextInput`
    margin-top: 35px;
    margin-bottom: 5px;

    border: 1px solid grey;
    border-radius: 15px;

    width: 330px;
    height: 60px;

    padding-left: 10px;

    font-family: 'OpenSans-Regular';
`;

const SignUp = styled.TouchableOpacity`
    backgroundColor: #09A1BC;

    height: 50px;
    width: 150px;

    margin-top: 60px;
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

    height: 50px;
    width: 140px;

    align-items: center;
    justify-content: center;

    elevation: 7;

    border-radius: 20px;
`;