import {
  View,
  Text,
  ScrollView,
  Image,
  DrawerLayoutAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import ImagedCardView from "../../assets/react-native-imaged-card-view";
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import fonts from "../contants/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Verification from "./Verification";
import { useNavigation } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import { useRef } from "react";
import { Button } from "react-native-elements";
import Lottie from "lottie-react-native";
import Login_success_modal from "../components/Login_Success_modal";
import { BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ route }) => {
  const success = route?.params.success;
  console.log(success);
  const [token, setToken] = useState();
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const App = () => {
    const changeDrawerPosition = () => {
      if (drawerPosition === "left") {
        setDrawerPosition("right");
      } else {
        setDrawerPosition("left");
      }
    };
  };
  useEffect(async () => {
    try {
      const data = await AsyncStorage.getItem("@pantry102").then((item) => {
        setToken(item);
      });
      console.log(data);
    } catch (e) {
      // error reading value
    }
  }, []);
  const navigationView = () => (
    <View>
      <Text>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const navigation = useNavigation();
  function handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
  }

  useEffect(() => {
    token &&
      BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, [token]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?gender=female&results=20`)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson.results[0].picture.medium, "responsec");
        setdata(responseJson.results);
        // console.log(data, "dataaa");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?gender=female&results=20`)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson.results[0].picture.medium, "responsec");
        setdata1(responseJson.results);
        // console.log(data1);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <ScrollView>
        <View style={{ margin: 5 }}>
          <Image
            style={{
              width: "100%",
              height: 60,
              position: "absolute",
              opacity: 0.6,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.05,
              shadowRadius: 1.84,

              elevation: 20,
              backgroundColor: "#ffffff",

              overflow: "hidden",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require("../images/banner.png")}
            resizeMode="cover"
            blurRadius={1}
          ></Image>
          {/* <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons name="reorder-three" size={35} color="#000" />
        </TouchableOpacity> */}
        </View>

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
            marginLeft: 20,
            flexDirection: "row",
            height: 40,
          }}
        >
          <Image
            style={{ width: 158, height: 40 }}
            source={require("../images/LOGOS.png")}
            resizeMode="cover"
          ></Image>
          <TouchableOpacity
            onPress={() => navigation.navigate("Marriage_Shoppie")}
          >
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#ffffff",
                fontSize: 12,
                marginLeft: 18,
              }}
            >
              Find the best offers on our Marriage Shoppie!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Marriage_Shoppie")}
          >
            <View
              style={{ marginLeft: 5, height: 60, width: 60, marginTop: -10 }}
            >
              <Lottie
                style={{}}
                source={require("../components/14437-simple-arrow-right.json")}
                autoPlay
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        </View>
        {success === "success" && <Login_success_modal data={true} />}
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: fonts.POPPINS_MEDIUM,
                color: "#9F2B68",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
              }}
            >
              22 New Matches
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{ fontFamily: fonts.POPPINS_MEDIUM, color: "#9F2B68" }}
            >
              {" "}
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <ScrollView
            horizontal={true}
            style={{ borderRadius: 8, marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            <Image
              style={{
                width: 120,
                height: 120,
                marginLeft: 25,
                borderRadius: 15,
              }}
              source={require("../images/marriage1.png")}
              resizeMode="cover"
            ></Image>
            <Image
              style={{
                width: 120,
                height: 120,
                marginLeft: 15,
                borderRadius: 15,
              }}
              source={require("../images/MARRIAGE2.png")}
              resizeMode="cover"
            ></Image>
            <Image
              style={{
                width: 120,
                height: 120,
                marginLeft: 15,
                borderRadius: 15,
              }}
              source={require("../images/marriage3.png")}
              resizeMode="cover"
            ></Image>
            <Image
              style={{
                width: 120,
                height: 120,
                marginLeft: 15,
                borderRadius: 15,
              }}
              source={require("../images/marriage1.png")}
              resizeMode="cover"
            ></Image>
          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontFamily: fonts.POPPINS_MEDIUM,
                color: "#9F2B68",

                marginLeft: 15,
              }}
            >
              Your Recommendations Today
            </Text>
            <ScrollView
              horizontal={true}
              style={{ marginTop: 10 }}
              showsHorizontalScrollIndicator={false}
            >
              {data.map((item, i) => (
                <>
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      navigation.navigate("Imageview", {
                        image: item.picture.large,
                      });
                    }}
                  >
                    <Image
                      style={{
                        width: 80,
                        height: 80,
                        marginLeft: 15,
                        borderRadius: 80,
                      }}
                      source={{ uri: item.picture.large }}
                      resizeMode="cover"
                    ></Image>
                    <Text
                      style={{
                        maxWidth: 80,
                        marginLeft: 25,
                        alignItems: "center",
                        color: "#9F2B68",
                        marginTop: 5,
                      }}
                    >{`${item.name.first} ${item.name.last}`}</Text>
                  </TouchableOpacity>
                </>
              ))}
              <TouchableOpacity>
                <Icon
                  name="rightcircleo"
                  size={40}
                  color={"#875F9A"}
                  style={{ marginTop: 20, marginLeft: 20 }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 15,
                    fontFamily: fonts.POPPINS_SEMI_BOLD,
                    color: "#5A5A5A",
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 15,
              marginTop: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: fonts.POPPINS_MEDIUM,
                color: "#9F2B68",
                marginTop: 20,
              }}
            >
              Members Viewed You
            </Text>
            <Text
              style={{
                marginRight: 18,
                fontFamily: fonts.POPPINS_MEDIUM,
                color: "#9F2B68",
                marginTop: 20,
              }}
            >
              See All
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {data1.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Imageview", {
                      image: item.picture.large,
                    });
                  }}
                >
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      marginLeft: 20,
                      borderTopLeftRadius: 40,
                      borderBottomRightRadius: 20,
                    }}
                    source={{ uri: item.picture.large }}
                    resizeMode="cover"
                  ></Image>

                  <Text
                    style={{
                      maxWidth: 80,
                      marginLeft: 25,
                      alignItems: "center",
                      color: "#9F2B68",
                      marginTop: 5,
                    }}
                  >{`${item.name.first} ${item.name.last}`}</Text>
                  <Image
                    source={require("../images/crown1.png")}
                    style={{
                      height: 20,
                      width: 20,
                      marginLeft: 7,
                      position: "absolute",
                    }}
                  ></Image>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* <ScrollView horizontal={true} style={{ marginTop: 30 }}></ScrollView> */}
        </View>

        <Verification />
      </ScrollView>
    </View>
  );
};

export default Home;
