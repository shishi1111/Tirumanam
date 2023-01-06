import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { Component, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/Ionicons";
import Icon5 from "react-native-vector-icons/FontAwesome";
import { Times, ChooseFile } from "../components/ReligiousDate";

import fonts from "../contants/fonts";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Fonts } from "../contants";
import DropdownProfile from "../components/Dropdown";
import { TextInputName } from "../components/Dropdown";
import { TextiMask } from "../components/Dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
const screen = Dimensions.get("screen");
import {
  DropDownContainer,
  DropDownComplexion,
  DropDownPhysical,
  Age,
  DropDownWeight,
  DropDownHeight,
  MaritalStatusBox,
  DropDownMotherTongue,
  DropDownKnowToRead,
  DropDownEatingHabits,
  DropDownDrinkingHabits,
  DropDownSmokingHabits,
} from "../components/Dropdown";
import DropdownReligion from "../components/ReligiousInformation";
import {
  DropdownCommunity,
  DropdownSubCommunity,
  TextInputGothra,
  DropdownStar,
  DropdownRaasi,
  DropdownDosh,
  TextInputKuladeyva,
  TextInputKuladeyvaPlace,
  DropdownPlace,
  DropdownPState,
  DropdownPDistrict,
  DropdownPCity,
} from "../components/ReligiousInformation";
import DropdownHighEducation from "../components/ProffesionalInformation";
import {
  TextInputCollege,
  TextInputEducation,
  DropdownEmployed,
  DropdownOccupation,
  TextInputOccupationDetail,
  DropdownIncomeType,
  DropdownIncome,
  DropdownResident,
} from "../components/ProffesionalInformation";
import DropdownParter from "../components/Partner";
import { DropdownDosham } from "../components/Partner";
import DropdownFValue from "../components/FamilyInform";
import {
  DropdownFStatus,
  DropdownMStatus,
  DropdownBMarried,
  DropdownSMarried,
  DropdownOrgin,
  DropdownFatherStatus,
  DropdownNBrother,
  DropdownNSister,
  DropdownFLocation,
  DropdownFType,
} from "../components/FamilyInform";
import Datess from "../components/ReligiousDate";
import DropdownHobby from "../components/LifeStyle";
import {
  DropdownMusic,
  DropdownSports,
  DropdownSpoken,
  DropdownInterest,
  DropdownDress,
} from "../components/LifeStyle";
import DatePicker from "react-native-date-picker";
const ProfileTopBar = ({ navigation }) => {
  const [Information, setInformation] = useState(false);
  const [lengthCheck, setLengthCheck] = useState("");
  const [Detail, setDetail] = useState(false);
  const [expandPadding, setExpandPadding] = useState("");
  const [profession, setProfession] = useState("");
  const [Partner, setPartner] = useState(false);
  const [Religious, setReligious] = useState(false);
  const [Family, setFamily] = useState(false);
  const [lifeStyle, setLifeStyle] = useState(false);
  const [userData, setUserData] = useState(false);

  const [stResult, setStResult] = useState([]);

  // MY DETAILS............................................................................................ghghhgh
  const [name, setName] = useState();
  const nameCallBack = (prop) => {
    setName(prop);
    console.log(name, "namee");
  };
  const [profile, setProfile] = useState();
  const profileCallBack = (prop) => {
    setProfile(prop);
    console.log(profile, "namee");
  };
  const [dateString, setDateString] = useState();
  const DateString = (prop) => {
    setDateString(prop);
    console.log(dateString, "datestrings");
  };
  const [body, setBody] = useState();
  const bodyCallBack = (prop) => {
    setBody(prop);
    console.log(body, "bodyyy");
  };
  const [complexionData, setComplexionData] = useState();
  const complexionCallBack = (prop) => {
    setComplexionData(prop);
    console.log(complexionData, "complexionData");
  };
  const [physical, setPhysical] = useState();
  const physicalCallBack = (prop) => {
    setPhysical(prop);
    console.log(physical, "physical");
  };
  const [age, setAge] = useState();
  const ageCallBack = (prop) => {
    setAge(prop);
    console.log(age, "physical");
  };
  const [height, setHeight] = useState();
  const heightCallBack = (prop) => {
    setHeight(prop);
    console.log(height, "physical");
  };
  const [weight, setWeight] = useState();
  const weightCallBack = (prop) => {
    setWeight(prop);
    console.log(weight, "weight");
  };
  const [marital, setMarital] = useState();
  const maritalCallBack = (prop) => {
    setMarital(prop);
    console.log(marital, "marital");
  };
  const [mother, setMother] = useState();
  const motherCallBack = (prop) => {
    setMother(prop);
    console.log(mother, "mother");
  };
  const [know, setKnow] = useState();
  const knowToCallBack = (prop) => {
    setKnow(prop);
    console.log(know, "know");
  };
  const [eat, setEat] = useState();
  const eatCallBack = (prop) => {
    setEat(prop);
    console.log(eat, "eat");
  };
  const [drink, setDrink] = useState();
  const drinkCallBack = (prop) => {
    setDrink(prop);
    console.log(drink, "drink");
  };
  const [smoke, setSmoke] = useState();
  const smokeCallBack = (prop) => {
    setSmoke(prop);
    console.log(smoke, "smoke");
  };

  // RELIGIOUS INFORMATION---------------------------------------------------------------------------------------
  const [comResult, setComResult] = useState();
  const callbackfunCommunity = (prop) => {
    setComResult(prop);
  };
  const [subResult, setSubResult] = useState();
  const callbackfunsubcom = (prop) => {
    setSubResult(prop);
  };
  const callbackfunState = (prop) => {
    setStResult(prop);
  };
  const [ctResult, setCtResult] = useState([]);
  const callbackfunCity = (prop) => {
    setCtResult(prop);
  };
  const [religion, setReligion] = useState();
  const religionCallBack = (prop) => {
    setReligion(prop);
    console.log(religion, "religion");
  };
  const [community, setCommunity] = useState();
  const communityCallBack = (prop) => {
    setCommunity(prop);
    console.log(community, "community");
  };
  const [subCommunity, setSubCommunity] = useState();
  const subCommunityCallBack = (prop) => {
    setSubCommunity(prop);
    console.log(subCommunity, "subCommunity");
  };
  const [gothra, setGothra] = useState();
  const gothraCallBack = (prop) => {
    setGothra(prop);
    console.log(gothra, "gothra");
  };
  const [star, setStar] = useState();
  const starCallBack = (prop) => {
    setStar(prop);
    console.log(star, "star");
  };
  const [raasi, setRaasi] = useState();
  const raasiCallBack = (prop) => {
    setRaasi(prop);
    console.log(raasi, "raasi");
  };
  const [dosh, setDosh] = useState();
  const doshCallBack = (prop) => {
    setDosh(prop);
    console.log(dosh, "dosh");
  };
  const [kuladevam, setkuladevam] = useState();
  const kuladeyvaCallBack = (prop) => {
    setkuladevam(prop);
    console.log(kuladevam, "kuladevam");
  };
  const [kuladevamPlace, setKuladevamPlace] = useState();
  const kuladeyvaPlaceCallBack = (prop) => {
    setKuladevamPlace(prop);
    console.log(kuladevamPlace, "kuladevamPlace");
  };
  const [times, setTimes] = useState();
  const timesCallBack = (prop) => {
    setTimes(prop);
    console.log(times, "times");
  };
  const [place, setPlace] = useState();
  const placeCallBack = (prop) => {
    setPlace(prop);
    console.log(place, "place");
  };
  const [state, setState] = useState();
  const stateCallBack = (prop) => {
    setState(prop);
    console.log(state, "state");
  };
  // PARTNER EXPECTATION-----------------------------------------------------------------------------------------
  const [partner, setParter] = useState();
  const partnerCallBack = (prop) => {
    setParter(prop);
    console.log(partner, "partner");
  };
  const [dhosam, setDhosam] = useState();
  const dhosamCallBack = (prop) => {
    setDhosam(prop);

    console.log(dhosam, "dhosam");
  };
  // MY PROFESSION-------------------------------------------------------------------------------------------------------------
  const [education, setEducation] = useState();
  const educationCallBack = (prop) => {
    setEducation(prop);
    console.log(education, "Education");
  };
  const [college, setCollege] = useState();
  const collegeCallBack = (prop) => {
    setCollege(prop);
    console.log(college, "college");
  };
  const [inputEducation, setInputEducation] = useState();
  const inputEducationCallBack = (prop) => {
    setInputEducation(prop);
    console.log(inputEducation, "inputEducation");
  };
  const [employed, setEmployed] = useState();
  const employedCallBack = (prop) => {
    setEmployed(prop);
    console.log(employed, "employed");
  };
  const [occupation, setOccupation] = useState();
  const occupationCallBack = (prop) => {
    setOccupation(prop);
    console.log(occupation, "occupation");
  };
  const [city, setCity] = useState();
  const cityCallBack = (prop) => {
    setCity(prop);
    console.log(city, "city");
  };
  const [inputDetail, setInputDetail] = useState();
  const inputDetailCallBack = (prop) => {
    setInputDetail(prop);
    console.log(inputDetail, "inputDetail");
  };
  const [incomeType, setIncomeType] = useState();
  const incomeTypeCallBack = (prop) => {
    setIncomeType(prop);
    console.log(incomeType, "incomeType");
  };
  const [income, setIncome] = useState();
  const incomeCallBack = (prop) => {
    setIncome(prop);
    console.log(income, "income");
  };
  const [resident, setResident] = useState();
  const residentCallBack = (prop) => {
    setResident(prop);
    console.log(resident, "resident");
  };
  // MY FAMILY------------------------------------------------------------------------------------------------------------
  const [fValue, setFValue] = useState();
  const fValueCallBack = (prop) => {
    setFValue(prop);
    console.log(fValue, "fValue");
  };
  const [fStatus, setFStatus] = useState();
  const fStatusCallBack = (prop) => {
    setFStatus(prop);
    console.log(fStatus, "fStatus");
  };
  const [fType, setFType] = useState();
  const fTypeCallBack = (prop) => {
    setFType(prop);
    console.log(fType, "fType");
  };
  const [fatherStatus, setFatherStatus] = useState();
  const fatherStatusCallBack = (prop) => {
    setFatherStatus(prop);
    console.log(fatherStatus, "fatherStatus");
  };
  const [mStatus, setMStatus] = useState();
  const mStatusCallBack = (prop) => {
    setMStatus(prop);
    console.log(mStatus, "mStatus");
  };
  const [bMarried, setBMarried] = useState();
  const bMarriedCallBack = (prop) => {
    setBMarried(prop);
    console.log(bMarried, "bMarried");
  };
  const [sMarried, setSMarried] = useState();
  const sMarriedCallBack = (prop) => {
    setSMarried(prop);
    console.log(sMarried, "sMarried");
  };
  const [nBrother, setNBrother] = useState();
  const nBrotherCallBack = (prop) => {
    setNBrother(prop);
    console.log(nBrother, "nBrother");
  };
  const [nSister, setNSister] = useState();
  const nSisterCallBack = (prop) => {
    setNSister(prop);
    console.log(nSister, "nSister");
  };
  // MY LIFE STYLE------------------------------------------------------------------------------------------------------------
  const [hobby, setHobby] = useState();
  const hobbyCallBack = (prop) => {
    setHobby(prop);
  };
  const [music, setMusic] = useState();
  const musicCallBack = (prop) => {
    setMusic(prop);
    console.log(music, "music");
  };
  const [sports, setSports] = useState();
  const sportsCallBack = (prop) => {
    setSports(prop);
    console.log(sports, "sports");
  };
  const [spoken, setSpoken] = useState();
  const spokenCallBack = (prop) => {
    setSpoken(prop);
    console.log(spoken, "spoken");
  };
  const [interest, setInterest] = useState();
  const interestCallBack = (prop) => {
    setInterest(prop);
    console.log(interest, "interest");
  };
  const [dress, setDress] = useState();
  const dressCallBack = (prop) => {
    setDress(prop);
    console.log(dress, "dress");
  };

  const [ButtonColor, setButtonColor] = useState([
    { label: "Button1 ", value: "#875F9A " },
    { label: "Physically Challanged ", value: "Physically Challanged" },
  ]);

  console.log(expandPadding, "hello");
  console.log(lengthCheck);
  function LengthMark() {
    setUserData(false);
    if (lengthCheck.length < 50)
      return (
        <Text
          style={{
            fontFamily: fonts.POPPINS_SEMI_BOLD,
            color: "#A52A2A",
          }}
        >
          {"This should be minimum\n50 characters."}
        </Text>
      );
    else setUserData(true);
    return <View style={{ marginLeft: 180 }}></View>;
  }
  console.log(userData, "usedataaa");
  return (
    <View>
      <ScrollView>
        <View style={{ marginTop: 20, flexDirection: "row", marginLeft: 10 }}>
          <Icon name="pen-tool" size={24} color="#875F9A" />
          <Text
            style={{
              marginLeft: 20,
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#000000",
            }}
          >
            My Information
          </Text>
          <TouchableOpacity onPress={() => setInformation(true)}>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 180 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        {!Information ? (
          <View style={{ maxWidth: 400 }}>
            <Text
              style={{
                marginLeft: 10,

                flexDirection: "row",
                textAlignVertical: "center",
                alignSelf: "center",
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
                marginTop: 10,
                marginRight: 6,
              }}
            >
              {userData === true
                ? lengthCheck
                : "I am a Software proffessional with a Bachelor degree currentl  working in a private sector in Banglore. I belongs to middleclass, joint family with orthodox values."}
            </Text>
          </View>
        ) : (
          Information && (
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <TextInput
                multiline={true}
                placeholder=" Write something about you..."
                textAlign="left"
                onChangeText={(text) => {
                  setLengthCheck(text);
                }}
                style={{
                  marginLeft: 20,
                  width: 350,
                  borderRadius: 8,
                  borderWidth: 1,
                  placeHolder: "Type",
                  numberOfLines: 4,
                  fontFamily: fonts.POPPINS_SEMI_BOLD,
                  color: "#000000",
                  paddingLeft: 15,
                }}
              />
              <View
                style={{ flexDirection: "row", marginLeft: 22, marginTop: 10 }}
              >
                <LengthMark />
                <TouchableOpacity
                  onPress={() => {
                    lengthCheck.length > 50
                      ? setInformation(false)
                      : lengthCheck;
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_BOLD,
                      color: "#A52A2A",
                      borderColor: "#000000",
                      backgroundColor: "#875F9A",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginLeft: 50,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setInformation(false)}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontFamily: fonts.POPPINS_BOLD,

                      borderColor: "#000000",
                      backgroundColor: "#bababa",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        )}
        <View style={{ marginTop: 10, flexDirection: "row", marginLeft: 10 }}>
          <Icon1
            name="order-bool-descending-variant"
            size={24}
            color="#875F9A"
          />
          <Text
            style={{
              marginLeft: 20,
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#000000",
            }}
          >
            My Details
          </Text>
          <TouchableOpacity onPress={() => setDetail(true)}>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 218 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        {!Detail ? (
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                marginLeft: 20,
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
              }}
            >
              {
                "Profile Created For\nName\nDate of Birth\nBody Type\nComplexion\nPhysical Status \nAge\nHeight\nWeight\nMarital Status\nMother Tongue\nKnow to Read\nEating Habits\nDrinking Habits\nSmoking Habits"
              }
            </Text>
            <Text
              style={{
                marginLeft: 55,
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
              }}
            >
              {`${profile ? profile : "Profile Created For"}\n${
                name ? name : "Name"
              }\n${dateString ? dateString : "Date of Birth"}\n${
                body ? body : "Body Type"
              }\n${complexionData ? complexionData : "Complexion"}\n${
                physical ? physical : "Physical Status"
              } \n${age ? age : "Age"}\n${height ? height : "Height"}\n${
                weight ? weight : "Weight"
              }\n${marital ? marital : "Marital Status"}\n${
                mother ? mother : "Mother Tongue"
              }\n${know ? know : "Know to Read"}\n${
                eat ? eat : "Eating Habits"
              }\n${drink ? drink : "Drinking Habits"}\n${
                smoke ? smoke : "Smoking Habits"
              }`}
            </Text>
          </View>
        ) : (
          <View style={{ marginTop: 10, marginLeft: 20, flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 0,
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
              }}
            >
              {
                "Profile Created For\n\n\nName\n\nDate of Birth\n\nBody Type\n\nComplexion\n\nPhysical Status \n\nAge\n\nHeight\n\nWeight\n\nMarital Status\n\nMother Tongue\n\nKnow to Read\n\nEating Habits\n\nDrinking Habits\n\nSmoking Habits"
              }
            </Text>
            <View style={{ flexDirection: "column", marginRight: 20 }}>
              <DropdownProfile profileCallBack={profileCallBack} />

              {expandPadding == false ? (
                <>
                  <TextInputName nameCallBack={nameCallBack} />
                  <Datess dates={true} datestring={DateString} />
                  <DropDownContainer bodyCallBack={bodyCallBack} />
                  <DropDownComplexion complexionCallBack={complexionCallBack} />
                  <DropDownPhysical physicalCallBack={physicalCallBack} />
                  <Age dates={dateString} ageCallBack={ageCallBack} />
                  <DropDownHeight heightCallBack={heightCallBack} />
                  <DropDownWeight weightCallBack={weightCallBack} />
                  <MaritalStatusBox maritalCallBack={maritalCallBack} />
                  <DropDownMotherTongue motherCallBack={motherCallBack} />
                  <DropDownKnowToRead knowToCallBack={knowToCallBack} />
                  <DropDownEatingHabits eatCallBack={eatCallBack} />
                  <DropDownDrinkingHabits drinkCallBack={drinkCallBack} />
                  <DropDownSmokingHabits smokeCallBack={smokeCallBack} />
                </>
              ) : (
                <View></View>
              )}
              <View
                style={{ flexDirection: "row", marginLeft: 22, marginTop: 10 }}
              >
                <TouchableOpacity onPress={() => setDetail(false)}>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_BOLD,
                      color: "#A52A2A",
                      borderColor: "#000000",
                      backgroundColor: "#875F9A",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginLeft: 40,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDetail(false)}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontFamily: fonts.POPPINS_BOLD,

                      borderColor: "#000000",
                      backgroundColor: "#bababa",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={{ marginTop: 30, flexDirection: "row", marginLeft: 10 }}>
          <Icon1 name="hands-pray" size={24} color="#875F9A" />
          <Text
            style={{
              marginLeft: 20,
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#000000",
            }}
          >
            Religious Information
          </Text>
          <TouchableOpacity onPress={() => setReligious(true)}>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 132 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        {!Religious ? (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {
                "Religion\nCommunity\nSub Community\nGothra\nStar\nRaasi\nHave Dosh?\nFamily God/Name\nFamily God/Name place\n\nHOROSCOPE DETAILS\n\nDate of Birth\nTime of Birth\nPlace of birth "
              }
            </Text>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                marginLeft: 10,
                color: "#231F20",
              }}
            >
              {`${religion ? religion : "Religion"}\n${
                community ? community : "Community"
              }\n${subCommunity ? subCommunity : "Sub Community"}\n${
                gothra ? gothra : "Gothra"
              }\n${star ? star : "Star"}\n${raasi ? raasi : "Raasi"}\n${
                dosh ? dosh : "Have Dosh?"
              }\n${kuladevam ? kuladevam : "Family God/Name"}\n${
                kuladevamPlace ? kuladevamPlace : "Family God/Name place"
              }\n\n               \n\n${
                dateString ? dateString : "Date of Birth"
              }\n${times ? times : "Time of Birth"}\n${
                place ? place : "Place of birth"
              }\n `}
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {
                "Religion\n\nCommunity\n\nSub Community\n\nGothra\n\n\nStar\n\nRaasi\n\nHave Dosh?\n\n\nFamily God/Name\n\n\nFamily God/Name place\n\nHOROSCOPE DETAILS\n\n\nDate of Birth\n\nTime of Birth\n\nPlace of birth\n\n\n\n\n\n\n\nHoroscope Image "
              }
            </Text>
            <View style={{ flexDirection: "column" }}>
              <DropdownReligion
                callbackfuncom={callbackfunCommunity}
                religionCallBack={religionCallBack}
              />
              <DropdownCommunity
                result={comResult}
                callbackfunsub={callbackfunsubcom}
                communityCallBack={communityCallBack}
              />
              <DropdownSubCommunity
                result={subResult}
                subCommunityCallBack={subCommunityCallBack}
              />
              <TextInputGothra gothraCallBack={gothraCallBack} />
              <DropdownStar starCallBack={starCallBack} />
              <DropdownRaasi raasiCallBack={raasiCallBack} />
              <DropdownDosh doshCallBack={doshCallBack} />
              <TextInputKuladeyva kuladeyvaCallBack={kuladeyvaCallBack} />
              <TextInputKuladeyvaPlace
                kuladeyvaPlaceCallBack={kuladeyvaPlaceCallBack}
              />
              <Datess datestring={DateString} />
              <Times timesCallBack={timesCallBack} />
              <DropdownPlace
                callbackfunst={callbackfunState}
                placeCallBack={placeCallBack}
              />
              <DropdownPState
                result={stResult}
                callbackfunct={callbackfunCity}
                stateCallBack={stateCallBack}
              />
              <DropdownPDistrict />
              <DropdownPCity result={ctResult} cityCallBack={cityCallBack} />
              <ChooseFile />
              <View
                style={{ flexDirection: "row", marginLeft: 22, marginTop: 30 }}
              >
                <TouchableOpacity onPress={() => setReligious(false)}>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_BOLD,
                      color: "#A52A2A",
                      borderColor: "#000000",
                      backgroundColor: "#875F9A",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginLeft: 40,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setReligious(false)}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontFamily: fonts.POPPINS_BOLD,

                      borderColor: "#000000",
                      backgroundColor: "#bababa",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={{ marginTop: 30, flexDirection: "row", marginLeft: 10 }}>
          <Icon1 name="hands-pray" size={24} color="#875F9A" />
          <Text
            style={{
              marginLeft: 20,
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#000000",
            }}
          >
            Partner Expectation
          </Text>
          <TouchableOpacity onPress={() => setPartner(true)}>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 150 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        {!Partner ? (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {"partner Community\nPartner Dosham "}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                marginLeft: 40,
                color: "#231F20",
              }}
            >
              {`${partner ? partner : "partner Community"}\n${
                dhosam ? dhosam : "Partner Dosham"
              } `}
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {"partner Community\n\nPartner Dosham "}
            </Text>
            <View style={{ flexDirection: "column", marginLeft: 30 }}>
              <DropdownParter partnerCallBack={partnerCallBack} />
              <DropdownDosham dhosamCallBack={dhosamCallBack} />

              <View
                style={{ flexDirection: "row", marginLeft: 22, marginTop: 15 }}
              >
                <TouchableOpacity onPress={() => setPartner(false)}>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_BOLD,
                      color: "#A52A2A",
                      borderColor: "#000000",
                      backgroundColor: "#875F9A",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginLeft: 40,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPartner(false)}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontFamily: fonts.POPPINS_BOLD,

                      borderColor: "#000000",
                      backgroundColor: "#bababa",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={{ marginTop: 30, flexDirection: "row", marginLeft: 10 }}>
          <Icon1 name="bag-personal" size={24} color="#875F9A" />
          <Text
            style={{
              marginLeft: 20,
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#000000",
            }}
          >
            My Profession
          </Text>
          <TouchableOpacity onPress={() => setProfession(true)}>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 189 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        {!profession ? (
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              marginTop: 10,
              color: "#231F20",
            }}
          >
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {
                "Highest Education\nCollege / Institution\nEducation in Detail\nEmployed in\nOccupation\nCountry of Occupation\nState of Occupation\nDistrict of Occupation\nCity of Occupation\nOccupation in Detail\nIncomeType\nIncome\nResident Status   "
              }
            </Text>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                marginLeft: 20,
                color: "#231F20",
              }}
            >
              {`${education ? education : "Highest Education"}\n${
                college ? college : "College/ Institution"
              } \n${inputEducation ? inputEducation : "Education in Detail"}\n${
                employed ? employed : "Employed in"
              }\n${occupation ? occupation : "Occupation"}\n${
                place ? place : "Country of Occupation"
              }\n${
                state ? state : "State of Occupation"
              }\nDistrict of Occupation\n${
                city ? city : "City of Occupation"
              }\n${inputDetail ? inputDetail : "Occupation in Detail"}\n${
                incomeType ? incomeType : "IncomeType"
              }\n${income ? income : "Income"}\n${
                resident ? resident : "Resident Status"
              }`}
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {
                "Highest Education\n\n\nCollege / Institution\n\nEducation in Detail\n\nEmployed in\n\nOccupation\n\nCountry of Occupation\n\nState of Occupation\n\nDistrict of Occupation\n\nCity of Occupation\n\nOccupation in Detail\n\nIncomeType\n\nIncome\n\nResident Status   "
              }
            </Text>
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <DropdownHighEducation educationCallBack={educationCallBack} />
              <TextInputCollege collegeCallBack={collegeCallBack} />
              <TextInputEducation
                inputEducationCallBack={inputEducationCallBack}
              />
              <DropdownEmployed employedCallBack={employedCallBack} />
              <DropdownOccupation occupationCallBack={occupationCallBack} />
              <DropdownPlace
                callbackfunst={callbackfunState}
                data={true}
                placeCallBack={placeCallBack}
              />
              <DropdownPState
                result={stResult}
                callbackfunct={callbackfunCity}
                data={true}
                stateCallBack={stateCallBack}
              />
              <DropdownPDistrict />
              <DropdownPCity
                result={ctResult}
                data={true}
                cityCallBack={cityCallBack}
              />

              <TextInputOccupationDetail
                inputDetailCallBack={inputDetailCallBack}
              />
              <DropdownIncomeType incomeTypeCallBack={incomeTypeCallBack} />
              <DropdownIncome incomeCallBack={incomeCallBack} />
              <DropdownResident residentCallBack={residentCallBack} />
              <View
                style={{ flexDirection: "row", marginLeft: 22, marginTop: 15 }}
              >
                <TouchableOpacity onPress={() => setProfession(false)}>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_BOLD,
                      color: "#A52A2A",
                      borderColor: "#000000",
                      backgroundColor: "#875F9A",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginLeft: 40,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setProfession(false)}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontFamily: fonts.POPPINS_BOLD,

                      borderColor: "#000000",
                      backgroundColor: "#bababa",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <View style={{ marginTop: 30, flexDirection: "row", marginLeft: 10 }}>
          <Icon3 name="persons" size={24} color="#875F9A" />
          <Text
            style={{
              marginLeft: 20,
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#000000",
            }}
          >
            My Family
          </Text>
          <TouchableOpacity onPress={() => setFamily(true)}>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 210 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        {!Family ? (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {
                "Family Value\nFamily Status\nFamily Type\nFather's Status\nMother's Status\nBrothers Married\nSisters Married\nNo. of Brothers\nNo. of Sisters\nFamily Location\nFamily Origin "
              }
            </Text>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                marginLeft: 60,
                color: "#231F20",
              }}
            >
              {`${fValue ? fValue : "Family Value"}\n${
                fStatus ? fStatus : "Family Status"
              }\n${fType ? fType : "Family Type"}\n${
                fatherStatus ? fatherStatus : "Father's Status"
              }\n${mStatus ? mStatus : "Mother's Status"}\n${
                bMarried ? bMarried : "Brothers Married"
              }\n${sMarried ? sMarried : "Sisters Married"}\n${
                nBrother ? nBrother : "No. of Brothers"
              }\n${nSister ? nSister : "No. of Sisters"}\n${
                city ? city : "Family Location"
              }\n${city ? city : "Family Origin"}`}
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {
                "Family Value\n\nFamily Status\n\nFamily Type\n\nFather's Status\n\nMother's Status\n\nBrothers Married\n\nSisters Married\n\nNo. of Brothers\n\nNo. of Sisters\n\nFamily Location\n\n\n\n\n\n\n\n\nFamily Origin "
              }
            </Text>
            <View style={{ flexDirection: "column", marginLeft: 60 }}>
              <DropdownFValue fValueCallBack={fValueCallBack} />
              <DropdownFStatus fStatusCallBack={fStatusCallBack} />
              <DropdownFType fTypeCallBack={fTypeCallBack} />
              <DropdownFatherStatus
                fatherStatusCallBack={fatherStatusCallBack}
              />
              <DropdownMStatus mStatusCallBack={mStatusCallBack} />
              <DropdownBMarried bMarriedCallBack={bMarriedCallBack} />
              <DropdownSMarried sMarriedCallBack={sMarriedCallBack} />
              <DropdownNBrother nBrotherCallBack={nBrotherCallBack} />
              <DropdownNSister nSisterCallBack={nSisterCallBack} />
              <DropdownPlace
                callbackfunst={callbackfunState}
                data={true}
                placeCallBack={placeCallBack}
              />
              <DropdownPState
                result={stResult}
                callbackfunct={callbackfunCity}
                data={true}
                stateCallBack={stateCallBack}
              />
              <DropdownPDistrict />
              <DropdownPCity
                result={ctResult}
                data={true}
                cityCallBack={cityCallBack}
              />
              <DropdownPlace
                callbackfunst={callbackfunState}
                data={true}
                placeCallBack={placeCallBack}
              />
              <DropdownPState
                result={stResult}
                callbackfunct={callbackfunCity}
                data={true}
                stateCallBack={stateCallBack}
              />
              <DropdownPDistrict />
              <DropdownPCity
                result={ctResult}
                data={true}
                cityCallBack={cityCallBack}
              />

              <View
                style={{ flexDirection: "row", marginLeft: 22, marginTop: 15 }}
              >
                <TouchableOpacity onPress={() => setFamily(false)}>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_BOLD,
                      color: "#A52A2A",
                      borderColor: "#000000",
                      backgroundColor: "#875F9A",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginLeft: 40,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFamily(false)}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontFamily: fonts.POPPINS_BOLD,

                      borderColor: "#000000",
                      backgroundColor: "#bababa",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={{ marginTop: 30, flexDirection: "row", marginLeft: 10 }}>
          <Icon4 name="walk-outline" size={24} color="#875F9A" />
          <Text
            style={{
              marginLeft: 20,
              fontFamily: fonts.POPPINS_SEMI_BOLD,
              color: "#000000",
            }}
          >
            My LifeStyle
          </Text>
          <TouchableOpacity onPress={() => setLifeStyle(true)}>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 200 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        {!lifeStyle ? (
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                marginLeft: 20,
                color: "#231F20",
              }}
            >
              {`Hobby ${hobby ? "\n" : ""}\nMusic ${
                music ? "\n" : ""
              }\nSports ${sports ? "\n" : ""} \nSpoken ${
                spoken ? "\n" : ""
              }\nInterests  ${interest ? "\n" : ""}\nDress ${
                dress ? "\n" : ""
              }`}
            </Text>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                marginLeft: 120,
                color: "#231F20",
              }}
            >
              {`${hobby ? hobby + `${"\n"}` : "Hobby"}\n${
                music ? music + `${"\n"}` : "Music"
              } \n${sports ? sports + `${"\n"}` : "Sports"}\n${
                spoken ? spoken + `${"\n"}` : "Spoken"
              }\n${interest ? interest + `${"\n"}` : "Interests"}\n${
                dress ? dress + `${"\n"}` : "Dress"
              }`}
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {"Hobby\n\nMusic \n\nSports\n\nSpoken\n\nInterests\n\nDress"}
            </Text>
            <View style={{ flexDirection: "column", marginLeft: 60 }}>
              <DropdownHobby hobbyCallBack={hobbyCallBack} />
              <DropdownMusic musicCallBack={musicCallBack} />
              <DropdownSports sportsCallBack={sportsCallBack} />
              <DropdownSpoken spokenCallBack={spokenCallBack} />
              <DropdownInterest interestCallBack={interestCallBack} />
              <DropdownDress dressCallBack={dressCallBack} />
              <View
                style={{ flexDirection: "row", marginLeft: 80, marginTop: 15 }}
              >
                <TouchableOpacity onPress={() => setLifeStyle(false)}>
                  <Text
                    style={{
                      fontFamily: fonts.POPPINS_BOLD,
                      color: "#A52A2A",
                      borderColor: "#000000",
                      backgroundColor: "#875F9A",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginLeft: 40,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setLifeStyle(false)}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontFamily: fonts.POPPINS_BOLD,

                      borderColor: "#000000",
                      backgroundColor: "#bababa",
                      color: "#ffffff",
                      padding: 5,
                      borderRadius: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  squreStyle: {
    width: "100%",
    height: 65,
    borderRadius: 12,
    backgroundColor: "#7B7B7B",
    zIndex: 1,
  },
  arcStyle: {
    width: "20%",
    height: 70,
    position: "absolute",
    bottom: -25,
    left: "40%",
    borderRadius: 35,
    backgroundColor: "black",
    transform: [{ scaleX: 5 }, { scaleY: 1 }],
  },
  button: {
    shadowColor: "rgba(102, 68, 0, 0.5)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",

    fontFamily: fonts.POPPINS_BOLD,
    color: "#18134b",
    marginTop: 40,
    marginLeft: 20,
  },
  // card: {
  //   backgroundColor: "white",
  //   borderRadius: 8,
  //   paddingVertical: 15,
  //   paddingHorizontal: 25,
  //   width: "100%",

  //   marginLeft: 0,
  // },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  age: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 13,
    fontFamily: fonts.POPPINS_BOLD,
    color: "#18134b",
    marginTop: 10,

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
});

export default ProfileTopBar;
