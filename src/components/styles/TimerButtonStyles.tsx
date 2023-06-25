import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    color: "white",
  },
  container: {
    borderWidth: Platform.OS === "web" ? width * 0.02 : width * 0.02,
    height: Platform.OS === "web" ? height * 0.4 : height * 0.4,
    width: Platform.OS === "web" ? width * 0.4 : 250,
    borderRadius: Platform.OS === "web" ? width * 0.4 : width * 0.6,
    justifyContent: "center",
    borderColor: "white",
    marginVertical: Platform.OS === "web" ? height * 0.03 : height * 0.03,
  },
});

export default styles;
