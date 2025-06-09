import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import PeopleInCafe from "../src/components/PeopleInCafe";
import io from "socket.io-client";

const socket = io("http://192.168.1.7:4000");

const Book = ({ navigation }) => {
  const [isJoinEnabled, setIsJoinEnabled] = useState(false);
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    // Listen for booking enable event
    socket.on("enableBooking", () => {
      setIsJoinEnabled(true);
      setRemainingTime("JOIN REQUEST");
    });

    return () => {
      socket.off("enableBooking");
    };
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const targetTime = new Date();
      targetTime.setHours(9, 7, 0, 0); // 7:00 PM

      const timeDiff = targetTime - now;

      if (timeDiff <= 0) {
        setIsJoinEnabled(true);
        setRemainingTime("JOIN REQUEST");
      } else {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    updateTimer(); // Initial call
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <View style={styles.main_container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.backArrow}>&#8592;</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://i.ibb.co/s9zJ1Ky3/magazine-halftone-photo-effect-1-1.png",
          }}
          style={styles.profileImage}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The Potters Cafe</Text>
          <Text style={styles.subtitle}>The brew love</Text>
        </View>
      </View>

      <ScrollView style={styles.container}>
        {/* People in Cafe */}
        <View style={styles.imageContainer}>
          <PeopleInCafe title="People in cafe" />
        </View>

        {/* People in Queue */}
        <View style={styles.imageContainer}>
          <PeopleInCafe title="People in Queue" />
        </View>

        {/* Event Details */}
        <View style={styles.detailsContainer}>
          {[
            "Thu 20th Feb at 7:00 pm - Thu 20th Feb at 11:00 pm",
            "Age Restrictions: 18+",
            "Each mini-date lasts 3-8 minutes, and you must move to the next person when time is up",
            "Be Respectful & Polite - No inappropriate questions, offensive jokes, or rude behavior",
            "Participants usually cannot share phone numbers or social media during the event. Matches are revealed afterward.",
          ].map((item, index) => (
            <Text key={index} style={styles.detailsText}>
              • {item}
            </Text>
          ))}
        </View>

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>
            We're the only app that makes dating better by putting women's
            experiences first.
          </Text>
        </View>
      </ScrollView>

      {/* Join Button */}
      <TouchableOpacity
        onPress={() => {
          // navigation.replace("QuestionScreen");
          navigation.replace("Matching");
        }}
        style={[styles.joinButton, !isJoinEnabled && styles.disabledButton]}
        disabled={!isJoinEnabled}
      >
        <Text style={styles.joinButtonText}>
          {isJoinEnabled ? "JOIN REQUEST" : `Join in ${remainingTime}`}
        </Text>
      </TouchableOpacity>

      <StatusBar barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  container: {
    backgroundColor: "#F6F4DF",
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
    height: 120,
    position: "sticky",
    backgroundColor: "#F6F4DF",
  },
  backArrow: {
    fontSize: 28,
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginLeft: 16,
    backgroundColor: "#61204E",
  },
  titleContainer: {
    marginLeft: 5,
    fontFamily: "DMSansSemiBold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#61204E",
    fontFamily: "DMSansBold",
  },
  subtitle: {
    color: "black",
    fontFamily: "DMSansSemiBold",
  },
  sectionTitle: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "DMSansSemiBold",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  detailsContainer: {
    marginTop: 24,
  },
  detailsText: {
    color: "gray",
    marginTop: 8,
    fontFamily: "DMSansSemiBold",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  checkboxText: {
    marginLeft: 8,
    color: "#4a4a4a",
    fontFamily: "DMSansSemiBold",
  },
  joinButton: {
    backgroundColor: "#61204E",
    padding: 16,
    alignItems: "center",
    width: "100%",
    height: 90,
    position: "sticky",
    bottom: 0,
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#8E4D7B",
    // opacity: 0.5,
  },
  joinButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: "DMSansSemiBold",
  },
});

export default Book;
