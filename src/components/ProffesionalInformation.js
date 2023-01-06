import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DropDownPicker from "../../assets/react-native-dropdown-picker";
import fonts from "../contants/fonts";
import MaskInput, { Masks } from "react-native-mask-input";
import { Fonts } from "../contants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Fontisto from "react-native-vector-icons/Fontisto";
function DropdownHighEducation({ educationCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "MySelf ", value: "Myself " },
    { label: "Son ", value: "Son " },
    { label: "Daughter ", value: "Daughter " },
    { label: "Brother ", value: "Brother " },
    { label: "Sister ", value: "Sister " },
    { label: "Relative ", value: "Relative " },
    { label: "Friend ", value: "Friend " },
  ]);

  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getEducationList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setEducation(responseJson.result.education_list);
        console.log(responseJson.result.education_list, "educationnn");
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
          educationCallBack(item.label);
          console.log(item);
        }}
        items={education.map((d) => ({ label: d.education, value: d.id }))}
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
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function TextInputCollege({ collegeCallBack }) {
  return (
    <View style={{ marginTop: 6 }}>
      <TextInput
        multiline={true}
        underlineColorAndroid="transparent"
        textAlign="center"
        onChangeText={(item) => collegeCallBack(item)}
        style={{
          borderColor: "#000000",
          borderRadius: 8,
          borderWidth: 1,
          height: 40,
          width: 180,
          fontFamily: fonts.POPPINS_MEDIUM,
          color: "#615151",
        }}
      ></TextInput>
    </View>
  );
}
export function TextInputEducation({ inputEducationCallBack }) {
  return (
    <View style={{ marginTop: 6 }}>
      <TextInput
        multiline={true}
        underlineColorAndroid="transparent"
        textAlign="center"
        onChangeText={(item) => inputEducationCallBack(item)}
        style={{
          borderColor: "#000000",
          borderRadius: 8,
          borderWidth: 1,
          height: 40,
          width: 180,
          fontFamily: fonts.POPPINS_MEDIUM,
          color: "#615151",
        }}
      ></TextInput>
    </View>
  );
}
export function DropdownEmployed({ employedCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "MySelf ", value: "Myself " },
    { label: "Son ", value: "Son " },
    { label: "Daughter ", value: "Daughter " },
    { label: "Brother ", value: "Brother " },
    { label: "Sister ", value: "Sister " },
    { label: "Relative ", value: "Relative " },
    { label: "Friend ", value: "Friend " },
  ]);

  const [employ, setEmploy] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getEmployed_inList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setEmploy(responseJson.result.employed_in);
        console.log(responseJson.result.employed_in, "empoyyy");
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
          employedCallBack(item.label);
        }}
        items={employ.map((d) => ({ label: d.employed_in, value: d.id }))}
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
          marginTop: 6,
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownOccupation({ occupationCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "MySelf ", value: "Myself " },
    { label: "Son ", value: "Son " },
    { label: "Daughter ", value: "Daughter " },
    { label: "Brother ", value: "Brother " },
    { label: "Sister ", value: "Sister " },
    { label: "Relative ", value: "Relative " },
    { label: "Friend ", value: "Friend " },
  ]);

  const [occupation, setOccupation] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getOccupationList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setOccupation(responseJson.result.occupation_lists);
        console.log(responseJson.result.occupation_lists, "empoyyy");
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
          occupationCallBack(item.label);
        }}
        items={occupation.map((d) => ({ label: d.occupation, value: d.id }))}
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
          marginTop: 6,
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}

export function TextInputOccupationDetail({ inputDetailCallBack }) {
  return (
    <View style={{ marginTop: 6 }}>
      <TextInput
        multiline={true}
        underlineColorAndroid="transparent"
        textAlign="center"
        onChangeText={(item) => inputDetailCallBack(item)}
        style={{
          borderColor: "#000000",
          borderRadius: 8,
          borderWidth: 1,
          height: 40,
          width: 180,
          fontFamily: fonts.POPPINS_MEDIUM,
          color: "#615151",
        }}
      ></TextInput>
    </View>
  );
}
export function DropdownIncomeType({ incomeTypeCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "Weekly", value: "1" },
    { label: "Monthly", value: "2" },
    { label: "Yearly", value: "3" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        onSelectItem={(item) => {
          incomeTypeCallBack(item.label);
        }}
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
          marginTop: 6,
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownIncome({ incomeCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "MySelf ", value: "Myself " },
    { label: "Son ", value: "Son " },
    { label: "Daughter ", value: "Daughter " },
    { label: "Brother ", value: "Brother " },
    { label: "Sister ", value: "Sister " },
    { label: "Relative ", value: "Relative " },
    { label: "Friend ", value: "Friend " },
  ]);

  const [income, setIncome] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getIncomeList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setIncome(responseJson.result.income_list);
        console.log(responseJson.result.income_list, "incomee");
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
          incomeCallBack(item.label);
        }}
        items={income.map((d) => ({ label: d.monthly_income, value: d.id }))}
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
          marginTop: 6,
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownResident({ residentCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "MySelf ", value: "Myself " },
    { label: "Son ", value: "Son " },
    { label: "Daughter ", value: "Daughter " },
    { label: "Brother ", value: "Brother " },
    { label: "Sister ", value: "Sister " },
    { label: "Relative ", value: "Relative " },
    { label: "Friend ", value: "Friend " },
  ]);

  const [resident, setResident] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getResidentStatus")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setResident(responseJson.result.resident_status);
        console.log(responseJson.result.resident_status, "Resident");
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
          residentCallBack(item.label);
        }}
        items={resident.map((d) => ({ label: d.value, value: d.id }))}
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
          marginTop: 6,
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export default DropdownHighEducation;
