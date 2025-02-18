import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Triangle from "../assets/svgs/Triangle.js";
import Button from "../src/components/Buttons/Button.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import CircularButton from "../src/components/Buttons/CircularButton.js";
import { useSelector } from "react-redux";

const { width: screenWidth } = Dimensions.get("window");

const PhotoSelect = ({ navigation }) => {
  const state = useSelector((state) => state);

  const [photos, setPhotos] = useState([null, null, null, null]); // State to store selected photos
  console.log("photos", photos);

  // Function to handle image picking from gallery
  const pickImage = async (index) => {
    // Request permission to access gallery
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Please allow access to your photos.");
      return;
    }

    // Open the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Update selected photo in the respective box
    if (!result.canceled) {
      const newPhotos = [...photos];
      newPhotos[index] = result.assets[0].uri; // Ensure correct access to URI
      setPhotos(newPhotos);
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
            <Text style={styles.membership_text}>MEMBERSHIP APPLICATION</Text>
            <Text style={styles.top_text}>Pick Your Photos</Text>
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
        {/* Photo Selection Grid */}
        <View style={styles.photo_grid}>
          {photos.map((photo, index) => (
            <TouchableOpacity
              key={index}
              style={styles.photo_box}
              onPress={() => pickImage(index)} // Open gallery when clicked
            >
              {photo ? (
                <Image source={{ uri: photo }} style={styles.photo_image} />
              ) : (
                <AntDesign name="plus" size={40} color="#ADABAB" />
              )}
            </TouchableOpacity>
          ))}
          <View>
            <Text style={styles.condition_txt}>
              Tap to Edit (Minimum 4 photos required)
            </Text>
          </View>
        </View>

        <View style={styles.bottom_button}>
          <CircularButton
            onpress={() => {
              navigation.navigate("Topics");
            }}
            title="Next"
            navigationScreenName="Topics"
            navigation={navigation}
            disabled={photos.includes(null)} // Disable if any photo is missing
          />
        </View>
      </View>
    </View>
  );
};

export default PhotoSelect;

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
  condition_txt: {
    fontSize: 15,
    fontFamily: "DMSansSemiBold",
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
  photo_grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  photo_box: {
    width: "49%",
    height: Dimensions.get("window").width / 2.2,
    borderWidth: 1,
    borderColor: "#ADABAB",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 8,
  },
  photo_image: {
    width: "100%",
    height: "100%",
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
