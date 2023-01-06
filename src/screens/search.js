import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import fonts from "../contants/fonts";
const Search = () => {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <Image
        source={require("../images/undraw_in_progress_re_m1l6.png")}
        style={{
          alignContent: "center",
          justifyContent: "center",

          height: 250,
          width: 380,
          marginTop: 80,
        }}
        resizeMode={"cover"}
      ></Image>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          color: "#000000",
          fontFamily: fonts.POPPINS_BOLD,
          marginTop: 20,
        }}
      >
        On developement
      </Text>
      <Lottie
        style={{
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "30%",
          marginTop: 40,
        }}
        source={require("../components/progress.json")}
        autoPlay
        resizeMode="cover"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
