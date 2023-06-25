import React, { useState } from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { styles } from "./styles/WaitingTimesButtonsStyles";
type Props = {
  shortBreakTimer: () => void;
  longBreakTimer: () => void;
  pomodoro: () => void;
  stopCounter: () => void;
  timerCount: Number;
};

const WaitingTimesButtons: React.FC<Props> = ({
  shortBreakTimer,
  longBreakTimer,
  pomodoro,
  timerCount,
  stopCounter,
}) => {
  const timeCounter = timerCount === 0;
  const [pressedButton, setPressedButton] = useState("");
  console.log("TIMER COUNT", timeCounter);

  const handleButtonPress = (button: string) => {
    stopCounter();
    setPressedButton(button);
    switch (button) {
      case "Short Break":
        shortBreakTimer();
        break;
      case "Long Break":
        longBreakTimer();
        break;
      case "Pomodoro":
        pomodoro();
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.button,
          pressedButton === "Pomodoro" && styles.buttonPressed,
        ]}
        underlayColor="#888"
        onPress={() => handleButtonPress("Pomodoro")}
      >
        <Text style={styles.buttonText}>Pomodoro</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.button,
          pressedButton === "Short Break" && styles.buttonPressed,
        ]}
        underlayColor="#888"
        onPress={() => handleButtonPress("Short Break")}
      >
        <Text style={styles.buttonText}>Short Break</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.button,
          pressedButton === "Long Break" && styles.buttonPressed,
        ]}
        underlayColor="#888"
        onPress={() => handleButtonPress("Long Break")}
      >
        <Text style={styles.buttonText}>Long Break</Text>
      </TouchableHighlight>
    </View>
  );
};

export default WaitingTimesButtons;
