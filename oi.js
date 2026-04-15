import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const botao = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Topo</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>
          oi
        </Text>
      </View>

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.buttonText}>Botão</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    height: '100%',
    width: '100%',
    backgroundColor: '#F0F0F0',
  },
  header: {
    height: 60,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10, 
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#666',
  },
  floatingButton: {
    position: 'absolute', 
    bottom: 30,
    left: 20,   
    right: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default botao;