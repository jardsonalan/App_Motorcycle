import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        display: 'flex',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    container: {
        flex:1,
        width: '100%',
        paddingTop: '10%',
    },
    item: {
        backgroundColor: '#d9d9d9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        //flexWrap: 'wrap',
        //flex: 1,
        borderWidth: 1,
        borderColor: '#9f00ff',
        borderStyle: 'solid',
        borderRadius: 15,
        alignItems: 'center',
        //justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    avatar: {
        height: 79,
        width: 79,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderWidth: 1,
        borderColor: '#9f00ff',
        borderRadius: 100,
    },
    buttonCom: {
        flexDirection: 'row',
        display: 'flex',
    },
    containerButton: {
        backgroundColor: '#9f00ff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        padding: 5,
    },
    iconT: {
        height: 35,
        width: 35,
    },
    iconW: {
        height: 35,
        width: 35,
    },
    logoPrincipal: {
        width:130,
        height:50,
        //marginVertical: 8,
        marginLeft: 1,
        resizeMode: 'contain'
    },
    containerText: {
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerAvatar: {
        flex: 0.5
    },
    containerLogoPrincipal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff'
    },
    containerLupa: {
        backgroundColor: '#9f00ff',
        borderRadius: 100,
        marginRight: 10
    },
    lupa: {
        width: 40,
        height: 40
    }
});

export default styles