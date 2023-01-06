import { View, Text } from "react-native";
import React from "react";
import fonts from "../contants/fonts";

const Offers = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Text
          style={{
            color: "#ff006e",
            fontFamily: fonts.POPPINS_BOLD,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Offers
        </Text>
        <Text
          style={{
            color: "#000000",
            fontFamily: fonts.POPPINS_MEDIUM,
            fontSize: 14,
            textAlign: "justify",
          }}
        >
          Make Your Wedding Well planned with professional Wedding Services.
          Welcome to our Marriage Shopy to find the professional Wedding
          Services Vendors.
        </Text>
      </View>
    </View>
  );
};

export default Offers;
