import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DropDownPicker from "../../assets/react-native-dropdown-picker";
import fonts from "../contants/fonts";

function DropdownHobby({ hobbyCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Cooking", value: "1" },
    { label: "Painting", value: "2" },
    { label: "Gardening / Landscaping...", value: "3" },
    { label: "Pets", value: "4" },
    { label: "Puzzles ", value: "5" },
    { label: "Playing Musical Instruments...", value: "6" },
    { label: "Nature", value: "7" },
    { label: "Listening to Music", value: "8" },
    { label: "Photography", value: "9" },
    { label: "Art / Handicraft", value: "10" },
    { label: "Internet Surfing", value: "11" },
    { label: "Dancing", value: "12" },
    { label: "Movie", value: "13" },
    { label: "Travelling", value: "14" },
  ]);
  return (
    <View>
      <DropDownPicker
        open={open}
        multiple={true}
        min={1}
        onSelectItem={(item) => {
          hobbyCallBack(item.map((d) => d.label));
        }}
        modalTitle="Select dosha's from list"
        value={value}
        items={items}
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
          marginLeft: 60,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownMusic({ musicCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Indian Song", value: "1" },
    { label: "Classical Music", value: "2" },
    { label: "Western Music", value: "3" },
  ]);
  const [music, setMusic] = useState();
  const [music1, setMusic1] = useState();

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          musicCallBack(item.map((d) => d.label));
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
        multiple={true}
        min={1}
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
          marginLeft: 60,
          marginTop: 6,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownSports({ sportsCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "Criket ", value: "1 " },
    { label: "Swimming ", value: "2 " },
    { label: "Chess ", value: "3 " },
    { label: "Billiards ", value: "4 " },
    { label: "Badminton ", value: "5 " },
    { label: "Football ", value: "6 " },
    { label: "Basketball ", value: "7 " },
    { label: "Volleyball ", value: "8 " },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          sportsCallBack(item.map((d) => d.label));
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
        multiple={true}
        min={1}
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
          marginLeft: 60,
          marginTop: 6,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownSpoken({ spokenCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: "English ", value: "1 " },
    { label: "Arabic ", value: "2 " },
    { label: "Hindi ", value: "3 " },
    { label: "Tamil ", value: "4 " },
    { label: "Malayalam ", value: "5 " },
    { label: "Urdu ", value: "6 " },
    { label: "Telungu ", value: "7 " },
    { label: "Marathi ", value: "8 " },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        onSelectItem={(item) => {
          spokenCallBack(item.map((d) => d.label));
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
        multiple={true}
        min={1}
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
          marginLeft: 60,
          marginTop: 6,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownInterest({ interestCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);
  const [items, setItems] = useState([
    { label: " Adventure sports ", value: "1 " },
    { label: " Learning new languages ", value: "2 " },
    { label: "Sports ", value: "3 " },
    { label: " Movies ", value: "4 " },
    { label: "Television ", value: "5 " },
    { label: " Book clubs ", value: "6 " },
    { label: "Travelling ", value: "7 " },
    { label: "Politics ", value: "8 " },
    { label: "Reading ", value: "9 " },
    { label: "Writing ", value: "10 " },
    { label: " Internet Surfing ", value: "11 " },
    { label: " Dancing ", value: "12 " },
  ]);

  return (
    <View>
      <DropDownPicker
        multiple={true}
        min={1}
        open={open}
        value={value}
        onSelectItem={(item) => {
          interestCallBack(item.map((d) => d.label));
          console.log(item, "555555");
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
          marginLeft: 60,
          marginTop: 6,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export function DropdownDress({ dressCallBack }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [expandPadding, setExpandPadding] = useState("");

  console.log(expandPadding);

  const [items, setItems] = useState([
    { label: " Casual Wear ", value: "1 " },
    { label: " Designer Wear ", value: "2 " },
    { label: " Indian / Ethnic wear ", value: "3 " },
    { label: " Western formal wear ", value: "4 " },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        multiple={true}
        min={1}
        onSelectItem={(item) => {
          dressCallBack(item.map((d) => d.label));
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
          marginLeft: 60,
          marginTop: 6,
          fontFamily: fonts.POPPINS_BLACK,
        }}
      />
    </View>
  );
}
export default DropdownHobby;
