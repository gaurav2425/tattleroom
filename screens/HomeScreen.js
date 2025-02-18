// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   StyleSheet,
// } from "react-native";
// import io from "socket.io-client";

// const socket = io("http://172.16.0.126:3000");

// export default function HomeScreen({ navigation }) {
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("");
//   const [joined, setJoined] = useState(false);
//   const [roomUsers, setRoomUsers] = useState([]);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on("userJoined", (message) => {
//       setMessages((prev) => [...prev, message]);
//     });

//     socket.on("roomData", (users) => {
//       setRoomUsers(users);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const joinRoom = () => {
//     if (username && room) {
//       socket.emit("joinRoom", { username, room });
//       setJoined(true);
//       navigation.navigate("Details", { room, roomUsers, messages });
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <View style={styles.joinContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter room"
//           value={room}
//           onChangeText={setRoom}
//         />
//         <Button title="Join Room" onPress={joinRoom} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   joinContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   roomContainer: {
//     flex: 1,
//   },
//   input: {
//     width: "80%",
//     padding: 10,
//     margin: 10,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     marginTop: 20,
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   user: {
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   message: {
//     fontSize: 14,
//     marginVertical: 2,
//     fontStyle: "italic",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import io from "socket.io-client";
import { StatusBar } from "expo-status-bar";
import RoomCard from "../src/components/RoomCard";
import BottomTab from "../src/components/BottomTab";
import RoomCardLarge from "../src/components/RoomCardLarge";
const socket = io("http://172.16.0.126:3000"); // Replace with your server URL

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [roomUsers, setRoomUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("userJoined", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    socket.on("userLeft", (message) => {
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

  const rooms = [
    {
      title: "The dating room",
      imgSrc: require("../assets/card2.jpg"),
    },
    {
      title: "The dating room",
      imgSrc: require("../assets/cardbg.jpg"),
    },
  ];

  const leaveRoom = () => {
    if (username && room) {
      socket.emit("leaveRoom", { username, room });
      setJoined(false); // Reset the state to show the join screen
      setRoomUsers([]); // Clear the user list
      setMessages([]); // Clear messages
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          // padding: 20,
          backgroundColor: "#F6F4DF",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            height: 90,

            justifyContent: "space-between",
            alignItems: "flex-end",
            flexDirection: "row",
            padding: 20,
            borderBlockColor: "#BEB8B8",
            borderBottomWidth: 0.5,
            paddingBottom: 15,
          }}
        >
          <Image
            source={require("../assets/tattlelogo.png")}
            style={{
              width: 100,
              height: 34,
            }}
          ></Image>
          <Image
            source={require("../assets/notification1.png")}
            style={{
              width: 25,
              height: 25,
            }}
          ></Image>
        </View>

        <View style={styles.main_container}>
          <View
            style={{
              paddingVertical: 10,
            }}
          >
            <Text style={styles.txt_welcome}>Welcome to explore</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.room_cards}
            >
              {rooms?.map((room, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginHorizontal: 10,
                    }}
                  >
                    <RoomCard room={room}></RoomCard>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View>
            <Text style={styles.txt_welcome}>Casual and fun</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.room_cards}
            >
              {rooms?.map((room, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginHorizontal: 10,
                    }}
                  >
                    <RoomCardLarge room={room}></RoomCardLarge>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <BottomTab></BottomTab>
      </View>
      <StatusBar style="dark"></StatusBar>
    </View>
  );
};

{
  /* {!joined ? (
        <View style={styles.joinContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter room"
            value={room}
            onChangeText={setRoom}
          />
          <Button title="Join Room" onPress={joinRoom} />
        </View>
      ) : (
        <View style={styles.roomContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>Room: {room}</Text>
            <Text style={styles.txt_leave} onPress={leaveRoom}>
              Leave
            </Text>
          </View>
          <Text style={styles.subtitle}>Users in the room:</Text>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            {roomUsers?.map((user) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "purple",
                      borderRadius: 25,
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Text style={styles.user_logo_txt}>{user[0]}</Text>
                  </View>
                  <View>
                    <Text style={styles.user}>{user}</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <Text style={styles.subtitle}>Messages:</Text>
          <FlatList
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.message}>{item}</Text>
            )}
          />
        </View>
      )} */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: "#fff",
  },
  user_logo_txt: {
    color: "#fff",
    fontSize: 29,
    fontWeight: 600,
  },
  joinContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roomContainer: {
    flex: 1,
    width: "100%",
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  txt_welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#723968",
    marginLeft: 20,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
  },
  user: {
    fontSize: 14,
    marginVertical: 5,
  },
  message: {
    fontSize: 14,
    marginVertical: 2,
    fontStyle: "italic",
  },
  txt_leave: {
    color: "red",
  },
  main_container: {
    // backgroundColor: "red",
    flex: 1,
    // paddingVertical: 10,
    // justifyContent: "space-between",
    flexDirection: "column",
  },
  room_cards: {
    paddingVertical: 10,
    flexDirection: "row",
  },
});

export default App;
