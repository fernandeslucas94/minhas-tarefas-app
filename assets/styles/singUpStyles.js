import styled from 'styled-components/native';

export { 
    PageArea,
    PageHeader,
    PageHeaderContent,
    FormFields,
    FormContentField,
    SignUp
};

const PageArea = styled.SafeAreaView`
    background-color: #EEE;

    flex: 1;
    align-items: center;
`;

const PageHeader = styled.View`
    background-color: #517EEA;

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

const SignUp = styled.Pressable`
    backgroundColor: #517EEA;

    height: 60px;
    width: 160px;

    margin-top: 100px;

    border-radius: 20px;

    align-items: center;
    justify-content: center;
    
    padding: 0;
`;