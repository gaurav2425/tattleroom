import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { ActivityIndicator } from "react-native";

const NextLoaderButton = () => {
  return (
    <View style={styles.nxt_container}>
      <Text style={styles.next_btn_txt}>Next</Text>
      <View style={styles.right_arrow}>
        <ActivityIndicator size={"small"} color={"#fff"}></ActivityIndicator>
      </View>
    </View>
  );
};

export default NextLoaderButton;

const styles = StyleSheet.create({
  nxt_container: {
    backgroundColor: "#61204E",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: 120,
  },
  next_btn_txt: {
    color: "#fff",
    fontSize: 20,
    // marginTop: 4,
    fontFamily: "DMSansBlack",
  },
  right_arrow: {
    marginLeft: 15,
  },
});
