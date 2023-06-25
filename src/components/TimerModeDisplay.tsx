import { Text, View } from "react-native";
import styles from "./styles/TimerModeDisplayStyles";

export type TimerModes = "Focus" | "Break" | "Short Break";

type Props = {
  timerMode: TimerModes;
};

export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timerModeText}>
        {timerMode === "Focus" ? "Time To Focus !!🇦🇷" : "Break Time !!🧉 "}
      </Text>
    </View>
  );
};
