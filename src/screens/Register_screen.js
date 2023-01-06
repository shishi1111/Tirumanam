import React, { useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import fonts from "../contants/fonts";
import { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  DropdownMenu,
  DropdownDosh,
  DropdownCode,
  Dates,
} from "../components/DropdownMenu";
import { color } from "react-native-reanimated";
import { set } from "immer/dist/internal";
// import  DropdownDosh  from "../components/DropdownMenu";
// import CountryPicker from "react-native-country-codes-picker";

const Register_screen = ({ navigation, route }) => {
  const Data_props = route.params && route.params?.Data_props;
  // console.log(Data_props, "dataprops");
  // function CountryCodePicker() {
  //   const [show, setShow] = useState(false);
  //   const [countryCode, setCountryCode] = useState('');

  //   return (
  //     <View style={{width: 300, height: 100}}>
  //       <TouchableOpacity
  //         onPress={() => setShow(true)}
  //         style={{
  //             width: '80%',
  //             height: 60,
  //             backgroundColor: 'black',
  //             padding: 10,
  //         }}
  //       >
  //         <Text style={{
  //             color: 'white',
  //             fontSize: 20
  //         }}>
  //             {countryCode}
  //         </Text>
  //       </TouchableOpacity>

  //       // For showing picker just put show state to show prop
  //       <CountryPicker
  //         show={show}
  //         // when picker button press you will get the country object with dial code
  //         pickerButtonOnPress={(item) => {
  //           setCountryCode(item.dial_code);
  //           setShow(false);
  //         }}
  //       />
  //     </View>
  //   );
  // }

  const [selectProfile, setselectProfile] = useState("");
  // console.log(selectProfile);

  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [gender, setGender] = useState("");

  const [radio, setRadio] = useState(false);
  const [radios, setRadios] = useState(false);
  const [colorchange, setColorchange] = useState(false);
  // console.log(gender);
  const genderMale = () => {
    setMale(true);
    setFemale(false);
    setGender("male");
  };
  const genderFemale = () => {
    setMale(false);
    setFemale(true);
    setGender("female");
  };

  const handlerRadio = () => {
    setRadio(true);
    setRadios(false);
  };
  const handlerNum = () => {
    setRadio(false);
    setRadios(true);
  };
  // PROFILE
  const [profile, setprofile] = useState();
  const profileCallBack = (prop) => {
    setprofile(prop);
  };
  function Phonenumber(text) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // console.log(regex.test(text));
    if (regex.test(text) === true) {
      setNumber(text);
      // console.log(text);
    } else {
      setNumber(undefined);
    }
  }
  function Alternate_Phonenumber(text) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (regex.test(text) === true) {
      setAlternate(text);
      // console.log(text);
    } else {
      setAlternate(undefined);
    }
  }
  // NAME
  const [name, setName] = useState();
  // DATE OF BIRTH
  const [date, setDate] = useState(undefined);
  const [slice, setSlice] = useState();
  const dateCallBack = (prop) => {
    setDate(prop);
    // console.log(date, "date");
  };
  // MOBILE NUMBER
  const [code, setCode] = useState();
  const codeCallBack = (prop) => {
    setCode(prop.slice(0, 5));
    // console.log(code, "code");
  };
  const [number, setNumber] = useState();
  // console.log(number, "number");

  // ALTERNATE NUMBER
  const [alternate, setAlternate] = useState();
  // console.log(alternate, "alternate");

  // HIGHEST EDUCATION
  const [education, setEducation] = useState();
  const educationCallBack = (prop) => {
    setEducation(prop);
  };

  // Validation
  const Register_screen = {
    profile_for_1: Data_props.profile_for,

    Age_from_1: Data_props.Age_from,
    Age_to_1: Data_props.Age_to,
    relegion_1: Data_props.relegion,
    caste_1: Data_props.caste,
    profile_for: profile,
    name: name,
    gender: gender,
    dob:
      date?.slice(0, 4) === "2024" ||
      date?.slice(0, 4) === "2023" ||
      date?.slice(0, 4) === "2025" ||
      date?.slice(0, 4) === "2022" ||
      date?.slice(0, 4) === "2021" ||
      date?.slice(0, 4) === "2020" ||
      date?.slice(0, 4) === "2019" ||
      date?.slice(0, 4) === "2018" ||
      date?.slice(0, 4) === "2017" ||
      date?.slice(0, 4) === "2016" ||
      date?.slice(0, 4) === "2015"
        ? undefined
        : date,
    mobile: number,
    alternate_number: alternate,
    education: education,
    countrycode: code ? code : "91",
  };
  // console.log(Register_screen);
  // console.log(date?.slice(0, 4));
  useEffect(() => {
    if (Object.values(Register_screen).includes(undefined)) {
      null;
    } else {
      setColorchange(false);
    }
  }, [Object.values(Data_props)]);
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
            "A perfect marriage is just two imperfect people who refuse to give
            up on each other"
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={Styles.semicontainer}>
          <Text style={Styles.lable}>Profile For</Text>
          <View style={Styles.dropcontainer}>
            <DropdownMenu
              profileCallBack={profileCallBack}
              color={
                colorchange === true &&
                Register_screen.profile_for === undefined
                  ? true
                  : false
              }
              colorchanged={
                Register_screen.profile_for === !undefined ? false : null
              }
            />
          </View>
          <Text style={Styles.lable}>Name</Text>
          <View
            style={[
              Styles.inputcontainer,
              {
                borderColor:
                  colorchange === true && Register_screen.name === undefined
                    ? "#BF565A"
                    : Register_screen.name === !undefined
                    ? "#000000"
                    : null,
                borderWidth: 1,
              },
            ]}
          >
            <View style={[Styles.inputsubcontainer]}>
              <TextInput
                style={[Styles.input]}
                keyboardType={""}
                onChangeText={(text) => setName(text)}
              />
            </View>
          </View>
          <Text style={Styles.lable}>Gender</Text>
          <View style={Styles.gendercontainer}>
            <View
              style={{
                marginLeft: 10,
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 8,
                borderColor:
                  colorchange === true && !gender ? "#BF565A" : "#000000",
                borderWidth: 1,
                paddingLeft: 20,
                paddingRight: 20,
                height: 45,
                width: 135,
              }}
            >
              <Text
                style={{
                  marginRight: 8,
                  fontFamily: fonts.POPPINS_MEDIUM,
                  color: "#231F20",
                }}
              >
                Male
              </Text>
              <Text>
                <Ionicons
                  name={male ? "radio-button-on" : "radio-button-off"}
                  size={20}
                  color="gray"
                  // checked={male}
                  onPress={genderMale}
                  // onPress={() => {
                  //   setMale(male ? false : true)
                  // }}
                />
              </Text>
            </View>
            <View
              style={{
                borderColor:
                  colorchange === true && !gender ? "#BF565A" : "#000000",
                marginLeft: 10,
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 8,

                borderWidth: 1,
                paddingLeft: 10,
                paddingRight: 20,
                height: 45,
                width: 135,
                marginLeft: 40,
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.POPPINS_MEDIUM,
                  color: "#231F20",
                  marginRight: 3,
                }}
              >
                Female
              </Text>
              <Text>
                <Ionicons
                  name={female ? "radio-button-on" : "radio-button-off"}
                  size={20}
                  color="gray"
                  // checked={female}

                  onPress={genderFemale}

                  // onPress={() => {
                  //   setFemale(female ? false : true)
                  // }}
                />
              </Text>
            </View>
          </View>
          <Text style={Styles.lable}>Date of birth</Text>
          <Dates
            dateCallBack={dateCallBack}
            color={
              colorchange === true && Register_screen.dob === undefined
                ? true
                : false
            }
            colorchanged={Register_screen.dob === !undefined ? false : null}
          />

          <Text style={Styles.lable}>Mobile Number</Text>
          <View style={[Styles.mobilecontainer]}>
            <DropdownCode
              codeCallBack={codeCallBack}
              color={
                colorchange === true &&
                Register_screen.countrycode === undefined
                  ? true
                  : false
              }
              colorchanged={
                Register_screen.profile_for === !undefined ? false : null
              }
            />
            <View
              style={[
                Styles.mobilebox,
                {
                  borderColor:
                    colorchange === true && Register_screen.mobile === undefined
                      ? "#BF565A"
                      : Register_screen.mobile === !undefined
                      ? "#000000"
                      : null,
                  borderWidth: 1,
                },
              ]}
            >
              <TextInput
                style={Styles.mobileinput}
                placeholder="Mobile Number"
                keyboardType="numeric"
                onChangeText={(text) => {
                  Phonenumber(text);
                }}
              />
            </View>
          </View>
          <Text style={Styles.lable}>Alternate Mobile</Text>
          <View
            style={[
              Styles.inputcontainer,
              {
                borderColor:
                  colorchange === true &&
                  Register_screen.alternate_number === undefined
                    ? "#BF565A"
                    : Register_screen.alternate_number === !undefined
                    ? "#000000"
                    : null,
                borderWidth: 1,
              },
            ]}
          >
            <View style={[Styles.inputsubcontainer]}>
              <TextInput
                style={[Styles.input]}
                placeholder="Mobile Number"
                keyboardType="numeric"
                onChangeText={(text) => {
                  Alternate_Phonenumber(text);
                }}
              />
            </View>
          </View>
          <Text style={Styles.lable}>Number Privacy</Text>
          <View style={Styles.privacycontainer}>
            <View style={Styles.privacysubcontainer}>
              <Ionicons
                name={radio ? "radio-button-on" : "radio-button-off"}
                size={20}
                color="gray"
                style={{ textAlignVertical: "center", marginBottom: 20 }}
                onPress={handlerRadio}
              />
              <Text style={Styles.privacytext}>
                {"Show My Number to Paid User to \nContact Me"}
              </Text>
            </View>
            <View style={Styles.privacysubcontainer}>
              <Ionicons
                name={radios ? "radio-button-on" : "radio-button-off"}
                size={20}
                color="gray"
                style={{ textAlignVertical: "center", marginBottom: 60 }}
                onPress={handlerNum}
              />
              <Text style={Styles.privacytext}>
                {`Do Not Show my Phone Number to \nAnyone(Contact Only by message\n and chat)
              `}
              </Text>
            </View>
          </View>
          <Text style={Styles.lable}>Highest Education</Text>
          <View style={Styles.dropcontainer}>
            <DropdownDosh
              educationCallBack={educationCallBack}
              color={
                colorchange === true && Register_screen.education === undefined
                  ? true
                  : false
              }
              colorchanged={
                Register_screen.education === !undefined ? false : null
              }
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
            <View style={Styles.pathbox}>
              <TouchableOpacity
                onPress={async () => {
                  Data_props.profile_for === undefined ||
                  Data_props.Age_from === undefined ||
                  Data_props.Age_to === undefined ||
                  Data_props.caste === undefined ||
                  Data_props.relegion === undefined ||
                  Register_screen.alternate_number === undefined ||
                  Register_screen.dob === undefined ||
                  Register_screen.education === undefined ||
                  Register_screen.gender === undefined ||
                  Register_screen.mobile === undefined ||
                  Register_screen.name === undefined
                    ? setColorchange(true)
                    : navigation.navigate("Register_information", {
                        Data_props: Register_screen,
                      });
                  // navigation.navigate("Register_information", {
                  //   Data_props: Data_props,
                  // });
                }}
              >
                <Text style={Styles.pathtext}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 20, marginRight: 50 }}></View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lable: {
    margin: 20,
    // marginTop: 100,
    marginBottom: 10,
    fontFamily: fonts.POPPINS_SEMI_BOLD,
    color: "#505050",
    // color: 'black',
  },
  inputcontainer: {
    borderWidth: 1,
    // borderColor: "#875F9A",
    borderStyle: "solid",
    marginLeft: 20,
    marginRight: 40,
    borderRadius: 10,
    height: 50,
    // backgroundColor: "#f7f5f7",
    justifyContent: "center",
  },
  inputsubcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    textAlignVertical: "center",
    padding: 10,
    height: 80,
    color: "black",
    flex: 1,
  },
  gender: {
    borderWidth: 1,
    // borderColor: "#875F9A",
    borderStyle: "solid",
    // backgroundColor: '#f7f5f7',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginLeft: -8,
    width: 170,
    textAlignVertical: "center",
    borderRadius: 10,
    fontFamily: fonts.POPPINS_MEDIUM,
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#505050",
    // display:"flex"
  },
  buttoncontainer: {
    // marginTop: 20,
    marginHorizontal: 40,
    marginTop: 40,
    // borderColor: 'coral'
  },
  button: {
    borderColor: "#875F9A",
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderWidth: 1,
    backgroundColor: "#875F9A",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 30,
  },
  gendercontainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },

  date: {
    borderWidth: 1,
    // borderColor: "#875F9A",
    borderStyle: "solid",
    paddingLeft: 10,
    paddingVertical: 15,
    width: 100,
    textAlignVertical: "center",
    borderRadius: 10,
    fontFamily: fonts.POPPINS_MEDIUM,
    flexDirection: "row",
    justifyContent: "space-around",
    // display:"flex"
    color: "#505050",
  },
  arrow: {
    marginRight: 0,
  },
  semicontainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  pathcontainer: {
    marginHorizontal: 170,
    marginVertical: 25,
    // borderWidth: 1,
    // width: 50,
    // height: 25,
    // flexDirection: 'row',
    // justifyContent: 'flex-end'
  },
  pathlink: {
    // justifyContent: 'flex-end',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#875F9A",
    borderColor: "#875F9A",
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: "white",
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
  },
  pathtext: {
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 6,
    fontFamily: fonts.POPPINS_MEDIUM,
    color: "#875F9A",
  },
  pathcontainer: {
    marginHorizontal: 20,
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    textAlignVertical: "center",
  },
  mobilecontainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },
  mobilebox: {
    borderWidth: 1,
    borderRadius: 10,
    // borderColor: "#875F9A",
    width: 200,
    marginRight: 40,
    // backgroundColor: "#f7f5f7",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mobileinput: {
    fontSize: 14,
    color: "black",
    padding: 10,
    textAlign: "left",
    paddingVertical: 10,
    flex: 1,
  },
  datecontainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },

  privacycontainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginHorizontal: 20,
    marginTop: 10,
    // textAlignVertical: 'center',
  },
  privacysubcontainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlignVertical: "center",
  },
  privacytext: {
    fontFamily: fonts.POPPINS_MEDIUM,
    color: "black",
    marginLeft: 5,
  },
  dropcontainer: {},
});

export default Register_screen;
