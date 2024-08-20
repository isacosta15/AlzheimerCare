import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [memoryName, setMemoryName] = useState('');
  const [memoryDescription, setMemoryDescription] = useState('');
  const [memoryDate, setMemoryDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || memoryDate;
    setShowDatePicker(Platform.OS === 'ios');
    setMemoryDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diário de Memórias</Text>

      <Text style={styles.label}>Nome da Memória</Text>
      <TextInput
        style={styles.input}
        placeholder="Value"
        value={memoryName}
        onChangeText={setMemoryName}
      />

      <Text style={styles.label}>Descreva a Memória</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Value"
        value={memoryDescription}
        onChangeText={setMemoryDescription}
        multiline
      />

      <Text style={styles.label}>Data da Memória</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
        <Text style={styles.dateButtonText}>
          {memoryDate.toDateString()}
        </Text>
      </TouchableOpacity>
      
      {showDatePicker && (
        <DateTimePicker
          value={memoryDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Fotos/ Vídeos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#B2E0FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  dateButton: {
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  uploadButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
