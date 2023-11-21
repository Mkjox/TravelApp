import * as React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import { Button } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";

export default function GalleryScreen() {
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.menuWrapper}>
        <Feather name="menu" size={32} />
      </View>
      <View style={styles.galleryWrapper}>
      <FlatList data={null} renderItem={undefined} />
      </View>
      
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  galleryWrapper: {
    width:'auto',
    height: 800,
  }
});
