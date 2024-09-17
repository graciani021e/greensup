import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Telateste: React.FC = () => {
  const [username, setUsername] = useState(''); // Tipagem correta
  const [password, setPassword] = useState(''); // Tipagem correta
  const navigation = useNavigation();
  const handleLogin = () => {
    // Credenciais fictícias para validação
    const validUsername = 'User123';
    const validPassword = 'Password123';

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
      
      <TextInput
        style={styles.loginInput}
        placeholder="Usuário"
        value={username}
        onChangeText={(text: string) => setUsername(text)} // Tipagem correta
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text: string) => setPassword(text)} // Tipagem correta
      />
      <TouchableOpacity style={styles.outroBotao} onPress={handleLogin}>
        <Text style={styles.textBotao}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#D2E1D6',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
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
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Telateste;
