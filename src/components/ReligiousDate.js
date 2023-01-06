import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from "react-native-image-crop-picker";
import fonts from "../contants/fonts";
import { useNavigation } from "@react-navigation/native";

export default function Datess({ dates, datestring }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text
          title="Open"
          onChangeText={(item) => item}
          style={{
            color: "#000000",
            textAlign: "center",
            width: 180,
            height: 40,
            borderRadius: 6,
            marginTop: dates === true ? 10 : 60,
            borderColor: "#000000",
            borderWidth: 1,
            marginLeft: dates === true ? 40 : 0,
            textAlignVertical: "center",
          }}
        >
          {" "}
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

          datestring(date.toISOString().slice(0, 10));
          console.log(date.toISOString().slice(0, 10), "iso");
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
export function Times({ timesCallBack }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState();

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Text
          title="Open"
          style={{
            color: "#000000",
            textAlign: "center",
            width: 180,
            height: 40,
            borderRadius: 6,
            marginTop: 10,
            borderColor: "#000000",
            borderWidth: 1,
          }}
        ></Text>
      </TouchableOpacity>
      <DatePicker
        mode="time"
        modal
        open={open}
        date={date}
        is24hourSource="locale"
        onConfirm={(item) => {
          setOpen(false);

          const data = item.toString();

          setDate(item);
          console.log(date);
          // setTime(data.slice(16, 24));
          // // timesCallBack(date);
          // console.log(date, "TOIMEEE");
        }}
        onDateChange={(item) => console.log(item)}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export function ChooseFile() {
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const SubmitImage = () => {
    ImagePicker.openPicker({
      path: "my-file-path.jpg",

      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image.path, "path");
      setImage(image.path);
    });
  };
  return (
    <View style={{ marginTop: 40 }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => SubmitImage()}>
          <Text
            style={{
              textAlign: "center",
              color: "#000000",
              fontFamily: fonts.POPPINS_REGULAR,
              height: 30,
              borderWidth: 1,
              borderColor: "#000000",
              width: 80,
              borderRadius: 7,
              fontSize: 12,
              textAlignVertical: "center",
            }}
          >
            Choose File
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Imageview", { image: image })}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              marginLeft: 30,
              borderRadius: 8,
              borderWidth: 8,
            }}
            source={image ? { uri: image } : null}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
