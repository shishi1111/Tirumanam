import { onPress } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import React from "react";
import { StyleSheet, View, Text, Image, CustomHeader } from "react-native";
import AppIntroSlider from "../../assets/react-native-app-intro-slider";
import { Fonts } from "../contants";
import Register_screen from "./Register_screen";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

const slides = [
  {
    key: "one",

    text: "There is no such cozy combination\n as man and wife. – Menander",
    image: require("../images/list2.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",

    text: "A good marriage is one which allows for change and growth in the individuals\n and in the way they express their love. - Pearl S. Buck",
    image: require("../images/list3.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",

    text: "Marriage is not about age;\n it’s about finding  the right person. – Sophia Bush",
    image: require("../images/SplashScreenBG2.png"),
    backgroundColor: "#22bcb5",
  },
];

export default class Intro_Slide extends React.Component {
  state = {
    showRealApp: false,
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = ({ navigation }) => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    return (
      <View
        navigation={this.props.navigation.navigate("Login_screen", {
          props: "props",
        })}
      />
    );
  };
  render() {
    if (this.state.showRealApp) {
      return <intro_Slide />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          activeDotStyle={{
            backgroundColor: "#875F9A",
          }}
          dotStyle={{
            backgroundColor: "#6C7A89",
            borderColor: "#000000",
          }}
          doneLabel="Get Started"
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  slide: {
    fontSize: 18,
    color: "#000000",
  },
  image: {
    height: 300,
    width: 300,
    marginLeft: 30,
    marginTop: 80,
  },
  text: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 18,
    marginLeft: 8,
    textAlign: "center",
    marginTop: 100,
    color: "#505050",
  },
});
