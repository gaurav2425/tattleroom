import React, { useRef, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Animated,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomSVG from "../assets/svgs/CustomSVG";
import ExitSVG from "../assets/svgs/ExitSVG";
import CafeMembers from "../src/components/CafeMembers";
import HeartIcon from "../assets/svgs/HeartIcon";
import ChatIcon from "../assets/svgs/MessageIcon";
import HeartRed from "../assets/svgs/HeartRed";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
const Room = () => {
  const scrollViewRef = useRef(null);
  const [contentOffset, setContentOffset] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);
  const [selectedBox, setSelectedBox] = useState(null);
  const windowWidth = Dimensions.get("window").width;

  // Original boxes configuration
  const originalBoxes = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    color: `hsl(${(i * 360) / 10}, 70%, 60%)`,
    number: i + 1,
  }));

  // Create three sets of boxes for smooth infinite scroll
  const boxes = [
    ...originalBoxes,
    ...originalBoxes,
    ...originalBoxes,
    ...originalBoxes,
    ...originalBoxes,
  ];

  const peopleImages = [
    {
      imageUrl: require("../assets/people/people11.jpg"),
    },
    {
      imageUrl: require("../assets/people/people12.jpg"),
    },
    {
      imageUrl: require("../assets/people/people13.jpg"),
    },
    {
      imageUrl: require("../assets/people/people14.jpg"),
    },
    {
      imageUrl: require("../assets/people/people15.jpg"),
    },
    {
      imageUrl: require("../assets/people/people16.jpg"),
    },
    {
      imageUrl: require("../assets/people/people17.jpg"),
    },
    {
      imageUrl: require("../assets/people/people14.jpg"),
    },
    {
      imageUrl: require("../assets/people/people15.jpg"),
    },
  ];

  const visibleBoxes = 3;
  const boxWidth = windowWidth / visibleBoxes;
  const totalWidth = originalBoxes.length * boxWidth;

  // Auto-scroll animation with 5-second timer
  useEffect(() => {
    let animationFrameId;
    const speed = 0.9;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (isScrolling) {
        scrollViewRef.current?.scrollTo({
          x: contentOffset + speed,
          animated: false,
        });

        // Stop after 5 seconds
        if (elapsedTime >= 5000) {
          setIsScrolling(false);

          // Calculate middle box position
          const middlePosition = contentOffset + windowWidth / 2;
          const boxIndex =
            Math.floor(middlePosition / boxWidth) % originalBoxes.length;
          setSelectedBox(boxIndex);

          // Snap to center the selected box
          const snapPosition =
            Math.round(middlePosition / boxWidth) * boxWidth -
            (windowWidth - boxWidth) / 2;
          scrollViewRef.current?.scrollTo({
            x: snapPosition,
            animated: true,
          });

          return;
        }

        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (isScrolling) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isScrolling, contentOffset]);

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    setContentOffset(offset);

    // Reset position when reaching the end or start
    if (offset >= totalWidth * 2) {
      scrollViewRef.current?.scrollTo({
        x: totalWidth,
        animated: false,
      });
    } else if (offset <= 0) {
      scrollViewRef.current?.scrollTo({
        x: totalWidth,
        animated: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}></View>
      <View style={styles.bottomBox}>
        <View>
          <View style={styles.header_bottomBox}>
            <View style={styles.header_left}>
              {/* <CustomSVG /> */}

              <TouchableOpacity style={styles.icon}>
                <Feather name="arrow-left" size={28} color="black" />
              </TouchableOpacity>
              <Text style={styles.heading_txt}>The Love Brew</Text>
            </View>
            {/* <View style={styles.header_right}>
              <Text style={styles.header_right_txt}>Exit</Text>
              <ExitSVG></ExitSVG>
            </View> */}
          </View>
          {/* <View style={styles.scroll_header}>
            <Text style={styles.scroll_header_txt}>People on table</Text>
          </View> */}
          <View>
            {/* <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              scrollEnabled={isScrolling}
              contentContainerStyle={styles.scrollContent}
            >
              {boxes.map((box, index) => {
                // Calculate the center of the viewport
                const viewportCenter = contentOffset + windowWidth / 2;

                // Calculate the center of each box
                const boxCenter = index * boxWidth + boxWidth / 2;

                // Calculate the scale based on distance to the viewport center
                const distanceToCenter = Math.abs(viewportCenter - boxCenter);
                const scale = Math.max(
                  1 - distanceToCenter / (windowWidth / 2),
                  0.8
                );

                return (
                  <View
                    key={`${box.id}-${index}`}
                    style={{
                      // borderColor: "red",
                      // borderWidth: 1,
                      margin: 4,
                      // borderWidth: 3,
                      // borderColor: "#61204E",
                      borderRadius: 50,
                    }}
                  >
                    <Animated.View
                      style={[
                        styles.box,
                        {
                          width: boxWidth,

                          // transform: [{ scale }],
                          overflow: "hidden",
                        },
                      ]}
                    >
                      <Image
                        style={{
                          width: boxWidth,
                          height: 130,
                          // borderRadius: 50,
                          // overflow: "scroll",
                        }}
                        source={
                          peopleImages[index % peopleImages.length].imageUrl
                        } // Dynamically selecting images
                      />

                      {scale > 1 && (
                        <Text style={styles.selectedText}>Selected!</Text>
                      )}
                    </Animated.View>
                  </View>
                );
              })}
            </ScrollView> */}
            <View
              style={{
                width: "95%",
                alignSelf: "center",
              }}
            >
              <CafeMembers></CafeMembers>
            </View>
            <View
              style={{
                width: "95%",
                alignSelf: "center",
              }}
            >
              <CafeMembers></CafeMembers>
            </View>
          </View>
        </View>

        <View style={styles.bottom_container}>
          <View style={styles.bottom_container_left}>
            <View style={styles.bottom_left}>
              <ChatIcon></ChatIcon>
              <Text style={styles.bottom_bar_txt}>156</Text>
            </View>
            <View style={styles.bottom_left}>
              <HeartRed></HeartRed>
              <Text style={styles.bottom_bar_txt}>77</Text>
            </View>
          </View>
          <View style={styles.like_container_main}>
            <View style={styles.like_container}>
              {/* <HeartIcon></HeartIcon> */}
              <LottieView
                source={require("../assets/matching.json")} // Ensure the correct path
                autoPlay
                loop
                style={styles.animation}
              />
            </View>
            <Text style={styles.send_like_txt}>Find match</Text>
          </View>
        </View>
      </View>

      <StatusBar style="dark" translucent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4DF",
  },
  scrollContent: {
    alignItems: "flex-start",
    height: "20%",
    // backgroundColor: "red",
  },
  scroll_header: {
    paddingBottom: 10,
    width: "90%",
    alignSelf: "center",
  },
  scroll_header_txt: {
    fontSize: 20,
    fontWeight: 600,
    color: "#723968",
    fontFamily: "DMSansSemiBold",
  },
  box: {
    height: 130,
    // margin: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  boxText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "DMSansSemiBold",
  },
  selectedText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
    fontWeight: "500",
    fontFamily: "DMSansSemiBold",
  },
  topBox: {
    height: "8%",
  },
  bottomBox: {
    height: "92%",
    backgroundColor: "#fff",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    // borderColor: "#000",
    justifyContent: "space-between",
  },
  header_bottomBox: {
    height: 80,
    width: "95%",
    alignSelf: "center",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  heading_txt: {
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 10,
    fontFamily: "DMSansSemiBold",
  },
  header_right: {
    backgroundColor: "#F6F4DF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bottom_left: {
    backgroundColor: "#F6F4DF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  header_right_txt: {
    fontSize: 18,
    fontWeight: "600",
    color: "#F01717",
    marginRight: 5,
    fontFamily: "DMSansSemiBold",
  },
  like_container: {
    width: 100,
    height: 100,
    backgroundColor: "#61204E",
    borderRadius: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  like_container_main: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_container: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
    paddingBottom: 10,
  },
  bottom_container_left: {
    flexDirection: "row",
    alignItems: "center",
  },
  send_like_txt: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
    fontFamily: "DMSansSemiBold",
  },
  bottom_bar_txt: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
    fontFamily: "DMSansSemiBold",
  },
  animation: {
    width: 40,
    height: 40,
  },
});

export default Room;
