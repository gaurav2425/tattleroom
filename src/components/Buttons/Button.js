import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const Button = ({ title, navigationScreenName, navigation, onPress }) => {
  return (
    <TouchableOpacity style={styles.nxt_container} onPress={onPress}>
      <Text style={styles.next_btn_txt}>{title}</Text>
      <TouchableOpacity style={styles.right_arrow} onPress={onPress}>
        <Svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M16 14C16 13.258 16.733 12.15 17.475 11.22C18.429 10.02 19.569 8.973 20.876 8.174C21.856 7.575 23.044 7 24 7M24 7C23.044 7 21.855 6.425 20.876 5.826C19.569 5.026 18.429 3.979 17.475 2.781C16.733 1.85 16 0.740001 16 8.34465e-07M24 7L1.43051e-06 7"
            stroke="white"
            stroke-width="2"
          />
        </Svg>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  nxt_container: {
    backgroundColor: "#61204E",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
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
