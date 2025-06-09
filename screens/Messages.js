import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchSvg } from "../assets/svgs/CustomSVG";

const initialMessages = [
  {
    id: "1",
    name: "Sebastian Rudragian",
    message: "Perfect will check it! ✨🚀",
    time: "9:34 pm",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    unread: 2,
  },
  {
    id: "2",
    name: "Careline Varsaha",
    message: "Thanks will talk later",
    time: "8:20 pm",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    unread: 2,
  },
  {
    id: "3",
    name: "Ricky John",
    message: "Sounds good for me!",
    time: "3:30 pm",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    unread: 0,
  },
  {
    id: "4",
    name: "Vennesa Fernandis",
    message: "Sounds good for me!",
    time: "3:30 pm",
    img: "https://randomuser.me/api/portraits/women/38.jpg",
    unread: 0,
  },
];

export default function Messages() {
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  // Function to refresh messages
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // Simulate new messages arriving
      setMessages([
        {
          id: "5",
          name: "New User",
          message: "Hey! What's up? 🚀",
          time: "10:15 pm",
          img: "https://randomuser.me/api/portraits/men/30.jpg",
          unread: 1,
        },
        ...initialMessages,
      ]);
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Messages</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchSvg></SearchSvg>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor={"#000"}
          placeholder="Search message"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <Text style={styles.subHeader}>Personal chats</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={messages}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <Image source={{ uri: item.img }} style={styles.avatar} />
            <View style={styles.messageText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
            {item.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{item.unread}</Text>
              </View>
            )}
          </View>
        )}
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5E4",
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 32,
    fontFamily: "DMSansBold",
    marginTop: 20,
    marginBottom: 16,
    color: "#61204E",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 14,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    fontFamily: "DMSansSemiBold",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#000",
    fontFamily: "DMSansSemiBold",
  },
  subHeader: {
    color: "#511F49",
    fontWeight: "600",
    marginBottom: 8,
    fontFamily: "DMSansSemiBold",
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 18,
    marginRight: 12,
  },
  messageText: {
    flex: 1,
  },
  name: {
    fontFamily: "DMSansSemiBold",
    fontSize: 18,
  },
  message: {
    color: "gray",
    fontSize: 14,
    fontFamily: "DMSansSemiBold",
  },
  time: {
    color: "gray",
    fontSize: 12,
    fontFamily: "DMSansSemiBold",
  },
  unreadBadge: {
    backgroundColor: "#511F49",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  unreadText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
