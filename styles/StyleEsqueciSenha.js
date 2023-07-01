import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF'
    },

    containerVoltar:{
        width:'90%',
        paddingTop:'12%'
    },

    buttonVoltar:{
        backgroundColor:'#8500FF',
        marginRight:'85%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        padding:5
    },

    textVoltar:{
        color:'#FFF',
        fontSize:14,
        fontWeight:'bold'
    },

    containerLogo:{
        flex:1,
        justifyContent:'center',
        marginVertical:'10%'
    },

    logo:{
        width:130,
        height:130,
    },

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom:50,
        marginVertical:'5%'
    },

    inputEmail:{
        backgroundColor:'#DADADA',
        width:'90%',
        marginBottom:15,
        color:'#8500FF',
        fontSize:17,
        borderRadius:5,
        padding:10,
        marginVertical:'5%'
    },

    buttonEsqueciSenha:{
        backgroundColor:'#8500FF',
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginVertical:'20%'
    },

    buttonEsqueciSenhaText:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'bold'
    },
});

export default styles