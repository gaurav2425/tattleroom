import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

const questions = [
  {
    question: "What’s your love language?",
    options: [
      { label: "Words of Affirmation", icon: "message1" },
      { label: "Acts of Service", icon: "heart" },
      { label: "Quality Time", icon: "clockcircleo" },
      { label: "Physical Touch", icon: "shake" },
    ],
  },
  {
    question: "How do you usually show affection?",
    options: [
      { label: "Giving compliments", icon: "smileo" },
      { label: "Spending time together", icon: "calendar" },
      { label: "Helping with tasks", icon: "tool" },
      { label: "Giving thoughtful gifts", icon: "gift" },
    ],
  },
  {
    question: "What’s your ideal date?",
    options: [
      { label: "Fancy dinner", icon: "rest" },
      { label: "Outdoor adventure", icon: "car" },
      { label: "Coffee and deep talks", icon: "coffee" },
      { label: "Netflix and chill", icon: "playcircleo" },
    ],
  },
  {
    question: "What’s most important in a relationship?",
    options: [
      { label: "Trust", icon: "safety" },
      { label: "Communication", icon: "message1" },
      { label: "Passion", icon: "fire" },
      { label: "Loyalty", icon: "heart" },
    ],
  },
  {
    question: "How do you handle conflicts?",
    options: [
      { label: "Talk it out immediately", icon: "message1" },
      { label: "Take time to cool off", icon: "clockcircleo" },
      { label: "Apologize and move on", icon: "smileo" },
      { label: "Avoid confrontation", icon: "frown" },
    ],
  },
  {
    question: "What type of relationship are you looking for?",
    options: [
      { label: "Casual dating", icon: "smileo" },
      { label: "Serious relationship", icon: "heart" },
      { label: "Friendship first", icon: "team" },
      { label: "Open to anything", icon: "bulb1" },
    ],
  },
  {
    question: "What attracts you most in a partner?",
    options: [
      { label: "Looks and style", icon: "star" },
      { label: "Personality and humor", icon: "smileo" },
      { label: "Intelligence", icon: "bulb1" },
      { label: "Kindness and empathy", icon: "heart" },
    ],
  },
  {
    question: "What’s your biggest deal-breaker?",
    options: [
      { label: "Lack of ambition", icon: "meh" },
      { label: "Dishonesty", icon: "closecircleo" },
      { label: "Poor communication", icon: "message1" },
      { label: "Different values", icon: "flag" },
    ],
  },
  {
    question: "How do you express love?",
    options: [
      { label: "Romantic gestures", icon: "gift" },
      { label: "Deep conversations", icon: "message1" },
      { label: "Physical touch", icon: "shake" },
      { label: "Spending quality time", icon: "clockcircleo" },
    ],
  },
  {
    question: "What do you prioritize in life right now?",
    options: [
      { label: "Career and growth", icon: "briefcase" },
      { label: "Finding love", icon: "heart" },
      { label: "Having fun and experiences", icon: "smileo" },
      { label: "Self-improvement", icon: "bulb1" },
    ],
  },
];

const QuestionScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0.3);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress((prev) => prev + 1 / questions.length);
    } else {
      console.log("Quiz Completed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DATING COMPATIBILITY</Text>

      <ProgressBar
        progress={progress}
        color="black"
        style={styles.progressBar}
      />

      <Text style={styles.question}>{questions[currentQuestion].question}</Text>

      <View style={styles.optionsContainer}>
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={handleNextQuestion}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4DF",
    padding: 20,
    justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    // display: "flex",
  },
  title: {
    fontSize: 24,
    fontFamily: "DMSansSemiBold",
    textAlign: "center",
  },
  progressBar: {
    height: 5,
    backgroundColor: "white",
    borderRadius: 5,
    marginVertical: 10,
  },
  question: {
    fontSize: 18,
    fontFamily: "DMSansSemiBold",
    textAlign: "center",
    marginVertical: 20,
  },
  optionsContainer: {
    flexDirection: "column",
    // flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  },
  option: {
    width: "100%%",
    backgroundColor: "white",
    fontFamily: "DMSansSemiBold",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  optionText: {
    fontSize: 16,
    fontFamily: "DMSansSemiBold",
  },
});

export default QuestionScreen;
