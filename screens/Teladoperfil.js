import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Teladoperfil = () =>
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
      <TouchableOpacity onPress={() => navigation.navigate('Teladeinicio')}>
      <Image style={styles.logo}
      source={require('../assets/perfil-removebg-preview.png')}/>
      </TouchableOpacity> 

      <Text style = {styles.text}>
        José Carlos Rocha Guerino
      </Text>
    
      <Text style = {styles.text2}>
        josecarlosguerino@gmail.com
      </Text>

      <TouchableOpacity
      onPress={() => navigation.navigate('Telatrocaemail')}>
      <Text style = {styles.text3}>
        Dados da conta
      </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('Telatrocaemail')}>
      <Image style={styles.logo1}
      source={require('../assets/dadosdaconta-removebg-preview.png')}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('Telatrocaemail')}>
      <Image style={styles.vetor1}
      source={require('../assets/vetor-removebg-preview.png')}/>
      </TouchableOpacity>


      <TouchableOpacity>
      <Image style={styles.senha}
      source={require('../assets/senhaimg-removebg-preview.png')}/>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('Telatrocasenha')}>
      <Text style = {styles.text4}>
        Senha
      </Text>
      </TouchableOpacity>

        <TouchableOpacity>
       <Image style={styles.vetor2}
      source={require('../assets/vetor-removebg-preview.png')}/>
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
  logo: {
    width: 150,
    height: 150,
    marginTop: 80,
  },
  text:{
    fontSize: 30,
    bottom: -10,
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
export default Teladoperfil;