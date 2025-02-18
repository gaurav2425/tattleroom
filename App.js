// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           width: 200,
//           // backgroundColor: "red",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Image
//           source={require("./assets/group2.png")}
//           style={{
//             width: 350,
//             height: 350,
//           }}
//         ></Image>
//       </View>
//       <Text style={styles.txt_heading}>
//         Your Next Chapter Starts with a Random Encounter
//       </Text>
//       <Text>
//         "Embrace the Unexpected, Meet Your Perfect Match. Connecting Hearts, One
//         Random Match at a Time. Find Unexpected Connections. Embrace
//         Serendipity. Matched by Interests, United by Fate
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F6F4DF",
//     alignItems: "center",
//     // justifyContent: "center",
//   },
//   txt_heading: {
//     fontSize: 35,
//     fontWeight: 800,
//   },
// });

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import MembershipApplication from "./screens/MembershipApplication";
import OTPVerification from "./screens/OTPVerification";
import Room from "./screens/Room";
import MobileNumber from "./screens/MobileNumber";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import Otp from "./screens/Otp";
import Name from "./screens/Name";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Dob from "./screens/Dob";
import Gender from "./screens/Gender";
import Bio from "./screens/Bio";
import PhotoSelect from "./screens/PhotoSelect";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Topics from "./screens/Topics";
import Home from "./screens/Home";
import TermsConditions from "./screens/TermsConditions";
SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    DMSansSemiBold: require("./assets/fonts/DMSans_36pt-SemiBold.ttf"),
    DMSansBold: require("./assets/fonts/DMSans_36pt-Bold.ttf"),
    DMSansBlack: require("./assets/fonts/DMSans_18pt-Black.ttf"),
  });
  await SplashScreen.hideAsync(); // Hide splash screen after fonts load
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // Prevent UI flickering
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="OTPVerification" component={OTPVerification} /> */}
            {/* <Stack.Screen
          name="MembershipApplication"
          component={MembershipApplication}
          options={{ headerShown: false }}
        /> */}
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
              name="HomeScreen"
              component={Home}
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
              component={Topics}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen
              name="TermsConditions"
              component={TermsConditions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
