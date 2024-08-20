import React from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

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

      {/* Lembretes Medicamentos */}
      <View style={styles.reminderSection}>
        <Text style={styles.sectionTitle}>Lembretes Medicamentos</Text>
        <View style={styles.reminderItem}>
          <Text>Medicamento 1 - 18:30</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="pencil" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="trash" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.reminderItem}>
          <Text>Medicamento 2 - 21:30</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="pencil" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="trash" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Lembretes Compromissos */}
      <View style={styles.reminderSection}>
        <Text style={styles.sectionTitle}>Lembretes Compromissos</Text>
        <View style={styles.reminderItem}>
          <Text>Médico - 08:00</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="pencil" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="trash" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.reminderItem}>
          <Text>Médica - 12:00</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="pencil" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="trash" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Botão Adicionar Lembrete */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AdicionarLembrete')}>
        <Text style={styles.addButtonText}>Adicionar Lembrete</Text>
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
  reminderSection: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reminderItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
  addButton: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  addButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
