import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Teladeinicio = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.logo1}
      source={require('../assets/pesquise-removebg-preview.png')} />
      <Text style={styles.email}>
        Escaneie produtos ou pesquise para vê-los.
      </Text>
      <TouchableOpacity style = {styles.outroBotao}>
            <Text style = {styles.textBotao}>
               Faça seu scan
            </Text>
         </TouchableOpacity>
      <Text style={styles.ou}>
        ou
      </Text>
      <TouchableOpacity style = {styles.outroBotao}>
            <Text style = {styles.textBotao}>
               pesquise
            </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('Teladomenu')}>
            <Image style={styles.logo}
      source={require('../assets/menu-removebg-preview-removebg-preview.png')} />
      </TouchableOpacity>
      <Image style={styles.logo3}
      source={require('../assets/fav-removebg-preview.png')} />
      
      
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
    marginLeft: -0,
    marginTop: 80,
    fontSize: 16,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
  },
  ou: {
    marginLeft: -0,
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'Arial',
    textAlign: 'center',
    color: '#0F421A',
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 0,
    bottom: -90,
    right: 150,
  },
   logo3: {
    width: 60,
    height: 60,
    marginTop: 0,
    bottom: -30,
    left: 150,
    
  },
  logo1: {
    width: 210,
    height: 250,
    marginTop: 50,
  },
  outroBotao:{
    width: 250,
    marginTop: 40,
    marginBottom: 20,
    borderRadius:30,
    backgroundColor:'#36C656',
    padding:9,
    
  },
  textBotao:{
    textAlign:'center'
  },
 

});
export default Teladeinicio;
