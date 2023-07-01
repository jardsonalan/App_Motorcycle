import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import styles from '../styles/StyleConfirmeEmail';

export default function ConfirmeEmail({navigation}) {
    const [email, setEmail] = useState(null);

    const EsqueciSenha = () => {
        navigation.navigate("EsqueciSenha")
    }

    const Voltar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        })
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            
            <View style={styles.containerVoltar}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={() => Voltar()}>
                    <Text style={styles.textVoltar}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerLogo}>
                <Image 
                    source={require('./asset_logo/Moto_BuscApp.png')}
                />
            </View>

            <View style={styles.container}>

                <TextInput
                    style={styles.inputEmail}
                    value={email}
                    onChangeText={ (email) => setEmail}
                    placeholder="Informe seu e-mail"
                    placeholderTextColor={"#8500FF"}
                    keyboardType="email-address"
                />

                <TouchableOpacity style={styles.buttonEmail} onPress={() => EsqueciSenha()}>
                    <Text style={styles.buttonEmailText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}