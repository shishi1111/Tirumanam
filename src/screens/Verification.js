import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import fonts from "../contants/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import Lottie from "lottie-react-native";
const Verification = () => {
  const [data, setdata] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    fetch(`https://randomuser.me/api/?gender=female&results=20`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.results[0].picture.medium, "responsec");
        setdata(responseJson.results);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: fonts.POPPINS_MEDIUM,
            textAlignVertical: "center",
            marginTop: 20,
          }}
        >
          Your Profile is pending verification!
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              borderWidth: 1,
              borderColor: "#875F9A",
              textAlign: "center",
              backgroundColor: "#875F9A",
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontFamily: fonts.POPPINS_MEDIUM,
              color: "white",
              textAlignVertical: "center",
              borderRadius: 20,
              marginTop: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            Verify Now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              textAlignVertical: "center",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "black",
              height: 60,
              width: 360,
              marginTop: 10,
              marginLeft: 15,
              borderRadius: 10,
            }}
          >
            <Entypo
              name="megaphone"
              size={30}
              color="black"
              style={{
                textAlignVertical: "center",
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                textAlignVertical: "center",
                color: "black",
                textAlign: "auto",
                fontFamily: fonts.POPPINS_REGULAR,
              }}
            >
              Lakhs of Indians have found their {"\n"} Perfect Match on
              Tirumanam.Online
            </Text>
            <AntDesign
              name="right"
              size={15}
              color="black"
              style={{
                textAlignVertical: "center",
                marginRight: 10,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            textAlignVertical: "center",
            borderWidth: 1,
            borderColor: "#bcb9c4",
            borderStyle: "solid",
            borderColor: "#444345",
            height: 160,
            width: 360,
            marginLeft: 15,
            borderRadius: 10,
            marginTop: 15,
            backgroundColor: "#444345",
          }}
        >
          <View
            style={{
              height: 158,
              width: 100,
              backgroundColor: "#bcb9c4",
              borderBottomEndRadius: 75,
              borderTopEndRadius: 75,
              borderBottomStartRadius: 10,
              borderTopStartRadius: 10,
            }}
          >
            <Image
              source={require("../images/resume.png")}
              resizeMode="cover"
              style={{
                width: 100,
                height: 100,
                marginTop: 30,
              }}
            />
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              width: 250,
              marginTop: 20,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: fonts.POPPINS_MEDIUM,
                textAlign: "center",
              }}
            >
              As a free member , your profile is getting less view from
              potential matches.
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  border: 1,
                  borderColor: "white",
                  backgroundColor: "#875F9A",
                  marginTop: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 30,
                  width: 230,
                  marginLeft: 10,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Upgrade to highlight your profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          backgroundColor: "#f5feff",
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            marginLeft: 15,
            fontFamily: fonts.POPPINS_MEDIUM,
            color: "#9F2B68",
          }}
        >
          Your Daily Recommendation for 28th Sep
        </Text>
        <View View style={{ flexDirection: "row", marginTop: 20 }}>
          <ScrollView
            horizontal={true}
            style={{ marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            {data.map((item, i) => (
              <>
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    navigation.navigate("Imageview", {
                      image: item.picture.large,
                    });
                  }}
                >
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      marginLeft: 15,
                      borderRadius: 80,
                    }}
                    source={{ uri: item.picture.large }}
                    resizeMode="cover"
                  ></Image>
                  <Text
                    style={{
                      maxWidth: 80,
                      marginLeft: 25,
                      alignItems: "center",
                      color: "#9F2B68",
                      marginTop: 5,
                    }}
                  >{`${item.name.first} ${item.name.last}`}</Text>
                </TouchableOpacity>
              </>
            ))}
            <TouchableOpacity>
              <Icon
                name="rightcircleo"
                size={40}
                color={"#875F9A"}
                style={{ marginTop: 20, marginLeft: 20 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 15,
                  fontFamily: fonts.POPPINS_SEMI_BOLD,
                  color: "#5A5A5A",
                }}
              >
                See All
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Text
          style={{
            marginTop: 30,
            fontFamily: fonts.POPPINS_REGULAR,
            color: "black",
            marginLeft: 15,
          }}
        >
          Time left to view these profile - 12:42:31
        </Text>
      </View>
      <View style={{ marginTop: 20, backgroundColor: "#f8edeb" }}>
        <Text
          style={{
            textAlign: "center",
            color: "black",
            fontFamily: fonts.POPPINS_MEDIUM,
          }}
        >
          The best way to find your better {"\n"} half faster is by upgrading
        </Text>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              textAlignVertical: "center",
              borderWidth: 1,
              borderColor: "#bcb9c4",
              borderStyle: "solid",
              borderColor: "#444345",
              height: 160,
              width: 360,
              marginLeft: 15,
              borderRadius: 10,
              marginTop: 15,
              backgroundColor: "#444345",
            }}
          >
            <View
              style={{
                height: 158,
                width: 110,
                backgroundColor: "#ffffff",
                borderBottomEndRadius: 15,
                borderTopEndRadius: 5,
                borderBottomStartRadius: 10,
                borderTopStartRadius: 10,
              }}
            >
              <Image
                source={require("../images/Upgrade1.png")}
                resizeMode="cover"
                style={{
                  width: 105,
                  height: 150,
                  marginTop: 5,
                  marginLeft: 1,
                }}
              />
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                width: 250,
                marginTop: 30,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: fonts.POPPINS_MEDIUM,
                  textAlign: "center",
                }}
              >
                Get an exclusive Rs. 1100 off on 3 month Gold Pack
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    border: 1,
                    borderColor: "white",
                    backgroundColor: "#875F9A",
                    marginTop: 30,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderRadius: 30,
                    width: 150,
                    marginLeft: 40,
                    color: "white",
                    fontFamily: fonts.POPPINS_MEDIUM,
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontSize: 14,
                  }}
                >
                  Upgrade Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            color: "black",
            fontFamily: fonts.POPPINS_REGULAR,
          }}
        >
          Offer expires on 29 Sep 2022
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            marginLeft: 15,
            fontFamily: fonts.POPPINS_MEDIUM,
            color: "#9F2B68",
          }}
        >
          Explore tirumanam.online
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 20,
            marginRight: 15,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  height: 100,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: "#5e60ce",
                  borderColor: "#5e60ce",
                }}
              >
                <FontAwesome
                  name="handshake-o"
                  size={30}
                  color="#ffffff"
                  style={{ textAlign: "center", marginTop: 35 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  color: "#9F2B68",
                  textAlign: "center",
                }}
              >
                Assisted {"\n"} Service
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  height: 100,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: "#a663cc",
                  borderColor: "#a663cc",
                }}
              >
                <MaterialCommunityIcons
                  name="security"
                  size={35}
                  color="#ffffff"
                  style={{ textAlign: "center", marginTop: 30 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  color: "#9F2B68",
                  textAlign: "center",
                }}
              >
                Safety & {"\n"} Privacy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  height: 100,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: "#06d6a0",
                  borderColor: "#06d6a0",
                }}
              >
                <Fontisto
                  name="shopping-store"
                  size={30}
                  color="#ffffff"
                  style={{ textAlign: "center", marginTop: 33 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  color: "#9F2B68",
                  textAlign: "center",
                }}
              >
                Retail {"\n"} Stores
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  height: 100,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: "#00afb9",
                  borderColor: "#00afb9",
                }}
              >
                <MaterialCommunityIcons
                  name="crown-outline"
                  size={45}
                  color="#ffffff"
                  style={{ textAlign: "center", marginTop: 25 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  color: "#9F2B68",
                  textAlign: "center",
                }}
              >
                Premium {"\n"} Membership
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  height: 100,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: "#fb6f92",
                  borderColor: "#fb6f92",
                }}
              >
                <MaterialCommunityIcons
                  name="town-hall"
                  size={35}
                  color="#ffffff"
                  style={{ textAlign: "center", marginTop: 30 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  color: "#9F2B68",
                  textAlign: "center",
                }}
              >
                Temple.Online
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  height: 100,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: "#00afb9",
                  borderColor: "#00afb9",
                }}
              >
                <Fontisto
                  name="shopping-bag-1"
                  size={35}
                  color="#ffffff"
                  style={{ textAlign: "center", marginTop: 30 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  color: "#9F2B68",
                  textAlign: "center",
                }}
              >
                Wedding {"\n"} Services
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  height: 100,
                  marginLeft: 15,
                  borderRadius: 10,
                  backgroundColor: "#5e60ce",
                  borderColor: "#5e60ce",
                }}
              >
                <Ionicons
                  name="help-buoy-outline"
                  size={35}
                  color="#ffffff"
                  style={{ textAlign: "center", marginTop: 30 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  color: "#9F2B68",
                  textAlign: "center",
                }}
              >
                Help & {"\n"} Support
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Verification;
