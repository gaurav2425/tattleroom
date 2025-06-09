import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Notification = ({ notification }) => {
  
  return (
    <View style={styles.notificationcontainer}>
      <View style={styles.container1}>
        <View style={styles.imagecontainer}>
          <Image
            // source={require('.././assets/images/punk8033.png')}
            source={{
              uri: "https://img.seadn.io/files/f10386a1d9330f9cc12879154e6457cd.png?fit=max&w=600",
              // uri: 'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432__340.jpg',
              // uri: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.notificationtxt}>
          <Text style={styles.notificationname}>Sonny Sangha</Text>
          <Text style={styles.notificationmsg}>Hello</Text>
        </View>
      </View>
      <View style={styles.time}>
        <Text style={styles.timetxt}>12:21 pm</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notificationcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: '#FFFF',
    // borderWidth: 1,
    padding: 10,
  },
  imagecontainer: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: "grey",
  },
  notificationtxt: {
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
  },
  notificationname: {
    // marginLeft: 25,
    maxWidth: 180,
    fontFamily: "DMSansBold",
    color: "#000000",
    fontSize: 18,
  },
  notificationmsg: {
    // marginLeft: 25,
    maxWidth: 180,
    fontFamily: "DMSansSemiBold",
    color: "#000000",
    fontSize: 18,
  },
  time: {
    // position: "absolute",
    right: 0,
    marginRight: 8,
    fontFamily: "DMSansSemiBold",
  },
  container1: {
    display: "flex",
    flexDirection: "row",
  },
  timetxt: {
    fontFamily: "Poppins-Medium",
    color: "#696969",
    marginTop: 5,
    fontSize: 11,
    fontFamily: "DMSansSemiBold",
  },
});
