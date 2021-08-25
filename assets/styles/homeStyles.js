import { StyleSheet } from 'react-native';
import { memo } from 'react/cjs/react.production.min';

export default StyleSheet.create({
    SafeAreaView:{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: 'center',
    },

    Header:{
        backgroundColor: '#517EEA',
        height: 130,
        width: '100%',
    },

    description:{
        height: 350,
        width: 400,
        marginTop: 30,
        borderWidth: 2,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    newInfoRegister:{
        backgroundColor: '#517EEA',
        width: 230,
        height: 55,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomView:{
        height: 260,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})