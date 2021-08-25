import { StyleSheet } from "react-native";

export default StyleSheet.create({
    SafeAreaView:{
    backgroundColor: '#517EEA',
    flex: 1,
    alignItems: 'center',
    },

    title:{
    marginTop: -90,
    fontSize: 35, 
    color: '#FFF', 
    textAlign: 'center', 
    fontWeight: '500',
    borderWidth: 2.5,
    borderColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    },

    subtitle:{
    color: '#FFF', 
    fontSize: 20, 
    marginTop: -26,
    marginBottom: 26,
    fontWeight:'500', 
    textAlign: 'center',
    },

    input:{
    backgroundColor: "#EEE",
    width: 360, 
    height: 55, 
    marginTop: 50,
    borderRadius: 30,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#517EEA',
    },

    signIn:{ // Botão de Login
    backgroundColor: '#3B6FEA',
    marginTop: 40,
    padding: 10,
    width: 100,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#3B6FEA',
    },

    signUp:{ // Botão de cadastro
    backgroundColor: '#3B6FEA',
    marginTop: 40,
    padding: 10,
    width: 200,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#3B6FEA',
    },
})