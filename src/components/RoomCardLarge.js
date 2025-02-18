import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const RoomCardLarge = ({ room }) => {
  console.log("room", room?.imgSrc);

  return (
    <View style={styles.roomcard_container}>
      <View style={styles.top_container}>
        <ImageBackground
          source={room?.imgSrc}
          style={{
            height: "100%",
          }}
        >
          <View style={styles.people_container}>
            <Text style={styles.people_txt}>120</Text>
            <Image
              source={require("../../assets/people.png")}
              style={{
                width: 10,
                height: 10,
              }}
            ></Image>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottom_container}>
        <View
          style={{
            width: "20%",
          }}
        >
          <Image
            source={require("../../assets/peoplegroup.png")}
            style={{
              width: 30,
              height: 30,
            }}
          ></Image>
        </View>
        <View
          style={{
            width: "80%",
          }}
        >
          <Text style={styles.room_txt}>{room?.title}</Text>
          <Text style={styles.live_txt}>Live</Text>
        </View>
      </View>
    </View>
  );
};

export default RoomCardLarge;

const styles = StyleSheet.create({
  roomcard_container: {
    width: 250,
    height: 280,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
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
});
