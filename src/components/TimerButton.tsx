import { View, Button, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles/TimerButtonStyles";

type Props = {
  isTimerRunning: Boolean;
  //se usa () => void para especificar que es una funcion que no recibe nada ni retorna nada
  startTimer: () => void;
  stopTimer: () => void;
};

export const TimerButton: React.FC<Props> = ({
  startTimer,
  stopTimer,
  isTimerRunning,
}) => {
  return (
    <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
      <View style={styles.container}>
        <FontAwesome
          name={isTimerRunning ? "pause" : "play"}
          size={125}
          color={"red"}
          style={styles.icon}
        ></FontAwesome>
      </View>
    </Pressable>
  );
};
