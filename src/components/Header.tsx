import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Colors } from "../styles/colors";

interface HeaderProps {
  reloadGame: () => void;
  pauseGame: () => void;
  children: JSX.Element;
  isPaused: boolean;
}

export default function Header({
  children,
  reloadGame,
  pauseGame,
  isPaused,
}: HeaderProps): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reloadGame} style={styles.icon}>
        <Text style={styles.iconText}>🔄</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pauseGame} style={styles.icon}>
        <Text style={styles.iconText}>{isPaused ? "▶️" : "⏸️"}</Text>
      </TouchableOpacity>
      
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: Colors.primary,
    borderWidth: 12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomWidth: 0,
    padding: 15,
    backgroundColor: Colors.background,
  },
  icon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 35,
    color: Colors.primary,
  },
});
