import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput,Alert } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Teladelogin: React.FC = () => {
   const navigation = useNavigation();
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Credenciais fictícias para validação
    const validUsername = 'Josecarlos03guerino@gmail.com';
    const validPassword = '123';

    if (username === validUsername && password === validPassword) {
      Alert.alert('Login bem-sucedido!', 'Você foi autenticado com sucesso.');
      navigation.navigate('Teladeinicio');
    } else {
      Alert.alert('Erro de Login', 'Usuário ou senha incorretos.');
    }
  };
  return (
<View style={styles.container}>
      <Image style={styles.logo}
      source={require('../assets/logo.png')}/>
      <Text style={styles.email}>
        Email
      </Text>
      <TextInput style={styles.emailInput}
        	placeholder=" Digite seu email..."
          value={username}
          onChangeText={(text: string) => setUsername(text)} // Tipagem correta
      />
      <Text style={styles.login}>
        Senha
      </Text>
      <TextInput style={styles.loginInput}
        	placeholder="Digite sua senha..."
          secureTextEntry
          value={password}
          onChangeText={(text: string) => setPassword(text)}
      />
      
      <TouchableOpacity style = {styles.outroBotao}
      onPress={handleLogin}>
            <Text style = {styles.textBotao}>
               Entrar
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.cadastro}
        onPress={() => navigation.navigate('Teladecadastro')}>
            <Text style = {styles.textCadastro}>
               Nao Possui cadastro? Clique aqui
            </Text>
         </TouchableOpacity>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#D2E1D6',
    alignItems: 'center',
  },
  email: {
    marginLeft: -280,
    marginTop: 80,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
  },
  emailInput: {
    width: 350,
    borderWidth: 1,
    marginLeft: -5,
    display: 'flex',
    height: 40,
    padding: 10,
    fontSize: 18,
  },
  logo: {
    width: 250,
    height: 210,
    marginTop: 80,
  },
  login: {
    marginLeft: -280,
    marginTop: 20,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
  },
  loginInput: {
    width: 350,
    borderWidth: 1,
    marginLeft: -5,
    display: 'flex',
    height: 40,
    padding: 10,
    fontSize: 18,
  },
  outroBotao: {
    width: 250,
    marginTop: 40,
    borderRadius: 30,
    backgroundColor: '#36C656',
    padding: 9,
  },
  textBotao: {
    textAlign: 'center',
  },
  cadastro: {
    marginLeft: -10,
  },
  textCadastro: {
    fontSize: 10,
  },
});

export default Teladelogin;