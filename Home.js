import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

export default function App({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alzheimer Care</Text>
        <MaterialIcons name="menu" size={40} color="black" />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lembrete')}>
            <MaterialIcons name="list" size={60} color="black" />
            <Text style={styles.buttonText}>Lembretes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
            <FontAwesome name="book" size={60} color="black" />
            <Text style={styles.buttonText}>Diário</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="heart" size={60} color="black" onPress={() => navigation.navigate('Monitoramento')} />
            <Text style={styles.buttonText}>Monitoramento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="contacts" size={60} color="black" onPress={() => navigation.navigate('Contatos')}/>
            <Text style={styles.buttonText}>Contatos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.remindersContainer}>
        <Text style={styles.remindersTitle}>Lembretes Ativos</Text>
        <View style={styles.reminder}>
          <Text>Medicamento 1 - 18:30</Text>
        </View>
        <View style={styles.reminder}>
          <Text>Medicamento 2 - 21:30</Text>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.locationTitle}>Localização</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#7EBBD6',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 17,
    textAlign: 'center',
  },
  remindersContainer: {
    marginBottom: 20,
  },
  remindersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  reminder: {
    backgroundColor: '#B3E5FC',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  mapContainer: {
    marginBottom: 20,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  map: {
    height: 200,
    borderRadius: 10,
  },
});
