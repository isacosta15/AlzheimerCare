import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alzheimer Care</Text>
        <MaterialIcons name="menu" size={30} color="black" />
      </View>

      <Text style={styles.sectionTitle}>Contatos Responsáveis</Text>

      <View style={styles.contactContainer}>
        <View style={styles.contact}>
          <Image
            source={{ uri: 'https://img.icons8.com/bubbles/2x/user.png' }} // Imagem de exemplo
            style={styles.contactImage}
          />
          <Text style={styles.contactName}>Julia</Text>
          <TouchableOpacity style={styles.callButton}>
            <FontAwesome name="phone" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.contact}>
          <Image
            source={{ uri: 'https://img.icons8.com/bubbles/2x/user.png' }} // Imagem de exemplo
            style={styles.contactImage}
          />
          <Text style={styles.contactName}>João</Text>
          <TouchableOpacity style={styles.callButton}>
            <FontAwesome name="phone" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyButtonText}>Emergência</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  contactContainer: {
    width: '100%',
    marginBottom: 20,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  contactName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  callButton: {
    padding: 10,
  },
  emergencyButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  emergencyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
