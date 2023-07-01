import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import styles from '../styles/StyleEsqueciSenha';

export default function EsqueciSenha({navigation}) {
    const [novaSenha, setNovaSenha] = useState(null);
    
    const NovaSenha = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        })
    }

    const Voltar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'ConfirmeEmail'}]
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
                    source={require('./asset_logo/Senha.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.inputEmail}
                    value={novaSenha}
                    onChangeText={ (novaSenha) => setNovaSenha}
                    placeholder="Informe a nova senha"
                    placeholderTextColor={"#8500FF"}
                    keyboardType="default"
                />

                <TouchableOpacity style={styles.buttonEsqueciSenha} onPress={() => NovaSenha()}>
                    <Text style={styles.buttonEsqueciSenhaText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}