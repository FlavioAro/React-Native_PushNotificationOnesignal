import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OneSignal from 'react-native-onesignal';

// a7682c59-3b6c-4b2f-a6cf-72a778c9bff3

export default function App() {

useEffect(()=>{

  OneSignal.init('a7682c59-3b6c-4b2f-a6cf-72a778c9bff3');

  OneSignal.addEventListener('opened', onOpened);

  return () => OneSignal.removeEventListener('opened', onOpened);

}, []);

function onOpened(result){
  console.log('Mensagem: ', result.notification.payload.body);
  console.log('Result: ', result);
}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Push Notifications</Text>
      <Text style={{color: '#FFF'}}>OneSignal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF'
  },
  text:{
    fontWeight:'bold',
    fontSize: 28,
    color: '#FFF'
  }
})