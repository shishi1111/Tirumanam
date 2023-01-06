import React, { useEffect, createContext, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import fonts from "../contants/fonts";
import DropdownMenu from "../components/DropdownMenu";
import DropdownPress from "../components/DropdownMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FadeIn } from "react-native-reanimated";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Register_home = ({ navigation }) => {
  useEffect(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("any_key_here");
      console.log(jsonValue, "kkkk");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }, []);

  // };
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  setTimeout(() => {
    fadeIn();
  }, 1000);

  const [screen, setScreen] = React.useState("");
  const [pressed, setPressed] = React.useState(false);

  const SubmitHandlerFist = async () => {
    try {
      await AsyncStorage.setItem(
        "@MySuperStore:key",
        "I like to save it."
      ).then((item) => item);

      await AsyncStorage.Item("@MySuperStore:key").then((item) =>
        console.log(item)
      );
    } catch (error) {
      // Error saving data
    }
    navigation.navigate("First_screen"), setScreen("first");
    fadeIn();
  };

  const SubmitHandlerSecond = async () => {
    try {
      await AsyncStorage.setItem("@MySuperStore:key", "I like to.").then(
        (item) => console.log(item)
      );

      await AsyncStorage.Item("@MySuperStore:key").then((item) =>
        console.log(item)
      );
    } catch (error) {
      // Error saving data
    }
    navigation.navigate("First_screen"), setScreen("second");
  };
  console.log(screen, "hello");
  return (
    <View style={Styles.container}>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          backgroundColor: "#ffffff",
          width: 400,
          height: 51,
          position: "absolute",
        }}
      >
        <Image
          style={{ width: 400 }}
          source={require("../images/mainheader.png")}
          resizeMode={"cover"}
        ></Image>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            marginTop: 5,
            marginHorizontal: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.05,
            shadowRadius: 1.84,

            elevation: 20,
            backgroundColor: "rgba(255,255,355,0.8)",
            width: 150,
            borderRadius: 10,
            marginLeft: 10,
            flexDirection: "row",
            height: 40,
          }}
        >
          <Image
            style={{ width: 158, height: 40 }}
            source={require("../images/LOGOS.png")}
            resizeMode="cover"
          ></Image>
          <Text
            style={{
              color: "#F9F6EE",
              fontFamily: fonts.POPPINS_MEDIUM,
              fontSize: 10,
              textAlign: "center",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              width: 220,
              marginTop: 5,
            }}
          >
            "Love is not weakness. It is strong. Only the sacrament of marriage
            can contain it."
          </Text>
        </View>
      </View>
      <View style={Styles.buttoncontainer}>
        <Text
          style={{
            fontFamily: fonts.POPPINS_REGULAR,
            fontSize: 18,
            color: "#000000",
            marginTop: 240,
            marginLeft: 80,
          }}
        >
          Choose a category
        </Text>
        <TouchableOpacity
          Style={{}}
          onPress={() => {
            SubmitHandlerFist();
          }}
        >
          <Text style={[Styles.button, { marginTop: 20 }]}>
            Register First Marriage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SubmitHandlerSecond()}>
          <Text style={Styles.button}>Register Second Marriage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: "white",
  },
  heading: {
    fontFamily: fonts.POPPINS_SEMI_BOLD,
    textAlign: "center",
    marginTop: 100,
    textAlignVertical: "center",
    color: "black",
    fontSize: 18,
  },
  content: {
    fontFamily: fonts.POPPINS_REGULAR,
    textAlign: "center",
    marginTop: 20,
    textAlignVertical: "center",
    color: "black",
    fontSize: 14,
    marginHorizontal: 20,
  },
  buttoncontainer: {
    // marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 30,
    // borderColor: 'coral'
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    borderColor: "#875F9A",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    backgroundColor: "#875F9A",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 30,
    marginVertical: 20,
  },

  fadingContainer: {},
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

export default Register_home;
