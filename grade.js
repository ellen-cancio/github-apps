import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const grade = () => {
  const [celulas, setCelulas] = useState(Array(9).fill(false));

  const alternarCor = (index) => {
    const novasCelulas = [...celulas];
    novasCelulas[index] = !novasCelulas[index];
    setCelulas(novasCelulas);
  };

  return (
    <View style={styles.container}>
      {celulas.map((estaColorida, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.celula,
            { backgroundColor: estaColorida ? '#808000' : '#E0E0E0' } 
          ]}
          onPress={() => alternarCor(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  celula: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
});

export default grade;