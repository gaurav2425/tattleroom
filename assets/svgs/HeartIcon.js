import React from "react";
import Svg, { Path } from "react-native-svg";

const HeartIcon = ({ width = 34, height = 32, fill = "white" }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17.0002 28.4667L14.946 26.7067C7.65016 20.48 2.8335 16.36 2.8335 11.3333C2.8335 7.21333 6.26183 4 10.6252 4C13.0902 4 15.456 5.08 17.0002 6.77333C18.5443 5.08 20.9102 4 23.3752 4C27.7385 4 31.1668 7.21333 31.1668 11.3333C31.1668 16.36 26.3502 20.48 19.0543 26.7067L17.0002 28.4667Z"
        fill={fill}
      />
    </Svg>
  );
};

export default HeartIcon;
