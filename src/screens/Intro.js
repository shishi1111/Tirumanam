import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Intro_Slide from "./intro_Slide";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import Login_screen from "./Login_screens";
import SplashScreen from "./splashScreen";
const Intro = ({ navigation, route }) => {
  const Props = route?.params?.Props;
  const [token, setToken] = useState();
  const [props, setProps] = useState();
  useEffect(async () => {
    try {
      const data = await AsyncStorage.getItem("@pantry102").then((item) => {
        setToken(item);
        console.log(item);
      });
      const props = await AsyncStorage.getItem("props").then((item) => {
        setProps(item);
        console.log(item);
      });
      console.log(data);
      console.log(props, "ividethi");
    } catch (e) {
      // error reading value
    }
  }, []);

  const SubmitHandler = () => {
    setTimeout(() => {
      navigation.navigate("Login_screen");
    }, 2000);
  };
  const SubmitHandler1 = () => {
    setTimeout(() => {
      navigation.navigate("Intro_Slide");
    }, 1000);
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <SplashScreen data={true} />
      </View>

      {Props === "props" ||
      props === "props" ||
      token === (!undefined || !null) ? (
        <SubmitHandler />
      ) : (
        <SubmitHandler1 />
      )}
    </>
  );
};

export default Intro;

const styles = StyleSheet.create({});
