// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import fonts from "../contants/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "react-native-elements";
import datas from "../components/Datas";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ModalSearch = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [color, setColor] = useState(false);

  useEffect(() => {
    setFilteredDataSource(datas);
    setMasterDataSource(datas);
    console.log(masterDataSource, "hello");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(datas, "hello");
        console.log(responseJson, "hello");
      })
      .catch((error) => {
        console.error(error);
      });
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
            backgroundColor: item?.id % 2 === 0 ? "#EEEEEE" : "#ffffff",
            marginBottom: item?.title === "Train Ride" ? 80 : 0,
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
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 20,
                    color: "#023047",
                    fontFamily: fonts.POPPINS_MEDIUM,
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
                      fontFamily: fonts.POPPINS_REGULAR,
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
                      fontFamily: fonts.POPPINS_REGULAR,
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
                      fontFamily: fonts.POPPINS_REGULAR,
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

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#ffffff" }}>
        <SearchBar
          searchIcon={() => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="close" size={30} />
            </TouchableOpacity>
          )}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          placeholder="Type Here..."
          value={search}
          containerStyle={{ backgroundColor: "#edede9" }}
          inputContainerStyle={{ backgroundColor: "#ffffff" }}
          inputStyle={{ color: "#000000" }}
        />
      </View>
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
};

export default ModalSearch;
