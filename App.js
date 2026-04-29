import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

const batata = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        backgroundColor={Platform.OS === "android" ? "#FF1493" : "#FFF"}
      />
      <View style={styles.header}>
        <Text style={styles.texto}>batata</Text>
      </View>

      <View style={styles.conteudo}>
        <Text>oi eu sou uma tela</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "#FFFFFF" : "#FF1493",
  },
  header: {
    padding: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
      },
      android: {
        backgroundColor: "#FF1493",
        alignItems: "flex-start",
      },
    }),
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: Platform.OS === "ios" ? "#000000" : "#FFFFFF",
  },
  conteudo: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default batata;
