// Javascript
import React from "react";
import { Text, color } from "react-native";
import {
  AnimatedTabBarNavigator,
  IAppearanceOptions,
  TabElementDisplayOptions,
} from "react-native-animated-nav-tab-bar";
import Home from "./Home";
import { Hoverable, Pressable } from "react-native-web-hover";
// Typescript

const Tabs = AnimatedTabBarNavigator();
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Search from "./search";
import TopBar from "./TopBar";
import Store from "../screens/Store";
import ServiceTopBar from "./ServiceTopBar";
import { RotateInUpLeft } from "react-native-reanimated";
import Dream from "../screens/Store";
import Login_Otp from "./Login_otp";
import MarriageBeauty from "./MarriageBeauty";
import Marriage_Home from "./Marriage_Home";

const Marriage_Shoppie = ({ navigation, route }) => {
  const Data = route.params && route.params?.data;
  console.log(Data);
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#000000",
        activeBackgroundColor: "#b4bef4",
        IAppearanceOptions: { padding: 80 },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Marriage_Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? color : "#876501"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="search-outline"
              size={size ? size : 24}
              color={focused ? color : "#876501"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
export default Marriage_Shoppie;
