import React, { createContext, useContext } from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

const lightColors = {
  background: "#FFFACD",
  text: "#8B0000",
  vibe: "☀️",
};
const darkColors = {
  background: "#2F4F4F",
  text: "#7FFFD4",
  vibe: "🦇",
};

const Tema = createContext(lightColors);

const Monstrinho = () => {
  const tema = useContext(Tema);

  return (
    <View style={[styles.caixa, { backgroundColor: tema.background }]}>
      <Text style={[styles.texto, { color: tema.text }]}>{tema.vibe}</Text>
    </View>
  );
};

const luzSombra = () => {
  const esquemaDeCores = useColorScheme();

  const coresAtuais = esquemaDeCores === "dark" ? darkColors : lightColors;

  return (
    <Tema.Provider value={coresAtuais}>
      <View
        style={[
          styles.telaInteira,
          { backgroundColor: coresAtuais.background },
        ]}
      >
        <Monstrinho />
      </View>
    </Tema.Provider>
  );
};

const styles = StyleSheet.create({
  telaInteira: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  caixa: {
    padding: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000",
  },
  texto: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default luzSombra;
