import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    color: "white",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  buttonPressed: {
    backgroundColor: "#646464",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
});
