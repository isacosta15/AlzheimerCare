import React from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker'; // Importação corrigida

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://example.com/logo.png' }} // Substitua pelo link da sua logo
          style={styles.logo} 
        />
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Mapa */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
            title={'San Francisco'}
            description={'Localização atual'}
          />
        </MapView>
      </View>

      {/* Histórico de Localizações */}
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Histórico de Localizações</Text>
        <TouchableOpacity style={styles.historyItem}>
          <Text>Av. Mariano 234, São Paulo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.historyItem}>
          <Text>Av. Mariano 234, São Paulo</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Alerta */}
      <TouchableOpacity style={styles.alertButton}>
        <Text style={styles.alertButtonText}>Alerta!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mapContainer: {
    height: 300,
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  historyContainer: {
    marginHorizontal: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  alertButton: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#FF5252',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  alertButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
