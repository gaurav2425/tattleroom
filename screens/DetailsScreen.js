import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import io from "socket.io-client";

const socket = io("http://172.16.0.126:3000");

export default function DetailsScreen({ navigation, route }) {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [roomUsers, setRoomUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("userJoined", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on("roomData", (users) => {
      setRoomUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const joinRoom = () => {
    if (username && room) {
      socket.emit("joinRoom", { username, room });
      setJoined(true);
    }
  };

  return (
    <View style={styles.roomContainer}>
      <Text style={styles.title}>Room: {route?.params?.room}</Text>
      <Text style={styles.subtitle}>Users in the room:</Text>
      <FlatList
        data={route?.params?.roomUsers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.user}>{item}</Text>}
      />
      <Text style={styles.subtitle}>Messages:</Text>
      <FlatList
        data={route?.params?.messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  joinContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roomContainer: {
    flex: 1,
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
  },
  user: {
    fontSize: 16,
    marginVertical: 5,
  },
  message: {
    fontSize: 14,
    marginVertical: 2,
    fontStyle: "italic",
  },
});
