import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const MembershipApplication = () => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Background Image */}
          <ImageBackground
            source={{
              uri: "https://example.com/your-background-image.jpg", // Replace with your image URL
            }}
            style={styles.backgroundImage}
          >
            {/* Title Section */}
            <View style={styles.header}>
              <Text style={styles.title}>MEMBERSHIP APPLICATION</Text>
              <Text style={styles.subtitle}>TELL US YOUR MOBILE NUMBER</Text>
            </View>

            {/* Form Section */}
            <View style={styles.form}>
              {/* Mobile Number Input */}

              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="#8a8a8a"
                keyboardType="phone-pad"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                maxLength={10}
              />
              {/* Checkbox */}
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>
                  We’re the only app that makes dating better by putting women’s
                  experiences first. Because when things are better for women,
                  they’re better for everyone.
                </Text>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>

        {/* Next Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

let men = [
  {
    name: "gaurav",
    id: 1,
  },
  {
    name: "karan",
    id: 2,
  },
  {
    name: "mann",
    id: 3,
  },
];

let women = [
  {
    name: "muskan",
    id: 1,
  },
  {
    name: "ishika",
    id: 2,
  },
  {
    name: "tina",
    id: 3,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    padding: 20,
  },
  header: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  form: {
    marginTop: 30,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#f8f8f8",
  },
  checkboxContainer: {
    marginTop: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#6b2d5c",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MembershipApplication;
