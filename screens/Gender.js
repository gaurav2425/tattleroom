import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Triangle from "../assets/svgs/Triangle.js";
import Button from "../src/components/Buttons/Button.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import CircularButton from "../src/components/Buttons/CircularButton.js";
import { useDispatch } from "react-redux";
import { setGender } from "../redux/slices/userSlice.js";

const { width: screenWidth } = Dimensions.get("window");

const Gender = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const dispatch = useDispatch();
  return (
    <View style={styles.main_container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/onboarding_banner.png")}
        style={styles.top_container}
        resizeMode="cover"
      >
        <View style={{ width: "100%" }}>
          <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
            <Text style={styles.membership_text}>MEMBERSHIP APPLICATION</Text>
            <Text style={styles.top_text}>Select Your Gender</Text>
          </View>

          {/* Row of Triangles */}
          <View style={styles.triangle_container}>
            {Array.from({ length: Math.ceil(screenWidth / 20) }).map(
              (_, index) => (
                <Triangle key={index} />
              )
            )}
          </View>
        </View>
      </ImageBackground>

      <View style={styles.bottom_container}>
        {/* Gender Selection */}
        <View style={styles.gender_container}>
          <TouchableOpacity
            style={[
              styles.gender_option,
              selectedGender === "male" && styles.selected_option,
            ]}
            onPress={() => setSelectedGender("male")}
          >
            <AntDesign
              name={selectedGender === "male" ? "checkcircle" : "checkcircleo"}
              size={24}
              color={selectedGender === "male" ? "#61204E" : "#999"}
            />
            <Text
              style={[
                styles.gender_text,
                selectedGender === "male" && styles.selected_text,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.gender_option,
              selectedGender === "female" && styles.selected_option,
            ]}
            onPress={() => setSelectedGender("female")}
          >
            <AntDesign
              name={
                selectedGender === "female" ? "checkcircle" : "checkcircleo"
              }
              size={24}
              color={selectedGender === "female" ? "#61204E" : "#999"}
            />
            <Text
              style={[
                styles.gender_text,
                selectedGender === "female" && styles.selected_text,
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom_button}>
          <CircularButton
            onpress={() => {
              console.log("Hello");

              dispatch(setGender(selectedGender));
              navigation.navigate(`Bio`);
            }}
            title="Next"
            navigationScreenName="Bio"
            navigation={navigation}
            disabled={!selectedGender} // Prevents navigation without selection
          />
        </View>
      </View>
    </View>
  );
};

export default Gender;

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
  bottom_container: {
    flex: 0.7,
    paddingTop: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  top_text: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "DMSansBlack",
  },
  membership_text: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "DMSansBold",
    marginBottom: 5,
  },
  triangle_container: {
    flexDirection: "row",
  },
  gender_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  gender_option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ADABAB",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    width: 120,
    justifyContent: "center",
  },
  selected_option: {
    borderColor: "#61204E",
    // backgroundColor: "#FCE4EC",
  },
  gender_text: {
    fontSize: 18,
    fontFamily: "DMSansSemiBold",
    marginLeft: 10,
    color: "#000",
  },
  selected_text: {
    color: "#61204E",
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
