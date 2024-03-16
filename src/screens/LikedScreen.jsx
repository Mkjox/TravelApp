import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import LikedData from "../assets/data/likedData.json";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/core";

const LikedScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    try {
      setData(LikedData);
    }
    catch (error) {
      console.error("Error fetching data:", error)
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.menuWrapper}>
          <Feather name="menu" size={32} style={styles.menuButton} />
        </View>
        <View>
          <Text style={styles.title}>
            Liked Posts
          </Text>
        </View>
        <View style={styles.likedWrapper}>
          <View style={styles.likedItemWrapper}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("PostDetails", { item: item })}>
                  <View style={styles.likedItemWrapper}>
                    <ImageBackground src={item.image} style={styles.likedItemImage}>
                      <Text style={styles.likedItemTitle}>{item.title}</Text>
                      <Text style={styles.likedItemLocationWrapper}>
                        <MaterialIcons name='location-pin' size={14} color={colors.white} />
                        <Text>{item.place}</Text>
                      </Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              )}
              alwaysBounceVertical={true}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
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
  menuButton: {
    elevation: 5,
    shadowRadius: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 14,
    marginHorizontal: 15,
    marginTop: 16,
    fontWeight: '500'
  },
  likedWrapper: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  // likedItem: {
  //   width: 300,
  //   height: 120,
  //   justifyContent: "flex-end",
  //   marginRight: 20,
  //   marginHorizontal: 10,
  //   marginVertical: 10,
  // },
  likedItemWrapper: {
    paddingVertical: 10,
    marginHorizontal: 5,
    width: "auto",
  },
  likedItemImage: {
    height: 200,
    width: 330,
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  likedItemTitle: {
    fontSize: 16,
    color: "#D9D9D9",
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: '500'
  },
  likedItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 10,
    fontWeight: "400",
    fontSize: 14,
    color: "#FBFCFE",
  },
});

export default LikedScreen;
