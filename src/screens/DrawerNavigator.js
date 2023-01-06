import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// VECTOR ICONS----------------------------------------------------------------
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// ---------------------------------------------------------------------------
import Home_Screen from "./Home_Screen";
import Offers from "./Offers";
import WeddingFrames from "./WeddingFrames";
import Blogs from "./Blogs";
import Events from "./Events";
import Annoncement from "./Annoncement";
import AboutUs from "./AboutUs";
import HelpSupport from "./HelpSupport";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "blue",
        drawerActiveTintColor: "#ffffff",
        drawerLabelStyle: { marginLeft: -20 },
        headerShown: "false",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home_Screen}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="home" size={18} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Profile"
        initialParams={{ data: "Profile" }}
        component={Home_Screen}
        options={{
          // headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="user" size={18} color={color} />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Service"
        component={ServiceTopBar}
        initialParams={{ data: "Services" }}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="briefcase" size={18} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Offers"
        component={Offers}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons name="happy-outline" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="WeddingFrames"
        component={WeddingFrames}
        options={{
          // headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="image-frame"
              size={18}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Blogs"
        component={Blogs}
        options={{
          // headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <Fontisto name="blogger" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Events"
        component={Events}
        options={{
          // headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <MaterialIcons name="emoji-events" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Annoncement"
        component={Annoncement}
        options={{
          // headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <MaterialIcons name="announcement" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help & Support"
        component={HelpSupport}
        options={{
          // headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <MaterialIcons name="announcement" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About us"
        component={AboutUs}
        options={{
          // headerShown: false,
          drawerIcon: ({ color, size, focused }) => (
            <MaterialIcons name="announcement" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
