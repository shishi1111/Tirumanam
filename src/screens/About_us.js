import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";
import { Fonts } from "../contants";
import Icon from "react-native-vector-icons/AntDesign";
import fonts from "../contants/fonts";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const About_us = () => {
  const [Category, setCategory] = useState(false);
  const [oldemail, setOldEmail] = useState();
  const [oldmobile, setOldmobile] = useState();
  const [newMobile, setNewMobile] = useState();
  const [NewEmail, SetNewEmail] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [error, SetError] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [ContactMessage, setContactMessage] = useState();
  const [contactContact, setContactContact] = useState();
  const [ContactSubject, SetContactSubject] = useState();
  const data = { old_email: oldemail, new_email: NewEmail };
  const dataChangeMobile = {
    old_mobile: oldmobile,
    country_code: "91",
    mobile: newMobile,
  };
  const navigation = useNavigation();
  const dataChangePassword = {
    password: newPassword,
    confirm_password: newPassword,
    mobile_number: "9074135121",
  };
  const ContactTirumanam = {
    email: contactEmail,
    name: "Shishijo jacob",
    contact: contactContact,
    subject: ContactSubject,
    message: ContactMessage,
    device_type: "sdfasdgzdfv",
  };
  const SubmitHandler = async () => {
    Category === "Change_email" &&
      fetch("http://tirumanam.in/api/changeEmail", {
        method: "POST",
        headers: {
          Accept: "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())

        .then((result) => {
          console.log("Your intended result is: ", result);

          // if (result?.message === "login successfully") {
          //   navigation.navigate("Home_Screen", { success: "success" });
          // } else !result?.message;
          // {
          //   setResponse(result.result[0]);
          // }
        })
        .catch((error) => {
          console.log(error, "helloboy");
          SetError(error && error);
        })
        .then(response && SaveData());
    Category === "Change_mobile" &&
      fetch("http://tirumanam.in/api/changeEmail", {
        method: "POST",
        headers: {
          Accept: "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataChangeMobile),
      })
        .then((response) => response.json())

        .then((result) => {
          console.log("Your intended result is: ", result);

          // if (result?.message === "login successfully") {
          //   navigation.navigate("Home_Screen", { success: "success" });
          // } else !result?.message;
          // {
          //   setResponse(result.result[0]);
          // }
        })
        .catch((error) => {
          console.log(error, "helloooo");
          SetError(error && error);
        })
        .then(response && SaveData());
    Category === "Change_password" &&
      fetch("http://tirumanam.in/api/setUserPassword", {
        method: "POST",
        headers: {
          Accept: "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataChangePassword),
      })
        .then((response) => response.json())

        .then((result) => {
          console.log("Your intended result is: ", result);

          // if (result?.message === "login successfully") {
          //   navigation.navigate("Home_Screen", { success: "success" });
          // } else !result?.message;
          // {
          //   setResponse(result.result[0]);
          // }
        })
        .catch((error) => {
          console.log(error, "helloooo");
          SetError(error && error);
        })
        .then(response && SaveData());
    Category === "Contact_Tirumanam" &&
      fetch("http://tirumanam.in/api/setUserPassword", {
        method: "POST",
        headers: {
          Accept: "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataChangePassword),
      })
        .then((response) => response.json())

        .then((result) => {
          console.log("Your intended result is: ", result);

          // if (result?.message === "login successfully") {
          //   navigation.navigate("Home_Screen", { success: "success" });
          // } else !result?.message;
          // {
          //   setResponse(result.result[0]);
          // }
        })
        .catch((error) => {
          console.log(error, "hellooo Contact");
          SetError(error && error);
        })
        .then(response && SaveData());
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ margin: 5 }}>
        <Image
          style={{
            width: "100%",
            height: 60,
            position: "absolute",
            opacity: 0.6,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.05,
            shadowRadius: 1.84,

            elevation: 20,
            backgroundColor: "#ffffff",

            overflow: "hidden",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          source={require("../images/banner.png")}
          resizeMode="cover"
          blurRadius={1}
        ></Image>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons name="reorder-three" size={35} color="#000" />
        </TouchableOpacity> */}
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Marriage_Shoppie")}
          >
            <View style={{ height: 60, width: 60, marginTop: -7 }}>
              <Lottie
                style={{}}
                source={require("../components/14436-simplearrow-left.json")}
                autoPlay
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              color: "#ffffff",
              fontSize: 12,

              width: 160,
              marginTop: 5,
            }}
          >
            Find the best offers on our Marriage Shoppie!
          </Text>
          <View
            style={{
              marginTop: 5,
              marginHorizontal: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.05,
              shadowRadius: 1.84,

              elevation: 20,
              backgroundColor: "rgba(255,255,355,0.8)",
              width: 150,
              borderRadius: 10,

              height: 40,
            }}
          >
            <Image
              style={{ width: 158, height: 40 }}
              source={require("../images/LOGOS.png")}
              resizeMode="cover"
            ></Image>
          </View>
        </View>
      </View>
      <ScrollView>
        <>
          <View style={styles.containerView}>
            <View style={styles.subContainer}>
              <Text style={styles.ContainerText}>Change email</Text>

              <TouchableOpacity
                onPress={() => {
                  setCategory("Change_email");
                }}
                style={styles.IconTouchable}
              >
                <Icon
                  name="logout"
                  size={20}
                  color="#875F9A"
                  style={{ marginTop: 2 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {Category === "Change_email" && (
            <>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter Old email"
                  onChange={(text) => setOldEmail(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter New email"
                  onChange={(text) => SetNewEmail(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <View style={styles.SubmitButton}>
                  <TouchableOpacity onPress={() => SubmitHandler()}>
                    <Text
                      style={{ justifyContent: "center", alignSelf: "center" }}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.CancelButton}>
                  <TouchableOpacity
                    onPress={() => {
                      setCategory(!"Change_email"), SetError(null);
                    }}
                  >
                    <Text
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        color: "#000000",
                      }}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_REGULAR,
                  color: "#D7A4A3",
                  fontSize: 16,
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                {error && "Sorry Something went wrong. Please try again"}
              </Text>
            </>
          )}
        </>
        <>
          <View style={styles.containerView}>
            <View style={styles.subContainer}>
              <Text style={styles.ContainerText}>Change Mobile Number</Text>

              <TouchableOpacity
                onPress={() => {
                  setCategory("Change_mobile");
                }}
                style={styles.IconTouchable}
              >
                <Icon
                  name="logout"
                  size={20}
                  color="#875F9A"
                  style={{ marginTop: 2 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {Category === "Change_mobile" && (
            <>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter Old number"
                  onChange={(text) => setOldmobile(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter New number"
                  onChange={(text) => setNewMobile(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <View style={styles.SubmitButton}>
                  <TouchableOpacity onPress={() => SubmitHandler()}>
                    <Text
                      style={{ justifyContent: "center", alignSelf: "center" }}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.CancelButton}>
                  <TouchableOpacity
                    onPress={() => {
                      setCategory(!"Forgot_password"), SetError(null);
                    }}
                  >
                    <Text
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        color: "#000000",
                      }}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_REGULAR,
                  color: "#D7A4A3",
                  fontSize: 16,
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                {error && "Sorry Something went wrong. Please try again"}
              </Text>
            </>
          )}
        </>
        <>
          <View style={styles.containerView}>
            <View style={styles.subContainer}>
              <Text style={styles.ContainerText}>Change Password</Text>

              <TouchableOpacity
                onPress={() => {
                  setCategory("Change_password");
                }}
                style={styles.IconTouchable}
              >
                <Icon
                  name="logout"
                  size={20}
                  color="#875F9A"
                  style={{ marginTop: 2 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {Category === "Change_password" && (
            <>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter Old Password"
                  onChange={(text) => setOldPassword(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter New Password"
                  onChange={(text) => setNewPassword(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <View style={styles.SubmitButton}>
                  <TouchableOpacity onPress={() => SubmitHandler()}>
                    <Text
                      style={{ justifyContent: "center", alignSelf: "center" }}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.CancelButton}>
                  <TouchableOpacity
                    onPress={() => {
                      setCategory(!"Change_password"), SetError(null);
                    }}
                  >
                    <Text
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        color: "#000000",
                      }}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_REGULAR,
                  color: "#D7A4A3",
                  fontSize: 16,
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                {error && "Sorry Something went wrong. Please try again"}
              </Text>
            </>
          )}
        </>
        <>
          <View style={styles.containerView}>
            <View style={styles.subContainer}>
              <Text style={styles.ContainerText}>Contact Tirumanam.online</Text>

              <TouchableOpacity
                onPress={() => {
                  setCategory("Contact_Tirumanam");
                }}
                style={styles.IconTouchable}
              >
                <Icon
                  name="logout"
                  size={20}
                  color="#875F9A"
                  style={{ marginTop: 2 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {Category === "Contact_Tirumanam" && (
            <>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  onChange={(text) => setContactEmail(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Contact"
                  onChange={(text) => setContactContact(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Subject"
                  onChange={(text) => SetContactSubject(text)}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View style={styles.TextOldemail}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Message"
                  onChange={(text) => setContactMessage(text)}
                  multiline={true}
                  numberOfLines={4}
                  placeholderTextColor="#808080"
                ></TextInput>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <View style={styles.SubmitButton}>
                  <TouchableOpacity onPress={() => SubmitHandler()}>
                    <Text
                      style={{ justifyContent: "center", alignSelf: "center" }}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.CancelButton}>
                  <TouchableOpacity
                    onPress={() => {
                      setCategory(!"Contact_Tirumanam"), SetError(null);
                    }}
                  >
                    <Text
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        color: "#000000",
                      }}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_REGULAR,
                  color: "#D7A4A3",
                  fontSize: 16,
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                {error && "Sorry Something went wrong. Please try again"}
              </Text>
            </>
          )}
        </>
      </ScrollView>
    </View>
  );
};

export default About_us;

const styles = StyleSheet.create({
  containerView: {
    borderWidth: 0.5,
    width: 400,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",

    marginTop: 0,

    borderColor: "#875F9A",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ContainerText: {
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "#875F9A",
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
    fontSize: 16,
  },
  IconTouchable: { marginRight: 20 },
  TextOldemail: {
    borderWidth: 0.2,
    borderColor: "#875F9A",
    width: 330,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 8,
  },
  TextInput: {
    color: "#000000",
    fontSize: 16,
    fontFamily: fonts.POPPINS_MEDIUM,
    marginLeft: 20,
  },
  SubmitButton: {
    borderWidth: 1,
    padding: 8,
    width: 100,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#875F9A",
    borderRadius: 8,
  },
  CancelButton: {
    borderWidth: 1,
    padding: 8,
    width: 100,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#bababa",
    borderRadius: 8,
  },
});
