import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import {
  UserLoggedInStack,
  OnboardingStack,
} from "./src/NavigationStack/NavigationStack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

// Import Screens
import { setToken } from "./redux/slices/userSlice";

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    DMSansSemiBold: require("./assets/fonts/DMSans_36pt-SemiBold.ttf"),
    DMSansBold: require("./assets/fonts/DMSans_36pt-Bold.ttf"),
    DMSansBlack: require("./assets/fonts/DMSans_18pt-Black.ttf"),
    FrauncesSemiBold: require("./assets/fonts/Fraunces_144pt_Soft-Bold.ttf"),
  });
  await SplashScreen.hideAsync(); // Hide splash screen after fonts load
};

const Stack = createNativeStackNavigator();

async function registerForPushNotifications() {
  if (!Constants.isDevice) {
    alert("Push notifications only work on real devices");
    return;
  }

  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    alert("Push notification permission denied!");
    return;
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log("Expo Push Token:", token);
  return token;
}

const MainApp = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [expoPushToken, setExpoPushToken] = useState("");

  // ✅ Load fonts inside useEffect
  useEffect(() => {
    const loadAppFonts = async () => {
      try {
        await Font.loadAsync({
          DMSansSemiBold: require("./assets/fonts/DMSans_36pt-SemiBold.ttf"),
          DMSansBold: require("./assets/fonts/DMSans_36pt-Bold.ttf"),
          DMSansBlack: require("./assets/fonts/DMSans_18pt-Black.ttf"),
          FrauncesSemiBold: require("./assets/fonts/Fraunces_144pt_Soft-Bold.ttf"),
        });

        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    loadAppFonts();
  }, []); // Runs only once

  // ✅ Check token inside useEffect
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        console.log("Token:", token);

        if (!token) {
          dispatch(setToken(null));
          setIsLoggedIn(false);
        } else {
          dispatch(setToken(token));
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking token:", error);
        setIsLoggedIn(false);
      }
    };

    if (fontsLoaded) {
      checkToken();
    }
  }, [fontsLoaded]); // Runs only after fonts are loaded

  // ✅ Push Notification Setup inside useEffect
  useEffect(() => {
    const setupNotifications = async () => {
      const token = await registerForPushNotifications();
      setExpoPushToken(token);
    };

    setupNotifications();

    // Listen for incoming notifications
    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification Received:", notification);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
    };
  }, []);

  if (!fontsLoaded || isLoggedIn === null) {
    return null; // Show nothing while checking token
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <UserLoggedInStack /> : <OnboardingStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MainApp />
      </GestureHandlerRootView>
    </Provider>
  );
}
