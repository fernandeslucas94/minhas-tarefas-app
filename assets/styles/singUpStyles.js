import { StyleSheet } from "react-native";

export default StyleSheet.create({
    SafeAreaView:{
        backgroundColor: "#EEE",
        flex: 1,
        alignItems: 'center',
    },

    signUpHeader:{
        backgroundColor: "#517EEA",
        height: 160,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText:{
        color: "#FFF",

        fontSize: 30,
        fontWeight: '600',

        borderColor: "#FFF",
        borderWidth: 1.5,
        borderRadius: 10,

        padding: 15,
    },

    inputText:{
        marginTop: 35,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 15,
        width: 330,
        height: 60,
        paddingLeft: 10,
    },

    formFields:{
        height: 600,
        alignItems: 'center',
    },

    registerButton:{
        backgroundColor: '#517EEA',
        height: 60,
        width: 160,
        marginTop: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
})