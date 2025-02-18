import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import Triangle from "../assets/svgs/Triangle.js";
import Button from "../src/components/Buttons/Button.js";
import CircularButton from "../src/components/Buttons/CircularButton.js";
import { useDispatch, useSelector } from "react-redux";
import { setDateOfBirth } from "../redux/slices/userSlice.js";

const { width: screenWidth } = Dimensions.get("window");

const Dob = ({ navigation }) => {
  const [dob, setDob] = useState({ day: "", month: "", year: "" });
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Input references
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  // Handle input change and navigation
  const handleInputChange = (text, field) => {
    let newDob = { ...dob, [field]: text };

    setDob(newDob);

    // Move to next input
    if (field === "day" && text.length === 2) {
      monthRef.current.focus();
    } else if (field === "month" && text.length === 2) {
      yearRef.current.focus();
    } else if (field === "year" && text.length === 4) {
      Keyboard.dismiss(); // Close keyboard after year entry
    }
  };

  // Handle backspace navigation
  const handleKeyPress = (e, field) => {
    if (e.nativeEvent.key === "Backspace") {
      if (field === "month" && dob.month === "") {
        dayRef.current.focus();
      } else if (field === "year" && dob.year === "") {
        monthRef.current.focus();
      }
    }
  };

  return (
    <View style={styles.main_container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/mobile_banner.png")}
        style={styles.top_container}
        resizeMode="cover"
      >
        <View style={{ width: "100%" }}>
          <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
            <Text style={styles.membership_text}>MEMBERSHIP APPLICATION</Text>
            <Text style={styles.top_text}>Date Of Birth</Text>
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
        {/* Date of Birth Inputs */}
        <View style={styles.dob_container}>
          <TextInput
            ref={dayRef}
            style={styles.dob_input}
            placeholder="DD"
            placeholderTextColor="#999"
            maxLength={2}
            keyboardType="number-pad"
            value={dob.day}
            onChangeText={(text) => handleInputChange(text, "day")}
            onKeyPress={(e) => handleKeyPress(e, "day")}
          />
          <Text style={styles.separator}>/</Text>
          <TextInput
            ref={monthRef}
            style={styles.dob_input}
            placeholder="MM"
            placeholderTextColor="#999"
            maxLength={2}
            keyboardType="number-pad"
            value={dob.month}
            onChangeText={(text) => handleInputChange(text, "month")}
            onKeyPress={(e) => handleKeyPress(e, "month")}
          />
          <Text style={styles.separator}>/</Text>
          <TextInput
            ref={yearRef}
            style={styles.dob_input}
            placeholder="YYYY"
            placeholderTextColor="#999"
            maxLength={4}
            keyboardType="number-pad"
            value={dob.year}
            onChangeText={(text) => handleInputChange(text, "year")}
            onKeyPress={(e) => handleKeyPress(e, "year")}
          />
        </View>

        <View style={styles.bottom_button}>
          <CircularButton
            onpress={() => {
              let dateOfBirth = dob.day + "-" + dob.month + "-" + dob.year;
              dispatch(setDateOfBirth(dateOfBirth));
              navigation.navigate(`Gender`);
            }}
            title="Next"
            navigationScreenName="Gender"
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

export default Dob;

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
    padding: 20,
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
  dob_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  dob_input: {
    width: 60,
    height: 50,
    borderWidth: 1,
    borderColor: "#ADABAB",
    borderRadius: 8,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "DMSansSemiBold",
    color: "#000",
  },
  separator: {
    fontSize: 18,
    marginHorizontal: 10,
    fontFamily: "DMSansSemiBold",
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
