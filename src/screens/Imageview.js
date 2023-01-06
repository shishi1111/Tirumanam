import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Imageview = ({ route }) => {
  const navigation = useNavigation();
  const image = route.params.image;
  console.log(image, "hallo image");
  return (
    <View>
      <Image source={{ uri: image }} style={{ height: "100%" }}></Image>

      <Icon
        name="closecircle"
        size={30}
        onPress={() => navigation.goBack(null, { data: image })}
        style={{
          display: "flex",
          position: "absolute",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginLeft: 340,
          marginTop: 20,
        }}
        color="#ffffff"
      />
    </View>
  );
};

export default Imageview;

const styles = StyleSheet.create({});
