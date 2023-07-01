import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import styles from '../styles/StyleLogin';

export default function Login({navigation}) {
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    const Cadastro = () => {
        navigation.navigate("Cadastro")
    }

    const ConfirmeEmail = () => {
        navigation.navigate("ConfirmeEmail")
    }

    const Principal = () => {
        navigation.navigate("Principal")
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('./asset_logo/Moto_BuscApp.png')}
                    //style={styles.logo}
                />
            </View>

            <View style={styles.container}>
            
                <TextInput 
                style={styles.inputs_login}
                value={email}
                onChangeText={ (email) => setEmail}
                placeholder="E-mail ou nome de usuário"
                placeholderTextColor={"#8500FF"}
                keyboardType="email-address"
                />

                <TextInput 
                style={styles.inputs_login}
                value={senha}
                onChangeText={ (senha) => setSenha}
                placeholder="Senha"
                placeholderTextColor={"#8500FF"}
                secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button_login} onPress={() => Principal()}>
                    <Text style={styles.button_login_text}>Login</Text>
                </TouchableOpacity>

                <View style={styles.box_button}>
                    <TouchableOpacity onPress={() => ConfirmeEmail()}>
                        <Text style={styles.esqueci_senha}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Cadastro()}>
                        <Text style={styles.cadastro}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}