import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, VirtualizedList, Linking } from 'react-native';
import styles from '../styles/StylePrincipal';
import Communications from 'react-native-communications';

export default function Principal({navigation}) {

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        fetch('http://10.0.0.108:3001/read')
            .then((response) => response.json())
            .then((responseJson) => {
                setDataSource(responseJson);
            })
    }, []);

    console.log(dataSource)

    const Item = ( item ) => (
        <View style={styles.item}>
            <View style={styles.containerAvatar}>
                <Image source={item.image} style={styles.avatar} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>{item.nomeEmpresa}</Text>
            </View>
            <View style={styles.buttonCom}>
                <TouchableOpacity onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=' + item.whatsappEmpresa)}} style={styles.containerButton}>
                    <Image source={require('./logos/whatsapp.png')} style={styles.iconW}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerButton} onPress={() => {Communications.phonecall(item.telefoneEmpresa, false)}}>
                    <Image source={require('./logos/telefone.png')} style={styles.iconT}/>
                </TouchableOpacity>
            </View>
        </View>
    )

    const renderItems = () => {
        return dataSource.map((item, index) => (
            <Item key={index} {...item} />
        ))
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <View style={styles.containerLogoPrincipal}>
                    <View>
                    <Image source={require('./asset_logo/Moto_BuscApp.png')} style={styles.logoPrincipal}/>
                    </View>
                    <TouchableOpacity style={styles.containerLupa}>
                        <Image source={require('./logos/lupa.png')} style={styles.lupa}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {
                       renderItems()
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}