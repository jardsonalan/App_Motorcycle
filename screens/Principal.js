import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, VirtualizedList, Linking, Alert, BackHandler, FlatList } from 'react-native';
import styles from '../styles/StylePrincipal';
import Communications, { text } from 'react-native-communications';
import config from '../config/config.json';

export default function Principal({navigation}) {

    const [dataSource, setDataSource] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(config.urlRootNode+'Empresa', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((resp) => {setDataSource(resp)})
        .catch((err) => console.log(err))
    }, [])

    const Item = ( item ) => (
        <View style={styles.item}>
            <View style={styles.containerAvatar}>
                <Image source={{ uri: item.imagensEmpresa }} style={styles.avatar} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>{item.nomeEmpresa}</Text>
                <Text style={styles.endereco}>{item.enderecoEmpresa}</Text>
            </View>
            <View style={styles.buttonCom}>
                <TouchableOpacity onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=55' + item.whatsappEmpresa)}} style={styles.containerButton}>
                    <Image source={require('./logos/whatsapp.png')} style={styles.iconW}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerButton} onPress={() => {Communications.phonecall(item.telefoneEmpresa, false)}}>
                    <Image source={require('./logos/telefone.png')} style={styles.iconT}/>
                </TouchableOpacity>
            </View>
        </View>
    )

    const renderItems = () => {
        const dataToRender = searchText.length > 0 ? filteredData : dataSource;

        return dataToRender.map((item, index) => (
            <Item key={index} {...item} />
        ));
    };

    const handleSearch = (text) => {
        setSearchText(text);

        const filtered = dataSource.filter((item) => {
            return(
                item.nomeEmpresa.toLowerCase().includes(text.toLowerCase()) || 
                item.enderecoEmpresa.toLowerCase().includes(text.toLowerCase())
            );
        });

        setFilteredData(filtered);
    };

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Aviso", "Deseja mesmo sair do aplicativo?",[
                {
                    text:"Cancelar",
                    onPress:()=>null,
                    style:"cancel",
                },
                {
                    text:"Sim",
                    onPress:()=>BackHandler.exitApp()
                }
            ]);
            return true;
        }

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )
    }, []);

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <View style={styles.containerLogoPrincipal}>
                    <View>
                    <Image source={require('./asset_logo/Moto_BuscApp.png')} style={styles.logoPrincipal}/>
                    </View>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Pesquisar"
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    {
                       renderItems()
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}