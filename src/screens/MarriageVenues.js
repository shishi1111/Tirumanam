import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import fonts from "../contants/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import VenuesDatas from "../components/VenuesDatas";

const MarriageVenues = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  useEffect(() => {
    setFilteredDataSource(VenuesDatas);
    setMasterDataSource(VenuesDatas);
  }, []);
  const searchFilterFunction = (text) => {
    console.log(text, "hello");
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        console.log(item, "item");
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const ItemView = ({ item }) => {
    // console.log(item, " again");
    return (
      // Flat List Item
      <>
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#ffffff",
            marginBottom: item?.title === "Wedding Elephant" ? 80 : 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("VegetarianDatas", {
                data: item?.title,
                image: item?.image,
              });
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={{ uri: item.image }}
                resizeMode="cover"
                style={{
                  height: 80,
                  width: 80,
                  marginVertical: 20,
                  marginLeft: 20,
                  borderRadius: 10,
                  opacity: 0.7,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 20,
                    color: "#023047",
                    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                    fontSize: 20,
                  }}
                >
                  {item.title.toUpperCase()}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Entypo
                    name="star"
                    size={16}
                    color="#c36f09"
                    style={{ marginLeft: 10, marginTop: 5 }}
                  />
                  <Text
                    style={{
                      color: "#023047",
                      marginTop: 5,
                      marginLeft: 5,
                      fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                      fontSize: 16,
                    }}
                  >
                    {item.rating}
                  </Text>
                  <Entypo
                    name="dot-single"
                    size={32}
                    color="#072ac8"
                    style={{ marginLeft: 0, lineHeight: 30 }}
                  />
                  <FontAwesome
                    name="rupee"
                    size={14}
                    color="#c36f09"
                    style={{ lineHeight: 30 }}
                  />
                  <Text
                    style={{
                      marginLeft: 5,
                      color: "#023047",
                      lineHeight: 30,
                      fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                      fontSize: 16,
                    }}
                  >
                    {item.amound}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Entypo
                    name="dot-single"
                    size={32}
                    color="#072ac8"
                    style={{ marginLeft: 3, marginTop: 1, lineHeight: 25 }}
                  />
                  <Text
                    style={{
                      color: "#023047",
                      fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                      fontSize: 16,
                      width: 200,
                    }}
                  >
                    {item.body}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  return (
    <SafeAreaView
      style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }}
    >
      <View
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#ffffff",
          borderWidth: 0.2,
        }}
      >
        <SearchBar
          searchIcon={() => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={30} color="#000000" />
            </TouchableOpacity>
          )}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          placeholder="Search Category.."
          style={{
            fontFamily: fonts.POPPINS_EXTRA_LIGHT,
            borderColor: "#ffffff",
            borderWidth: 0.2,
          }}
          value={search}
          containerStyle={{
            backgroundColor: "#ffffff",
            borderColor: "#ffffff",
            borderWidth: 0.2,

            backgroundColor: "white",
            borderWidth: 0, //no effect
            shadowColor: "white", //no effect
            borderBottomColor: "#000000",
            borderBottomWidth: 0.2,

            borderTopColor: "transparent",
          }}
          inputContainerStyle={{
            backgroundColor: "#ffffff",
            borderColor: "#ffffff",
            borderWidth: 0.2,
          }}
          inputStyle={{
            color: "#000000",
            borderColor: "#ffffff",
            borderWidth: 0.2,
          }}
        />
      </View>
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        style={{ height: "100%", backgroundColor: "#ffffff" }}
      />
    </SafeAreaView>
  );
};

export default MarriageVenues;
