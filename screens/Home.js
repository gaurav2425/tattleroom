import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // For navigation
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState();
  const API_URL = "http://192.168.1.7:5500/api/users/userinfo";
  const navigation = useNavigation(); // Use navigation to redirect on logout

  const getUserInfo = async (token) => {
    try {
      const response = await axios.post(
        API_URL,
        {},
        {
          headers: {
            Authorization: `${token}`, // Pass token in Authorization header
          },
        }
      );

      console.log("User Info:", response.data.user);
      setUserData(response.data.user);
      return response.data.user; // Return user data
    } catch (error) {
      console.error(
        "Error fetching user info:",
        error.response?.data || error.message
      );
      return null;
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        getUserInfo(value);
        console.log("Stored username:", value);
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token"); // Remove token from AsyncStorage
      // Clear token from state
      setUserData(null); // Clear user data from state
      dispatch(setToken(""));

      // navigation.navigate("MobileNumber");
      // Navigate to login or signup screen
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        padding: 10,
      }}
    >
      <Text>{userData?.firstName}</Text>
      <Button title="Logout" onPress={handleLogout} />
      <StatusBar style="dark" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
