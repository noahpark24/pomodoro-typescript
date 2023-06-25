import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    color: "white",
    paddingHorizontal: width * 0.05,
  },
  button: {
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  buttonPressed: {
    backgroundColor: "#646464",
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.05,
  },
});
