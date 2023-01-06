// Javascript
import React from "react";
import { Text, color } from "react-native";
import {
  AnimatedTabBarNavigator,
  IAppearanceOptions,
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
import About_us from "./About_us";

const Home_Screen = ({ navigation, route }) => {
  const Data = route.params && route.params?.data;
  const success = route.params && route.params?.success;
  console.log(Data);
  console.log(success);
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#000000",
        activeBackgroundColor: "#b4bef4",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        initialParams={{ success: success }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? color : "#875F9A"}
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
              color={focused ? color : "#875F9A"}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Service"
        component={Dream}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Hoverable>
              <Icon
                name="briefcase"
                size={size ? size : 24}
                color={focused ? color : "#875F9A"}
                focused={focused}
              />
            </Hoverable>
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={TopBar}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="user"
              size={size ? size : 24}
              color={focused ? color : "#875F9A"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={About_us}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="aperture"
              size={size ? size : 24}
              color={focused ? color : "#875F9A"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
export default Home_Screen;
