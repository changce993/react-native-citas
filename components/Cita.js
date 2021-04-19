import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const App = ({ item, handeDelete}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Paciente: {item.paciente}</Text>
      <Text style={styles.text}>Propietario: {item.propietario}</Text>
      <Text style={styles.text}>Sintomas: {item.sintomas}</Text>

      <View>
        <TouchableHighlight style={styles.button} onPress={() => handeDelete(item.id)}>
          <Text style={styles.buttonText}>
            Eliminar
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    marginHorizontal: '2.5%',
    marginTop: 12,
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 8,
    shadowColor: 'rgba(10,22,40,.12)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginVertical: 8
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#07c'
  },
  buttonText: {
    color: 'white'
  }
});

export default App;
