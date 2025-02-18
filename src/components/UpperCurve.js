import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const UpperBlackCurve = () => {
  return <View style={styles.oval} />;
};

const styles = StyleSheet.create({
  oval: {
    width: "60%",
    height: 160,
    borderTopEndRadius: 100,
    backgroundColor: "red",
    transform: [{ scaleX: 2 }],
  },
});

export default UpperBlackCurve;
