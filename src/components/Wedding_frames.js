import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import fonts from "../contants/fonts";

const Wedding_frames = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Image
          style={{
            width: 60,
            height: 60,
            marginLeft: 15,
            borderRadius: 60,
          }}
          source={require("../images/marriage1.png")}
          resizeMode="cover"
        ></Image>
        <View style={{ width: 300 }}>
          <Text
            style={{
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#231F20",
              marginTop: 10,
              marginLeft: 10,
              //   flexDirection:"row"
            }}
          >
            14-Sep-2022: Mega Spot Registeration Ever Palani- Tamilnadu
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <ImageBackground
          style={{
            width: 360,
            height: 350,
            marginLeft: 15,
            borderRadius: 60,
            opacity: 0.8,
          }}
          source={require("../images/marriage1.png")}
          resizeMode="cover"
          blurRadius={10}
        >
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                fontFamily: fonts.POPPINS_BOLD,
                color: "red",
              }}
            >
              Suyamvaram
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: fonts.POPPINS_SEMI_BOLD,
                color: "#EAEDF0",
              }}
            >
              Garand Jataka registeration ceremony
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: fonts.POPPINS_SEMI_BOLD,
                color: "red",
              }}
            >
              (To all members)
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  marginLeft: 40,
                  fontSize: 18,
                  fontFamily: fonts.POPPINS_SEMI_BOLD,
                  color: "white",
                }}
              >
                Location:
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 100 }}>
              <Image
                style={{
                  width: 150,
                  height: 100,
                  marginLeft: 15,
                  borderRadius: 10,
                  borderColor: "white",
                  borderWidth: 2,
                }}
                source={require("../images/marriage1.png")}
                resizeMode="cover"
              ></Image>
            </View>
          </View>
        </ImageBackground>
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Text
            style={{
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#231F20",
              textAlign: "",
              fontSize: 13,
              textAlign: "left",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          >
            {` 14-Sep-2022: Mega Spot Registeration Ever at Palani-\n Tamilnadu Match and Marriage's Mega Spot \nRegisteration at Palani- Tamilnadu on 14-Sep-2022 `}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Wedding_frames;
