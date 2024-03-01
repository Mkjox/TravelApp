import * as react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={navigation.goback()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
  back: {
    alignItems: "left",
    marginTop: 35,
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "flex-start",
  },
  text: {
    alignItems: "center",
    marginTop: 300,
  },
});
export default SettingsScreen;
