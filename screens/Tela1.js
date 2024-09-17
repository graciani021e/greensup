// Tela1.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tela1 = () => {
  const navigation = useNavigation();

  const onSwipeLeft = () => {
    navigation.navigate('Tela2');
  };

  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require('../assets/Tela1..jpg')} // Corrija o nome do arquivo se      0 necessário
      />
      
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
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    marginTop: -75,
  },
});

export default Tela1;
