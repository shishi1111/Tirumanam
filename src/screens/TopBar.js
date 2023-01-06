import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import React, { useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import fonts from "../contants/fonts";
import Icon5 from "react-native-vector-icons/FontAwesome";
import AnimatedProfileImage from "../components/AnimatedProfileImage";

// import { Icon } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute } from "@react-navigation/native";
import Icon6 from "react-native-vector-icons/Entypo";

import { ScrollView } from "react-native-gesture-handler";
import differenceBy from "lodash/differenceBy";
import { data } from "jquery";
import { element } from "prop-types";
import post from "../screens/post";
import ProfileTopBar from "../components/ProfileTopBar";
import Wedding_frames from "../components/Wedding_frames";
import Contact from "./Contact";
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listItemContainer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
  },
  listItemLabel: {
    color: "#1c1b1e",
    fontSize: 14,
  },
  listItemTitle: {
    color: "black",
    fontSize: 18,
  },
  sectionHeaderContainer: {
    height: 30,
    backgroundColor: "#8e8e93",
    justifyContent: "center",
    paddingHorizontal: 15,
    display: "none",
  },
  sectionHeaderLabel: {
    color: "#fff",
  },
  input: {
    margin: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E6E6E3",
    borderRadius: 10,
    fontSize: 16,
  },
  age: {
    fontSize: 15,
    fontWeight: "600",

    fontFamily: fonts.POPPINS_BOLD,
    color: "#18134b",

    marginLeft: 20,
  },
  profession: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 20,
    fontFamily: fonts.POPPINS_BOLD,
    color: "#18134b",

    marginLeft: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",

    fontFamily: fonts.POPPINS_BOLD,
    color: "#18134b",
    marginTop: 90,
    marginLeft: 20,
  },
});

// const Allvillage = () => {
//   const VillageName = VillageName;

//   const Item = ({ VillageName }) => (
//     <TouchableOpacity onPress={() => navigation.navigate("Milestones")}>
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "flex-start",
//           marginTop: 10,
//         }}
//       >
//         <Icon
//           style={{ marginLeft: "1%", Color: "#fff" }}
//           name="water"
//           size={34}
//         />
//         <Text
//           style={{
//             alignSelf: "center",
//             marginHorizontal: 40,
//             color: "black",
//             fontWeight: "bold",
//           }}
//         >
//           {VillageName}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
//   const renderItem = ({ item }) => <Item VillageName={item.VillageName} />;

