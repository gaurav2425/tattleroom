import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Triangle from "../assets/svgs/Triangle.js";
import Button from "../src/components/Buttons/Button.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import CircularButton from "../src/components/Buttons/CircularButton.js";
import { useDispatch } from "react-redux";
import { setBioData } from "../redux/slices/userSlice.js";

const { width: screenWidth } = Dimensions.get("window");

const Bio = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedGender, setSelectedGender] = useState(null);
  const [bio, setBio] = useState(""); // State for the bio input

  const handleBioChange = (text) => {
    if (text.length <= 250) {
      setBio(text); // Update the bio if within character limit
    }
  };

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
            <Text style={styles.top_text}>Enter Your Bio</Text>
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

        {/* Bio Input Section */}
        <View style={styles.bio_container}>
          <Text style={styles.bio_label}>Tell us about yourself</Text>
          <TextInput
            style={styles.bio_input}
            returnKeyType="done" // Ensures the "Done" button shows up
            keyboardType="ascii-capable"
            value={bio}
            onChangeText={handleBioChange}
            placeholder="Write your bio..."
            maxLength={250}
            multiline={true} // Allows multiline input
            onSubmitEditing={() => Keyboard.dismiss()} // Dismiss keyboard when "Done" is clicked
            blurOnSubmit={true} // Ensure it blurs and dismisses the keyboard on "Done"
            textAlignVertical="top" // Helps with text positioning in multiline input
          />
          <Text style={styles.character_count}>
            {250 - bio.length} characters remaining
          </Text>
        </View>

        <View style={styles.bottom_button}>
          <CircularButton
            // onPress={() => {
            //   console.log("Hkmnjknj");
            //   // dispatch(setBioData(bio));
            //   navigation.navigate("PhotoSelect");
            // }}
            onpress={() => {
              console.log("Hello");
              dispatch(setBioData(bio));
              navigation.navigate("PhotoSelect");
            }}
            title="Next"
            navigationScreenName="PhotoSelect"
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

export default Bio;

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
    backgroundColor: "#fff",
    marginHorizontal: 10,
    width: 120,
    justifyContent: "center",
  },
  selected_option: {
    borderColor: "#61204E",
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

  bio_container: {
    marginTop: 20,
  },
  bio_label: {
    fontSize: 16,
    fontFamily: "DMSansSemiBold",
    color: "#000",
    marginBottom: 5,
  },
  bio_input: {
    height: 100,
    borderColor: "#ADABAB",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    fontFamily: "DMSansRegular",
    borderRadius: 8,
  },
  character_count: {
    fontSize: 12,
    fontFamily: "DMSansRegular",
    color: "#999",
    marginTop: 5,
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
