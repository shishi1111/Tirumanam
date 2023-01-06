import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import fonts from "../contants/fonts";

const Login_Otp = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.headercontainer}>
        <AntDesign
          onPress={() => {
            navigation.navigate("Forgot_password");
          }}
          name="arrowleft"
          size={30}
          color="gray"
          style={{ marginLeft: 5 }}
        />
        <Text style={Styles.textcontainer}>LOGIN VIA OTP</Text>
      </View>
      <Text style={Styles.heading}>LOGIN VIA OTP</Text>
      <Text style={Styles.content}>
        Enter your ID / Registered Mobile No / Registered Email ID and We'll
        send you an OTP to your registered mobile.
      </Text>
      <View style={Styles.inputcontainer}>
        <View style={Styles.inputsubcontainer}>
          <TextInput
            style={Styles.input}
            placeholder="E-MAIL ID / MOBILE NO."
          />
        </View>
      </View>
      <TouchableOpacity>
        <Text style={Styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // justifyContent: 'center',
    // alignItem: 'center',
  },
  headercontainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    // backgroundColor: 'red',
  },
  textcontainer: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.POPPINS_MEDIUM,
    marginLeft: 40,
    color: "#505050",
  },
  heading: {
    fontFamily: fonts.POPPINS_BLACK,
    marginTop: 20,
    marginHorizontal: 20,
    color: "#505050",
  },
  content: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: "justify",
    fontFamily: fonts.POPPINS_REGULAR,
  },
  input: {
    fontSize: 16,
    textAlignVertical: "center",
    padding: 0,
    height: 20,
    color: "black",
    flex: 1,
  },
  inputcontainer: {
    borderBottomWidth: 1,
    borderColor: "#875F9A",
    borderStyle: "solid",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 40,
    marginVertical: 30,
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
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 30,
    marginHorizontal: 80,
    marginTop: 30,
  },
});

export default Login_Otp;
