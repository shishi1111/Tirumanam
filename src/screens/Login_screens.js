import React, { useState, useEffect } from "react";
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  BackHandler,
} from "react-native";
import fonts from "../contants/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
// import { useState } from "react";
import RNRestart from "react-native-restart";
const Login_screen = ({ navigation, route }) => {
  const Props = route.params?.props;
  console.log(Props, "PROPSSSSS");
  // setTimeout(() => {
  //   RNRestart.Restart();
  // }, 1000);

  const [inputData, setInputData] = useState("");
  const [password, setpassword] = useState();
  const [show, setShow] = useState(false);
  const [value, setValuee] = useState("");
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [Propdata, setPropData] = useState();
  console.log(Propdata, "helloprops");
  // console.log(inputData);
  const data = { mobile: inputData, password: password, device_id: "123456" };

  const SubmitHandler = async () => {
    fetch("http://tirumanam.in/api/login", {
      method: "POST",
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(SaveData())
      .then((response) => response.json())

      .then((result) => {
        console.log("Your intended result is: ", result);

        if (result?.message === "login successfully") {
          navigation.navigate("Home_Screen", { success: "success" });
        } else !result?.message;
        {
          setResponse(result.result[0]);
        }
      })
      .catch((error) => {
        console.log(error, "helloooo");
        setError(error);
      })
      .then(response && SaveData());
  };

  console.log(response);
  // response?.token
  const SaveData = async () => {
    try {
      await AsyncStorage.setItem("@pantry102", "Token");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(async () => {
    try {
      const data = await AsyncStorage.setItem("props", Props).then((item) => {
        setToken(item);
      });

      console.log(data);
    } catch (e) {
      // error reading value
    }
  }, []);
  function handleBackButtonClick() {
    Props === "props" && BackHandler.exitApp();
    return false;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);
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
            marginLeft: 10,
            marginTop: 5,
            width: 220,
          }}
        >
          "A successful marriage requires falling in love many times, always
          with the same person."
        </Text>
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

            flexDirection: "row",
            height: 40,
          }}
        >
          <Image
            style={{ width: 158, height: 40 }}
            source={require("../images/LOGOS.png")}
            resizeMode="cover"
          ></Image>
        </View>
      </View>

      <View
        style={{
          marginTop: 60,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      ></View>
      {/* <Text style={Styles.login}>LOGIN</Text> */}
      <View style={Styles.inputcontainer}>
        <View style={Styles.inputsubcontainer}>
          <TextInput
            style={Styles.input}
            placeholder="Mobile Number"
            placeholderTextColor={"#000000"}
            value={inputData}
            onChangeText={(val) => setInputData(val)}
          />
        </View>
      </View>
      <View style={Styles.inputcontainer}>
        <View style={Styles.inputsubcontainer}>
          <TextInput
            style={Styles.input}
            placeholder="Password"
            placeholderTextColor={"#000000"}
            onChangeText={(val) => setpassword(val)}
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
      <TouchableOpacity
        onPress={() => {
          SubmitHandler();
          // navigation.navigate("Home_Screen", { success: "success" });
        }}
      >
        <Text style={Styles.button}>LOGIN</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: fonts.POPPINS_REGULAR,
          color: "#D7A4A3",
          fontSize: 16,
          textAlign: "center",
          marginTop: 15,
        }}
      >
        {error && "Sorry Something went wrong. Please try again"}
        {response?.message}{" "}
        {response?.message === "Login successfully"
          ? null
          : response?.message && `Kindly Login with Valid Credentials`}
      </Text>
      <View style={Styles.linkscontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login_otp");
          }}
        >
          <Text style={Styles.links}>Login Via OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Forgot_password");
          }}
        >
          <Text style={Styles.links}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register_home");
        }}
      >
        <Text
          style={[
            Styles.Pressable,
            {
              borderColor:
                response?.message != "Login successfully"
                  ? response && "#00FF00"
                  : "#875F9A",
            },
          ]}
        >
          Not a member? Register FREE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  login: {
    marginLeft: 40,
    marginTop: 60,
    fontFamily: fonts.POPPINS_MEDIUM,
    fontSize: 20,
    color: "#505050",
    // textAlign: 'center',
  },
  input: {
    fontSize: 16,
    textAlignVertical: "center",
    padding: 0,
    height: 20,
    color: "#000000",
    flex: 1,
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
  },
  inputcontainer: {
    borderBottomWidth: 1,
    borderColor: "#875F9A",
    borderStyle: "solid",
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 10,
    marginHorizontal: 40,
    marginVertical: 20,
  },
  inputsubcontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    borderColor: "#875F9A",
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderWidth: 1,
    backgroundColor: "#875F9A",
    color: "white",
    textAlign: "center",

    fontSize: 18,
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
    borderRadius: 30,
    marginHorizontal: 80,
    marginTop: 40,
  },
  linkscontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  links: {
    color: "#875F9A",
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
    fontSize: 14,
  },
  Pressable: {
    // paddingHorizontal: 22,
    // paddingVertical: 15,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    color: "#875F9A",
    textAlign: "center",
    // fontWeight: "bold",
    padding: 10,
    fontSize: 16,
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
    borderRadius: 30,
    marginHorizontal: 60,
    marginTop: 40,
  },
});

export default Login_screen;
