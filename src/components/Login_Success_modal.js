import React, { useState } from "react";
import { useEffect } from "react";
import { Image } from "react-native";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import fonts from "../contants/fonts";
import { useNavigation } from "@react-navigation/native";

const Login_success_modal = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(data, "hello");
  useEffect(() => {
    if (data === true) {
      setModalVisible(true);
    }
  }, []);
  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{ height: 210, marginHorizontal: 20 }}
              source={require("../images/scooty.png")}
              resizeMode={"contain"}
            ></Image>
            <Text
              style={{
                fontFamily: fonts.POPPINS_LIGHT,
                color: "#875F9A",
                marginTop: 80,
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Are you looking for a budget friendly marriage?... Come join with
              ours <Text style={{ color: "#000000" }}>Thousands</Text> of our
              trusted wedding vendors
            </Text>
            <Pressable
              style={{
                // borderWidth: 0.2,
                textAlign: "center",
                justifyContent: "center",
                width: 80,
                borderRadius: 8,
                textAlignVertical: "center",
                backgroundColor: "#ffffff",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                marginTop: 20,
              }}
              onPress={() => {
                setModalVisible(!modalVisible),
                  navigation.navigate("Marriage_Shoppie");
              }}
            >
              <View>
                <Text style={[styles.textStyle, { marginTop: 2 }]}>Visit</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
        }}
      ></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 500,
    width: 340,
  },
  button: {},
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#000000",
    marginTop: 20,
    textAlign: "center",
    fontSize: 25,
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
    textAlignVertical: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Login_success_modal;
