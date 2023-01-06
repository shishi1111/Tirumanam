import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  Animated,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import Lottie from "lottie-react-native";

import AnimatedLoader from "react-native-animated-loader";
import DropDownPicker from "../../assets/react-native-dropdown-picker";

const SplashScreen = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={{ marginTop: 100 }}>
        <Image
          style={{ width: 350, height: 80, marginLeft: 22, marginTop: 150 }}
          source={require("../images/Logo.png")}
        ></Image>
      </View>
      <View style={{ marginTop: 80, marginLeft: 20 }}>
        <Lottie
          style={styles.lottie}
          source={require("../components/loader.json")}
          autoPlay
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: { width: 150, height: 150, marginTop: 80 },
});

export default SplashScreen;
