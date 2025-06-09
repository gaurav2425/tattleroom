import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Ionicons,
  Entypo,
  AntDesign,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";
import { StatusBar, MaterialIcons } from "expo-status-bar";
import ExitSVG from "../assets/svgs/ExitSVG";
import LottieView from "lottie-react-native";

export default function Matching({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#6200ea" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tattle</Text>
        <View style={styles.header_right}>
          {/* <Text style={styles.header_right_txt}>Exit</Text> */}
          <Ionicons name="exit-outline" size={28} color="black" />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.like_container_main}>
          <View style={styles.like_container}>
            {/* <HeartIcon></HeartIcon> */}
            <LottieView
              source={require("../assets/searching.json")} // Ensure the correct path
              autoPlay
              loop
              style={styles.animation}
            />
            <Text style={styles.matching_txt}>Looking for a match</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Entypo name="cross" size={32} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <AntDesign name="message1" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => {
            navigation.navigate("Room");
          }}
        >
          <Ionicons name="people" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4DF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: "10%",
    marginHorizontal: "5%",
    borderRadius: 50,
  },
  searchText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
  footerIcon: {
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  header_right: {
    backgroundColor: "#F6F4DF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  header_right_txt: {
    fontSize: 18,
    fontWeight: "600",
    color: "#F01717",
    marginRight: 5,
    fontFamily: "DMSansSemiBold",
  },
  like_container: {
    // width: 100,
    // height: 100,
    // backgroundColor: "#61204E",
    borderRadius: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  like_container_main: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 200,
    height: 200,
  },
  matching_txt: {
    fontFamily: "DMSansSemiBold",
  },
});
