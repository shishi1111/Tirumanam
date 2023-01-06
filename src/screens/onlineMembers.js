import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import fonts from "../contants/fonts";
import { useNavigation } from "@react-navigation/native";

const OnlineMembers = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 20,
            marginTop: 40,
            alignItems: "center",
            borderBottomColor: "gray",
            borderBottomWidth: 0.5,
          }}
        >
          <AntDesign
            onPress={() => {
              navigation.navigate("Contact");
            }}
            name="arrowleft"
            size={26}
            color="black"
            style={{ marginLeft: 5 }}
          />
          <Text
            style={{
              marginLeft: 10,
              fontFamily: fonts.POPPINS_MEDIUM,
              color: "black",
              textAlignVertical: "center",
              fontSize: 18,
            }}
          >
            15 Online Members
          </Text>
        </View>
        <View
          style={{
            marginVertical: 40,
            marginLeft: 20,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity>
            <Text style={Styles.link}>Contacted</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.link}>Shortlisted</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderBottomColor: "gray",
            borderBottomWidth: 0.5,
            paddingBottom: 20,
            marginHorizontal: 10,
          }}
        >
          <Image
            style={{
              width: 90,
              height: 90,
              marginLeft: 10,
              borderRadius: 90,
            }}
            source={require("../images/image2.png")}
            resizeMode="cover"
          ></Image>
          <View style={{ width: 300 }}>
            <Text
              style={{
                fontFamily: fonts.POPPINS_SEMI_BOLD,
                color: "#231F20",
                //   marginTop: 10,
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              Later
            </Text>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
                //   marginTop: 10,
                marginLeft: 10,
                fontSize: 14,
              }}
            >
              E66413245 | <Text style={{ color: "#875F9A" }}>Online</Text>{" "}
              {"\n"}
              25 Yrs, 5 Ft 7 In, Not Working, {"\n"}
              Christian - Orthodox, Kerala, India
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderBottomColor: "gray",
            borderBottomWidth: 0.5,
            paddingBottom: 20,
            marginHorizontal: 10,
          }}
        >
          <Image
            style={{
              width: 90,
              height: 90,
              marginLeft: 10,
              borderRadius: 90,
            }}
            source={require("../images/image3.png")}
            resizeMode="cover"
          ></Image>
          <View style={{ width: 300 }}>
            <Text
              style={{
                fontFamily: fonts.POPPINS_SEMI_BOLD,
                color: "#231F20",
                //   marginTop: 10,
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              Sathish
            </Text>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
                //   marginTop: 10,
                marginLeft: 10,
                fontSize: 14,
              }}
            >
              E66413245 | <Text style={{ color: "#875F9A" }}>Online</Text>{" "}
              {"\n"}
              25 Yrs, 5 Ft 7 In, Not Working, {"\n"}
              Christian - Orthodox, Kerala, India
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
            borderBottomColor: "gray",
            borderBottomWidth: 0.5,
            paddingBottom: 20,
            marginHorizontal: 10,
          }}
        >
          <Image
            style={{
              width: 90,
              height: 90,
              marginLeft: 10,
              borderRadius: 90,
            }}
            source={require("../images/image2.png")}
            resizeMode="cover"
          ></Image>
          <View style={{ width: 300 }}>
            <Text
              style={{
                fontFamily: fonts.POPPINS_SEMI_BOLD,
                color: "#231F20",
                //   marginTop: 10,
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              Ashwini
            </Text>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
                //   marginTop: 10,
                marginLeft: 10,
                fontSize: 14,
              }}
            >
              E66413245 | <Text style={{ color: "#875F9A" }}>Online</Text>{" "}
              {"\n"}
              25 Yrs, 5 Ft 7 In, Not Working, {"\n"}
              Christian - Orthodox, Kerala, India
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            borderBottomColor: "gray",
            borderBottomWidth: 0.5,
            paddingBottom: 20,
            marginHorizontal: 10,
          }}
        >
          <Image
            style={{
              width: 90,
              height: 90,
              marginLeft: 10,
              borderRadius: 90,
            }}
            source={require("../images/image3.png")}
            resizeMode="cover"
          ></Image>
          <View style={{ width: 300 }}>
            <Text
              style={{
                fontFamily: fonts.POPPINS_SEMI_BOLD,
                color: "#231F20",
                //   marginTop: 10,
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              Abhijith
            </Text>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
                //   marginTop: 10,
                marginLeft: 10,
                fontSize: 14,
              }}
            >
              E66413245 | <Text style={{ color: "#875F9A" }}>Online</Text>{" "}
              {"\n"}
              25 Yrs, 5 Ft 7 In, Not Working, {"\n"}
              Christian - Orthodox, Kerala, India
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  button: {
    borderColor: "#875F9A",
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderWidth: 1,
    backgroundColor: "#875F9A",
    color: "white",
    textAlign: "center",
    // fontWeight: "bold",
    fontSize: 16,
    borderRadius: 30,
    marginHorizontal: 80,
    marginTop: 40,
  },
  link: {
    borderWidth: 1,
    borderColor: "#875F9A",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: "center",
    marginRight: 10,
    textAlignVertical: "center",
    fontFamily: fonts.POPPINS_MEDIUM,
    color: "#875F9A",
  },
});

export default OnlineMembers;
