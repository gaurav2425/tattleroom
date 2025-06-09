import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Triangle from "../assets/svgs/Triangle.js";
import NextNutton from "../src/components/Buttons/Button.js";
import NextLoaderButton from "../src/components/Buttons/NextLoaderButton.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../src/components/Buttons/Button.js";
import CircularButton from "../src/components/Buttons/CircularButton.js";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../redux/slices/userSlice.js";
const { width: screenWidth } = Dimensions.get("window");

const Name = ({ navigation }) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const triangleWidth = 20;
  const numTriangles = Math.ceil(screenWidth / triangleWidth);
  const [inputName, setInputName] = useState("");
  return (
    <View style={styles.main_container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/onboarding_banner.png")}
        style={styles.top_container}
        resizeMode="cover"
      >
        <View
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              paddingBottom: 10,
            }}
          >
            <Text style={styles.membership_text}>MEMBERSHIP APPLICATION</Text>
            <Text style={styles.top_text}>Enter your name</Text>
          </View>

          {/* Row of Triangles */}
          <View style={styles.triangle_container}>
            {Array.from({ length: numTriangles }).map((_, index) => (
              <Triangle key={index} />
            ))}
          </View>
        </View>
      </ImageBackground>

      <View style={styles.bottom_container}>
        <View>
          <View style={styles.input_container}>
            <TextInput
              placeholder="Enter your name"
              maxLength={20}
              keyboardType="ascii-capable"
              returnKeyType="done" // Adds a "Done" button (tick on some keyboards)
              style={{
                height: 50,
                paddingLeft: 10,
                backgroundColor: "#fff",
                color: "#000",
                fontSize: 18,
                fontFamily: "DMSansSemiBold",
                width: "100%",
              }}
              onChangeText={(text) => {
                setInputName(text);
              }}
              onSubmitEditing={() => console.log("✅ Input submitted!")} // Handles the tick press
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={styles.bottom_button}>
          <CircularButton
            onpress={() => {
              dispatch(setName(inputName));
              navigation.navigate(`Dob`);
            }}
            title="Next"
            navigationScreenName="Dob"
            navigation={navigation}
          ></CircularButton>
          {/* <NextLoaderButton></NextLoaderButton> */}
        </View>
      </View>
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#F6F4DF",
    flex: 1,
  },
  top_container: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input_container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ADABAB",
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 8,
  },
  bottom_container: {
    flex: 0.7,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "column",

    // flex: 1,
  },
  top_text: {
    color: "#fff",
    fontSize: 25,
    // marginTop: 4,
    fontFamily: "DMSansBlack",
  },
  triangle_container: {
    flexDirection: "row",
    // marginTop: 10,
  },
  membership_text: {
    fontSize: 14,
    color: "#fff",
    // fontWeight: "500",
    fontFamily: "DMSansBold",
    marginBottom: 5,
  },
  countrycode_txt: {
    fontSize: 18,
    fontFamily: "DMSansBold",
    paddingHorizontal: 10,
  },
  bottom_button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
