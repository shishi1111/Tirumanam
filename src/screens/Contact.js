import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import fonts from "../contants/fonts";
import Chat from "./Chat";
import { useNavigation } from "@react-navigation/native";

const Contact = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
      >
        <Image
          style={{
            marginLeft: 15,
            width: 190,
            height: 190,
          }}
          source={require("../images/image2.png")}
          resizeMode="cover"
        />
        <View style={{ flexDirection: "column", marginLeft: 15 }}>
          <Text style={Styles.style}>UG1564451454131354</Text>
          <Text style={Styles.style}>Catherine madudu</Text>
          <Text style={Styles.style}>29 Yrs,</Text>
          <Text style={Styles.style}>Chiristian Community</Text>
          <Text style={Styles.style}>Cathollic</Text>
          <Text style={Styles.style}>United States</Text>
          <Text style={Styles.style}>MEDICAL DEGREE</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Chat");
            }}
          >
            <Text style={Styles.button}>Chat Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
      >
        <Image
          style={{
            marginLeft: 15,
            width: 190,
            height: 190,
          }}
          source={require("../images/image3.png")}
          resizeMode="cover"
        />
        <View style={{ flexDirection: "column", marginLeft: 15 }}>
          <Text style={Styles.style}>UG1564451454131354</Text>
          <Text style={Styles.style}>Catherine madudu</Text>
          <Text style={Styles.style}>29 Yrs,</Text>
          <Text style={Styles.style}>Chiristian Community</Text>
          <Text style={Styles.style}>Cathollic</Text>
          <Text style={Styles.style}>United States</Text>
          <Text style={Styles.style}>MEDICAL DEGREE</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Chat");
            }}
          >
            <Text style={Styles.button}>Chat Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  style: {
    fontFamily: fonts.POPPINS_REGULAR,
    color: "black",
  },
  button: {
    marginLeft: "auto",
    width: 75,
    textAlign: "center",
    flexWrap: "wrap",
    marginTop: 10,
    borderWidth: 1,
    border: "solid",
    borderColor: "#875F9A",
    padding: 5,
    color: "white",
    backgroundColor: "#875F9A",
    borderRadius: 5,
  },
});

export default Contact;
