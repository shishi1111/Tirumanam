import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import fonts from "../contants/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const ViewDetailsModals = () => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 60 }}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            margin: 10,
            elevation: 7,
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../images/searchimages/hotel.jpg")}
            resizeMode="cover"
            style={{
              width: 320,
              height: 240,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
              }}
            >
              Sijo Hotel With View Point
            </Text>
            <Ionicons
              name="star"
              size={15}
              color="#072ac8"
              style={{ lineHeight: 20, marginLeft: 35 }}
            />
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                marginLeft: "2%",
              }}
            >
              4.74 (4.3k)
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Ionicons
              name="location-outline"
              size={20}
              color="#072ac8"
              style={{ lineHeight: 20 }}
            />
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                marginLeft: "2%",
              }}
            >
              Ooty Tamilnadu
            </Text>
          </View>
          <Text
            style={{
              color: "#000000",
              fontFamily: fonts.POPPINS_EXTRA_LIGHT,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Hotel is located in center of Ooty With view points
          </Text>
          <View style={{ flexDirection: "row" }}></View>
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            margin: 10,
            elevation: 7,
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../images/searchimages/Ekka.jpg")}
            resizeMode="cover"
            style={{
              width: 320,
              height: 240,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
              }}
            >
              Hotel Ekka
            </Text>
            <Ionicons
              name="star"
              size={15}
              color="#072ac8"
              style={{ lineHeight: 20, marginLeft: 35 }}
            />
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                marginLeft: "2%",
              }}
            >
              4.74 (4.3k)
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Ionicons
              name="location-outline"
              size={20}
              color="#072ac8"
              style={{ lineHeight: 20 }}
            />
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                marginLeft: "2%",
              }}
            >
              Bangalore Karnataka
            </Text>
          </View>
          <Text
            style={{
              color: "#000000",
              fontFamily: fonts.POPPINS_EXTRA_LIGHT,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Hotel is located in Kudulgate nerby Silkboard Bangalore
          </Text>
          <View style={{ flexDirection: "row" }}></View>
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            margin: 10,
            elevation: 7,
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../images/searchimages/madurai.jpg")}
            resizeMode="contain"
            style={{
              width: 320,
              height: 240,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
              }}
            >
              Hotel Krishna Bhavan
            </Text>
            <Ionicons
              name="star"
              size={15}
              color="#072ac8"
              style={{ lineHeight: 20, marginLeft: 35 }}
            />
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                marginLeft: "2%",
              }}
            >
              4.74 (4.3k)
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Ionicons
              name="location-outline"
              size={20}
              color="#072ac8"
              style={{ lineHeight: 20 }}
            />
            <Text
              style={{
                color: "#000000",
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                marginLeft: "2%",
              }}
            >
              Madurai Tamilnadu
            </Text>
          </View>
          <Text
            style={{
              color: "#000000",
              fontFamily: fonts.POPPINS_EXTRA_LIGHT,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Hotel is located in center of Madurai nearby Madurai Meenachiyamman
            Temple
          </Text>
          <View style={{ flexDirection: "row" }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewDetailsModals;
