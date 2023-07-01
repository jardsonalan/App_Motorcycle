import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, FlatList, VirtualizedList, Linking } from 'react-native';
import styles from '../styles/StylePrincipal';
import Communications from 'react-native-communications';

export default function Principal({navigation}) {

    const DATA = [
        {
            id: 1,
            nome: 'Mototaxistas 1818',
            image: require('./logos/empresa.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 2,
            nome: 'Mototaxistas 2774',
            image: require('./logos/empresa2.jpeg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 3,
            nome: 'Mototaxistas 2020',
            image: require('./logos/empresa3.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 4,
            nome: 'Mototaxistas 1414',
            image: require('./logos/empresa.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 5,
            nome: 'Mototaxistas 2020',
            image: require('./logos/empresa2.jpeg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 6,
            nome: 'Mototaxistas 3030',
            image: require('./logos/empresa3.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 7,
            nome: 'Mototaxistas 4040',
            image: require('./logos/empresa.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 8,
            nome: 'Mototaxistas 2070',
            image: require('./logos/empresa2.jpeg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 9,
            nome: 'Mototaxistas 0443',
            image: require('./logos/empresa3.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 10,
            nome: 'Mototaxistas 0202',
            image: require('./logos/empresa.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 11,
            nome: 'Mototaxistas 1313',
            image: require('./logos/empresa2.jpeg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 12,
            nome: 'Mototaxistas 0606',
            image: require('./logos/empresa3.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 13,
            nome: 'Mototaxistas 3131',
            image: require('./logos/empresa.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 14,
            nome: 'Mototaxistas 5050',
            image: require('./logos/empresa2.jpeg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
        {
            id: 15,
            nome: 'Mototaxistas 3172',
            image: require('./logos/empresa3.jpg'),
            iconW: require('./logos/whatsapp.png'),
            iconT: require('./logos/telefone.png'),
            iconInfo: require('./logos/information.png')
        },
    ];

    const Whastsapp = () => {
        Linking.openURL('https://api.whatsapp.com/send?phone=5584996559042')
    }

    const discarNumero = () => {
        const numero = '84988780443';
        Communications.phonecall(numero, true)
    }

    const Item = ( {item} ) => (
        <View style={styles.item}>
            <View style={styles.containerAvatar}>
                <Image source={item.image} style={styles.avatar} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>{item.nome}</Text>
            </View>
            <View style={styles.buttonCom}>
                <TouchableOpacity onPress={() => Whastsapp()} style={styles.containerButton}>
                    <Image source={item.iconW} style={styles.iconW}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerButton} onPress={() => discarNumero()}>
                    <Image source={item.iconT} style={styles.iconT}/>
                </TouchableOpacity>
            </View>
        </View>
    )

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
                <FlatList
                    data= { DATA }
                    renderItem= { Item }
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}