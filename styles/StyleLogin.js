import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    containerLogo:{
        flex:1,
        justifyContent: 'center',
        marginVertical:'-3%',
    },
    /*
    logo:{
        width:130,
        height:130,
    },
    */
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom:50,
    },
    inputs_login:{
        backgroundColor: '#DADADA',
        width: '90%',
        marginBottom:15,
        color: '#8500FF',
        fontSize:17,
        borderRadius:5,
        padding:10,
        marginVertical:'3%',
    },
    button_login:{
        backgroundColor: '#8500FF',
        width: '90%',
        height:45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        marginVertical:'5%',
    },
    button_login_text:{
        color: '#FFF',
        fontSize:18,
        fontWeight: 'bold',
    },
    box_button:{
        //flex:1,
        flexDirection:'row',
        padding:3,
    },
    esqueci_senha:{
        color: '#8500FF',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        margin:50,
        marginTop:10,
        fontSize:15,
        //flex:1,
    },
    cadastro:{
        color: '#8500FF',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        margin:50,
        marginTop:10,
        fontSize:15,
        //flex:1,
    },
    /*
    logo:{
        width:150,
        height:150,
        justifyContent: 'center',
        left:135,
        top:30,
    },
    inputs_login:{
        backgroundColor: '#B3B3B3',
        borderRadius:5,
        margin:10,
        padding:8,
        color: '#8500FF',
        fontSize:20,
        flex:0.2,
        top: 40
    },
    senha:{
        backgroundColor: '#B3B3B3',
        borderRadius:5,
        margin:30,
        padding:8,
        color: '#8500FF',
        fontSize:20,
        flex:0.2,
        top: 20
    },
    button_login:{
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        marginLeft:120,
        marginRight:120,
        backgroundColor: '#8500FF',
        padding:10,
        top:10,
        borderRadius:3,
    },
    button_login_text:{
        color: '#FFF',
        fontSize:20,
        fontWeight: 'bold'
    },
    box_button:{
        flex:1,
        flexDirection:'row',
    },
    esqueci_senha:{
        color: '#8500FF',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        margin:32,
        fontSize:15,
        flex:0.5
    },
    cadastro:{
        color: '#8500FF',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        margin:32,
        fontSize:15,
        left:55,
        flex:0.5
    },
    */
});

export default styles