import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  timerModeText: {
    fontSize: width * 0.1,
    fontWeight: "800",
    color: "white",
  },
});

export default styles;
