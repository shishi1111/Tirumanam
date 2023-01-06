import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import fonts from "../contants/fonts";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import datas from "../components/Datas";
import Lottie from "lottie-react-native";
const Dream = () => {
  const [star, useStar] = useState(false);
  const navigation = useNavigation();
  const [Photography, setPhotography] = useState();

  // const data = datas.filter((item) => item?.id < 5);
  // const catering = datas.filter((item) => item.id === "2" || item.id === "3");
  // console.log(catering, "catering");
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            source={require("../images/image.png")}
            resizeMode="cover"
            blurRadius={1}
          ></Image>
        </View>
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
            marginLeft: 20,
            flexDirection: "row",
            height: 40,
          }}
        >
          <Image
            style={{ width: 158, height: 40 }}
            source={require("../images/LOGOS.png")}
            resizeMode="cover"
          ></Image>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#ffffff",
                fontSize: 12,
                marginLeft: 18,
              }}
            >
              Find the best offers on our Marriage Shoppie!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{ marginLeft: 5, height: 60, width: 60, marginTop: -10 }}
            >
              <Lottie
                style={{}}
                source={require("../components/14437-simple-arrow-right.json")}
                autoPlay
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 10,
            backgroundColor: "#ffffff",
            borderBottomWidth: 0.21,
            borderBottomColor: "#808080",
            paddingBottom: 8,
          }}
        >
          <>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MarriageVendors");
                }}
              >
                <Text style={styles.cardText}>Marriage Vendor</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                navigation.navigate("MarriageVenues");
              }}
            >
              <Text style={styles.cardText}>Marriage Venues</Text>
            </TouchableOpacity>
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

            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                navigation.navigate("MarriageBeauty");
              }}
            >
              <Text style={styles.cardText}>Marriage Beauty</Text>
            </TouchableOpacity>
          </>
        </ScrollView>

        <Text
          style={{
            fontFamily: fonts.POPPINS_EXTRA_LIGHT,
            color: "#9F2B68",
            textAlignVertical: "center",
            marginTop: 20,
            marginLeft: 20,
            fontSize: 18,
          }}
        >
          Search by Category
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 20,
            flexDirection: "row",
            borderBottomWidth: 0.21,
            borderBottomColor: "#808080",
          }}
        >
          <>
            {datas.map((item, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  navigation.navigate("VegetarianDatas", {
                    data: item?.title,
                    image: item?.image,
                  });
                }}
              >
                <View style={{ flexDirection: "column", marginLeft: 25 }}>
                  <Image
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    style={{
                      width: 130,
                      height: 130,
                      borderRadius: 10,
                    }}
                  />

                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                      color: "#9F2B68",
                      textAlignVertical: "center",
                      marginTop: 5,
                      width: 130,
                    }}
                  >
                    {/* The Aesthetic{console.log(item.title, "titlee")} */}
                    {item.title}
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <Ionicons
                      name="location-outline"
                      size={15}
                      color="#9F2B68"
                      style={{
                        textAlignVertical: "center",
                      }}
                    />
                    <Text
                      style={{
                        marginLeft: 5,
                        textAlignVertical: "center",
                        color: "#000000",
                        width: 120,
                        color: "#000000",
                        fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                      }}
                    >
                      Adayar, Chennai
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </>
        </ScrollView>
        <Text
          style={{
            fontFamily: fonts.POPPINS_EXTRA_LIGHT,
            color: "#9F2B68",
            textAlignVertical: "center",
            marginTop: 10,
            marginLeft: 20,
            fontSize: 18,
          }}
        >
          Search by Vendors
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 20,
            marginBottom: 20,
            flexDirection: "row",
          }}
        >
          <View style={{ flexDirection: "column", marginLeft: 25 }}>
            <Image
              source={require("../images/image.png")}
              resizeMode="cover"
              style={{
                width: 130,
                height: 130,
                borderRadius: 10,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                color: "#9F2B68",
                textAlignVertical: "center",
                marginTop: 5,
                width: 130,
              }}
            >
              Aadayar, Chennai
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="location-outline"
                size={15}
                color="#9F2B68"
                style={{
                  textAlignVertical: "center",
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  textAlignVertical: "center",
                  color: "#000000",
                  width: 120,
                  fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                  fontSize: 14,
                }}
              >
                Pudukkottai, Pudukkottai
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Image
              source={require("../images/image2.png")}
              resizeMode="cover"
              style={{
                width: 130,
                height: 130,
                borderRadius: 10,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
            </View>
            <Text
              style={{
                color: "#9F2B68",
                textAlignVertical: "center",
                marginTop: 5,
                width: 130,
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                fontSize: 14,
              }}
            >
              Aadayar, Chennai
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="location-outline"
                size={15}
                color="#9F2B68"
                style={{
                  textAlignVertical: "center",
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  textAlignVertical: "center",
                  color: "#000000",
                  width: 120,
                  fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                  fontSize: 14,
                }}
              >
                Aadayar, Chennai
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Image
              source={require("../images/image3.png")}
              resizeMode="cover"
              style={{
                width: 130,
                height: 130,
                borderRadius: 10,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                color: "#9F2B68",
                textAlignVertical: "center",
                marginTop: 5,
                width: 130,
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                fontSize: 14,
              }}
            >
              Aadayar, Chennai
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="location-outline"
                size={15}
                color="#9F2B68"
                style={{
                  textAlignVertical: "center",
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  textAlignVertical: "center",
                  color: "#000000",
                  width: 120,
                  fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                  fontSize: 14,
                }}
              >
                Aadayar, Chennai
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Image
              source={require("../images/image.png")}
              resizeMode="cover"
              style={{
                width: 130,
                height: 130,
                borderRadius: 10,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gray"
                style={{
                  marginLeft: 5,
                  marginTop: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                color: "#9F2B68",
                textAlignVertical: "center",
                marginTop: 5,
                width: 130,
                fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                fontSize: 14,
              }}
            >
              Aadayar, Chennai
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="location-outline"
                size={15}
                color="#9F2B68"
                style={{
                  textAlignVertical: "center",
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  textAlignVertical: "center",
                  color: "#000000",
                  width: 120,
                  fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                  fontSize: 14,
                }}
              >
                Aadayar, Chennai
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",

    shadowRadius: 5,
    shadowOpacity: 0.5,
    width: 130,
    height: 40,
    minHeight: "3%",

    borderRadius: 15,
    marginLeft: 10,
    borderWidth: 0.2,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 3,
  },
  cardText: {
    color: "#C982C3",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
    fontSize: 12,
  },
});

export default Dream;
