import React from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles/CountDownDisplayStyles";

type Props = {
  timerDate: Date;
};

export const TimerCountDownDisplay: React.FC<Props> = ({ timerDate }) => {
  return (
    <View>
      <Text style={styles.timerCountDownText}>
        {timerDate.getMinutes().toString().padStart(2, "0")}:
        {timerDate.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
};
