import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { TimerCountDownDisplay } from "../components/TimerCountdownDisplay";
import { TimerButton } from "../components/TimerButton";
import { styles } from "../components/styles/TimerStyles";
import { TimerModes, TimerModeDisplay } from "../components/TimerModeDisplay";
import WaitingTimesButtons from "../components/WaitingTimesButtons";

export default function Timer(): JSX.Element {
  const focus_time_minutes: number = 4 * 1000;
  const break_time_minutes: number = 0.1 * 60 * 1000;
  const short_break_time_minutes: number = 2 * 1000;

  const [timerCount, setTimerCount] = useState<number>(focus_time_minutes);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === "Focus") {
        longBreakTimer();
      } else if (timerMode === "Break") {
        pomodoro();
      } else if (timerMode === "Short Break") {
        pomodoro();
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    //aca lo que hago es asegurarme de que cada segundo que pase se le descuente un segundo al contador
    let id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInterval(id);
  };

  const stopTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
    }
    setIsTimerRunning(false);
  };

  const shortBreakTimer = () => {
    setTimerMode("Short Break");
    setTimerCount(short_break_time_minutes);
  };

  const longBreakTimer = () => {
    setTimerMode("Break");
    setTimerCount(break_time_minutes);
  };

  const pomodoro = () => {
    setTimerMode("Focus");
    setTimerCount(focus_time_minutes);
  };

  return (
    <View
      style={{
        ...styles.container,
        ...{ backgroundColor: timerMode === "Focus" ? "#d95550" : "#2a9d8f" },
      }}
    >
      <TimerModeDisplay timerMode={timerMode} />
      <TimerButton
        startTimer={startTimer}
        stopTimer={stopTimer}
        isTimerRunning={isTimerRunning}
      />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
      <WaitingTimesButtons
        shortBreakTimer={shortBreakTimer}
        longBreakTimer={longBreakTimer}
        pomodoro={pomodoro}
        timerCount={timerCount}
        stopCounter={stopTimer}
      />
    </View>
  );
}
