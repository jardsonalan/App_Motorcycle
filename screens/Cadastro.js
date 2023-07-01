import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import styles from '../styles/StyleCadastro';

export default function Cadastro({navigation}) {
    const [nomeUsuario, setNomeUsuario] = useState(null)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)

    const Cadastrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        })
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
                    source={require('./asset_logo/Cadastro.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.container}>

                <TextInput
                style={styles.inputsCadastro}
                value={nomeUsuario}
                onChangeText={ (nomeUsuario) => setNomeUsuario}
                placeholder="Digite o nome de usuário"
                placeholderTextColor={"#8500FF"}
                keyboardType="default"
                />

                <TextInput
                style={styles.inputsCadastro}
                value={email}
                onChangeText={ (email) => setEmail}
                placeholder="Informe seu e-mail"
                placeholderTextColor={"#8500FF"}
                keyboardType="email-address"
                />

                <TextInput
                style={styles.inputsCadastro}
                value={senha}
                onChangeText={ (senha) => setSenha}
                placeholder="Digite sua senha"
                placeholderTextColor={"#8500FF"}
                secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonCadastro} onPress={() => Cadastrar()}>
                    <Text style={styles.buttonCadastroText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}