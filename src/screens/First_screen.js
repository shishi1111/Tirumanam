import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";
import fonts from "../contants/fonts";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  DropdownFifth,
  DropdownFirst,
  DropdownFour,
  DropdownSecond,
  DropdownThird,
} from "../components/DropdownMenu";
import InvertibleScrollView from "react-native-invertible-scroll-view";
import { useEffect } from "react";

export const Context = React.createContext();

const First_screen = ({ navigation }) => {
  // DROPDOWN FIRST
  const [first, setFirst] = useState();
  const [colorchange, setColorchange] = useState(false);
  const firstCallback = (prop) => {
    setFirst(prop);
    // console.log(first, "first");
  };

  // DROPDOWN SECOND
  const [second, setSecond] = useState();

  const secondCallback = (prop) => {
    setSecond(prop);
    // console.log(second, "second");
  };
  // DROPDOWN THIRD
  const [third, setThird] = useState();
  const thirdCallback = (prop) => {
    setThird(prop);
    // console.log(third, "third");
  };
  // DROPDOWN FOUR
  const [result, setResult] = useState();
  const callbackfunDistrict = (para) => {
    setResult(para);
  };
  const [four, setFour] = useState();
  const fourCallback = (prop) => {
    setFour(prop);
    // console.log(four, "four");
  };
  // DROPDOWN FIFTH
  const [fifth, setFifth] = useState();
  const fifthCallback = (prop) => {
    setFifth(prop);
    // console.log(fifth, "fifth");
  };
  const Data_props = {
    profile_for: first,

    Age_from: second,
    Age_to: third,
    relegion: four,
    caste: fifth,
  };

  // console.log(Object.values(Data_props).includes(undefined), "hello");
  useEffect(() => {
    if (Object.values(Data_props).includes(undefined)) {
      null;
    } else {
      setColorchange(false);
    }
  }, [Object.values(Data_props)]);
  const scrollViewRef = React.useRef();

  const scrollAnimation = useRef(new Animated.Value(0));
  const contentWidth = 20;
  const contentHeight = 40;
  return (
    <View style={Styles.container}>
      <View
        style={{
          borderBottomLeftRadius: 8,
          borderBottomStartRadius: 8,
          borderWidth: 1,

          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowColor: "#202020",
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 5,
          backgroundColor: "#FFFFFF50",
        }}
      >
        <ScrollView
          repeatSpacer={50}
          marqueeDelay={1000}
          showsHorizontalScrollIndicator={false}
          duration={3000}
          horizontal={true}
          ref={scrollViewRef}
          nestedScrollEnabled={true}
          onContentSizeChange={(contentWidth, contentHeight) => {
            scrollViewRef.current?.scrollTo({
              y: 500,
              animated: true,
            });
          }}
          onContentSizeChangs={(contentWidth, contentHeight) => {
            scrollViewRef.current?.scrollTo({
              x: 500,
              animated: true,
            });
          }}
          //
        >
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 2,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              backgroundColor: "#FFFFFF",
            }}
            source={require("../images/MARRIAGE2-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={require("../images/marriage1-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={require("../images/MARRIAGE2-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={require("../images/marriage1-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={require("../images/MARRIAGE2-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowColor: "#202020",
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 5,
            }}
            source={require("../images/marriage1-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              backgroundColor: "#FFFFFF50",
            }}
            source={require("../images/MARRIAGE2-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={require("../images/marriage1-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={require("../images/MARRIAGE2-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={require("../images/marriage1-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={require("../images/MARRIAGE2-modified.png")}
          ></Image>
          <Image
            style={{
              width: 80,
              height: 90,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowColor: "#202020",
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 5,
            }}
            source={require("../images/marriage1-modified.png")}
          ></Image>
        </ScrollView>
        <Image
          style={{
            width: "70%",
            height: 60,
            position: "absolute",
            backgroundColor: "ffffff",
            marginLeft: 50,
            borderColor: "000000",
            borderWidth: 10,
            marginBottom: 120,
            shadowOpacity: 0.8,
            opacity: 0.8,
            borderRadius: 8,
            marginTop: 28,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,

            elevation: 17,
          }}
          source={require("../images/white.png")}
        />

        <Image
          style={{
            width: "70%",
            height: 60,
            position: "absolute",
            backgroundColor: "ffffff",
            marginLeft: 50,
            borderColor: "000000",
            borderWidth: 10,
            marginBottom: 120,
            marginTop: 28,
          }}
          source={require("../images/ConvertedLogo.png")}
        />
      </View>

      {/* <ScrollView> */}
      <View style={{ marginTop: 50 }}>
        <View style={Styles.dropcontainer}>
          <DropdownFirst
            firstCallback={firstCallback}
            color={
              colorchange === true && Data_props.profile_for === undefined
                ? true
                : false
            }
            colorchanged={Data_props.profile_for === !undefined ? false : null}
          />
        </View>
        <View style={Styles.dropcontainer}>
          <DropdownSecond
            secondCallback={secondCallback}
            color={
              colorchange === true && Data_props.Age_from === undefined
                ? true
                : false
            }
            colorchanged={Data_props.Age_from === !undefined ? false : null}
          />
        </View>
        <View style={Styles.dropcontainer}>
          <DropdownThird
            thirdCallback={thirdCallback}
            color={
              colorchange === true && Data_props.Age_to === undefined
                ? true
                : false
            }
            colorchanged={Data_props.Age_to === !undefined ? false : null}
          />
        </View>
        <View style={Styles.dropcontainer}>
          <DropdownFour
            callbackfunDt={callbackfunDistrict}
            fourCallback={fourCallback}
            color={
              colorchange === true && Data_props.relegion === undefined
                ? true
                : false
            }
            colorchanged={Data_props.relegion === !undefined ? false : null}
          />
        </View>
        <View style={Styles.dropcontainer}>
          <DropdownFifth
            result={result}
            fifthCallback={fifthCallback}
            color={
              colorchange === true && Data_props.caste === undefined
                ? true
                : false
            }
            colorchanged={Data_props.relegion === !undefined ? false : null}
          />
        </View>
      </View>

      <View style={Styles.linkbox}>
        <TouchableOpacity
          onPress={async () => {
            Data_props.profile_for === undefined ||
            Data_props.Age_from === undefined ||
            Data_props.Age_to === undefined ||
            Data_props.caste === undefined ||
            Data_props.relegion === undefined
              ? setColorchange(true)
              : navigation.navigate("Register_screen", {
                  Data_props: Data_props,
                });
            // navigation.navigate("Register_screen", {
            //   Data_props: Data_props,
            // });
          }}
        >
          <Text style={Styles.linkpath}>Next</Text>
        </TouchableOpacity>
      </View>
      {colorchange === true && (
        <Text
          style={{
            fontFamily: fonts.POPPINS_REGULAR,
            fontSize: 18,
            color: "#D7A4A3",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Please select all fields
        </Text>
      )}
      {/* </ScrollView> */}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // color: 'white',
    backgroundColor: "white",
  },
  navcontainer: {
    marginHorizontal: 20,
    // justifyContent: "space-between",
    marginVertical: 25,
    // backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  linkbox: {
    borderWidth: 1,
    // borderColor: "#875F9A",
    borderStyle: "solid",
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 300,
    textAlignVertical: "center",
    borderRadius: 10,
    // backgroundColor: '#f7f5f7',
    marginTop: 20,
    marginLeft: 45,
    marginHorizontal: 20,
    // display:"flex"
  },
  linkpath: {
    textAlign: "center",
    color: "#875F9A",
    fontFamily: fonts.POPPINS_MEDIUM,
    fontSize: 16,
  },
  dropcontainer: {},
});

export default First_screen;
