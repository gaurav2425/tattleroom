import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Notification from "../src/components/Notification";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/userSlice";

const Notifications = ({ navigation: { goBack } }) => {
  const [notifications, setNotifications] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch(setToken(""));
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <View style={styles.notificationcontainer}>
      <View style={styles.notificationheader}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.nametxt}>Activity</Text>
      </View>
      {false ? (
        <View style={styles.notificationloadercontainer}>
          <ActivityIndicator size={50} color="#3E3C9C" />
        </View>
      ) : (
        <View style={styles.notificationcontainer}>
          <View style={styles.notificationbody}>
            <ScrollView style={styles.notificationbody}>
              {notifications.map((notification, index) => {
                return (
                  <Notification
                    notification={notification}
                    key={index}
                  ></Notification>
                );
              })}
            </ScrollView>
          </View>

          <StatusBar backgroundColor="#FAF5EF" style="auto" />
        </View>
      )}
    </View>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  notificationcontainer: {
    // marginTop: statusbarHeight,
    flex: 1,
    backgroundColor: "#F6F4DF",
  },
  notificationheader: {
    // flex: 0.07,
    height: 80,
    borderColor: "#BEB8B8",
    borderBottomWidth: 1,
    // backgroundColor: '#F65F65',
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: 10,
  },
  icon1: {
    color: "#000000",
  },
  backButton: {
    position: "absolute",
    alignSelf: "center",
    left: 10,
    bottom: 10,
  },
  backicon: {
    fontSize: 30,
    position: "absolute",
    flexDirection: "row",
    display: "flex",
    fontWeight: "400",
    color: "#000000",
  },
  backripple: {
    fontSize: 30,
    left: 10,
    position: "absolute",
    flexDirection: "row",
    display: "flex",
    fontWeight: "400",
    color: "#000000",
    // marginLeft: 10,
    padding: 10,
    borderRadius: 30,
  },
  nametxt: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    // marginBottom: 10,
    fontFamily: "DMSansSemiBold",
    color: "#000000",
  },
  notificationbody: {
    // flex: 0.9,
  },
  notificationloadercontainer: {
    // backgroundColor: '#FFFF',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
