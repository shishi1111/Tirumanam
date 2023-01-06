import React, { useContext, useEffect, useState } from "react";
import DropDownPicker from "../../assets/react-native-dropdown-pickerFront";
import fonts from "../contants/fonts";
import { View, Style, TouchableOpacity, Text, Alert } from "react-native";
import DatePicker from "react-native-date-picker";

import MaskInput, { Masks } from "react-native-mask-input";
import Fonts from "../contants/fonts";
import { Context } from "../screens/First_screen";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import {CountryPicker} from "react-native-country-codes-picker";

const DropdownMenu = ({ profileCallBack, color, colorchanged }) => {
  const [ExpandPadding, setExpandPadding] = useState("");
  // console.log(selectProfile);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/profileFor")
      .then((response) => response.json())
      .then((responseJson) => {
        setProfile(responseJson.result.profile_for_list);
        // console.log(responseJson.result.profile_for_list, "profile");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={profile.map((d) => ({ label: d.value, value: d.id }))}
      onSelectItem={(item) => {
        profileCallBack(item.label);
        // console.log(item.label, "hello");
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
      modalProps={{
        animationType: "fade",
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      containerStyle={{
        width: 310,
        // height: 4,
        marginLeft: 20,

        // marginHorizontal: 20,
        // marginVertical: 10,
        marginBottom: 5,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};
const DropdownFirst = ({ firstCallback, color, colorchanged }) => {
  console.log(color, "color");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [ExpandPadding, setExpandPadding] = useState("");

  // const [selectProfile, setselectProfile]= useState('');
  // console.log(selectProfile);
  const [items, setItems] = useState([
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      onSelectItem={(item) => {
        firstCallback(item.label);
        // console.log(item, "item");
      }}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onOpen={() => {
        setExpandPadding(true);
      }}
      onClose={() => setExpandPadding(false)}
      // autoScroll={true}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="I'm looking for a "
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      modalProps={{
        animationType: "fade",
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 300,
        height: 10,
        marginLeft: 45,
        color: "#505050",

        marginBottom: 30,

        // marginBottom: 30,
        // marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
    />
  );
};
const DropdownSecond = ({ secondCallback, color, colorchanged }) => {
  // const [selectProfile, setselectProfile]= useState('');
  // console.log(selectProfile);
  const [ExpandPadding, setExpandPadding] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "20", value: "1" },
    { label: "21", value: "2" },
    { label: "22", value: "3" },
    { label: "23", value: "4" },
    { label: "24", value: "5" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      onSelectItem={(item) => {
        secondCallback(item.label);
        // console.log(item, "item");
      }}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onOpen={() => setExpandPadding(true)}
      onClose={() => setExpandPadding(false)}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Age From"
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      modalProps={{
        animationType: "fade",
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
        color: "#505050",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 300,
        marginLeft: 45,
        // height: 4,
        marginTop: 30,
        // marginHorizontal: 20,
        // marginVertical: 10,
        marginBottom: 5,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};
const DropdownThird = ({ thirdCallback, color, colorchanged }) => {
  // const [selectProfile, setselectProfile]= useState('');
  // console.log(selectProfile);
  const [ExpandPadding, setExpandPadding] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "25", value: "1" },
    { label: "26", value: "2" },
    { label: "27", value: "3" },
    { label: "28", value: "4" },
    { label: "29", value: "5" },
    { label: "30", value: "6" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      onSelectItem={(item) => {
        thirdCallback(item.label);
        // console.log(item, "item");
      }}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onOpen={() => setExpandPadding(true)}
      onClose={() => setExpandPadding(false)}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Age To "
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      modalProps={{
        animationType: "fade",
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 300,
        marginLeft: 45,
        // height: 4,
        marginTop: 20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        marginBottom: 5,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownFour = ({ callbackfunDt, fourCallback, color, colorchanged }) => {
  const [ExpandPadding, setExpandPadding] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  // console.log(value, "vvvvv");
  const [relegion, setRelegion] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getRelegion")
      .then((response) => response.json())
      .then((responseJson) => {
        setRelegion(responseJson.result.relegion_list);
        // console.log(responseJson, "Mother");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish" },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      callbackfunDt={value}
      open={open}
      value={value}
      onSelectItem={(item) => {
        fourCallback(item.label);
        // console.log(item, "item");
      }}
      items={relegion.map((d) => ({ label: d.relegion, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      data={callbackfunDt(value)}
      onOpen={() => setExpandPadding(true)}
      onClose={() => setExpandPadding(false)}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Religion"
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
        fontWeight: "bold",
        fontSize: 14,
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 300,
        marginLeft: 45,
        // height: 4,
        marginTop: 20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginBottom: 5,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownFifth = ({ result, fifthCallback, color, colorchanged }) => {
  // const [selectProfile, setselectProfile]= useState('');
  // console.log(result, "rrrrr");
  const [ExpandPadding, setExpandPadding] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [community, setCommunity] = useState([]);
  const [item, setItem] = useState();

  useEffect(() => {
    fetch(`http://tirumanam.in/api/getCasteList/${result}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setCommunity(responseJson.result.sub_caste_list);
        // console.log(responseJson.result.sub_caste_list, "Mother");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [result]);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);
  const Register_first = {};
  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        fifthCallback(item.label);
        // console.log(item, "item");
      }}
      items={community.map((d) => ({ label: d.caste, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onOpen={() => setExpandPadding(true)}
      onClose={() => setExpandPadding(false)}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Community"
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      searchable={true}
      modalProps={{
        animationType: "fade",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 300,
        marginLeft: 45,
        // height: 4,
        marginTop: 20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginBottom: 5,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownCode = ({ codeCallBack, color, colorchanged }) => {
  const [country, setCountry] = useState([]);
  const [val, setVal] = useState();
  console.log(val?.label.slice(0, 5));
  useEffect(() => {
    fetch("http://tirumanam.in/api/getCountry")
      .then((response) => response.json())
      .then((responseJson) => {
        setCountry(responseJson.result.country_list, "eeeee");
        // console.log(responseJson.result.country_list, "cccccc");
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish" },
    { label: "Ground water ", value: "Ground water" },
  ]);
  // console.log(val?.label.slice(0, 5) != null ? val?.label.slice(0, 5) : "+91");
  // console.log(value, "valuee");
  return (
    <DropDownPicker
      open={open}
      //   value={setselectProfile(value)}
      value={val?.label.slice(0, 5) != null ? val?.label.slice(0, 5) : "+91"}
      items={country.map((d) => ({
        label: `${d.code}        ${d.country}`,
        value: d.id,
      }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder={
        val?.label.slice(0, 5) != null ? val?.label.slice(0, 5) : "+91"
      }
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      searchable={true}
      onSelectItem={(item) => {
        setVal(item);
        codeCallBack(item.label);
      }}
      modalProps={{
        animationType: "fade",
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 10,
      }}
      containerStyle={{
        width: 100,
        // maxHeight: ,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownLast = ({ knowCallback, color, colorchanged }) => {
  const [known, setKnown] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/howDoKnowUs")
      .then((response) => response.json())
      .then((responseJson) => {
        setKnown(responseJson.result.how_to_know_us);
        // console.log(responseJson.result.how_to_know_us, "knnnnnnnn");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        knowCallback(item.label);
      }}
      items={known.map((d) => ({ label: d.value, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select"
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      searchable={true}
      modalProps={{
        animationType: "fade",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 310,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginLeft: 20,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownOne = ({ maritalCallback, color, colorchanged }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Widow", value: "1" },
    { label: "Divorced", value: "2" },
    { label: "Yet to Divorce", value: "3" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      onSelectItem={(item) => {
        maritalCallback(item.label);
      }}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Marital Status"
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
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 310,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginLeft: 20,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
    />
  );
};

const DropdownTwo = ({ childrenCallback, color, colorchanged }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "No Child(s)", value: "1" },
    { label: "With Child(s)", value: "2" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      onSelectItem={(item) => {
        childrenCallback(item.label);
      }}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Child Status"
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
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 310,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginLeft: 20,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
    />
  );
};

const DropdownThree = ({ knowusCallback, color, colorchanged }) => {
  const [known, setKnown] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/howDoKnowUs")
      .then((response) => response.json())
      .then((responseJson) => {
        setKnown(responseJson.result.how_to_know_us);
        // console.log(responseJson.result.how_to_know_us, "knnnnnnnn");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        knowusCallback(item.label);
      }}
      items={known.map((d) => ({ label: d.value, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select"
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
        fontWeight: "bold",
        fontSize: 14,
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 310,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginLeft: 20,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownA = ({ raashiCallback, color, colorchanged }) => {
  const [raashi, setRaashi] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getRashiList")
      .then((response) => response.json())
      .then((responseJson) => {
        setRaashi(responseJson.result.raashi_list);
        // console.log(responseJson.result.raashi_list, "tryyyyyyy");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        raashiCallback(item.label);
      }}
      items={raashi.map((d) => ({ label: d.raashi, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Raashi"
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
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 20,
      }}
      containerStyle={{
        width: 155,
        marginLeft: 10,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 20,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
    />
  );
};

const DropdownCountry = ({
  callbackfunst,
  countryCallback,
  color,
  colorchanged,
}) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getCountry")
      .then((response) => response.json())
      .then((responseJson) => {
        setCountry(responseJson.result.country_list);
        // console.log(responseJson.result.country_list, "tryyyyyyy");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      callbackfunst={value}
      data={callbackfunst(value)}
      value={value}
      onSelectItem={(item) => {
        countryCallback(item.label);
      }}
      items={country.map((d) => ({ label: d.country, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Country"
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
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 20,
      }}
      containerStyle={{
        width: 155,
        marginLeft: 10,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 20,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownB = ({
  result,
  callbackfunct,
  stateCallback,
  color,
  colorchanged,
}) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`http://tirumanam.in/api/getStateList/${result}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setState(responseJson.result.states);
        // console.log(responseJson.result.states, "stttttt");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [result]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      callbackfunct={value}
      data={callbackfunct(value)}
      value={value}
      onSelectItem={(item) => {
        stateCallback(item.label);
      }}
      items={state.map((d) => ({ label: d.state, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select State"
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
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 20,
      }}
      containerStyle={{
        width: 155,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,

        marginRight: 20,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select District"
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
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
      }}
      containerStyle={{
        width: 155,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 20,
        marginLeft: 10,
        fontFamily: fonts.POPPINS_BLACK,
        color: "#505050",
      }}
    />
  );
};

const DropdownD = ({ result, cityCallback, color, colorchanged }) => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    fetch(`http://tirumanam.in/api/getCityList/${result}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setCity(responseJson.result.states);
        // console.log(responseJson.result.states, "ctyyyyyyy");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [result]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        cityCallback(item.label);
      }}
      items={city.map((d) => ({ label: d.city, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select City"
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      searchable={true}
      modalProps={{
        animationType: "fade",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 20,
      }}
      containerStyle={{
        width: 155,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 20,
        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};

const DropdownCom = ({
  result,
  callbackfunsub,
  comCallback,
  color,
  colorchanged,
}) => {
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    fetch(`http://tirumanam.in/api/getCasteList/${result}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setCommunity(responseJson.result.sub_caste_list);
        // console.log(responseJson.result.sub_caste_list, "Mother");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [result]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      callbackfunsub={value}
      data={callbackfunsub(value)}
      value={value}
      onSelectItem={(item) => {
        comCallback(item.label);
      }}
      items={community.map((d) => ({ label: d.caste, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Community"
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      searchable={true}
      modalProps={{
        animationType: "fade",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 20,
      }}
      containerStyle={{
        width: 150,
        marginLeft: 20,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};

const DropdownN = ({
  callbackfunDt,
  religionCallback,
  color,
  colorchanged,
}) => {
  const [relegion, setRelegion] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getRelegion")
      .then((response) => response.json())
      .then((responseJson) => {
        setRelegion(responseJson.result.relegion_list);
        // console.log(responseJson, "Mother");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      callbackfunDt={value}
      data={callbackfunDt(value)}
      value={value}
      onSelectItem={(item) => {
        religionCallback(item.label);
      }}
      items={relegion.map((d) => ({ label: d.relegion, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Religion"
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
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      containerStyle={{
        width: 310,
        marginLeft: 20,

        // height: 4,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};

const DropdownM = ({ motherCallback, color, colorchanged }) => {
  const [mother, setMother] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getMotherTongue")
      .then((response) => response.json())
      .then((responseJson) => {
        setMother(responseJson.result.mother_tongue_list);
        // console.log(responseJson.result.mother_tongue_list, "moooooooooo");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        motherCallback(item.label);
      }}
      items={mother.map((d) => ({ label: d.mother_tongue, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Mother Tongue"
      modalTitle="Select an item"
      listMode="MODAL"
      setListMode={"MODAL"}
      searchable={true}
      modalProps={{
        animationType: "fade",
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 315,
        marginLeft: 20,
        // height: 4,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 20,
        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};

const DropdownSub = ({ result, subComCallback, color, colorchanged }) => {
  const [subCommunity, setSubCommunity] = useState([]);

  useEffect(() => {
    fetch(`http://tirumanam.in/api/getSubCasteList/${result}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setSubCommunity(responseJson.result.sub_caste_list);
        // console.log(responseJson.result.sub_caste_list, "subbbbbbbb");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [result]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        subComCallback(item.label);
      }}
      items={subCommunity.map((d) => ({ label: d.sub_caste, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Sub Community"
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
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 12,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 20,
      }}
      containerStyle={{
        width: 150,
        marginRight: 20,
        maxHeight: 10,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,

        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};

const DropdownS = ({ starCallback, color, colorchanged }) => {
  // const [selectProfile, setselectProfile]= useState('');
  // console.log(selectProfile);

  const [star, setStar] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getStarList")
      .then((response) => response.json())
      .then((responseJson) => {
        setStar(responseJson.result.star_list);
        // console.log(responseJson.result.star_list, "Starrrrrr");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        starCallback(item.label);
      }}
      items={star.map((d) => ({ label: d.star, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Star"
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
        fontWeight: "bold",
        fontSize: 14,
      }}
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 20,
      }}
      containerStyle={{
        width: 150,
        marginLeft: 20,
        // height: 4,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,

        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};

const DropdownR = () => {
  // const [selectProfile, setselectProfile]= useState('');
  // console.log(selectProfile);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      //   value={setselectProfile(value)}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Raashi"
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
      }}
      containerStyle={{
        width: 165,
        // height: 4,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};

const DropdownDosh = ({ educationCallBack, color, colorchanged }) => {
  // const [selectProfile, setselectProfile]= useState('');
  // console.log(selectProfile);

  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getEducationList")
      .then((response) => response.json())
      .then((responseJson) => {
        setEducation(responseJson.result.education_list, "eeeee");
        // console.log(responseJson.result.education_list, "eeeee");
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      onSelectItem={(item) => {
        educationCallBack(item.label);
      }}
      items={education.map((d) => ({ label: d.education, value: d.id }))}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Highest"
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
      style={{
        borderColor:
          color === true
            ? "#BF565A"
            : colorchanged === false
            ? "#000000"
            : null,
      }}
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
        marginLeft: 40,
      }}
      containerStyle={{
        width: 310,
        marginLeft: 20,
        // height: 4,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 10,
        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};
const DropdownSubcommunity = () => {
  // const [selectProfile, setselectProfile]= useState('');
  // console.log(selectProfile);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Sathiish ", value: "Sathiish  " },
    { label: "Ground water ", value: "Ground water " },
  ]);

  return (
    <DropDownPicker
      open={open}
      //   value={setselectProfile(value)}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      DropDownDirectionType={"BOTTOM"}
      labelStyle={"#00395a"}
      placeholder="Select Sub Community"
      placeholderStyle={{
        color: "#615151",
        fontWeight: "bold",
        fontSize: 14,
      }}
      textStyle={{
        fontSize: 15,
        color: "#615151",
        fontWeight: "bold",
      }}
      containerStyle={{
        width: 305,
        marginLeft: 20,
        // height: 4,
        // marginTop:-20,
        // marginHorizontal: 20,
        // marginVertical: 10,
        // marginBottom: expandPadding == true ? 240 : 30,
        marginRight: 10,
        marginBottom: 20,
        fontFamily: fonts.POPPINS_BLACK,
      }}
    />
  );
};

//   function CountryCodePicker() {
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

//   function DropdownDosh(Component) {
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [expandPadding, setExpandPadding] = useState("");

//     console.log(value);

//     // useEffect(() => {
//       //   AsyncStorage.setItem("expandpadding", expandPadding);
//       //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
//       // }, []);

//       const [items, setItems] = useState([
//         { label: "MySelf ", value: "Myself " },
//         { label: "Son ", value: "Son " },
//         { label: "Daughter ", value: "Daughter " },
//         { label: "Brother ", value: "Brother " },
//         { label: "Sister ", value: "Sister " },
//         { label: "Relative ", value: "Relative " },
//         { label: "Friend ", value: "Friend " },
//       ]);

//       return (
//         <View>
//       <DropDownPicker
//         open={open}
//         value={value}
//         items={items}
//         setOpen={setOpen}
//         setValue={setValue}
//         setItems={setItems}
//         onOpen={() => setExpandPadding(true)}
//         onClose={() => setExpandPadding(false)}
//         DropDownDirectionType={"AUTO"}
//         labelStyle={"#00395a"}
//         placeholder="Select Higher Education"
//         placeholderStyle={{
//           color: "#615151",

//           marginLeft: 30,
//           fontFamily: fonts.POPPINS_SEMI_BOLD,
//         }}
//         textStyle={{
//           fontSize: 14,
//           marginLeft: 29,
//           color: "#615151",

//           fontFamily: fonts.POPPINS_SEMI_BOLD,
//         }}
//         containerStyle={{
//           // width: 50,
//           // height: 4,
//           // marginTop: 8,
//           // marginBottom: expandPadding == true ? 240 : 30,
//           // marginRight: 10,
//           paddingVertical: 10,
//           fontFamily: fonts.POPPINS_BLACK,
//         }}

//         />
//     </View>
//   );
// }
function Dates({ dateCallBack, color, colorchanged }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  dateCallBack(date.toISOString().slice(0, 10));
  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text
          title="Open"
          onChangeText={(item) => item}
          style={{
            color: "#000000",
            textAlign: "center",
            width: 310,
            height: 50,
            borderRadius: 10,
            marginLeft: 20,

            borderColor:
              color === true
                ? "#BF565A"
                : colorchanged === false
                ? "#000000"
                : null,

            borderWidth: 1,

            textAlignVertical: "center",
          }}
        >
          {date.toISOString().slice(0, 10)}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
          // datestring(date.toISOString().slice(0, 10));
          console.log(date.toISOString().slice(0, 10), "iso");
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export {
  DropdownMenu,
  DropdownDosh,
  DropdownCode,
  DropdownFirst,
  DropdownSecond,
  DropdownThird,
  DropdownFour,
  DropdownFifth,
  DropdownLast,
  DropdownOne,
  DropdownTwo,
  DropdownThree,
  DropdownA,
  DropdownB,
  DropdownC,
  DropdownD,
  DropdownCom,
  DropdownSub,
  DropdownS,
  DropdownR,
  DropdownN,
  DropdownM,
  Dates,
  DropdownSubcommunity,
  DropdownCountry,
};
