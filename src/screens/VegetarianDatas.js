import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import fonts from "../contants/fonts";
import datas from "../components/Datas";
import { useNavigation } from "@react-navigation/native";
import ViewDetailsModals from "../components/ViewDetailsModals";
const VegetarianDatas = ({ route }) => {
  const navigation = useNavigation();
  const [add, setAdd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [colourchange, setcolourchange] = useState(false);
  const data = route.params && route.params.data;
  const image = route.params && route.params.image;
  const category = route.params && route.params.category;
  return (
    <>
      {route.params.data != null || route.params.image != null ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              borderBottomWidth: 0.5,
              backgroundColor:
                colourchange === true ? "rgba(0, 0, 0, 0.5)" : "#eeeeee",
              paddingBottom: colourchange === true ? 25 : 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: "4%",
                marginHorizontal: "4%",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  // navigation.navigate("ModalSearch");
                  navigation.goBack();
                }}
              >
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#000000"
                  style={{ alignItems: "center" }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                  color: "#000000",
                  textAlign: "center",
                  textAlignVertical: "center",
                  // marginLeft: "",
                  fontSize: 16,
                }}
              >
                {data}
              </Text>
              <Ionicons
                name="search"
                size={22}
                color="#000000"
                style={{
                  alignItems: "center",
                  // marginLeft: "35%",
                }}
              />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ borderBottomWidth: 0.5, marginBottom: 1 }}>
              <View
                style={{
                  marginHorizontal: "4%",
                  marginTop: "4%",
                  // marginBottom: "50%",
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                    color: "#c36f09",
                    fontSize: 18,
                    marginLeft: 10,
                  }}
                >
                  {`Book by category `}
                  <Text style={{ color: "#c36f09" }}>{data}</Text>
                </Text>
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: "6%",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        marginBottom: "4%",
                        marginLeft: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                          color: "#000000",
                          fontSize: 18,
                        }}
                      >
                        Vegetarian category
                      </Text>
                      <View style={{ flexDirection: "row", marginTop: "2%" }}>
                        <Ionicons
                          name="star"
                          size={15}
                          color="#072ac8"
                          style={{ lineHeight: 20 }}
                        />
                        <Text
                          style={{
                            color: "#000000",
                            fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                            marginLeft: "2%",
                            fontSize: 16,
                          }}
                        >
                          4.74 (4.3k)
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: "2%",
                        }}
                      >
                        <Entypo
                          name="dot-single"
                          size={30}
                          color="#072ac8"
                          style={{ lineHeight: 25, marginLeft: "-5%" }}
                        />
                        <Text
                          style={{
                            color: "#000000",
                            fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                            //   marginLeft: "",
                            lineHeight: 20,
                            fontSize: 16,
                          }}
                        >
                          Approx.
                        </Text>
                        <FontAwesome
                          name="rupee"
                          size={15}
                          color="#c36f09"
                          style={{ lineHeight: 20, marginLeft: "4%" }}
                        />
                        <Text
                          style={{
                            color: "#000000",
                            fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                            marginLeft: "4%",
                            lineHeight: 20,
                            fontSize: 16,
                          }}
                        >
                          699
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: "#000000",
                          fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                          marginTop: "2%",
                          fontSize: 16,
                          maxWidth: 200,
                        }}
                      >
                        We ensure thate you will get a mind enhancing food to
                        enjoy your marriage ceremony...
                      </Text>
                      <TouchableOpacity
                        style={{ marginTop: "2%" }}
                        onPress={() => {
                          setModalVisible(true), setcolourchange(true);
                        }}
                      >
                        <Text
                          style={{
                            color: "#072ac8",
                            fontFamily: fonts.POPPINS_REGULAR,
                          }}
                        >
                          View Details
                        </Text>
                      </TouchableOpacity>
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          setModalVisible(false);
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: "#f8f9fa",
                            marginTop: "12%",
                            marginHorizontal: "0.3%",
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                          }}
                        >
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 50,
                              backgroundColor: "#ADD8E6",
                              margin: 10,
                            }}
                          >
                            <TouchableOpacity
                              onPress={() => {
                                setModalVisible(false);
                                setcolourchange(false);
                              }}
                            >
                              <Ionicons
                                name="close"
                                color={"#ffffff"}
                                size={30}
                                style={{ lineHeight: 30 }}
                              />
                            </TouchableOpacity>
                          </View>
                          <ViewDetailsModals />
                        </View>
                      </Modal>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                      <Image
                        source={{ uri: image }}
                        resizeMode="cover"
                        style={{
                          height: 100,
                          width: 100,
                          borderRadius: 10,
                          elevation: 10,
                          shadowColor: "#000000",
                          shadowOffset: { width: -2, height: 4 },
                          shadowOpacity: 0.5,
                          shadowRadius: 0,
                        }}
                      />
                      <View
                        style={{
                          height: 35,
                          width: 80,
                          backgroundColor: "#ffffff",
                          borderRadius: 10,
                          marginLeft: 10,
                          // zIndex: 1,
                          marginTop: -20,
                          flexDirection: "row",
                          justifyContent: "space-around",
                          elevation: 10,
                          shadowColor: "#000000",
                          shadowOffset: { width: -2, height: 4 },
                          shadowOpacity: 0.5,
                          shadowRadius: 0,
                        }}
                      >
                        {/* <TouchableOpacity>
                    <Text
                      style={{ color: "#000000", fontSize: 30, lineHeight: 35 }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ color: "#000000", lineHeight: 35 }}>1</Text>
                  <TouchableOpacity>
                    <Text
                      style={{ color: "#000000", fontSize: 17, lineHeight: 35 }}
                    >
                      +
                    </Text>
                  </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => setAdd(true)}>
                          <Text
                            style={{
                              color: "#000000",
                              fontFamily: fonts.POPPINS_MEDIUM,
                              textAlign: "center",
                              lineHeight: 35,
                            }}
                          >
                            Add
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              borderBottomWidth: 0.5,
              backgroundColor:
                colourchange === true ? "rgba(0, 0, 0, 0.5)" : "#eeeeee",
              paddingBottom: colourchange === true ? 25 : 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingVertical: "4%",
                marginHorizontal: "4%",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate("Store");
                }}
              >
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#000000"
                  style={{ alignItems: "center" }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_MEDIUM,
                  color: "#000000",
                  textAlign: "center",
                  textAlignVertical: "center",
                  // marginLeft: "",
                  fontSize: 16,
                }}
              >
                {data ? data : "catering"}
              </Text>
              <Ionicons
                name="search"
                size={22}
                color="#000000"
                style={{
                  alignItems: "center",
                  // marginLeft: "35%",
                }}
              />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {datas
              .filter((item) => category === "Food" && item.id < 5)
              .map((item) => {
                return (
                  <View style={{ borderBottomWidth: 0.5 }}>
                    <View
                      style={{
                        marginHorizontal: "4%",
                        marginTop: "4%",
                        // marginBottom: "50%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: fonts.POPPINS_EXTRA_LIGHT,
                          color: "#c36f09",
                          fontSize: 18,
                        }}
                      >
                        Book by category
                        <Text style={{ color: "#c36f09" }}>{item.title}</Text>
                      </Text>
                      <View style={{}}>
                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: "6%",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "column",
                              marginBottom: "4%",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: fonts.POPPINS_MEDIUM,
                                color: "#000000",
                                fontSize: 14,
                              }}
                            >
                              Vegetarian category
                            </Text>
                            <View
                              style={{ flexDirection: "row", marginTop: "2%" }}
                            >
                              <Ionicons
                                name="star"
                                size={15}
                                color="#072ac8"
                                style={{ lineHeight: 20 }}
                              />
                              <Text
                                style={{
                                  color: "#000000",
                                  fontFamily: fonts.POPPINS_REGULAR,
                                  marginLeft: "2%",
                                }}
                              >
                                4.74 (4.3k)
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: "row",
                                marginTop: "2%",
                              }}
                            >
                              <Entypo
                                name="dot-single"
                                size={30}
                                color="#072ac8"
                                style={{ lineHeight: 25, marginLeft: "-5%" }}
                              />
                              <Text
                                style={{
                                  color: "#000000",
                                  fontFamily: fonts.POPPINS_REGULAR,
                                  //   marginLeft: "",
                                  lineHeight: 20,
                                }}
                              >
                                Approx.
                              </Text>
                              <FontAwesome
                                name="rupee"
                                size={15}
                                color="#c36f09"
                                style={{ lineHeight: 20, marginLeft: "4%" }}
                              />
                              <Text
                                style={{
                                  color: "#000000",
                                  fontFamily: fonts.POPPINS_REGULAR,
                                  marginLeft: "4%",
                                  lineHeight: 20,
                                }}
                              >
                                699
                              </Text>
                            </View>
                            <Text
                              style={{
                                color: "#000000",
                                fontFamily: fonts.POPPINS_REGULAR,
                                marginTop: "2%",
                              }}
                            >
                              Tasty foods
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                setModalVisible(true), setcolourchange(true);
                              }}
                              style={{ marginTop: "2%" }}
                            >
                              <Text
                                style={{
                                  color: "#072ac8",
                                  fontFamily: fonts.POPPINS_REGULAR,
                                }}
                              >
                                View Details
                              </Text>
                            </TouchableOpacity>
                            <Modal
                              animationType="slide"
                              transparent={true}
                              visible={modalVisible}
                              onRequestClose={() => {
                                setModalVisible(!modalVisible);
                              }}
                            >
                              <View
                                style={{
                                  flex: 1,
                                  backgroundColor: "#f8f9fa",
                                  marginTop: "12%",
                                  marginHorizontal: "0.3%",
                                  borderTopLeftRadius: 30,
                                  borderTopRightRadius: 30,
                                }}
                              >
                                <View
                                  style={{
                                    height: 30,
                                    width: 30,
                                    borderRadius: 50,
                                    backgroundColor: "#d00000",
                                    margin: 10,
                                  }}
                                >
                                  <TouchableOpacity
                                    onPress={() => {
                                      setModalVisible(false);
                                      setcolourchange(false);
                                    }}
                                  >
                                    <Ionicons
                                      name="close"
                                      color={"#ffffff"}
                                      size={30}
                                      style={{ lineHeight: 30 }}
                                    />
                                  </TouchableOpacity>
                                </View>
                                <ViewDetailsModals />
                              </View>
                            </Modal>
                          </View>
                          <View style={{ flexDirection: "column" }}>
                            <Image
                              source={{ uri: item.image }}
                              resizeMode="cover"
                              style={{
                                height: 100,
                                width: 100,
                                borderRadius: 10,
                                elevation: 10,
                                shadowColor: "#000000",
                                shadowOffset: { width: -2, height: 4 },
                                shadowOpacity: 0.5,
                                shadowRadius: 0,
                              }}
                            />
                            <View
                              style={{
                                height: 35,
                                width: 80,
                                backgroundColor: "#ffffff",
                                borderRadius: 10,
                                marginLeft: 10,
                                // zIndex: 1,
                                marginTop: -20,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                elevation: 10,
                                shadowColor: "#000000",
                                shadowOffset: { width: -2, height: 4 },
                                shadowOpacity: 0.5,
                                shadowRadius: 0,
                              }}
                            >
                              {/* <TouchableOpacity>
                    <Text
                      style={{ color: "#000000", fontSize: 30, lineHeight: 35 }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ color: "#000000", lineHeight: 35 }}>1</Text>
                  <TouchableOpacity>
                    <Text
                      style={{ color: "#000000", fontSize: 17, lineHeight: 35 }}
                    >
                      +
                    </Text>
                  </TouchableOpacity> */}
                              <TouchableOpacity onPress={() => setAdd(true)}>
                                <Text
                                  style={{
                                    color: "#000000",
                                    fontFamily: fonts.POPPINS_MEDIUM,
                                    textAlign: "center",
                                    lineHeight: 35,
                                  }}
                                >
                                  Add
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default VegetarianDatas;
