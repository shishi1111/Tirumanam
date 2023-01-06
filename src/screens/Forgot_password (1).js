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

const Forgot_password = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.headercontainer}>
        <AntDesign
          onPress={() => {
            navigation.navigate("Login_screen");
          }}
          name="arrowleft"
          size={30}
          color="gray"
          style={{ marginLeft: 5 }}
        />
        <Text style={Styles.textcontainer}>FORGOT PASSWORD?</Text>
      </View>
      <Text style={Styles.heading}>FORGOT YOUR PASSWORD?</Text>
      <Text style={Styles.content}>
        Enter your ID / Registered Email ID and We'll send you a link and PIN to
        reset your password.
      </Text>
      <View style={Styles.inputcontainer}>
        <View style={Styles.inputsubcontainer}>
          <TextInput style={Styles.input} placeholder="" />
        </View>
      </View>
      <TouchableOpacity>
        <Text style={Styles.button}>Reset Password</Text>
      </TouchableOpacity>
      <Text style={Styles.or}>or</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login_Otp");
        }}
      >
        <Text style={Styles.otplink}>Login Via OTP</Text>
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

    backgroundColor: "#FFFFFF",
  },
  headercontainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 70,
  },
  textcontainer: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.POPPINS_MEDIUM,
    marginLeft: 40,
    color: "#505050",
  },
  heading: {
    fontFamily: fonts.POPPINS_SEMI_BOLD,
    marginTop: 60,
    marginHorizontal: 20,
    color: "#505050",
  },
  content: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: "justify",
    fontFamily: fonts.POPPINS_REGULAR,
    color: "#505050",
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
  or: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: fonts.POPPINS_MEDIUM,
    color: "#505050",
  },
  otplink: {
    fontFamily: fonts.POPPINS_MEDIUM,
    color: "#875F9A",
    marginVertical: 20,
    textAlign: "center",
  },
});

export default Forgot_password;
