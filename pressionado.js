import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const botao = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.botao,
          {
            opacity: pressed ? 0.7 : 1,
            transform: [{ scale: pressed ? 0.97 : 1 }]
          }
        ]}
      >
        <Text style={styles.texto}>Pressionado</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#556B2F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default botao;