import React from "react";
import { View, StyleSheet, Image, Text, Platform } from "react-native";

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab_bottom}>
        {/* Profile Tab */}
        <View style={styles.tab_item}>
          <View style={styles.icon_container}>
            <Image
              source={require("../../assets/profile.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.txt_messages}>PROFILE</Text>
        </View>

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
        <View style={styles.tab_item}>
          <View style={styles.icon_container}>
            <Image
              source={require("../../assets/messaging.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.txt_messages}>MESSAGES</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tab_bottom: {
    backgroundColor: "#61204E",
    width: "100%",
    height: 130,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 10,
  },
  tab_item: {
    flexDirection: "column",
    alignItems: "center",
    height: 80,
    justifyContent: "flex-end",
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
});

export default BottomTab;
