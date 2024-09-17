import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Teladomenu = () =>
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
      <TouchableOpacity onPress={() => navigation.navigate('Teladoperfil')}>
      <Image style={styles.logo}
      source={require('../assets/perfil-removebg-preview.png')}/>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <Text style = {styles.text}>
        Perfil
      </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('TelainfoGUP')}>
      <Text style = {styles.text2}>
        Sobre nós
      </Text>
      </TouchableOpacity >

      <TouchableOpacity  onPress={() => navigation.navigate('Teladeajuda')}>
      <Text style = {styles.text3}>
        Tire suas duvidas
      </Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text style = {styles.text4}>
        Configurações
      </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      onPress={() => navigation.navigate('Teladeinicio')}>
      <Text style = {styles.text5}>
        Voltar
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
  logo: {
    width: 150,
    height: 150,
    marginTop: 80,
  },
  text:{
    fontSize: 40,
    bottom: -10,
  },
  text2:{
    fontSize: 30,
    bottom: -10,
    left: -120,
    marginTop: 60,
  },
  text3:{
    fontSize: 30,
    bottom: -60,
    left: -71,
  },
  text4:{
    fontSize: 30,
    bottom: -110,
    left: -90,
  },
  text5:{
    fontSize: 30,
    bottom: -280,
    left: -140,
  },
});
export default Teladomenu;