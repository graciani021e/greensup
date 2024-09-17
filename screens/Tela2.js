// Tela2.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tela2 = () => {
  const navigation = useNavigation();

  const onSwipeLeft = () => {
    navigation.navigate('Tela3');
  };

  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require('../assets/Tela2.jpg')}
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
  },
});

export default Tela2;
