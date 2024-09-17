import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Telapqcriamos = () =>
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
        Como Green’s Up pode ajudar
      </Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('Teladoperfil')}>
      <Image style={styles.logo}
      source={require('../assets/seta-removebg-preview.png')}/>
      </TouchableOpacity>
      
      <Text style={styles.email0}>
      O Green’s Up ajuda você a fazer escolhas mais saudáveis e sustentáveis.
      </Text>
       <Text style={styles.email0}>
        Nosso app analisa os ingredientes dos produtos e informa se são prejudiciais ou de origem animal. Ele mostra uma porcentagem indicando o quão bom o produto é para a sua saúde e para o meio ambiente. Além disso, o Green’s Up apresenta os pontos positivos e negativos do produto e sugere alternativas mais saudáveis e seguras.
      </Text>
      
      
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
    marginTop:  40,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
    right: -30,
  },
  email2: {
    marginLeft: -0,
    marginTop: 30,
    margin: 24,
    fontSize: 12,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
    
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
  email0:{
    fontSize: 22,
    textAlign: 'center',
    
  },
  email3:{
    fontSize: 15,
    bottom: 25,
    left: -13,
  },
  email4:{
    fontSize: 15,
    bottom: 25,
    left: -32,
  },
  email5: {
    marginLeft: -280,
    marginTop: 30,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
    right: -130,
  },
  email1:{
    marginLeft: -280,
    marginTop: 30,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
    right: -110,
  },
  text2:{
    fontSize: 20,
    bottom: -15,
  },
  logo1: {
    width: 20,
    height: 20,
    bottom: -67,
     left: -160,
  },
  vetor1: {
    width: 15,
    height: 15,
    bottom: -50,
     left: 160,
  },
  vetor2: {
    width: 15,
    height: 15,
    bottom: -26,
     left: 160,
  },
  text3:{
    fontSize: 20,
    bottom: -90,
    left: -71,
  },
  text4:{
    fontSize: 20,
    bottom: -45,
    left: -115,
  },
  senha: {
    width: 20,
    height: 20,
    bottom: -68,
     left: -160,
  },
  text5:{
    fontSize: 30,
    bottom: -280,
    left: -140,
  },
});
export default Telapqcriamos;