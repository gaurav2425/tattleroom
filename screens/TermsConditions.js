import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Button from "../src/components/Buttons/Button.js";
import CircularButton from "../src/components/Buttons/CircularButton.js";
import Triangle from "../assets/svgs/Triangle.js";

const { width: screenWidth } = Dimensions.get("window");
import { MMKV, Mode } from "react-native-mmkv";
import { useSelector } from "react-redux";
import api from "../src/Services/api.js";

const TermsConditions = ({ navigation }) => {
  const userDataRedux = useSelector((state) => state.user);
  const storage = new MMKV();
  const handleSignup = async () => {
    let userData = {
      countryCode: "+1",
      mobileNo: userDataRedux?.phone || "",
      firstName: userDataRedux?.name || "",
      lastName: "Hello",
      dob: userDataRedux?.dob || "",
      gender: userDataRedux?.gender || "",
      bio: userDataRedux?.bio || "",
      interests: userDataRedux?.interests || "",
      userImages: [
        "https://example.com/uploads/image1.jpg",
        "https://example.com/uploads/image2.jpg",
      ],
    };

    try {
      const response = await api.post(
        "/users/register",
        userData // Pass userData as the body of the request
      );
      storage.set("token", response.data.token);
      console.log(">>", response.data); // Handle successful response
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error:", error.response?.data || error.message); // Handle error
      // setMessage(error.response?.data || error.message); // Optional: Set error message
    }
  };

  return (
    <View style={styles.main_container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/photos_bg3.png")}
        style={styles.top_container}
        resizeMode="cover"
      >
        <View style={{ width: "100%" }}>
          <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
            <Text style={styles.membership_text}>TERMS AND CONDITIONS</Text>
            <Text style={styles.top_text}>
              Please read our Terms and Conditions
            </Text>
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
        {/* Terms and Conditions Content */}
        <ScrollView style={styles.terms_container}>
          <Text style={styles.terms_text}>
            These Terms and Conditions ("Agreement") govern your use of the
            services and platform offered by Tattle. {"\n"}
            By using the platform, you agree to comply with the following terms:
            {"\n"}
            {"\n"} 1. **Use of Service**: You agree to use the service only for
            lawful purposes. You may not use the service to engage in illegal
            activities or violate the rights of others.{"\n"}
            {"\n"} 2. **Account**: You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account.{"\n"}
            {"\n"} 3. **User Content**: You retain ownership of your content but
            grant us a license to use, modify, and display it as necessary for
            the service.{"\n"}
            {"\n"} 4. **Limitation of Liability**: We are not liable for any
            damages arising out of the use or inability to use the service.
            {"\n"}
            {"\n"} 5. **Termination**: We reserve the right to suspend or
            terminate your access to the service at any time, for any reason,
            with or without notice. If you agree to these terms, please click
            the "Accept" button below to continue.
          </Text>
        </ScrollView>

        <View style={styles.bottom_button}>
          <CircularButton
            onpress={() => {
              handleSignup();
            }}
            title="Accept"
            navigationScreenName="HomeScreen"
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

export default TermsConditions;

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
  terms_container: {
    paddingHorizontal: 10,
    // height: 100,
    // backgroundColor: "red",
  },
  terms_text: {
    fontSize: 16,
    fontFamily: "DMSansBold",
    color: "#333",
    marginBottom: 20,
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
