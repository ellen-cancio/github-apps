import React, { useRef, useEffect, useState } from "react";
import {
  Animated,
  Easing,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  const [progress, setProgress] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ["#4caf50", "#ffeb3b", "#f44336"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBackground}>
        <Animated.View
          style={[styles.progressBar, { width, backgroundColor }]}
        />
      </View>

      <View style={styles.buttonRow}>
        <Button title="0%" onPress={() => setProgress(0)} />
        <Button title="50%" onPress={() => setProgress(50)} />
        <Button title="100%" onPress={() => setProgress(100)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  progressBackground: {
    height: 24,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 20,
  },
  progressBar: {
    height: "100%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
