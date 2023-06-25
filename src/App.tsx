import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Timer from "./Views/Timer";

export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
