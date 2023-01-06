import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import fonts from "../contants/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import { ScrollView } from "react-native-gesture-handler";
import {
  DropdownA,
  DropdownCom,
  DropdownS,
  DropdownSub,
  DropdownM,
  DropdownN,
} from "../components/DropdownMenu";

const Register_information = ({ navigation, route }) => {
  const Data_props = route.params.Data_props;
  // console.log(Data_props);
  // RELIGION
  const [result, setResult] = useState();
  const callbackfunDistrict = (prop) => {
    setResult(prop);
  };
  const [religion, setReligion] = useState();
  const religionCallback = (prop) => {
    setReligion(prop);
    // console.log(religion, "religion");
  };
  // COMMUNITY
  const [subResult, setSubResult] = useState();
  const callbackfunsubcom = (prop) => {
    setSubResult(prop);
  };
  const [community, setCommunity] = useState();
  const comCallback = (prop) => {
    setCommunity(prop);
    // console.log(community, "community");
  };
  const [subCommunity, setSubCommunity] = useState();
  const subComCallback = (prop) => {
    setSubCommunity(prop);
    // console.log(subCommunity, "subCommunity");
  };
  // MOTHER TONQUE
  const [mother, setMother] = useState();
  const motherCallback = (prop) => {
    setMother(prop);
    // console.log(mother, "mother");
  };
  // STAR
  const [star, setStar] = useState();
  const starCallback = (prop) => {
    setStar(prop);
    // console.log(star, "star");
  };
  const [raashi, setRaashi] = useState();
  const raashiCallback = (prop) => {
    setRaashi(prop);
    // console.log(raashi, "raashi");
  };
  const [colorchange, setColorchange] = useState(false);
  const Register_screen = {
    profile_for_1: Data_props.profile_for_1,

    Age_from_1: Data_props.Age_from_1,
    Age_to_1: Data_props.Age_to_1,
    relegion_1: Data_props.relegion_1,
    caste_1: Data_props.caste_1,
    profile_for: Data_props.profile_for,
    name: Data_props.name,
    gender: Data_props.gender,
    dob: Data_props.dob,
    mobile: Data_props.mobile,
    alternate_number: Data_props.alternate_number,
    education: Data_props.education,
    countrycode: Data_props.countrycode,
    relegion: religion,
    caste: community,
    sub_caste: subCommunity,
    star: star,
    raashi: raashi,
    mother_tongue: mother,
  };
  useEffect(() => {
    if (Object.values(Register_screen).includes(undefined)) {
      null;
    } else {
      setColorchange(false);
    }
  }, [Object.values(Data_props)]);
  // console.log(Register_screen, "hello");
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
            }}
          >
            "To love is nothing. To be loved is something. But to be loved by
            the person you love is everything"
          </Text>
        </View>
      </View>
      <ScrollView>
        <Text style={Styles.lable}>Religion</Text>
        <View style={Styles.dropcontainer}>
          <DropdownN
            callbackfunDt={callbackfunDistrict}
            religionCallback={religionCallback}
            color={
              colorchange === true && Register_screen.relegion === undefined
                ? true
                : false
            }
            colorchanged={
              Register_screen.relegion === !undefined ? false : null
            }
          />
        </View>
        <Text style={Styles.lable}>Community</Text>
        <View style={Styles.communitycontainer}>
          <DropdownCom
            result={result}
            callbackfunsub={callbackfunsubcom}
            comCallback={comCallback}
            color={
              colorchange === true && Register_screen.caste === undefined
                ? true
                : false
            }
            colorchanged={Register_screen.caste === !undefined ? false : null}
          />
          <DropdownSub
            result={subResult}
            subComCallback={subComCallback}
            color={
              colorchange === true && Register_screen.sub_caste === undefined
                ? true
                : false
            }
            colorchanged={
              Register_screen.sub_caste === !undefined ? false : null
            }
          />
        </View>
        <Text style={Styles.lable}>Mother Tongue</Text>
        <View style={Styles.dropcontainer}>
          <DropdownM
            motherCallback={motherCallback}
            color={
              colorchange === true &&
              Register_screen.mother_tongue === undefined
                ? true
                : false
            }
            colorchanged={
              Register_screen.mother_tongue === !undefined ? false : null
            }
          />
        </View>
        <Text style={Styles.lable}>Star</Text>
        <View style={Styles.communitycontainer}>
          <DropdownS
            starCallback={starCallback}
            color={
              colorchange === true && Register_screen.star === undefined
                ? true
                : false
            }
            colorchanged={Register_screen.caste === !undefined ? false : null}
          />
          <DropdownA
            raashiCallback={raashiCallback}
            color={
              colorchange === true && Register_screen.raashi === undefined
                ? true
                : false
            }
            colorchanged={Register_screen.caste === !undefined ? false : null}
          />
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
        <View style={Styles.pathcontainer}>
          {/* <View style={Styles.pathbox}>
            <TouchableOpacity
              onPress={() => {
                navigation.goback();
              }}
            >
              <Text style={Styles.pathtext}>PREV</Text>
            </TouchableOpacity>
          </View> */}
          <View style={Styles.pathbox}>
            <TouchableOpacity
              onPress={() => {
                Register_screen.raashi === undefined ||
                Register_screen.star === undefined ||
                Register_screen.sub_caste === undefined ||
                Register_screen.relegion === undefined ||
                Register_screen.caste === undefined ||
                Register_screen.mother_tongue === undefined
                  ? setColorchange(true)
                  : navigation.navigate("Register_location", {
                      Data_props: Register_screen,
                    });
                // navigation.navigate("Register_location", {
                //   Data_props: Register_screen,
                // });
              }}
            >
              <Text style={Styles.pathtext}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lable: {
    margin: 40,
    // marginTop: 200,
    marginBottom: 10,
    fontFamily: fonts.POPPINS_SEMI_BOLD,
    color: "#505050",
    // color: 'black',
  },
  inputcontainer: {
    borderWidth: 1,
    borderColor: "#875F9A",
    borderStyle: "solid",
    paddingLeft: 20,
    paddingVertical: 13,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#f7f5f7",
    justifyContent: "center",
  },
  inputsubcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    textAlignVertical: "center",
    padding: 0,
    height: 20,
    color: "black",
    flex: 1,
  },
  communitycontainer: {
    marginHorizontal: 20,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },
  pathcontainer: {
    marginHorizontal: 20,
    marginVertical: 30,
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
    fontFamily: fonts.POPPINS_SEMI_BOLD,
    color: "#875F9A",
  },
  dropcontainer: {
    marginHorizontal: 20,
  },
});

export default Register_information;
