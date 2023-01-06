import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import fonts from "../contants/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import {
  DropdownCountry,
  DropdownB,
  DropdownC,
  DropdownD,
} from "../components/DropdownMenu";

const Register_location = ({ navigation, route }) => {
  const Register_screen = route.params.Data_props;
  console.log(Register_screen, "hello");
  const [colorchange, setColorchange] = useState(false);
  // FAMILY LOCATIONS
  const [stResult, setStResult] = useState([]);
  const callbackfunState = (prop) => {
    setStResult(prop);
    // console.log(stResult, "stResult");
  };
  const [country, setCountry] = useState();
  const countryCallback = (prop) => {
    setCountry(prop);
    // console.log(country, "country");
  };
  const [ctResult, setCtResult] = useState([]);
  const callbackfunCity = (prop) => {
    setCtResult(prop);
  };
  const [state, setState] = useState();
  const stateCallback = (prop) => {
    setState(prop);
    // console.log(state, "state");
  };
  // DISTRICT
  const [city, setCity] = useState();
  const cityCallback = (prop) => {
    setCity(prop);
    // console.log(city, "city");
  };
  const Register_Data = {
    family_country: country,
    family_state: state,
    family_city: city,
    family_district: "hello",
  };
  useEffect(() => {
    if (Object.values(Register_Data).includes(undefined)) {
      null;
    } else {
      setColorchange(false);
    }
  }, [Object.values(Register_Data)]);
  return (
    <View style={Styles.container}>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          backgroundColor: "#ffffff",
          width: 400,
          height: 51,
          position: "absolute",
        }}
      >
        <Image
          style={{ width: 400 }}
          source={require("../images/mainheader.png")}
          resizeMode={"cover"}
        ></Image>
      </View>
      <View style={{ flexDirection: "row" }}>
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
            marginLeft: 10,
            flexDirection: "row",
            height: 40,
          }}
        >
          <Image
            style={{ width: 158, height: 40 }}
            source={require("../images/LOGOS.png")}
            resizeMode="cover"
          ></Image>
          <Text
            style={{
              color: "#F9F6EE",
              fontFamily: fonts.POPPINS_MEDIUM,
              fontSize: 10,
              textAlign: "center",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              width: 220,
              marginTop: 5,
            }}
          >
            "Love is not weakness. It is strong. Only the sacrament of marriage
            can contain it."
          </Text>
        </View>
      </View>

      <Text style={[Styles.lable, { marginTop: 150 }]}>Family Location</Text>
      <View style={Styles.locationcontainer}>
        <DropdownCountry
          callbackfunst={callbackfunState}
          countryCallback={countryCallback}
          color={
            colorchange === true && Register_Data.family_country === undefined
              ? true
              : false
          }
          colorchanged={
            Register_Data.family_country === !undefined ? false : null
          }
        />

        <DropdownB
          result={stResult}
          callbackfunct={callbackfunCity}
          stateCallback={stateCallback}
          color={
            colorchange === true && Register_Data.family_state === undefined
              ? true
              : false
          }
          colorchanged={
            Register_Data.family_state === !undefined ? false : null
          }
        />
      </View>
      <Text style={Styles.lable}></Text>
      <View style={[Styles.locationcontainer, { marginLeft: 120 }]}>
        {/* <DropdownC
        // color={
        //   colorchange === true && Register_Data.family_country === undefined
        //     ? true
        //     : false
        // }
        // colorchanged={
        //   Register_Data.family_country === !undefined ? false : null
        // }
        /> */}

        <DropdownD
          result={ctResult}
          cityCallback={cityCallback}
          color={
            colorchange === true && Register_Data.family_city === undefined
              ? true
              : false
          }
          colorchanged={Register_Data.family_city === !undefined ? false : null}
        />
      </View>
      {colorchange === true && (
        <Text
          style={{
            fontFamily: fonts.POPPINS_REGULAR,
            fontSize: 18,
            color: "#D7A4A3",
            textAlign: "center",
            marginTop: 26,
          }}
        >
          Please select all fields
        </Text>
      )}
      <View style={Styles.pathcontainer}>
        {/* <View style={Styles.pathbox}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register_information");
            }}
          >
            <Text style={Styles.pathtext}>PREV</Text>
          </TouchableOpacity>
        </View> */}

        <View style={Styles.pathbox}>
          <TouchableOpacity
            onPress={() => {
              Object.values(Register_Data).includes(undefined)
                ? setColorchange(true)
                : navigation.navigate("Register_lastscreen", {
                    Register_screen: Register_screen,
                    Register_Data: Register_Data,
                  });
              // navigation.navigate("Register_lastscreen", {
              //   Register_screen: Register_screen,
              //   Register_Data: Register_Data,
              // });
            }}
          >
            <Text style={Styles.pathtext}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lable: {
    margin: 30,
    // marginTop: 200,
    marginBottom: 10,
    fontFamily: fonts.POPPINS_SEMI_BOLD,
    color: "#505050",
    // color: 'black',
  },
  locationcontainer: {
    marginHorizontal: 20,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },
  pathcontainer: {
    marginHorizontal: 20,
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    textAlignVertical: "center",
  },
  pathbox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#875F9A",
    width: 130,
    height: 40,
    backgroundColor: "#f7f5f7",
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    textAlignVertical: "center",
    marginRight: 20,
    marginLeft: 20,
  },
  pathtext: {
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 6,
    fontFamily: fonts.POPPINS_MEDIUM,
    color: "#875F9A",
  },
});

export default Register_location;
