import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DropDownPicker from "../../assets/react-native-dropdown-picker";
import fonts from "../contants/fonts";

function DropdownParter({ partnerCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([
    { label: "SAME COMMUNITY ", value: "1" },
    { label: "SAME COMMUNITY & OTHER COMMUNITY ALSO", value: "2" },
  ]);

  // const [religion, setRelegion] = useState([]);

  // useEffect(() => {
  //   fetch("http://tirumanam.in/api/getRelegion")
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       // await AsyncStorage.setItem("relegion_data", value);
  //       // console.log(AsyncStorage.setItem, rrrrr);
  //       setRelegion(responseJson.result.relegion_list);
  //       console.log(responseJson.result.relegion_list, "religionnnnn");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <View>
      <DropDownPicker
        open={open}
        // callbackfuncom={value}
        // data={callbackfuncom(value)}
        value={value}
        items={items}
        onSelectItem={(item) => {
          partnerCallBack(item.label);
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
        }}
      />
    </View>
  );
}

export function DropdownDosham({ dhosamCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  // useEffect(() => {
  //   AsyncStorage.setItem("expandpadding", expandPadding);
  //   console.log(AsyncStorage.getItem("expandpadding", "expandPadding"));
  // }, []);

  const [items, setItems] = useState([]);

  const [dhosam, setDhosam] = useState([]);

  useEffect(() => {
    fetch("http://tirumanam.in/api/getDoshList")
      .then((response) => response.json())
      .then((responseJson) => {
        // await AsyncStorage.setItem("relegion_data", value);
        // console.log(AsyncStorage.setItem, rrrrr);
        setDhosam(responseJson.result.dosh_list);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(
    dhosam.filter((item) => item?.id === value[(0, 1, 2, 3, 4)]),
    "parent"
  );

  console.log(value, "items");
  return (
    <View>
      <DropDownPicker
        open={open}
        multiple={true}
        min={1}
        modalTitle="Select dosha's from list"
        // max={5}
        // callbackfuncom={value}
        // data={callbackfuncom(value)}
        value={value}
        onSelectItem={(item) => {
          dhosamCallBack(item.map((d) => d.label));
          // console.log(item.map((d) => d.label));
        }}
        items={dhosam.map((d) => ({ label: d.dosh, value: d.id }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onOpen={() => setExpandPadding(true)}
        onClose={() => setExpandPadding(false)}
        DropDownDirectionType={"AUTO"}
        labelStyle={"#00395a"}
        placeholder="Select Matrimony Profile"
        listMode="MODAL"
        setListMode={"MODAL"}
        searchable={false}
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

export default DropdownParter;
