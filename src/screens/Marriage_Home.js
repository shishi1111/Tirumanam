import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import fonts from "../contants/fonts";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
const Marriage_Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <View style={{ margin: 5 }}>
        <Image
          style={{
            width: "100%",
            height: 60,
            position: "absolute",
            opacity: 0.6,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.05,
            shadowRadius: 1.84,

            elevation: 20,
            backgroundColor: "#ffffff",

            overflow: "hidden",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          source={require("../images/banner.png")}
          resizeMode="cover"
          blurRadius={1}
        ></Image>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons name="reorder-three" size={35} color="#000" />
        </TouchableOpacity> */}
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home_Screen")}>
            <View style={{ height: 60, width: 60, marginTop: -7 }}>
              <Lottie
                style={{}}
                source={require("../components/14436-simplearrow-left.json")}
                autoPlay
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: fonts.POPPINS_REGULAR,
              color: "#ffffff",
              fontSize: 12,

              width: 160,
            }}
          >
            Find the best partners on tirumanam.online
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
      </View>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.05,
          shadowRadius: 1.84,

          elevation: 20,
          backgroundColor: "rgba(255,255,355,0.8)",
          width: 350,
          borderRadius: 10,
          marginLeft: 20,
          textAlign: "center",
          justifyContent: "center",
          textAlignVertical: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: fonts.POPPINS_REGULAR,
            color: "#000000",
            fontSize: 18,
            textAlign: "center",
            justifyContent: "center",
            textAlignVertical: "center",
          }}
        >
          Find the wedding vendors with thousands of trusted reviews
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("MarriageVendors");
          }}
        >
          <Text style={styles.cardText}>Marriage Vendor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("MarriageVenues");
          }}
        >
          <Text style={styles.cardText}>Marriage Venues</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("MarriageDigital");
          }}
        >
          <Text style={styles.cardText}>Marriage Digital</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("MarriageSpecial");
          }}
        >
          <Text style={styles.cardText}>Marriage Special</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("MarriageBeauty");
          }}
        >
          <Text style={styles.cardText}>Marriage Beauty</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Marriage_Home;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    elevation: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    width: "47%",
    minHeight: "3%",
    maxHeight: "100%",
    paddingVertical: "2%",

    color: "#000000",
  },
  cardText: {
    color: "#C982C3",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: fonts.POPPINS_MEDIUM,
  },
});
