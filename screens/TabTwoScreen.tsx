import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { queryCepAll } from '../services/dataBaseTemp/dml';

/* export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
} */

export default function TabTwoScreen() {
  var ceps = queryCepAll();
  const [cep, setCep] = useState(ceps);

  return (
    <View style={styles.container}>
      <FlatList
        data = {cep}
        renderItem={({ item }) => (
          <><View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.title}>Rua:{item.rua}; {"\n"}Bairro: {item.bairro}; {"\n"}uf:{item.uf} </Text></>
        )}
      />
       
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
