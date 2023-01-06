import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon5 from "react-native-vector-icons/FontAwesome";
import fonts from "../contants/fonts";
import ImagePicker from "react-native-image-crop-picker";
import { useNavigation } from "@react-navigation/native";

// const DATA = Array.from({ length: 30 }).map((_, index) => ({ id: index }));
const maxHeaderHeight = 150;
const minHeaderHeight = 50;
const AnimatedProfileImage = ({ route }) => {
  const datass = route?.params.data;
  console.log(datass, "datasss");
  const navigation = useNavigation();
  const [data, setData] = useState(false);
  const [image, setImage] = useState();

  const SubmitImage = () => {
    ImagePicker.openPicker({
      path: "my-file-path.jpg",
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image.path, "path");
      setImage(image.path);
    });
  };

  return (
    // <ScrollView
    //   maxHeaderHeight={maxHeaderHeight}
    //   minHeaderHeight={minHeaderHeight}
    //   AnimationHeaderComponent={<View style={styles.animationHeader} />}
    // >
    <View>
      <View
        style={{
          backgroundColor: "#ffffff",
          borderWidth: 2,
          borderColor: "#875F9A",
          borderRadius: 4,
          paddingLeft: 8,
        }}
      >
        <View>
          <View style={[styles.card, styles.elevation]}>
            <View style={{ flexDirection: "row" }}>
              <View style={{}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Imageview", { image: image });
                  }}
                >
                  <Image
                    style={{
                      width: 120,
                      height: 120,
                      marginLeft: 30,
                      marginTop: 20,
                      borderRadius: 25,
                      borderWidth: 8,
                    }}
                    source={
                      image ? { uri: image } : require("../images/image.png")
                    }
                  ></Image>
                </TouchableOpacity>
                <View style={{ marginLeft: 30, position: "absolute" }}>
                  {!image ? (
                    <>
                      <TouchableOpacity onPress={() => SubmitImage()}>
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            marginLeft: 100,

                            marginTop: 120,
                          }}
                          source={require("../images/icon.png")}
                        ></Image>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <></>
                  )}
                </View>
              </View>

              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.heading}>Rahul s</Text>
                  <Icon5
                    name="circle"
                    size={14}
                    style={{ marginLeft: 10, marginTop: 56 }}
                    color="#04cc82"
                  />
                </View>
                <Text style={styles.age}> 28</Text>
                <Text style={styles.profession}> Software Engineer</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

export default AnimatedProfileImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listItemContainer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
  },
  listItemLabel: {
    color: "#1c1b1e",
    fontSize: 14,
  },
  listItemTitle: {
    color: "black",
    fontSize: 18,
  },
  sectionHeaderContainer: {
    height: 30,
    backgroundColor: "#8e8e93",
    justifyContent: "center",
    paddingHorizontal: 15,
    display: "none",
  },
  sectionHeaderLabel: {
    color: "#fff",
  },
  input: {
    margin: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E6E6E3",
    borderRadius: 10,
    fontSize: 16,
  },
  age: {
    fontSize: 15,
    fontWeight: "600",

    fontFamily: fonts.POPPINS_BOLD,
    color: "#18134b",

    marginLeft: 20,
  },
  profession: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 20,
    fontFamily: fonts.POPPINS_BOLD,
    color: "#18134b",

    marginLeft: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",

    fontFamily: fonts.POPPINS_BOLD,
    color: "#18134b",
    marginTop: 50,
    marginLeft: 20,
  },
  animationHeader: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
  },
});
