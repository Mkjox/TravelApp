import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { Card } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import LikedData from "../assets/data/likedData.json";
import PostDetails from "../components/PostDetails";

const GalleryScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(LikedData);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.menuWrapper}>
            <Feather name="menu" size={32} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("PostDetails", { item: item })}>
              <View style={styles.galleryWrapper}>
                <View style={styles.galleryItemWrapper}>
                  <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity>
                        <Card
                          style={styles.postInnerWrapper}
                          onPress={() =>
                            navigation.navigate("PostDetails", { item: item })
                          }
                        >
                          <Card.Cover
                            source={{ uri: "https://picsum.photos/700" }}
                          />
                          <Card.Content style={styles.galleryItemText}>
                            <Text>{item.title}</Text>
                            <Text>{item.body}</Text>
                          </Card.Content>
                        </Card>
                      </TouchableOpacity>
                    )}
                    alwaysBounceVertical={true}
                    showsVerticalScrollIndicator={false}
                  />
                  </View>
                </View>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuWrapper: {
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
  },
  galleryWrapper: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  galleryItem: {
    width: 300,
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
    marginTop: 10,
    paddingBottom: 10
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
    marginHorizontal: 5,
    width: "auto",
  },
  postInnerWrapper: {
    marginBottom: 5
  }
});

export default GalleryScreen;
