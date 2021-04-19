import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({ citas, setCitas, setIsForm }) => {
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const [ paciente, setPaciente ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ telefono, setTelefono ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirmDate = date => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    setDate(date.toLocaleDateString('es-ES', options));
    hideDatePicker();
  }

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const handleConfirmTime = time => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: false };
    setTime(time.toLocaleString('en-US', options));
    hideTimePicker();
  };

  const handleSubmit = () => {
    if(date.trim() === '' || time.trim() === '' || paciente.trim() === '' || propietario.trim() === '' || telefono.trim() === '' || sintomas.trim() === ''){
      showAlert()
    };

    const newCita = { date, time, paciente, propietario, telefono, sintomas };
    newCita.id = shortid.generate();

    setCitas([...citas, newCita]);
    setIsForm(false);
  };

  const showAlert = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'OK' }])
  }

  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.label}>Paciente</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => setPaciente(e)}
        />
      </View>

      <View>
        <Text style={styles.label}>Dueño</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => setPropietario(e)}
        />
      </View>

      <View>
        <Text style={styles.label}>Telefono</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={e => setTelefono(e)}
        />
      </View>

      <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          locale="es_ES"
          headerTextIOS="Elige una fecha"
        />
        <Text>{date}</Text>
      </View>

      <View>
        <Button title="Show Time Picker" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
          locale="es_ES"
          headerTextIOS="Elige una Hora"
        />
        <Text>{time}</Text>
      </View>

      <View>
        <Text style={styles.label}>Sintomas</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => setSintomas(e)}
        />
      </View>

      <View>
        <TouchableHighlight style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            Crear nueva cita
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  form: {
    width: '95%',
    marginVertical: 16,
    marginHorizontal: '2.5%'
  },
  label: {
    fontSize: 12
  },
  input: {
    padding: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#07c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white'
  }
})

export default Formulario
