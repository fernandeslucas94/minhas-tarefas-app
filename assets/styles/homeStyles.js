import styled from 'styled-components/native';

export { 
    PageArea, 
    UpContainer,
    WelcomeText,
    NewRegister,
    WelcomeTextInnerContent,
    NewRegisterTitle,
    Toogle
};

const PageArea = styled.SafeAreaView`
    flex: 1;

    background-color: #FFF;

    align-items: center;
`;

const UpContainer = styled.View`
    background-color: #517EEA;

    height: 120px;
    width: 100%;

    justify-content: center;
    
`;

const Toogle = styled.View`
    background-color: #517EEA;

    height: 60px;
    width: 60px;

    margin-left: 20px;

    border-radius: 15px;

    border: 1px solid white;

    justify-content: center;
    align-items: center;
`;

const WelcomeText = styled.View`
    height: 350px;
    width: 400px;

    margin-top: 45px;

    border: 2px solid grey;
    border-radius: 20px;

    align-items: center;
    justify-content: center;
`;

const NewRegister = styled.Pressable`
    background-color: #517EEA;
    
    width: 230px;
    height: 55px;

    border-radius: 20px;

    margin-top: 140px;
    
    justify-content: center;
    align-items: center;
`;

const WelcomeTextInnerContent = styled.Text`
    margin-top: 10px; 
    font-size: 16px; 
    padding: 20px;
`;

const NewRegisterTitle = styled.Text`
    color: #FFF;
    font-size: 15.5px;
    font-weight: 600;
`;