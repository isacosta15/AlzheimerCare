import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  const [sleep, setSleep] = useState(null);
  const [food, setFood] = useState(null);
  const [medications, setMedications] = useState(null);
  const [daySummary, setDaySummary] = useState('');

  const handlePress = (type, value) => {
    if (type === 'sleep') {
      setSleep(value);
    } else if (type === 'food') {
      setFood(value);
    } else if (type === 'medications') {
      setMedications(value);
    }
  };

  return (
    <View style={styles.container}>

     <View style={styles.header}>
        <Text style={styles.title}>Alzheimer Care</Text>
        <MaterialIcons name="menu" size={30} color="black" />
      </View>

      <Text style={styles.title}>Monitoramento Bem-Estar</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Sono</Text>
        <View style={styles.emojis}>
          {renderEmojis('sleep', sleep, handlePress)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Alimentação</Text>
        <View style={styles.emojis}>
          {renderEmojis('food', food, handlePress)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Medicamentos</Text>
        <View style={styles.emojis}>
          {renderEmojis('medications', medications, handlePress)}
        </View>
      </View>

      <Text style={styles.label}>Fale sobre o seu dia</Text>
      <TextInput
        style={styles.input}
        placeholder="Value"
        value={daySummary}
        onChangeText={setDaySummary}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Relatórios</Text>
      </TouchableOpacity>
    </View>
  );
};

const renderEmojis = (type, selectedValue, handlePress) => {
  const emojis = [
    { value: 1, emoji: '😡' },
    { value: 2, emoji: '😠' },
    { value: 3, emoji: '😐' },
    { value: 4, emoji: '🙂' },
    { value: 5, emoji: '😁' },
  ];

  return emojis.map(({ value, emoji }) => (
    <TouchableOpacity key={value} onPress={() => handlePress(type, value)}>
      <Text style={[styles.emoji, selectedValue === value && styles.selectedEmoji]}>
        {emoji}
      </Text>
    </TouchableOpacity>
  ));
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
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  emojis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  emoji: {
    fontSize: 30,
  },
  selectedEmoji: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
});

export default App;
