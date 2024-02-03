import * as react from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>- Settings Screen -</Text>
        <Text>I will design this page later</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignItems: "center",
    marginTop: 370,
  },
});
export default SettingsScreen;
