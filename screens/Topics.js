import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Triangle from "../assets/svgs/Triangle.js";
import Button from "../src/components/Buttons/Button.js";
import CircularButton from "../src/components/Buttons/CircularButton.js";
import { useDispatch, useSelector } from "react-redux";
import { setInterestData, setInterests } from "../redux/slices/userSlice.js";
import { signup } from "../src/Services/authService.js";
import axios from "axios";
import api from "../src/Services/api.js";

const { width: screenWidth } = Dimensions.get("window");

const TopicSelect = ({ navigation }) => {
  const [selectedTopics, setSelectedTopics] = useState([]); // State to store selected topics
  const dispatch = useDispatch();
  const userDataRedux = useSelector((state) => state.user);

  // Topic groups
  const topicSections = [
    {
      sectionName: "Creativity",
      topics: [
        "Art 🎨",
        "Crafts ✂️",
        "Dancing 💃",
        "Makeup 💄",
        "Singing 🎤",
        "Writing 📝",
      ],
    },
    {
      sectionName: "Sports",
      topics: [
        "Cricket 🏏",
        "Boxing 🥊",
        "Chess ♟️",
        "Football ⚽",
        "Tennis 🎾",
        "Basketball 🏀",
        "Cycling 🚴",
        "Running 🏃",
      ],
    },
    {
      sectionName: "Food and Drinks",
      topics: [
        "Foodie 🍽️",
        "Baking 🎂",
        "Beer 🍺",
        "Brunches 🍳",
        "Cocktails 🍸",
        "Wine 🍷",
        "Coffee ☕",
        "Smoothies 🥤",
        "Sushi 🍣",
        "BBQ 🍖",
      ],
    },
    {
      sectionName: "Films",
      topics: [
        "Action 🎬",
        "Horror 👻",
        "Comedy 😂",
        "Romance 💘",
        "Thriller 🎥",
        "Sci-Fi 👽",
        "Drama 🎭",
        "Documentaries 📽️",
      ],
    },
    {
      sectionName: "Music",
      topics: [
        "Pop 🎶",
        "Rock 🎸",
        "Jazz 🎷",
        "Classical 🎻",
        "Hip-Hop 🎧",
        "EDM 🎚️",
        "R&B 🎤",
        "Indie 🎵",
      ],
    },
    {
      sectionName: "Travel",
      topics: [
        "Adventure 🌍",
        "Beach 🏖️",
        "City Tours 🏙️",
        "Camping ⛺",
        "Road Trips 🚗",
        "Nature 🌳",
        "Mountain Climbing 🧗",
        "Luxury Resorts 🏝️",
      ],
    },
    {
      sectionName: "Pets",
      topics: [
        "Dogs 🐶",
        "Cats 🐱",
        "Birds 🦜",
        "Fish 🐟",
        "Reptiles 🦎",
        "Exotic Pets 🦄",
      ],
    },
    {
      sectionName: "Fitness",
      topics: [
        "Yoga 🧘",
        "Gym 🏋️‍♂️",
        "Pilates 🧘‍♀️",
        "Crossfit 💪",
        "Running 🏃",
        "Swimming 🏊",
        "Martial Arts 🥋",
        "Boxing 🥊",
      ],
    },
    {
      sectionName: "Books & Literature",
      topics: [
        "Fiction 📚",
        "Non-Fiction 📖",
        "Poetry 📜",
        "Self-Help 📘",
        "Sci-Fi 📚",
        "Fantasy 🏰",
        "Mystery 🕵️‍♂️",
        "History 📜",
      ],
    },
    {
      sectionName: "Technology",
      topics: [
        "Gadgets 📱",
        "Gaming 🎮",
        "AI 🤖",
        "Programming 💻",
        "Virtual Reality 🕶️",
        "Blockchain 🔗",
        "Space Exploration 🚀",
        "Cybersecurity 🔐",
      ],
    },
  ];

  // Function to toggle topic selection
  const toggleTopicSelection = (topic) => {
    setSelectedTopics((prevSelected) => {
      // If the topic is already selected, remove it
      if (prevSelected.includes(topic)) {
        return prevSelected.filter((t) => t !== topic);
      } else {
        // Prevent selecting more than 10 topics
        if (prevSelected.length < 10) {
          return [...prevSelected, topic]; // Add to selection
        }
        return prevSelected; // Don't add if 10 topics are already selected
      }
    });
  };

  // const handleSignup = async () => {
  //   let userData = {
  //     countryCode: "+1",
  //     mobileNo: userDataRedux?.phone || "",
  //     firstName: userDataRedux?.name || "",
  //     lastName: "Hello",
  //     dob: userDataRedux?.dob || "",
  //     gender: userDataRedux?.gender || "",
  //     bio: userDataRedux?.bio || "",
  //     interests: userDataRedux?.interests || "",
  //     userImages: [
  //       "https://example.com/uploads/image1.jpg",
  //       "https://example.com/uploads/image2.jpg",
  //     ],
  //   };

  //   try {
  //     const response = await api.post(
  //       "/users/register",
  //       userData // Pass userData as the body of the request
  //     );

  //     console.log(">>", response.data); // Handle successful response
  //     navigation.navigate("TermsConditions");
  //   } catch (error) {
  //     console.log("Error:", error.response?.data || error.message); // Handle error
  //     setMessage(error.response?.data || error.message); // Optional: Set error message
  //   }
  // };

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
            <Text style={styles.membership_text}>INTEREST SELECTION</Text>
            <Text style={styles.top_text}>Choose Your Interests</Text>
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
        {/* Topic Selection Sections */}
        <ScrollView>
          <View style={styles.topic_section_container}>
            {topicSections.map((section, index) => (
              <View key={index} style={styles.topic_section}>
                <Text style={styles.section_title}>{section.sectionName}</Text>
                <View style={styles.topic_grid}>
                  {section.topics.map((topic, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.topic_box,
                        selectedTopics.includes(topic) && styles.selectedTopic, // Style for selected topics
                      ]}
                      onPress={() => toggleTopicSelection(topic)} // Toggle selection
                    >
                      <Text
                        style={[
                          styles.topic_text,
                          selectedTopics.includes(topic) && styles.selectedText, // Change text style if selected
                        ]}
                      >
                        {topic}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottom_button}>
          <CircularButton
            onpress={() => {
              dispatch(setInterests(selectedTopics));

              navigation.navigate("TermsConditions");
            }}
            navigationScreenName="TermsConditions"
            navigation={navigation}
            disabled={selectedTopics.length === 0} // Disable if no topic is selected
          />
        </View>
      </View>
    </View>
  );
};

export default TopicSelect;

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
    // justifyContent: "space-between",
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
  triangle_container: {
    flexDirection: "row",
  },
  topic_section_container: {
    marginTop: 20,
  },
  topic_section: {
    marginBottom: 20,
  },
  section_title: {
    fontSize: 18,
    fontFamily: "DMSansBold",
    marginBottom: 10,
    color: "#333",
  },
  topic_grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
  topic_box: {
    // width: "48%",
    padding: 5,
    paddingHorizontal: 7,
    marginRight: 10,
    // height: Dimensions.get("window").width / 3,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ADABAB",
    borderRadius: 8,
  },
  selectedTopic: {
    backgroundColor: "#61204E", // Highlight selected topic
  },
  topic_text: {
    fontSize: 16,
    fontFamily: "DMSansSemiBold",
    color: "#333",
  },
  selectedText: {
    color: "#fff", // Change text color if selected
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
