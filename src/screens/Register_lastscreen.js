import React, { useState, createContext, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import fonts from "../contants/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import { ScrollView } from "react-native-gesture-handler";
import {
  DropdownLast,
  DropdownOne,
  DropdownThree,
  DropdownTwo,
} from "../components/DropdownMenu";
import { getUniqueId, getManufacturer } from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Register_home from "./Register_home";
import DeviceInfo from "react-native-device-info";
import { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAvoidingView } from "react-native";
import Lottie from "lottie-react-native";
import { color } from "react-native-reanimated";
const Register_lastscreen = ({ navigation, data, route }) => {
  const Register_Data = route.params?.Register_Data;
  const Register_screen = route.params?.Register_screen;
  console.log(Register_Data);
  console.log(Register_screen);
  const [Device_id, setDevice_id] = useState();
  DeviceInfo.getUniqueId().then((uniqueId) => {
    console.log(uniqueId);
    setDevice_id(uniqueId);
  });
  const [check, setCheck] = useState(false);
  const [handler, setHandler] = useState(false);
  // const [datas, setDatas] = useState();
  const [show, setShow] = useState(false);
  // HOW DO KNOW US
  const [know, setKnow] = useState();
  const [colorchange, setColorchange] = useState(false);

  const knowCallback = (prop) => {
    setKnow(prop);
    // console.log(know, "know");
  };
  // LOGIN PASSWORD
  const [password, setPassword] = useState();
  // console.log(password, "password");

  // SECOND MARRIGE
  // X MARITAL STATUS
  const [marital, setMarital] = useState();
  const maritalCallback = (prop) => {
    setMarital(prop);
    // console.log(marital, "marital");
  };
  // CHILDREN
  const [children, setChildren] = useState();
  const childrenCallback = (prop) => {
    setChildren(prop);
    // console.log(children, "children");
  };
  // HOW DO KNOW US
  const [knowus, setKnowus] = useState();
  const knowusCallback = (prop) => {
    setKnowus(prop);
    // console.log(knowus, "knowus");
  };
  const Register_first = {
    how_to_know_us: know,
    password: password,
  };
  console.log(datas);
  // LOGIN PASSWORD
  const [secPassword, setSecPassword] = useState();
  // console.log(secPassword, "secPassword");
  const Post_Data = {
    profile_for: Register_screen?.profile_for,
    name: Register_screen?.name,
    gender: Register_screen?.gender,
    relegion: Register_screen?.relegion,
    mother_tongue: Register_screen?.mother_tongue,
    countrycode: Register_screen?.countrycode,
    city_pref: Register_Data?.family_city,

    mobile: Register_screen?.mobile,
    country_pref: Register_Data?.family_country,
    state_pref: Register_Data?.family_state,
    password: password,
    how_to_know_us: know,
    reference_code: "1",
    star: Register_screen?.star,
    raashi: Register_screen?.raashi,
    marital_status: datas === "I like to save it." ? "1" : "2",
    caste: Register_screen?.caste,
    sub_caste: Register_screen?.sub_caste,
    education: Register_screen?.education,

    device_id: Device_id,
    dob: Register_screen?.dob,
    X_marital_status: marital,
    children: children,
    knowus: knowus,
  };

  const [response, setResponse] = useState();
  const SubmitHandler = () => {
    fetch("http://tirumanam.in/api/userRegistration", {
      method: "POST",
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Post_Data),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("Your intended result is: ", result);
        // if (result.status === "200") {
        //   navigation.navigate("Home_Screen", { success: "success" });
        // } else !result.message;
        // {
        //   setResponse(result);
        // }
        setResponse(result);
      });
  };

  useEffect(() => {
    if (Object.values(Register_first).includes(undefined)) {
      null;
    } else {
      setColorchange(false);
    }
  }, [Object.values(Register_first)]);
  console.log(handler, "handler");
  useEffect(async () => {
    try {
      const data = await AsyncStorage.getItem("@MySuperStore:key").then(
        (item) => {
          console.log(item), setDatas(item);
        }
      );
      console.log(data);
    } catch (e) {
      // error reading value
    }
  }, []);
  // console.log(datas, "callback");
  const datas = "I like to save it.";
  return (
    <View style={Styles.container}>
      <KeyboardAvoidingView>
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
            height: "8%",
            position: "absolute",
          }}
        >
          <Image
            style={{ width: 400 }}
            source={require("../images/mainheader.png")}
            resizeMode={"cover"}
          ></Image>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 3,
            }}
          >
            <View style={{}}>
              <Image
                style={{ width: 240, height: 45 }}
                source={require("../images/imagePNG.png")}
                resizeMode="cover"
              ></Image>
            </View>
          </View>
        </View>
        <ScrollView>
          {/* <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontFamily: fonts.POPPINS_SEMI_BOLD,
            fontSize: 16,
            color: "black",
          }}
        >
          For your NEW LIFE
        </Text> */}
          {datas === "I like to save it." ? (
            <>
              <Text
                style={{
                  marginTop: 80,
                  marginLeft: 40,
                  fontFamily: fonts.POPPINS_SEMI_BOLD,
                  color: "#505050",
                }}
              >
                How do Know Us
              </Text>
              <View style={Styles.dropcontainer}>
                <DropdownLast
                  knowCallback={knowCallback}
                  color={
                    colorchange === true &&
                    Register_first.how_to_know_us === undefined
                      ? true
                      : false
                  }
                  colorchanged={
                    Register_first.how_to_know_us === !undefined ? false : null
                  }
                />
              </View>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_SEMI_BOLD,
                  color: "#505050",
                  marginLeft: 40,
                  marginTop: 20,
                }}
              >
                Login Password
              </Text>

              <View
                style={[
                  Styles.inputcontainer,
                  {
                    borderBottomWidth: 1,
                    borderColor:
                      colorchange === true &&
                      Register_first.password === undefined
                        ? "#BF565A"
                        : Register_first.password === !undefined
                        ? "#000000"
                        : null,
                    borderWidth: 1,
                    borderStyle: "solid",
                    paddingLeft: 20,
                    paddingRight: 10,
                    paddingVertical: 10,
                    marginHorizontal: 40,
                    marginVertical: 20,
                  },
                ]}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <TextInput
                    style={{
                      fontSize: 16,
                      textAlignVertical: "center",
                      padding: 0,
                      height: 20,
                      color: "#000000",
                      flex: 1,
                    }}
                    placeholder="Password"
                    placeholderTextColor={"#000000"}
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry={!show ? true : false}
                  />
                  <TouchableOpacity onPress={() => setShow(true)}>
                    {!show && (
                      <Ionicons
                        name={"md-eye-off-sharp"}
                        size={22}
                        color={"gray"}
                        style={{ marginRight: 10 }}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShow(false)}>
                    {show && (
                      <Ionicons
                        name={"md-eye"}
                        size={22}
                        color={"gray"}
                        style={{ marginRight: 10 }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              {colorchange === true && (
                <Text
                  style={{
                    fontFamily: fonts.POPPINS_REGULAR,
                    fontSize: 18,
                    color: "#D7A4A3",
                    textAlign: "center",
                    marginTop: 16,
                  }}
                >
                  Please fill all fields
                </Text>
              )}
              {/* {response?.status === "200" && (
              <Text
                style={{
                  fontFamily: fonts.POPPINS_REGULAR,
                  fontSize: 18,
                  color: "#D7A4A3",
                  textAlign: "center",
                  marginTop: 16,
                }}
              >
                Registered Successfully
              </Text>
            )} */}
              {response?.message ===
              "your account created successfully, please verify the moble number!" ? (
                <>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_REGULAR,
                      fontSize: 18,
                      color: "#D7A4A3",
                      textAlign: "center",
                      marginTop: 16,
                    }}
                  >
                    Registered successfully!! Go to Login
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_REGULAR,
                      fontSize: 18,
                      color: "#D7A4A3",
                      textAlign: "center",
                      marginTop: 16,
                    }}
                  >
                    {response?.message}
                  </Text>
                </>
              )}
              <View style={Styles.checksubcontainer}>
                <Fontisto
                  name={!handler ? "checkbox-passive" : "checkbox-active"}
                  size={18}
                  color={"gray"}
                  style={{ textAlignVertical: "center", marginLeft: 25 }}
                  onPress={() => {
                    setHandler(!handler);
                  }}
                />
                <Text
                  style={{
                    fontFamily: fonts.POPPINS_SEMI_BOLD,
                    color:
                      colorchange === true && handler === false
                        ? "#D7A4A3"
                        : handler === true
                        ? "#808080"
                        : null,
                    marginLeft: 10,
                  }}
                >
                  {
                    "I have read and agree to the Terms and\n Condition and Privacy Policy"
                  }
                </Text>
              </View>
              <View style={Styles.pathcontainer}>
                {response?.message === "The mobile has already been taken." ||
                  (response?.status === "200" && (
                    <View style={Styles.pathbox}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Login_screen")}
                      >
                        <Text style={Styles.pathtext}>LOGIN</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                {response?.status === "200" ? (
                  <>
                    <View></View>
                  </>
                ) : (
                  <>
                    <View style={Styles.pathbox}>
                      <TouchableOpacity
                        onPress={() => {
                          Object.values(Register_first).includes(undefined)
                            ? setColorchange(true)
                            : SubmitHandler();
                        }}
                      >
                        <Text style={Styles.pathtext}>SUBMIT</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </>
          ) : (
            <>
              <Text style={Styles.lable}>X Marital Status</Text>
              <View style={Styles.dropcontainer}>
                <DropdownOne
                  maritalCallback={maritalCallback}
                  color={
                    colorchange === true &&
                    Post_Data.X_marital_status === undefined
                      ? true
                      : false
                  }
                  colorchanged={
                    Register_first.X_marital_status === !undefined
                      ? false
                      : null
                  }
                />
              </View>
              <Text style={Styles.lable}>Children</Text>
              <View style={Styles.dropcontainer}>
                <DropdownTwo
                  childrenCallback={childrenCallback}
                  color={
                    colorchange === true && Post_Data.children === undefined
                      ? true
                      : false
                  }
                  colorchanged={
                    Post_Data.children === !undefined ? false : null
                  }
                />
              </View>
              <Text style={Styles.lable}>How do Know Us </Text>
              <View style={Styles.dropcontainer}>
                <DropdownThree
                  knowusCallback={knowusCallback}
                  color={
                    colorchange === true && Post_Data.knowus === undefined
                      ? true
                      : false
                  }
                  colorchanged={Post_Data.knowus === !undefined ? false : null}
                />
              </View>
              <Text style={Styles.lable}>Login Password</Text>
              <View
                style={[
                  Styles.inputcontainer,
                  {
                    borderBottomWidth: 1,
                    borderColor:
                      colorchange === true &&
                      Register_first.password === undefined
                        ? "#BF565A"
                        : Register_first.password === !undefined
                        ? "#000000"
                        : null,
                    borderWidth: 1,
                    borderStyle: "solid",
                    paddingLeft: 20,
                    paddingRight: 10,
                    paddingVertical: 10,
                    marginHorizontal: 40,
                    marginVertical: 20,
                  },
                ]}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <TextInput
                    style={{
                      fontSize: 16,
                      textAlignVertical: "center",
                      padding: 0,
                      height: 20,
                      color: "#000000",
                      flex: 1,
                    }}
                    placeholder="Password"
                    placeholderTextColor={"#000000"}
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry={!show ? true : false}
                  />
                  <TouchableOpacity onPress={() => setShow(true)}>
                    {!show && (
                      <Ionicons
                        name={"md-eye-off-sharp"}
                        size={22}
                        color={"gray"}
                        style={{ marginRight: 10 }}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShow(false)}>
                    {show && (
                      <Ionicons
                        name={"md-eye"}
                        size={22}
                        color={"gray"}
                        style={{ marginRight: 10 }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              {colorchange === true && (
                <Text
                  style={{
                    fontFamily: fonts.POPPINS_REGULAR,
                    fontSize: 18,
                    color: "#D7A4A3",
                    textAlign: "center",
                    marginTop: 16,
                  }}
                >
                  Please fill all fields
                </Text>
              )}
              {response?.message ===
              "your account created successfully, please verify the moble number!" ? (
                <>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_REGULAR,
                      fontSize: 18,
                      color: "#D7A4A3",
                      textAlign: "center",
                      marginTop: 16,
                    }}
                  >
                    Registered successfully!! Go to Login
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_REGULAR,
                      fontSize: 18,
                      color: "#D7A4A3",
                      textAlign: "center",
                      marginTop: 16,
                    }}
                  >
                    {response?.message}
                  </Text>
                </>
              )}
              <View style={Styles.checksubcontainer}>
                <Fontisto
                  name={!check ? "checkbox-passive" : "checkbox-active"}
                  size={18}
                  color={"gray"}
                  style={{ textAlignVertical: "center", marginLeft: 25 }}
                  onPress={() => setCheck(!check)}
                />
                <>
                  {" "}
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_SEMI_BOLD,
                      color:
                        colorchange === true && handler === false
                          ? "#D7A4A3"
                          : handler === true
                          ? "#808080"
                          : null,
                      marginLeft: 10,
                    }}
                  >
                    {
                      "I have read and agree to the Terms and\n Condition and Privacy Policy"
                    }
                  </Text>
                </>
              </View>
              <View style={Styles.pathcontainer}>
                <View style={Styles.pathbox}>
                  <TouchableOpacity
                    onPress={() => {
                      Object.values(Register_first).includes(undefined)
                        ? setColorchange(true)
                        : SubmitHandler();
                    }}
                  >
                    <Text style={Styles.pathtext}>SUBMIT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lable: {
    marginTop: 30,
    marginLeft: 40,
    // marginTop: 200,
    marginBottom: 10,
    fontFamily: fonts.POPPINS_BOLD,
    color: "#505050",
  },
  inputcontainer: {
    borderWidth: 1,
    // borderColor: "#875F9A",
    borderStyle: "solid",
    paddingLeft: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 10,
    // backgroundColor: "#f7f5f7",
    justifyContent: "center",
  },
  inputsubcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    width: 200,
  },
  // lottie: { width: 60, height: 60 },
  input: {
    fontSize: 14,
    textAlignVertical: "center",
    padding: 0,
    color: "black",
    flex: 1,
    width: 100,
    marginLeft: 10,
  },
  checksubcontainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlignVertical: "center",
    marginRight: 20,
    marginLeft: 16,
    marginTop: 10,
  },
  checktext: {
    marginLeft: 3,
    // textAlignVertical: 'center',
  },
  pathcontainer: {
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    textAlignVertical: "center",
    marginVertical: 20,
  },
  pathbox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#875F9A",
    width: 130,
    height: 40,
    backgroundColor: "#f7f5f7",
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    textAlignVertical: "center",
    marginRight: 20,
    marginLeft: 20,
  },
  pathtext: {
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 7,
    fontFamily: fonts.POPPINS_MEDIUM,
    color: "#875F9A",
  },
  dropcontainer: {
    marginHorizontal: 20,
    marginBottom: 50,
  },
});

export default Register_lastscreen;
