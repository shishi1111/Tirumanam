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
} from "../components/ReligiousInformation";

const Profile = ({ navigation }) => {
  const [Information, setInformation] = useState(false);
  const [lengthCheck, setLengthCheck] = useState("");
  const [Detail, setDetail] = useState(false);
  const [expandPadding, setExpandPadding] = useState("");
  const [profession, setProfession] = useState("");
  const [Religious, setReligious] = useState(false);
  const [ButtonColor, setButtonColor] = useState([
    { label: "Button1 ", value: "#875F9A " },
    { label: "Physically Challanged ", value: "Physically Challanged" },
  ]);

  // setExpandPadding(AsyncStoiage.getItem(expandPadding));
  console.log(expandPadding, "hello");
  console.log(lengthCheck);
  function LengthMark() {
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
    else return <View style={{ marginLeft: 180 }}></View>;
  }
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
          <View>
            <Text
              style={{
                marginLeft: 20,

                flexDirection: "row",
                textAlignVertical: "center",
                alignSelf: "center",
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#5A5A5A",
                marginTop: 10,
                marginRight: 6,
              }}
            >
              I am a Software proffessional with a Bachelor degree currently
              working in a private sector in Banglore. I belongs to middle
              class, joint family with orthodox values.
            </Text>
          </View>
        ) : (
          Information && (
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <TextInput
                multiline={true}
                placeholder=" Write something about you..."
                textAlign="left"
                onChangeText={(text) => setLengthCheck(text)}
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
                  onPress={() =>
                    lengthCheck.length > 50
                      ? setInformation(false)
                      : lengthCheck
                  }
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
                "Profile Created For\nName\nDate of Birth\nBody Type/Complexion\nPhysical Status \nAge\nHeight\nWeight\nMarital Status\nMother Tongue\nPhysical Status\nBody Type\nEating Habits\nDrinking Habits\nSmoking Habits"
              }
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontFamily: fonts.POPPINS_REGULAR,
                color: "#231F20",
              }}
            >
              {
                "Profile Created For\nName\nDate of Birth\nBody Type/Complexion\nPhysical Status \nAge\nHeight\nWeight\nMarital Status\nMother Tongue\nPhysical Status\nBody Type\nEating Habits\nDrinking Habits\nSmoking Habits"
              }
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
                "Profile Created For\n\nName\n\n\nDate of Birth\n\nBody Type/Complexion\n\nPhysical Status \n\nAge\n\nHeight\n\nWeight\n\nMarital Status\n\nMother Tongue\n\nKnow to Read\n\nEating Habits\n\nDrinking Habits\n\nSmoking Habits"
              }
            </Text>
            <View style={{ flexDirection: "column", marginRight: 20 }}>
              <DropdownProfile />

              {expandPadding == false ? (
                <>
                  <TextInputName />
                  <TextiMask />
                  <DropDownContainer />
                  <DropDownPhysical />
                  <Age />
                  <DropDownHeight />
                  <DropDownWeight />
                  <MaritalStatusBox />
                  <DropDownMotherTongue />
                  <DropDownKnowToRead />
                  <DropDownEatingHabits />
                  <DropDownDrinkingHabits />
                  <DropDownSmokingHabits />
                </>
              ) : (
                <View></View>
              )}
              <View
                style={{ flexDirection: "row", marginLeft: 22, marginTop: 10 }}
              >
                <TouchableOpacity
                  onPress={() =>
                    lengthCheck.length > 50
                      ? setInformation(false)
                      : lengthCheck
                  }
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
                "Religion\nDate Of Birth\nTime Of Birth\nCommunity\nPlace Of Birth\nGothra\nStar/Raasi\nDosh\nHoroscope Image\nFamily God/Name\nFamily God/Name place "
              }
            </Text>
            <Text
              style={{
                fontFamily: Fonts.POPPINS_REGULAR,
                marginLeft: 10,
                color: "#231F20",
              }}
            >
              {
                "Religion\nDate Of Birth\nTime Of Birth\nCommunity\nPlace Of Birth\nGothra\nStar/Raasi\nDosh\nHoroscope Image\nFamily God/Name\nFamily God/Name place "
              }
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontFamily: fonts.POPPINS_REGULAR, color: "#231F20" }}
            >
              {
                "Religion\n\nCommunity\n\nSub Community\n\nGothra\n\n\nStar\n\nRaasi\n\nHave Dosh?\n\n\nFamily God/Name\n\n\nFamily God/Name place "
              }
            </Text>
            <View style={{ flexDirection: "column" }}>
              <DropdownReligion />
              <DropdownCommunity />
              <DropdownSubCommunity />
              <TextInputGothra />
              <DropdownStar />
              <DropdownRaasi />
              <DropdownDosh />
              <TextInputKuladeyva />
              <TextInputKuladeyvaPlace />
              <View
                style={{ flexDirection: "row", marginLeft: 22, marginTop: 15 }}
              >
                <TouchableOpacity
                  onPress={() =>
                    lengthCheck.length > 50
                      ? setInformation(false)
                      : lengthCheck
                  }
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
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontFamily: fonts.POPPINS_REGULAR }}>
              {
                "Highest Education\nCollege / Institution\nEducation in Detail\nEmployed in\nOccupation\nCountry of Occupation\nState of Occupation\nCity of Occupation\nOccupation in Detail\nIncome\nResident Status   "
              }
            </Text>
            <Text style={{ fontFamily: fonts.POPPINS_REGULAR, marginLeft: 20 }}>
              {
                "Highest Education\nCollege / Institution\nEducation in Detail\nEmployed in\nOccupation\nCountry of Occupation\nState of Occupation\nCity of Occupation\nOccupation in Detail\nIncome\nResident Status   "
              }
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontFamily: fonts.POPPINS_REGULAR }}>
              {
                "Highest Education\nCollege / Institution\nEducation in Detail\nEmployed in\nOccupation\nCountry of Occupation\nState of Occupation\nCity of Occupation\nOccupation in Detail\nIncome\nResident Status   "
              }
            </Text>
          </View>
        )}

        <View style={{ marginTop: 30, flexDirection: "row", marginLeft: 10 }}>
          <Icon3 name="persons" size={24} color="#875F9A" />
          <Text
            style={{ marginLeft: 20, fontFamily: fonts.POPPINS_EXTRA_BOLD }}
          >
            My Family
          </Text>
          <TouchableOpacity>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 210 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Text style={{ fontFamily: fonts.POPPINS_REGULAR, marginLeft: 20 }}>
            {
              "Family Value\nFamily Type\nFamily Status\nFather's Status\nMother's Status\nNo. of Brothers\nBrothers Married\nNo. of Sisters\nSisters Married\nFamily Location\nFamily Origin  "
            }
          </Text>
          <Text style={{ fontFamily: fonts.POPPINS_REGULAR, marginLeft: 70 }}>
            {
              "Family Value\nFamily Type\nFamily Status\nFather's Status\nMother's Status\nNo. of Brothers\nBrothers Married\nNo. of Sisters\nSisters Married\nFamily Location\nFamily Origin  "
            }
          </Text>
        </View>
        <View style={{ marginTop: 30, flexDirection: "row", marginLeft: 10 }}>
          <Icon4 name="walk-outline" size={24} color="#875F9A" />
          <Text
            style={{ marginLeft: 20, fontFamily: fonts.POPPINS_EXTRA_BOLD }}
          >
            My LifeStyle
          </Text>
          <TouchableOpacity>
            <Icon5
              name="edit"
              size={24}
              style={{ marginLeft: 200 }}
              color="#875F9A"
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: fonts.POPPINS_REGULAR,
              marginLeft: 20,
              color: "#000000",
            }}
          >
            {"Hobby\nMusic \nSports\nSpoken\nInterests\nDress"}
          </Text>
          <Text style={{ fontFamily: fonts.POPPINS_REGULAR, marginLeft: 20 }}>
            {"Hobby\nMusic \nSports\nSpoken\nInterests\nDress"}
          </Text>
        </View>
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
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "100%",

    marginLeft: 0,
  },
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

export default Profile;
