import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Telatrocasenha = () =>
{
   const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
     <Text style={styles.cadastro2}>
        Senha
      </Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('Teladoperfil')}>
      <Image style={styles.logo}
      source={require('../assets/seta-removebg-preview.png')}/>
      </TouchableOpacity>
      <Text style={styles.email2}>
       Senha Atual
      </Text>
      <TextInput style={styles.emailInput2}
        	
      />
      <Text style={styles.nome}>
        Crie sua nova senha
      </Text>
       
      <TextInput style={styles.nomeInput}
        
      />
      <TouchableOpacity style = {styles.outroBotao2}
      onPress={() => navigation.navigate('Teladelogin')}>
          <Text style = {styles.textBotao}>
               Atualizar
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.cadastroButtun}>
          <Text style = {styles.textCadastro2}>
              Apagar a conta
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
  cadastroButtun: {
    marginLeft: -0,
  },
   textCadastro2: {
    fontSize: 16,
    textAlign: 'center',
  },
  textBotao: {
    textAlign: 'center',
    fontSize: 24,
  },
  outroBotao2: {
    width: 250,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: '#36C656',
    padding: 9,
  },
  nome: {
    marginLeft: -280,
    marginTop: 70,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
    right: -80,
  },
  email2: {
    marginLeft: -280,
    marginTop: 30,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
    right: -35,
  },
   emailInput2: {
    width: 350,
    borderWidth: 1,
    marginLeft: -5,
    display: 'flex',
    height: 50,
    padding: 10,
    fontSize: 18,
  },
  nomeInput: {
    width: 350,
    borderWidth: 1,
    marginLeft: -5,
    display: 'flex',
    height: 50,
    padding: 10,
    fontSize: 18,
    
  },
  cadastro2: {
    marginTop: 80,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 3,
    padding: 30,
    backgroundColor: '#36C656',
    width: 390,
    height: 100,
  },
  logo: {
    width: 30,
    height: 15,
    bottom: 60,
     left: -160,
  },
  });
  
export default Telatrocasenha;