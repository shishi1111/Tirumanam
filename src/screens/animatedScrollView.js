import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/Ionicons";
import Icon5 from "react-native-vector-icons/FontAwesome";
import ProfileTopBar from "../components/ProfileTopBar";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#03A9F4",
    overflow: "hidden",
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: 150,
  },
});

const data = Array.from({ length: 30 });

const ScrollableHeader = ({ navigation }) => {
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;

  const headerHeight = animatedScrollYValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.fill}>
      <Animated.ScrollView
        style={styles.fill}
        contentContainerStyle={styles.scrollViewContent}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: animatedScrollYValue,
              },
            },
          },
        ])}
      >
        <View style={styles.scrollViewContent}>
          <ProfileTopBar />
        </View>
      </Animated.ScrollView>
      <Animated.View opacity={headerHeight} style={[styles.header]}>
        <View style={{ backgroundColor: "#ffffff" }}>
          <View>
            <View style={[styles.card, styles.elevation]}>
              <View style={{ flexDirection: "row" }}>
                <View style={{}}>
                  <Image
                    style={{
                      width: 120,
                      height: 120,
                      marginLeft: 30,
                      marginTop: 80,
                      borderRadius: 25,
                      borderWidth: 8,
                    }}
                    source={require("../images/image.png")}
                  ></Image>
                </View>

                <TouchableOpacity style={{ position: "absolute" }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      position: "absolute",
                      marginTop: 178,
                      marginLeft: 130,
                    }}
                    source={require("../images/icon.png")}
                  ></Image>
                </TouchableOpacity>

                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.heading}>Rahul Das</Text>
                    <Icon5
                      name="circle"
                      size={14}
                      style={{ marginLeft: 10, marginTop: 97 }}
                      color="#04cc82"
                    />
                  </View>
                  <Text style={styles.age}> 28</Text>
                  <Text style={styles.profession}> Software Engineer</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

// ScrollableHeader.propTypes = {
//   navigation: PropTypes?.shape({
//     navigate: PropTypes?.func?.isRequired,
//   }).isRequired,
// };

export default ScrollableHeader;
