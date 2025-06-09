import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Triangle from "../../assets/svgs/Triangle";
import TriangleOriginal from "./TriangleOriginal";

const BottomTab = ({ navigation }) => {
  const { width: screenWidth } = Dimensions.get("window");
  return (
    <View style={styles.tab_bottom}>
      {/* Profile Tab */}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {Array.from({ length: Math.ceil(screenWidth / 20) }).map((_, index) => (
          <TriangleOriginal key={index} />
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "85%",
          height: "100%",
          alignSelf: "center",
          // alignItems: "center",
          marginTop: 18,
        }}
      >
        <TouchableOpacity
          style={styles.tab_item}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View style={styles.icon_container}>
            <Image
              source={require("../../assets/profile.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.txt_messages}>PROFILE</Text>
        </TouchableOpacity>

        {/* Home Tab with Glow */}
        <View style={[styles.tab_item, styles.active_tab]}>
          <View style={[styles.icon_container, styles.active_icon]}>
            <Image
              source={require("../../assets/home.png")}
              style={[styles.icon, styles.active_icon_image]}
            />
          </View>
          <Text style={styles.txt_messages}>HOME</Text>
        </View>

        {/* Messages Tab */}
        <TouchableOpacity
          style={styles.tab_item}
          onPress={() => {
            navigation.navigate("Messages");
          }}
        >
          <View style={styles.icon_container}>
            <Image
              source={require("../../assets/messaging.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.txt_messages}>MESSAGES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tab_bottom: {
    backgroundColor: "#61204E",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 140,
  },
  tab_item: {
    flexDirection: "column",
    alignItems: "center",
    height: 80,
    justifyContent: "flex-end",
    width: "33.333%",
    // backgroundColor: "red",
  },
  icon_container: {
    padding: 10,
    borderColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 100,
  },
  icon: {
    width: 25,
    height: 25,
  },
  txt_messages: {
    color: "#fff",
    fontWeight: "500",
    marginTop: 10,
    fontSize: 10,
  },
  active_tab: {
    shadowColor: "#fff", // Glow color (golden)
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10, // For Android
  },
  active_icon: {
    borderWidth: 3,
    borderColor: "#fff", // Border color for the active tab
    padding: 15,
  },
  active_icon_image: {
    width: 28,
    height: 28,
  },
  triangle_container: {
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "red",
  },
});

export default BottomTab;
