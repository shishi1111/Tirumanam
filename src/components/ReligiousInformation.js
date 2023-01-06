import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DropDownPicker from "../../assets/react-native-dropdown-picker";
import fonts from "../contants/fonts";
import MaskInput, { Masks } from "react-native-mask-input";
import { Fonts } from "../contants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "react-native-date-picker";
import Fontisto from "react-native-vector-icons/Fontisto";
function DropdownReligion({ callbackfuncom, religionCallBack }) {
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

  const [religion, setRelegion] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getRelegion")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setRelegion(responseJson.result.relegion_list);
        console.log(responseJson.result.relegion_list, "religionnnnn");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        callbackfuncom={value}
        onSelectItem={(item) => {
          religionCallBack(item.label);
        }}
        data={callbackfuncom(value)}
        value={value}
        items={religion.map((d) => ({ label: d.relegion, value: d.id }))}
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
export function DropdownCommunity({
  result,
  callbackfunsub,
  communityCallBack,
}) {
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

  const [community, setCommunity] = useState([]);

  useEffect(() => {
    fetch(`http://tirumanam.in/api/getCasteList/${result}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setCommunity(responseJson.result.sub_caste_list);
        console.log(responseJson.result.sub_caste_list, "Mother");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [result]);

  return (
    <View>
      <DropDownPicker
        open={open}
        callbackfunsub={value}
        data={callbackfunsub(value)}
        value={value}
        onSelectItem={(item) => {
          communityCallBack(item.label);
        }}
        items={community.map((d) => ({ label: d.caste, value: d.id }))}
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
export function DropdownSubCommunity({ result, subCommunityCallBack }) {
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

  const [subCommunity, setSubCommunity] = useState([]);

  useEffect(() => {
    fetch(`http://tirumanam.in/api/getSubCasteList/${result}`)
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setSubCommunity(responseJson.result.sub_caste_list);
        console.log(responseJson.result.sub_caste_list, "subbbbbbbb");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [result]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          subCommunityCallBack(item.label);
        }}
        items={subCommunity.map((d) => ({ label: d.sub_caste, value: d.id }))}
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
export function TextInputGothra({ gothraCallBack }) {
  return (
    <View style={{ marginTop: 4 }}>
      <TextInput
        multiline={true}
        underlineColorAndroid="transparent"
        textAlign="center"
        onChangeText={(item) => gothraCallBack(item)}
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
export function DropdownStar({ starCallBack }) {
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

  const [star, setStar] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getStarList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setStar(responseJson.result.star_list);
        console.log(responseJson.result.star_list, "starrrr");
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
          starCallBack(item.label);
        }}
        items={star.map((d) => ({ label: d.star, value: d.id }))}
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
          marginTop: 17,
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownRaasi({ raasiCallBack }) {
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

  const [raashi, setRaashi] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getRashiList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setRaashi(responseJson.result.raashi_list);
        console.log(responseJson.result.raashi_list, "raasiiiii");
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
          raasiCallBack(item.label);
        }}
        items={raashi.map((d) => ({ label: d.raashi, value: d.id }))}
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
          marginTop: 8,
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownDosh({ doshCallBack }) {
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

  const [dhosa, setDhosa] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getDoshList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setDhosa(responseJson.result.dosh_list);
        console.log(responseJson.result.dosh_list, "dhossss");
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
          doshCallBack(item.label);
        }}
        items={dhosa.map((d) => ({ label: d.dosh, value: d.id }))}
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
          marginTop: 8,
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function TextInputKuladeyva({ kuladeyvaCallBack }) {
  return (
    <View style={{ marginTop: 15 }}>
      <TextInput
        multiline={true}
        underlineColorAndroid="transparent"
        textAlign="center"
        onChangeText={(item) => kuladeyvaCallBack(item)}
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
export function TextInputKuladeyvaPlace({ kuladeyvaPlaceCallBack }) {
  return (
    <View style={{ marginTop: 15 }}>
      <TextInput
        multiline={true}
        underlineColorAndroid="transparent"
        textAlign="center"
        onChangeText={(item) => kuladeyvaPlaceCallBack(item)}
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
export function DropdownPlace({ callbackfunst, data, placeCallBack }) {
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

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getCountry")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setCountry(responseJson.result.country_list);
        // console.log(responseJson.result.country_list, "tryyyyyyy");
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
          placeCallBack(item.label);
        }}
        callbackfunst={value}
        data={callbackfunst(value)}
        items={country.map((d) => ({ label: d.country, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Country"
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
          marginRight: 10,
          marginBottom: data === true ? 6 : 0,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownPState({ result, callbackfunct, data, stateCallBack }) {
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

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          stateCallBack(item.label);
        }}
        callbackfunct={value}
        data={callbackfunct(value)}
        items={state.map((d) => ({ label: d.state, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="State"
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
          marginTop: 30,
          marginRight: 10,

          marginBottom: data === true ? 6 : 0,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownPDistrict() {
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

  const [dhosa, setDhosa] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getDoshList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setDhosa(responseJson.result.dosh_list);
        console.log(responseJson.result.dosh_list, "dhossss");
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
        items={dhosa.map((d) => ({ label: d.dosh, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="District"
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
          marginTop: 30,
          marginBottom: 10,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownPCity({ result, data, cityCallBack }) {
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

  const [city, setCity] = useState([]);

  useEffect(() => {
    fetch(`http://tirumanam.in/api/getCityList/${result}`)
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setCity(responseJson.result.states);
        // console.log(responseJson.result.states, "ctyyyyyyy");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [result]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          cityCallBack(item.label);
        }}
        items={city.map((d) => ({ label: d.city, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="City"
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
          marginTop: 30,
          marginRight: 10,
          marginBottom: data === true ? 30 : 0,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export default DropdownReligion;
