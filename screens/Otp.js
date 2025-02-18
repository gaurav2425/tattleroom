import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import Triangle from "../assets/svgs/Triangle.js";
import Button from "../src/components/Buttons/Button.js";
import { useSelector } from "react-redux";
const { width: screenWidth } = Dimensions.get("window");

const Otp = ({ navigation }) => {
  const phoneName = useSelector((state) => state.user.phone);
  console.log(">>>>", phoneName);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.main_container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/otp_bg.png")}
        style={styles.top_container}
        resizeMode="cover"
      >
        <View style={{ width: "100%" }}>
          <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
            <Text style={styles.membership_text}>MEMBERSHIP APPLICATION</Text>
            <Text style={styles.top_text}>
              Enter OTP {"\n"}Sent To +91 8492482437
            </Text>
            {/* <View style={{}}>
              <Text style={styles.top_text}>9299199299</Text>
            </View> */}
          </View>
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
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <View style={styles.otp_container}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                returnKeyType="done"
                ref={(ref) => (inputs.current[index] = ref)}
                style={styles.otp_box}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
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
            <Text
              style={{
                fontFamily: "DMSansSemiBold",
                fontSize: 12,
                // width: "75%",
              }}
            >
              Resend OTP in 30 seconds
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginLeft: 5,
                borderBottomColor: "#61204E",
              }}
            >
              <Text
                style={{
                  fontFamily: "DMSansSemiBold",
                  fontSize: 12,
                  // width: "75%",
                  color: "#61204E",
                }}
              >
                Resend OTP
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bottom_button}>
          <Button
            onPress={() => {
              navigation.navigate(`Name`);
            }}
            title="Verify"
            navigationScreenName="Name"
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

export default Otp;

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
    paddingTop: 20,
    padding: 10,
    justifyContent: "space-between",
  },
  otp_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  otp_box: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ADABAB",
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "DMSansSemiBold",
    marginRight: 5,
    borderRadius: 8,
  },
  triangle_container: {
    flexDirection: "row",
  },
  membership_text: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "DMSansBold",
    marginBottom: 5,
  },
  top_text: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "DMSansBlack",
  },
  bottom_button: {
    marginBottom: 20,
    flexDirection: "row",
  },
});
