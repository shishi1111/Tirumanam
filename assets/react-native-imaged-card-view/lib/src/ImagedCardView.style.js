import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default {
  container: {
    height: 240,
    width: width * 0.9,
    marginRight: -45,
    alignSelf: "center",
    backgroundColor: "transparent",
  },
};
