import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Text,
} from "react-native";
import io from "socket.io-client";
import { StatusBar } from "expo-status-bar";
import RoomCard from "../src/components/RoomCard";
import BottomTab from "../src/components/BottomTab";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { TicketSvg } from "../assets/svgs/CustomSVG";

const socket = io("http://192.168.1.7:3000");

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [roomUsers, setRoomUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  // Animated value for bottom tab
  const scrollY = useRef(new Animated.Value(0)).current;

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

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch(setToken(""));
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  const [cafes, setCafes] = useState([]);

  const getCafes = () => {
    axios
      .get("https://tattlebackend.onrender.com/api/cafes")
      .then((res) => {
        setCafes(res.data.cafes);
      })
      .catch((err) => {
        console.log("Err", err.message);
        setCafes([]);
      });
  };

  useEffect(() => {
    getCafes();
  }, []);
  const rooms = [
    {
      title: "The dating room",
      imgSrc: require("../assets/card2.jpg"),
      roomId: 12424,
    },
    {
      title: "The dating room",
      imgSrc: require("../assets/card2.jpg"),
      roomId: 12424,
    },
    {
      title: "The dating room",
      imgSrc: require("../assets/card2.jpg"),
      roomId: 12424,
    },
  ];

  // Interpolate animated value to hide/show BottomTab
  const bottomTabTranslate = scrollY.interpolate({
    inputRange: [0, 800], // Adjust this value based on scroll sensitivity
    outputRange: [0, 200], // Move down by 80px
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/tattlelogo.png")}
          style={styles.logo}
        />
        <View style={styles.headerContainer_right}>
          <View style={styles.ticket}>
            <Text style={styles.ticket_txt}>3</Text>
            <TouchableOpacity
              onPress={() => {
                handleLogout();
              }}
            >
              <TicketSvg></TicketSvg>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Matching");
            }}
          >
            <Image
              source={require("../assets/notification1.png")}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <Animated.ScrollView
          style={{ paddingVertical: 10 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          {console.log("cafes", cafes)}
          {cafes.map((cafe, index) => (
            <TouchableOpacity
              key={index}
              style={{ marginHorizontal: 10, marginTop: 10 }}
              onPress={() => navigation.navigate("Book", { cafe })}
            >
              <RoomCard cafe={cafe} />
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>
      </View>

      {/* Animated Bottom Tab */}
      <Animated.View
        style={[
          styles.bottomTabContainer,
          { transform: [{ translateY: bottomTabTranslate }] },
        ]}
      >
        <BottomTab navigation={navigation} />
      </Animated.View>

      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4DF",
  },
  headerContainer: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
    borderBottomColor: "#BEB8B8",
    borderBottomWidth: 0.5,
    paddingBottom: 15,
  },
  ticket_txt: {
    color: "#000",
    fontSize: 14,
    marginRight: 10,
    fontFamily: "DMSansSemiBold",
  },
  ticket: {
    marginRight: 10,
    backgroundColor: "#FFFDE7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  headerContainer_right: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 34,
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  mainContainer: {
    flex: 1,
  },
  bottomTabContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff", // Ensure visibility when moving
  },
});

export default HomeScreen;
