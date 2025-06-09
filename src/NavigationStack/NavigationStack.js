import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import MobileNumber from "../../screens/MobileNumber";
import Otp from "../../screens/Otp";
import Name from "../../screens/Name";
import Dob from "../../screens/Dob";
import Gender from "../../screens/Gender";
import Bio from "../../screens/Bio";
import PhotoSelect from "../../screens/PhotoSelect";
import TopicSelect from "../../screens/Topics";
import TermsConditions from "../../screens/TermsConditions";
import Home from "../../screens/Home";
import HomeScreen from "../../screens/HomeScreen";
import WaitList from "../../screens/WaitList";
import Room from "../../screens/Room";
import Profile from "../../screens/Profile";
import Messages from "../../screens/Messages";
import Notifications from "../../screens/Notifications";
import Book from "../../screens/Book";
import QuestionScreen from "../../screens/QuestionScreen";
import Matching from "../../screens/Matching";
function OnboardingStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MobileNumber"
        component={MobileNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Name"
        component={Name}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dob"
        component={Dob}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gender"
        component={Gender}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bio"
        component={Bio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhotoSelect"
        component={PhotoSelect}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Topics"
        component={TopicSelect}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsConditions"
        component={TermsConditions}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function UserLoggedInStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Book"
        component={Book}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WaitList"
        component={WaitList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Matching"
        component={Matching}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Room"
        component={Room}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { OnboardingStack, UserLoggedInStack };
