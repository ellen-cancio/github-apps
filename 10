import React from "react";
import {
  FlatList,
  useColorScheme,
  Platform,
  Pressable,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const posts = Array.from({ length: 15 }).map((_, i) => ({ id: i.toString() }));

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const dynamicStyles = {
    container: { backgroundColor: isDarkMode ? "#121212" : "#FFF" },
    text: { color: isDarkMode ? "#FFF" : "#000" },
  };

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={[styles.name, dynamicStyles.text]}>lalalalisa_m</Text>
        <Text style={styles.role}>LISA</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, dynamicStyles.text]}>1297</Text>
            <Text style={styles.role}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, dynamicStyles.text]}>107mi</Text>
            <Text style={styles.role}>Seguidores</Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.followButton,
            { opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Text style={styles.followButtonText}>Seguir</Text>
        </Pressable>
      </View>

      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={() => <View style={styles.postItem} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#555",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  role: {
    color: "gray",
  },
  statsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontWeight: "bold",
  },
  followButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  followButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  listContent: {
    paddingHorizontal: 1,
  },
  postItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 1,
    backgroundColor: "#888",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      },
    }),
  },
});
