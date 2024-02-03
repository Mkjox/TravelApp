import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const DonateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>- Donate Screen -</Text>
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

export default DonateScreen;
