import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Image */}
      <Image
        style={styles.profileImage}
        source={{
          uri: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
        }} // Replace with actual image URL
      />

      {/* Bio Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Bio</Text>
        <Text style={styles.text}>
          When adding a dynamic route in your tab layout, ensure that the
          dynamic route defined is unique. You cannot have two screens for the
          same dynamic route.
        </Text>
      </View>

      {/* Info Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Info</Text>
        <Text style={styles.text}>Non-smoker</Text>
        <Text style={styles.text}>Gemini</Text>
        <Text style={styles.text}>Non-drinker</Text>
        <Text style={styles.text}>Mumbai</Text>
      </View>

      {/* Photos Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Photos</Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  profileImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  section: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  photosContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
});
