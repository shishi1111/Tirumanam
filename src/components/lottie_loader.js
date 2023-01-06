import React from "react";
import { StyleSheet } from "react-native";
import LottieLoader from "lottie-loader-react-native";

export const Loading = ({ visible }) => {
  return (
    <LottieLoader
      visible={visible}
      source={require("./loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    />
  );
};

const styles = StyleSheet.create({
  lottie: { width: 100, height: 100 },
});
