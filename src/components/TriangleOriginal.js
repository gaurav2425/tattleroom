import React from "react";
import { View } from "react-native";
import Svg, { Polygon } from "react-native-svg";

const TriangleOriginal = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg
        height="20"
        width="100"
        style={{ transform: [{ rotate: "180deg" }] }}
      >
        <Polygon
          points="50,0 100,70 0,70"
          fill="#F6F4DF"
          stroke="#F6F4DF"
          strokeWidth="0"
        />
      </Svg>
    </View>
  );
};

export default TriangleOriginal;
