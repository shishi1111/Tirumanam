import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DropDownPicker from "../../assets/react-native-dropdown-picker";
import fonts from "../contants/fonts";

function DropdownFValue({ fValueCallBack }) {
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

  const [fValue, setFValue] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getFamilyValueList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setFValue(responseJson.result.family_values_list);
        console.log(responseJson.result.family_values_list, "fvalueeee");
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
          fValueCallBack(item.label);
        }}
        items={fValue.map((d) => ({ label: d.family_values, value: d.id }))}
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
export function DropdownFStatus({ fStatusCallBack }) {
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

  const [fStatus, setFStatus] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getFamilyStatusList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setFStatus(responseJson.result.family_status);
        console.log(responseJson.result.family_status, "setFStatus");
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
          fStatusCallBack(item.label);
        }}
        items={fStatus.map((d) => ({ label: d.family_status, value: d.id }))}
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
          marginTop: 6,
        }}
      />
    </View>
  );
}
export function DropdownMStatus({ mStatusCallBack }) {
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

  const [mStatus, setMStatus] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getMotherStatusList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setMStatus(responseJson.result.mother_statuses_list);
        console.log(responseJson.result.mother_statuses_list, "setMStatus");
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
          mStatusCallBack(item.label);
        }}
        items={mStatus.map((d) => ({ label: d.mother_status, value: d.id }))}
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
          marginTop: 6,
        }}
      />
    </View>
  );
}
export function DropdownBMarried({ bMarriedCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5+", value: "5" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          bMarriedCallBack(item.label);
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
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
          marginTop: 6,
        }}
      />
    </View>
  );
}
export function DropdownSMarried({ sMarriedCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5+", value: "5" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        onSelectItem={(item) => {
          sMarriedCallBack(item.label);
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
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
          marginTop: 6,
        }}
      />
    </View>
  );
}

export function DropdownFType({ fTypeCallBack }) {
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

  const [fType, setFType] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getFamilyTypeList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setFType(responseJson.result.family_type_list);
        console.log(responseJson.result.family_type_list, "setFType");
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
          fTypeCallBack(item.label);
        }}
        items={fType.map((d) => ({ label: d.family_type, value: d.id }))}
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
          marginTop: 6,
        }}
      />
    </View>
  );
}
export function DropdownFatherStatus({ fatherStatusCallBack }) {
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

  const [father, setFather] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getFatherStatusList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setFather(responseJson.result.father_status_list);
        console.log(responseJson.result.father_status_list, "setFather");
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
          fatherStatusCallBack(item.label);
        }}
        items={father.map((d) => ({ label: d.father_status, value: d.id }))}
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
          marginTop: 6,
        }}
      />
    </View>
  );
}
export function DropdownNBrother({ nBrotherCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5+", value: "5" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          nBrotherCallBack(item.label);
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
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
          marginTop: 6,
        }}
      />
    </View>
  );
}
export function DropdownNSister({ nSisterCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5+", value: "5" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          nSisterCallBack(item.label);
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
          marginBottom: expandPadding == true ? 240 : 30,
          marginRight: 10,
          fontFamily: fonts.POPPINS_BLACK,
          marginTop: 6,
        }}
      />
    </View>
  );
}

export default DropdownFValue;
