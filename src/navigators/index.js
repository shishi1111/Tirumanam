import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashScreen";
import Intro_Slide from "../screens/intro_Slide";
import Register_screen from "../screens/Register_screen";
import Home_Screen from "../screens/Home_Screen";
import Home from "../screens/Home";

import Profile from "../screens/Profile";
import Search from "../screens/search";
import Login_screen from "../screens/Login_screens";
import Forgot_password from "../screens/Forgot_password (1)";
import Login_Otp from "../screens/Login_otp";
import TopBar from "../screens/TopBar";
import First_screen from "../screens/First_screen";
import Register_home from "../screens/Register_home";
import Register_information from "../screens/Register_information";
import Register_location from "../screens/Register_location";
import Register_lastscreen from "../screens/Register_lastscreen";
import ScrollableHeader from "../screens/animatedScrollView";
import ScrollHeader from "../screens/ScrollHeader";
import Chat from "../screens/Chat";
import Contact from "../screens/Contact";
import Verification from "../screens/Verification";
import onlineMembers from "../screens/onlineMembers";
import OnlineMembers from "../screens/onlineMembers";
import Imageview from "../screens/Imageview";
import Store from "../screens/Store";

import ModalSearch from "../screens/CustomModal";
import VegetarianDatas from "../screens/VegetarianDatas";
import DrawerNavigator from "../screens/DrawerNavigator";
import MarriageVendors from "../screens/MarriageVendors";
import MarriageVenues from "../screens/MarriageVenues";
import MarriageDigital from "../screens/MarriageDigital";
import MarriageSpecial from "../screens/MarriageSpecial";
import MarriageBeauty from "../screens/MarriageBeauty";
import Marriage_Shoppie from "../screens/Marriage_Shoppie";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import Intro from "../screens/Intro";

// import { connect } from "react-redux";

const Stack = createStackNavigator();

const Navigators = () => {
  const [token, setToken] = useState();
  const [props, setProps] = useState();
  const [showLoading, setShowLoading] = useState(true);

  const Hide_Splash_Screen = () => {
    setShowLoading(false);
  };
  useEffect(() => {
    handler();
    const timer = setTimeout(() => {
      Hide_Splash_Screen();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  const handler = async () => {
    let Token = await AsyncStorage.getItem("@pantry102");
    let props = await AsyncStorage.getItem("props");
    setProps(props);
    setToken(Token);
  };
  console.log(token, "tokensss");
  console.log(props, "props");
  return (
    <NavigationContainer>
      {showLoading === true ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false, gestureEnabled: false }}
          initialRouteName={
            props === "props" && token === "Token"
              ? "Home_Screen"
              : props === "props"
              ? "Login_screen"
              : "Intro_Slide"
          }
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ gestureEnabled: false }}
          />

          <Stack.Screen
            name="Intro_Slide"
            component={Intro_Slide}
            options={{ gestureEnabled: false }}
          />

          <Stack.Screen name="Login_screen" component={Login_screen} />
          <Stack.Screen name="Register_home" component={Register_home} />
          <Stack.Screen name="Forgot_password" component={Forgot_password} />
          <Stack.Screen name="Login_Otp" component={Login_Otp} />
          <Stack.Screen name="First_screen" component={First_screen} />
          <Stack.Screen name="Register_screen" component={Register_screen} />
          <Stack.Screen
            name="Register_information"
            component={Register_information}
          />
          <Stack.Screen
            name="Register_location"
            component={Register_location}
          />
          <Stack.Screen
            name="Register_lastscreen"
            component={Register_lastscreen}
          />

          <Stack.Screen
            name="Home_Screen"
            component={Home_Screen}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />

          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="TopBar" component={TopBar} />
          <Stack.Screen name="ScrollHeader" component={ScrollableHeader} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="OnlineMembers" component={OnlineMembers} />
          <Stack.Screen name="Imageview" component={Imageview} />
          <Stack.Screen name="ModalSearch" component={ModalSearch} />
          <Stack.Screen name="VegetarianDatas" component={VegetarianDatas} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          {/* SERVICES SCREENS */}
          <Stack.Screen name="MarriageVendors" component={MarriageVendors} />
          <Stack.Screen name="MarriageVenues" component={MarriageVenues} />
          <Stack.Screen name="MarriageDigital" component={MarriageDigital} />
          <Stack.Screen name="MarriageSpecial" component={MarriageSpecial} />
          <Stack.Screen name="MarriageBeauty" component={MarriageBeauty} />
          <Stack.Screen name="Marriage_Shoppie" component={Marriage_Shoppie} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigators;
