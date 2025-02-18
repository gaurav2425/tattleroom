import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri: "https://example.com/your-background-image.jpg", // Replace with your image URL
        }}
        style={styles.backgroundImage}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>MEMBERSHIP APPLICATION</Text>
          <Text style={styles.subtitle}>ENTER OTP SENT TO</Text>
          <Text style={styles.phoneNumber}>9307866382</Text>
        </View>

        {/* OTP Input Section */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
            />
          ))}
        </View>

        {/* Resend OTP */}
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  phoneNumber: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginTop: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 50,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f8f8f8",
  },
  resendText: {
    marginTop: 20,
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    textDecorationLine: "underline",
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

export default OTPVerification;
