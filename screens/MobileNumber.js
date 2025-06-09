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
const { width: screenWidth } = Dimensions.get("window");
import { setPhone } from "../redux/slices/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import CircularButton from "../src/components/Buttons/CircularButton.js";

const MobileNumber = ({ navigation }) => {
  const dispatch = useDispatch();
  const phoneRedux = useSelector((state) => state.phone);

  const [input, setInput] = useState("");

  const [checked, setChecked] = useState(false);
  // Triangle width (base size) + margin for spacing
  const triangleWidth = 20;
  const numTriangles = Math.ceil(screenWidth / triangleWidth);

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
              paddingLeft: 10,
              paddingBottom: 10,
            }}
          >
            <Text style={styles.membership_text}>MEMBERSHIP APPLICATION</Text>
            <Text style={styles.top_text}>Tell us your{"\n"}Mobile number</Text>
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
          {/* <View style={styles.mobile_number_txt_container}>
            <Text style={styles.mobile_number_txt}>Dating/ Banking</Text>
          </View> */}
          <View style={styles.input_container}>
            <Text style={styles.countrycode_txt}>+91</Text>
            <TextInput
              // placeholder="MOBILE NUMBER"
              maxLength={10}
              keyboardType="number-pad"
              returnKeyType="done" // Adds a "Done" button (tick on some keyboards)
              style={{
                height: 50,
                backgroundColor: "#fff",
                color: "#000",
                fontSize: 25,
                fontFamily: "DMSansSemiBold",
                width: "100%",
              }}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={() => console.log("✅ Input submitted!")} // Handles the tick press
              placeholderTextColor="#999"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              // borderWidth: 1,
              marginTop: 10,
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
              onPress={() => setChecked(!checked)}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderWidth: 2,
                  borderColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",
                  // marginRight: 10,
                  backgroundColor: "#fff",
                }}
              >
                {checked && <AntDesign name="check" size={24} color="black" />}
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "DMSansSemiBold",
                fontSize: 12,
                // width: "75%",
              }}
            >
              We’re the only app that makes dating better by putting women’s
              experiences first.
            </Text>
          </View>
        </View>
        <View style={styles.bottom_button}>
          {/* <Button
            onPress={() => {
              dispatch(setPhone(input));
              navigation.navigate(`Otp`);
            }}
            title="Next"
            navigationScreenName="Otp"
            navigation={navigation}
          ></Button> */}

          <CircularButton
            disabled={true}
            onpress={() => {
              dispatch(setPhone(input));
              navigation.navigate(`Otp`);
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

export default MobileNumber;

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
  mobile_number_txt_container: {
    marginBottom: 10,
  },
  mobile_number_txt: {
    fontFamily: "DMSansBlack",
    fontSize: 20,
  },
  input_container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ADABAB",
    borderWidth: 1,
    overflow: "hidden",
    // borderRadius: 8,
  },
  bottom_container: {
    flex: 0.7,
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 20,
    padding: 10,
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
    fontSize: 25,
    fontFamily: "DMSansSemiBold",
    paddingHorizontal: 12,
  },
  bottom_button: {
    marginBottom: 20,
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "flex-end",
  },
});
