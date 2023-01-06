import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import fonts from "../contants/fonts";
import { useNavigation } from "@react-navigation/native";

const Chat = () => {
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
            marginVertical: 20,
            alignItems: "center",
            borderBottomColor: "gray",
            borderBottomWidth: 0.5,
          }}
        >
          <AntDesign
            onPress={() => {
              navigation.navigate("onlineMembers");
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
            Your Chat
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Image
            style={{
              width: 390,
              height: 350,
            }}
            source={require("../images/Chat1.png")}
            resizeMode="cover"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: fonts.POPPINS_REGULAR,
              fontSize: 12,
            }}
          >
            No conversation till now.
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: fonts.POPPINS_MEDIUM,
              fontSize: 14,
            }}
          >
            Initiate a new conversation with {"\n"} matches who are online.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OnlineMembers");
          }}
        >
          <Text style={Styles.button}>View Online Members</Text>
        </TouchableOpacity>
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

export default Chat;
