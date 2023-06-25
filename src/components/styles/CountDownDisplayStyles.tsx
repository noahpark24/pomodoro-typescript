import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  timerCountDownText: {
    fontSize: width * 0.1, // Ajusta el tamaño de fuente al ancho de la ventana
    fontWeight: "800",
    color: "white",
  },
});

export default styles;
