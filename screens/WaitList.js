import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io("http://192.168.1.7:5500");

export default function WaitList({ navigation, route }) {
  const userData = useSelector((state) => state.user);
  console.log("userData", route?.params);

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState(route?.params?.cafe?.cafeID || ""); // Get room from params if available
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

    socket.on("userLeft", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("userJoined");
      socket.off("roomData");
      socket.off("userLeft");
    };
  }, []);

  const joinRoom = () => {
    console.log(">>>>", username, room);

    if (username && room) {
      socket.emit("joinRoom", { username, room });
      setJoined(true);
    }
  };

  const leaveRoom = () => {
    if (joined) {
      socket.emit("leaveRoom", { username, room });
      setJoined(false);
      setRoomUsers([]);
      setMessages([]);
    }
  };

  return (
    <View style={styles.container}>
      {!joined ? (
        <View style={styles.joinContainer}>
          <Text style={styles.title}>Join a Room</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            value={username}
            onChangeText={setUsername}
          />
          {/* <TextInput
            style={styles.input}
            placeholder="Enter Room Name"
            value={room}
            onChangeText={setRoom}
          /> */}
          <Button title="Join Room" onPress={joinRoom} />
        </View>
      ) : (
        <View style={styles.roomContainer}>
          <Text style={styles.title}>Room: {room}</Text>
          <Text style={styles.subtitle}>Users in the room:</Text>
          <FlatList
            data={roomUsers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.user}>{item}</Text>}
          />
          <Text style={styles.subtitle}>Messages:</Text>
          <FlatList
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.message}>{item}</Text>
            )}
          />
          <View>
            <TouchableOpacity style={styles.room_btn_container}>
              <Text style={styles.join_room_txt}>JOIN ROOM</Text>
            </TouchableOpacity>
          </View>
          {/* <Button title="Leave Room" onPress={leaveRoom} /> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: "#F6F4DF",
  },
  joinContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roomContainer: {
    flex: 1,
    justifyContent: "center",
    // padding: 20,
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
  room_btn_container: {
    width: "100%",
    height: 100,
    backgroundColor: "#723968",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  join_room_txt: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "DMSansBold",
  },
});
