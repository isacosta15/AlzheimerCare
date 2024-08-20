import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // Importação corrigida
import {useNavigation} from '@react-navigation/native';

export default function App() {
  const [reminderName, setReminderName] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('Medicamento');

  const handleSave = () => {
    // Simulando o salvamento dos dados
    Alert.alert('Lembrete Salvo', 'Seu lembrete foi salvo com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alzheimer Care</Text>
        <MaterialIcons name="menu" size={30} color="black" />
      </View>

      <Text style={styles.subtitle}>Novo Lembrete</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome do Lembrete</Text>
        <TextInput
          style={styles.input}
          value={reminderName}
          onChangeText={text => setReminderName(text)}
        />

        <Text style={styles.label}>Horário</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={text => setTime(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Especificações</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={details}
          onChangeText={text => setDetails(text)}
          multiline
        />

        <Text style={styles.label}>Categoria</Text>
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Medicamento" value="Medicamento" />
          <Picker.Item label="Consulta" value="Consulta" />
          <Picker.Item label="Outros" value="Outros" />
        </Picker>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Pronto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7EBBD6',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#B8B8B8',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
