import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const RoomCard = ({ cafe }) => {
  console.log("room", cafe?.imgSrc);

  return (
    <View style={styles.roomcard_container}>
      <View style={styles.left_container}>
        <View style={styles.cafe_header_container}>
          <View style={styles.cafe_profile}></View>
          <Text style={styles.cafe_name}>{cafe?.cafename}</Text>
        </View>
        <View>
          <Text style={styles.cafe_txt}>{cafe?.cafetitle}</Text>
        </View>
        <View style={styles.cafe_status_container}>
          <Feather name="radio" size={24} color="red" />
          <Text style={styles.status_txt}>Matching Now</Text>
        </View>
      </View>
      <View style={styles.right_container}>
        <Image source={require("../../assets/group_people.png")}></Image>
      </View>
    </View>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  left_container: {
    width: "50%",
    justifyContent: "space-between",
    height: "100%",
  },
  roomcard_container: {
    width: "100%",
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 35,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  top_container: {
    height: "75%",
    overflow: "scroll",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottom_container: {
    height: "25%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
  },
  live_txt: {
    color: "#F42F2F",
    fontWeight: "medium",
    fontSize: 12,
  },
  room_txt: {
    fontWeight: "bold",
    fontSize: 16,
  },
  people_container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    alignSelf: "flex-end",
    padding: 5,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#000",
  },
  people_txt: {
    fontWeight: "600",
    fontSize: 12,
  },
  cafe_txt: {
    fontFamily: "FrauncesSemiBold",
    fontSize: 35,
    fontWeight: "600",
  },
  cafe_name: {
    fontFamily: "FrauncesSemiBold",
    fontWeight: "600",
    marginLeft: 5,
  },
  status_txt: {
    fontFamily: "FrauncesSemiBold",
    fontWeight: "600",
    marginLeft: 5,
  },
  cafe_profile: {
    width: 20,
    height: 20,
    borderRadius: 8,
    backgroundColor: "grey",
  },
  cafe_header_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  cafe_status_container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
