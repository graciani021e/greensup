import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tela3 = () => {
   const navigation = useNavigation();
 
 const onSwipeRight = () => {
    navigation.navigate('Tela3');
  };
  return (
    <GestureRecognizer
      onSwipeRight={onSwipeRight}
      style={styles.container}
    >
    
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={require('../assets/Tela3.jpg')}
      />

     

      <TouchableOpacity style={styles.groupEntrar}
      onPress={() => navigation.navigate('Teladecadastro')}>
        <Text style={styles.entrar}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.groupCrieUmaConta}
      onPress={() => navigation.navigate('Teladecadastro')}>
        <Text style={styles.crieUmaConta}>Crie uma conta</Text>
      </TouchableOpacity>
      
    </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  groupEntrar: {
   position: 'absolute',
    bottom: 135,
    width: 250,
    marginTop: 40,
    left: 67,
    backgroundColor: '#D2E1D6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  entrar: {
    color: '#0F421A',
    fontSize: 20,
    fontFamily: 'Asar', 
  },
  groupCrieUmaConta: {
    position: 'absolute',
    width: 272,
    height: 38,
    bottom: 160,
    left: 55,
    backgroundColor: '#FFFCFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  crieUmaConta: {
    color: '#0F421A',
    fontSize: 20,
    fontFamily: 'Asar',
  },
});

export default Tela3;