//   return (
//     <ScrollView style={styles.container}>
//       <FlatList
//         data={vname}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </ScrollView>
//   );
// };
//work not started
const WorkNotStarted = ({ navigation }) => {
  const [vname, setVname] = React.useState([]);
  const [source, setSource] = React.useState([]);
  const [statusdata, setstatusdata] = React.useState([]);
  const [bData, setBdata] = React.useState([]);
  const [cData, setCdata] = React.useState([]);

  const VillageName = VillageName;

  const Item = ({ VillageName }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Add_Water_Source_water", { subs: VillageName })
      }
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        <Icon
          style={{ marginLeft: "1%", Color: "#fff" }}
          name="water"
          size={34}
        />
        <Text
          style={{
            alignSelf: "center",
            marginHorizontal: 40,
            color: "black",
            fontWeight: "bold",
          }}
        >
          {VillageName}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => <Item VillageName={item.VillageName} />;

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={res}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

//Implementation ongoing

const OM = ({ navigation, Subs }) => {
  const [SubData, setSubData] = React.useState();

  const [Details, setDetails] = React.useState(false);
  console.log(Details);
  console.log(SubData, "Params");
  const Value = "true";
  return (
    <ScrollView
      style={styles.container}
      onScroll={() => {
        Subs(Value);
      }}
    >
      <ProfileTopBar />
    </ScrollView>
  );
};
const Wedding_frames_Top_Bar = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Wedding_frames />
    </ScrollView>
  );
};
const Contacts_Top_Bar = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Contact />
    </ScrollView>
  );
};
const Implementation2 = ({ navigation }) => {
  const dataO = dataO;
  const VillageName = VillageName;

  const Item = ({ VillageName }) => (
    <TouchableOpacity onPress={() => navigation.navigate("approve_cer")}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        <Icon
          style={{ marginLeft: "1%", Color: "#fff" }}
          name="water"
          size={34}
        />
        <Text
          style={{
            alignSelf: "center",
            marginHorizontal: 40,
            color: "black",
            fontWeight: "bold",
          }}
        >
          {VillageName}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => <Item VillageName={item.VillageName} />;

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={dataO && dataO}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const Post = ({ navigation }) => {
  const VillageName = VillageName;
  const result = result;
  const Item = ({ VillageName }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Milestones")}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        <Icon
          style={{ marginLeft: "1%", Color: "#fff" }}
          name="water"
          size={34}
        />
        <Text
          style={{
            alignSelf: "center",
            marginHorizontal: 40,
            color: "black",
            fontWeight: "bold",
          }}
        >
          {VillageName}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => <Item VillageName={item.VillageName} />;

  return (
    <ScrollView style={styles.container}>
      <Post />
    </ScrollView>
  );
};

export default function TopBar() {
  const route = useRoute();
  const itemId = route.params && route.params.itemId ? route.params.itemId : {};
  const ids = route.params && route.params.ids ? route.params.ids : {};
  const maxHeaderHeight = 150;
  const minHeaderHeight = 50;
  const [scroll, setScroll] = React.useState(false);
  console.log(scroll);
  console.log(route.key);
  const Sub = (props) => {
    console.log(props, "props");
    props === "true" && setScroll(true);
  };
  // const isFocused = useIsFocused();

  // setScroll(false);
  const Profile = () => {
    return (
      <>
        <OM Subs={Sub} />
      </>
    );
  };

  return (
    <>
      {scroll === false ? (
        <AnimatedProfileImage />
      ) : (
        <SafeAreaView
          style={{
            flexDirection: "row",
            borderColor: "#ffffff",
            borderWidth: 1,
            backgroundColor: "#875F9A",
            borderRadius: 10,
            borderTopWidth: 5,
          }}
        >
          <Text
            style={{
              borderColor: "#000000",
              fontSize: 18,
              fontFamily: fonts.POPPINS_MEDIUM,
              marginLeft: 50,
              color: "#ffffff",
              marginTop: 2,
            }}
          >
            Rahul Das
          </Text>
          <Icon5
            name="circle"
            size={18}
            style={{ marginLeft: 6, marginTop: 7 }}
            color="#04cc82"
          />
          <Text
            style={{
              borderColor: "#000000",
              fontSize: 18,
              fontFamily: fonts.POPPINS_MEDIUM,
              marginLeft: 20,
              color: "#ffffff",
              marginTop: 2,
            }}
          >
            Age 30
          </Text>
          <View
            style={{
              borderColor: "#ffffff",

              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <TouchableOpacity
            onPress={() => {
              setScroll(false);
            }}
          >
            <Icon6
              name="arrow-with-circle-down"
              size={25}
              style={{ marginLeft: 80, marginTop: 3 }}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </SafeAreaView>
      )}

      <ScrollView
        horizontal={true}
        onScroll={() => {
          if (!scroll) {
            console.log("hji");
            setScroll(true);
          }
        }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: fonts.POPPINS_SEMI_BOLD,
            },
            tabBarItemStyle: { width: 100 },

            tabBarActiveTintColor: "#875F9A",
            tabBarBounces: true,
          }}
          tabBarActiveTintColor="000000"
          // initialRouteName={
          //   itemId == 1
          //     ? "Planning"
          //     : itemId == 2
          //     ? "Implementation ongoing"
          //     : itemId == 3
          //     ? "HGJ not certified"
          //     : "HGJ Certified villages"
          // }
        >
          {/* <Tab.Screen name="All" component={All} /> */}

          {/* <Tab.Screen
          name="Planning"
          options={{ title: "WORK NOT STARTED" }}
          component={WorkNotStarted}
        /> */}

          <Tab.Screen
            name="Profile"
            component={Profile}
            options
            listeners={{
              tabPress: () => {
                // Prevent default action
                setScroll(true);
              },
            }}
            Subs={Sub}
            getId={({ Params }) => {
              {
                Params ? setScroll(true) : setScroll(false);
              }
              {
                console.log(Params);
              }
            }}
          />
          <Tab.Screen
            name="Wedding Screen"
            component={Wedding_frames_Top_Bar}
            listeners={{
              tabPress: () => {
                // Prevent default action
                setScroll(true);
              },
            }}
            Subs={Sub}
            getId={({ Params }) => {
              {
                Params ? setScroll(true) : setScroll(false);
              }
              {
                console.log(Params);
              }
            }}
          />
          <Tab.Screen
            name="Post"
            component={post}
            listeners={{
              tabPress: () => {
                // Prevent default action
                setScroll(true);
              },
            }}
            Subs={Sub}
            getId={({ Params }) => {
              {
                Params ? setScroll(true) : setScroll(false);
              }
              {
                console.log(Params);
              }
            }}
          />

          <Tab.Screen
            name="Contacts"
            component={Contacts_Top_Bar}
            listeners={{
              tabPress: () => {
                // Prevent default action
                setScroll(true);
              },
            }}
            Subs={Sub}
            getId={({ Params }) => {
              {
                Params ? setScroll(true) : setScroll(false);
              }
              {
                console.log(Params);
              }
            }}
          />

          <Tab.Screen
            name="Interest"
            component={post}
            listeners={{
              tabPress: () => {
                // Prevent default action
                setScroll(true);
              },
            }}
            Subs={Sub}
            getId={({ Params }) => {
              {
                Params ? setScroll(true) : setScroll(false);
              }
              {
                console.log(Params);
              }
            }}
          />
        </Tab.Navigator>
      </ScrollView>
    </>
  );
}
