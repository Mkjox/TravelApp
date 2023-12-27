import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { Button } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import galleryData from "../assets/data/GalleryData";
import Entypo from "@expo/vector-icons/Entypo";

const GalleryScreen = ({ route, navigation }) => {
  const renderGalleryItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { item: item })}>
        <ImageBackground
          source={item.image}
          style={[
            styles.galleryItem,
            {
              marginTop: item.id === "0" ? 20 : 0,
            },
          ]}
          imageStyle={styles.galleryItemImage}
        >
          <Text style={styles.galleryItemText}>{item.title}</Text>
          <View style={styles.galleryItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={"#FBFCFE"} />
            <Text style={styles.galleryItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.menuWrapper}>
          <Feather name="menu" size={32} />
        </View>
        <View style={styles.galleryWrapper}>
          <View style={styles.galleryItemWrapper}>
            <FlatList
              data={galleryData}
              renderItem={renderGalleryItem}
              keyExtractor={(item) => item.id}
              alwaysBounceVertical={true}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    width: "auto",
    height: 800,
  },
  galleryItem: {
    width: 320,
    height: 120,
    justifyContent: "flex-end",
    marginRight: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  galleryItemImage: {
    borderRadius: 20,
  },
  galleryItemText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#FBFCFE",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  galleryItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 5,
  },
  galleryItemLocationText: {
    marginLeft: 5,
    fontWeight: "400",
    fontSize: 15,
    color: "#FBFCFE",
    marginBottom: 5,
  },
  galleryItemWrapper: {
    paddingVertical: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default GalleryScreen;
