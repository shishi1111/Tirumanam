import { View, Text, Dimensions } from "react-native";
import React from "react";
import fonts from "../contants/fonts";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dream from "./Store";
import MarriageVendors from "./MarriageVendors";
import MarriageVenues from "./MarriageVenues";
import MarriageDigital from "./MarriageDigital";
import MarriageSpecial from "./MarriageSpecial";
import MarriageBeauty from "./MarriageBeauty";

const Tab = createMaterialTopTabNavigator();

const ServiceTopBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: "blue",
          height: 2,
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "#000",
        tabBarPressColor: "#fff",
      }}
      initialLayout={{
        width: Dimensions.get("window").width,
      }}
    >
      <Tab.Screen name="Service" component={Dream} />
      <Tab.Screen name="Marriage Vendors" component={MarriageVendors} />
      <Tab.Screen name="Marriage Venues" component={MarriageVenues} />
      <Tab.Screen name="Marriage Digital" component={MarriageDigital} />
      <Tab.Screen name="Marriage Special" component={MarriageSpecial} />
      <Tab.Screen name="Marriage Beauty" component={MarriageBeauty} />
    </Tab.Navigator>
  );
};

export default ServiceTopBar;
