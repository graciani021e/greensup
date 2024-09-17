import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Buffer } from 'buffer';
import '../Config.js';
const Teladecadastro: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => { 
    const data = {
      name: username,
      email: email,
      password: password
    };
    let identifier = new Buffer(email).toString("base64");
    // const aaaaaa = await create("users", data, identifier);
  }

  return (
    <View
      style={[
        styles.container2,
        {
          flexDirection: 'column',
        },
      ]}>
      <Text style={styles.cadastro2}>
        Cadastro
      </Text>
      <TouchableOpacity style = {styles.outroBotao2}
      onPress={handleRegister}>
          <Text style = {styles.textBotao}>
               Entrar
          </Text>
      </TouchableOpacity>
      <Text style={styles.nome}>
        Nome
      </Text>
      <TextInput style={styles.nomeInput}
        	placeholder=" Digite seu nome..."
          value={username}
          onChangeText={(text: string) => setUsername(text)}
      />
      <Text style={styles.email2}>
        Email
      </Text>
      <TextInput style={styles.emailInput2}
        	placeholder=" Digite seu email..."
          value={email}
          onChangeText={(text: string) => setEmail(text)}
      />
      <Text style={styles.senha}>
        Senha
      </Text>
      <TextInput style={styles.senhaInput}
        	placeholder=" Digite seu senha..."
          secureTextEntry
          value={password}
          onChangeText={(text: string) => setPassword(text)}
      />
      <TouchableOpacity style = {styles.outroBotao2}
      onPress={handleRegister}>
          <Text style = {styles.textBotao}>
               Entrar
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.cadastroButtun}
      onPress={handleRegister}>
          <Text style = {styles.textCadastro2}>
               Já possui login? Clique aqui
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#D2E1D6',
    alignItems: 'center',
  },
  textBotao: {
    textAlign: 'center',
  },
  email2: {
    marginLeft: -280,
    marginTop: 30,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
  },
  cadastro2: {
    marginTop: 80,
    fontSize: 64,
    textAlign: 'center',
    borderWidth: 3,
    padding: 20,
    backgroundColor: '#36C656',
    width: 400,
  },
  nome: {
    marginLeft: -280,
    marginTop: 70,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
  },
  senha: {
    marginLeft: -280,
    marginTop: 30,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
  },
  nomeInput: {
    width: 350,
    borderWidth: 1,
    marginLeft: -5,
    display: 'flex',
    height: 40,
    padding: 10,
    fontSize: 18,
  },
  senhaInput: {
    width: 350,
    borderWidth: 1,
    marginLeft: -5,
    display: 'flex',
    height: 40,
    padding: 10,
    fontSize: 18,
  },
  emailInput2: {
    width: 350,
    borderWidth: 1,
    marginLeft: -5,
    display: 'flex',
    height: 40,
    padding: 10,
    fontSize: 18,
  },
  outroBotao2: {
    width: 250,
    marginTop: 70,
    borderRadius: 30,
    backgroundColor: '#36C656',
    padding: 9,
  },
  cadastroButtun: {
    marginLeft: -10,
  },
  textCadastro2: {
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Teladecadastro;