import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DropDownPicker from "../../assets/react-native-dropdown-picker";
import fonts from "../contants/fonts";
import MaskInput, { Masks } from "react-native-mask-input";
import { Fonts } from "../contants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Fontisto from "react-native-vector-icons/Fontisto";
function DropdownProfile({ profileCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  const [items, setItems] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/profileFor")
      .then((response) => response.json())
      .then((responseJson) => {
        setProfile(responseJson.result.profile_for_list);
        console.log(responseJson.result.profile_for_list, "profile");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={profile.map((d) => ({ label: d.value, value: d.id }))}
        profileCallBack={value}
        data={profileCallBack(value)}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginBottom: expandPadding == true ? 240 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}

export function TextInputName({ nameCallBack }) {
  return (
    <View>
      <TextInput
        multiline={true}
        underlineColorAndroid="transparent"
        textAlign="center"
        onChangeText={(item) => nameCallBack(item)}
        style={{
          borderColor: "#000000",
          borderRadius: 8,
          borderWidth: 1,
          height: 40,
          width: 180,
          fontFamily: fonts.POPPINS_MEDIUM,
          color: "#615151",
          marginLeft: 40,
        }}
      ></TextInput>
    </View>
  );
}

export function DropDownContainer({ bodyCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  const [items, setItems] = useState([
    // { label: "Slim ", value: "  Slim " },
    // { label: "Athletic ", value: "Athletic" },
    // { label: "Normal ", value: "Normal " },
    // { label: "Fat ", value: "Fat " },
    // { label: "Confidental ", value: "Confidental" },
  ]);

  const [body, setBody] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getBodyType")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setBody(responseJson.result.body_type_list);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(items, "bodytype");
  return (
    <View>
      <DropDownPicker
        onSelectItem={(item) => {
          bodyCallBack(item.label);
          console.log(item.label);
        }}
        open={open}
        value={value}
        items={body.map((d) => ({ label: d.body_type, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
          color: "#615151",
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          // color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
          color: "#615151",
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
          color: "#615151",
        }}
      />
    </View>
  );
}

export function DropDownComplexion({ complexionCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    // { label: "Slim ", value: "  Slim " },
    // { label: "Athletic ", value: "Athletic" },
    // { label: "Normal ", value: "Normal " },
    // { label: "Fat ", value: "Fat " },
    // { label: "Confidental ", value: "Confidental" },
  ]);

  const [complex, setComplex] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getComplexion")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setComplex(responseJson.result.complexion_list);
        console.log(responseJson.result.complexion_list, "comppp");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          complexionCallBack(item.label);
          // console.log(item.label);
        }}
        items={complex.map((d) => ({ label: d.complexion, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
          color: "#615151",
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          // color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
          color: "#615151",
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 240 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
          color: "#615151",
        }}
      />
    </View>
  );
}

export function DropDownPhysical({ physicalCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    // { label: "Normal ", value: "Normal " },
    // { label: "Physically Challanged ", value: "Physically Challanged" },
  ]);

  const [physical, setPhysical] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getPhysicalStatusList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setPhysical(responseJson.result.physical_statuses_list);
        console.log(responseJson.result.physical_statuses_list, "phyyyyy");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          physicalCallBack(item.label);
          console.log(item.label);
        }}
        items={physical.map((d) => ({ label: d.physical_status, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 100 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const Age = ({ dates, ageCallBack }) => {
  const [datas, setDatas] = useState();

  const date = dates?.slice(8, 10);
  const month = dates?.slice(5, 7);
  const year = dates?.slice(0, 4);

  ageCallBack(getAge(`${year}-${month}-${date}`));
  console.log(getAge(`${year}-${month}-${date}`), "hello");

  return (
    <View
      style={{
        marginTop: 12,
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 7,
        width: 180,
        borderRadius: 8,
        borderColor: "#000000",
        borderWidth: 1,
        marginLeft: 40,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: fonts.POPPINS_SEMI_BOLD,
            marginLeft: 40,
            color: "#615151",
          }}
        >
          {getAge(`${year}-${month}-${date}`)}
        </Text>
      </View>
      <Fontisto
        name="slightly-smile"
        size={18}
        color="#875F9A"
        style={{ marginRight: 10, marginTop: 4 }}
      ></Fontisto>
    </View>
  );
};

export function TextiMask() {
  const [phone, setPhone] = React.useState("");
  useEffect(() => {
    AsyncStorage.getItem("masked");
  });
  return (
    <View>
      <MaskInput
        value={phone}
        onChangeText={(masked, unmasked) => {
          setPhone(masked); // you can use the unmasked value as well

          // assuming you typed "9" all the way:
          console.log(masked); // (99) 99999-9999
          console.log(unmasked); // 99999999999
          AsyncStorage.setItem("masked", masked);
        }}
        mask={Masks.DATE_DDMMYYYY}
        style={{
          borderColor: "#000000",
          borderWidth: 1,
          backgroundColor: "#ffffff",
          marginTop: 10,
          borderRadius: 8,
          marginLeft: 40,
          fontSize: 13,
          textAlign: "center",
          fontFamily: Fonts.POPPINS_SEMI_BOLD,
          color: "#615151",
          maxHeight: 40,
        }}
      />
    </View>
  );
}
export function DropDownHeight({ heightCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Slim ", value: "  Slim " },
    { label: "Athletic ", value: "Athletic" },
    { label: "Normal ", value: "Normal " },
    { label: "Fat ", value: "Fat " },
    { label: "Confidental ", value: "Confidental" },
  ]);

  const [height, setHeight] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getHeightList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setHeight(responseJson.result.height_list);
        console.log(responseJson.result.height_list, "hittttt");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          heightCallBack(item.label);
        }}
        items={height.map((d) => ({ label: d.height, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 240 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropDownWeight({ weightCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Slim ", value: "  Slim " },
    { label: "Athletic ", value: "Athletic" },
    { label: "Normal ", value: "Normal " },
    { label: "Fat ", value: "Fat " },
    { label: "Confidental ", value: "Confidental" },
  ]);

  const [weight, setWeight] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getWeightList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setWeight(responseJson.result.weight_list);
        console.log(responseJson.result.weight_list, "mariiiiiii");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          weightCallBack(item.label);
        }}
        items={weight.map((d) => ({ label: d.weight, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 240 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function MaritalStatusBox({ maritalCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Slim ", value: "  Slim " },
    { label: "Athletic ", value: "Athletic" },
    { label: "Normal ", value: "Normal " },
    { label: "Fat ", value: "Fat " },
    { label: "Confidental ", value: "Confidental" },
  ]);

  const [marital, setMarital] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getMaritalStatus")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setMarital(responseJson.result.marital_status_list);
        console.log(responseJson.result.marital_status_list, "mariiiiiii");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          maritalCallBack(item.label);
        }}
        items={marital.map((d) => ({ label: d.marital_status, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 240 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropDownMotherTongue({ motherCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Slim ", value: "  Slim " },
    { label: "Athletic ", value: "Athletic" },
    { label: "Normal ", value: "Normal " },
    { label: "Fat ", value: "Fat " },
    { label: "Confidental ", value: "Confidental" },
  ]);

  const [mother, setMother] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getMotherTongue")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setMother(responseJson.result.mother_tongue_list);
        console.log(responseJson.result.mother_tongue_list, "motherrrrrrr");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          motherCallBack(item.label);
        }}
        items={mother.map((d) => ({ label: d.mother_tongue, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 240 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropDownKnowToRead({ knowToCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Yes ", value: " Yes" },
    { label: "No", value: "No" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          knowToCallBack(item.label);
        }}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 110 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropDownEatingHabits({ eatCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Vegetarian", value: " Vegetarian" },
    { label: "Non-Vegetarian", value: "Non-Vegetarian" },
    { label: "Eggetarian", value: " Eggetarian" },
    { label: "Confidential", value: "Confidential" },
  ]);

  const [eat, setEat] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getEatingHabits")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setEat(responseJson.result.complexion_list);
        console.log(responseJson.result.complexion_list, "eattttt");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          eatCallBack(item.label);
        }}
        items={eat.map((d) => ({ label: d.food_habit, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 190 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropDownDrinkingHabits({ drinkCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "No", value: "No" },
    { label: "Occassionally", value: "Occassionally" },
    { label: "Yes", value: " Yes" },
  ]);

  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getMaritalStatus")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setDrink(responseJson.result.marital_status_list);
        console.log(responseJson.result.marital_status_list, "drinkkkkkk");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          drinkCallBack(item.label);
        }}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 7,
          marginBottom: expandPadding == true ? 150 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropDownSmokingHabits({ smokeCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "No", value: "No" },
    { label: "Occassionally", value: "Occassionally" },
    { label: "Yes", value: " Yes" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        onSelectItem={(item) => {
          smokeCallBack(item.label);
        }}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"BOTTOM"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        modalTitle="Select an item"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={true}
        modalProps={{
          animationType: "fade",
        }}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
        placeholderStyle={{
          color: "#615151",

          marginLeft: 30,
          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        textStyle={{
          fontSize: 13,
          marginLeft: 29,
          color: "#615151",

          fontFamily: fonts.POPPINS_SEMI_BOLD,
        }}
        containerStyle={{
          width: 180,
          height: 4,
          marginTop: 10,
          marginBottom: expandPadding == true ? 150 : 30,
          marginLeft: 40,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export default DropdownProfile;
