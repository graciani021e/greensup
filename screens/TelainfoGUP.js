import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const TelainfoGUP = () =>
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
        Ajuda
      </Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('Teladoperfil')}>
      <Image style={styles.logo}
      source={require('../assets/seta-removebg-preview.png')}/>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('TelainfoGUP')}>
      <Text style={styles.email2}>
       Green’s Up
      </Text>
       </TouchableOpacity>
      <Text style={styles.email0}>
       Conheça mais sobre a comunidade Green’s Up.
      </Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Telacomousar')}>
      <Text style={styles.email1}>
         O que é o Green’s Up
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Telacomousar')}>
      <Text style={styles.email5}>
        Como usar Green’s Up para melhores escolhas.
      </Text>
      </TouchableOpacity>
      <Text style={styles.email6}>
        Por que criamos o Green’s Up?
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
  email2: {
    marginLeft: -305,
    marginTop: 30,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
    right: -30,
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
    fontSize: 15,
    bottom: 25,
    left: -17,
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
    marginTop: 30,
    marginLeft: 1,
    fontSize: 23,
    fontWeight: 'Arial',
    textAlign: 'Right',
    color: '#0F421A',
    
  },
   email6: {
    marginTop: 30,
    
    fontSize: 23,
    fontWeight: 'Arial',
    textAlign: 'Right',
    color: '#0F421A',
    marginLeft: -65,
  },
  email1:{
    marginLeft: -140,
    marginTop: 30,
    margin: 24,
    fontSize: 24,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
    
  },

});
export default TelainfoGUP;