import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

const Capivaras = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  // Se deitado = 2 colunas, se em pé = 1 coluna
  const numeroDeColunas = isLandscape ? 2 : 1;

  // Calcula a largura subtraindo os paddings da tela para não quebrar a linha
  const larguraDoCard = width / numeroDeColunas - 20;

  const capivaras = ["Cleide", "Jorge", "Jubileu", "Fifi"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {capivaras.map((nome, index) => (
        <View
          key={index}
          style={[styles.caixaDePapelao, { width: larguraDoCard }]}
        >
          <Text style={styles.texto}>{nome} 🦦</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "space-between",
  },
  caixaDePapelao: {
    backgroundColor: "#8B4513", // Marrom
    height: 150,
    marginVertical: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Capivaras;
