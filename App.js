import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  const [ citas, setCitas ] = useState([]);

  const [ isForm, setIsForm ] = useState(false);
  const handeDelete = id => setCitas(citasActuales => citasActuales.filter(cita => cita.id !== id));

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.body}>
        <SafeAreaView style={styles.safeHeading}/>
        <Text style={styles.heading} onPress={() => setIsForm(!isForm)}>Administra tus citas</Text>
        {isForm ? (
          <>
            <Formulario citas={citas} setCitas={setCitas} setIsForm={setIsForm}/>
          </>
        ): (
          citas.length ? (
            <FlatList
              data={citas}
              keyExtractor={cita => cita.id}
              renderItem={({ item }) => <Cita item={item} handeDelete={handeDelete}/>}
            />
          ) : <Text style={styles.noCita}>No hay citas</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f9f9ff',
    height: '100%',
  },
  safeHeading: {
    backgroundColor: '#07c'
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    padding: 16,
    backgroundColor: '#07c'
  },
  noCita: {
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? 32 : 20
  }
});

export default App;
