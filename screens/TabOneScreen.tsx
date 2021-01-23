import * as React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { getAddress } from '../services/viacep/searchCep';

//Padrão do app expo
/* export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
} */

export default function TabOneScreen() {

  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TextInput
      style={styles.textInputt}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableOpacity
        onPress={ 
          async () => {
            const addres = await getAddress(value);
            alert (`Rua:${addres.rua} \nBairro:${addres.bairro}\n UF:${addres.uf}`);
          }
        }
        style={ styles.title }>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pesquisar 🔎</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#424242',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInputt:{
    height: 40, 
    width:200, 
    borderColor: 'white', 
    borderWidth: 1, 
    color:'black',
  },
});
