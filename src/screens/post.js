import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { Component, useState } from "react";
import fonts from "../contants/fonts";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Fonts } from "../contants";
import DropdownProfile from "../components/Dropdown";
import { TextInputName } from "../components/Dropdown";
import { TextiMask } from "../components/Dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { color } from "react-native-reanimated";
import Like2 from "react-native-vector-icons/AntDesign";
import Comments from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Feather";
const Tab = createMaterialTopTabNavigator();
const screen = Dimensions.get("screen");
const Post = ({ navigation }) => {
  return (
    <>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Image
          style={{
            width: 60,
            height: 60,
            marginLeft: 15,
            borderRadius: 60,
          }}
          source={require("../images/image2.png")}
          resizeMode="cover"
        ></Image>
        <View Style={{ flexDirection: "coloumn" }}>
          <Text
            style={{
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#231F20",
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            {" "}
            Sathya Moorthy
          </Text>
          <Text
            style={{
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#adadad",
              marginLeft: 10,
            }}
          >
            22-10-2022 10:38:41
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", marginLeft: 10, marginTop: 10 }}>
        <Text style={styles.styles}>DOB: 1994</Text>
        <Text style={styles.styles}>Live: Dindugal</Text>
        <Text style={styles.styles}>Native: Dindugal</Text>
        <Text style={styles.styles}>Own Buissness and Manufacturing</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 70, marginTop: 20 }}>
        <TouchableOpacity>
          <Like2 name="like2" size={24} color={"#875F9A"} />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 10,
            fontFamily: fonts.POPPINS_LIGHT,
            color: "#231F20",
          }}
        >
          3 Likes
        </Text>
        <TouchableOpacity>
          <Comments
            name="comment-outline"
            size={24}
            color={"#875F9A"}
            style={{
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 10,
            fontFamily: fonts.POPPINS_LIGHT,
            color: "#231F20",
          }}
        >
          0 Comments
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  styles: {
    fontFamily: fonts.POPPINS_LIGHT,
    color: "#231F20",
  },
});
export default Post;
