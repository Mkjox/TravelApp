import * as react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
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
