import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://blog.polipet.com.br/wp-content/uploads/2024/01/pato-1110x508.jpeg' }} 
        style={styles.image}
      />
      <Text style={styles.text}>Pato</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Card;