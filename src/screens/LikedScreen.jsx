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
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import LikedData from "../assets/data/likedData.json";
import colors from "../assets/colors/colors";

const LikedScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(LikedData);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.menuWrapper}>
          <Feather name="menu" size={32} style={styles.menuButton} />
        </View>
        <View style={styles.likedWrapper}>
          <View style={styles.likedItemWrapper}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Card
                    style={styles.likedPostInnerWrapper}
                    onPress={() =>
                      navigation.navigate("PostDetails", { item: item })
                    }
                  >
                    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                    <Card.Content style={styles.likedItemText}>
                      <Text style={styles.likedItemTitle}>
                      {item.title}
                      </Text>
                      <Text style={styles.likedItemPlace}>
                      <MaterialIcons name="place" size={15} color={"black"}/>
                      {item.place}
                      </Text>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    elevation: 5,
    shadowRadius: 5,
    marginLeft: 5,
  },
  menuWrapper: {
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
  },
  likedWrapper: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  likedItem: {
    width: 300,
    height: 120,
    justifyContent: "flex-end",
    marginRight: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  likedItemImage: {
    borderRadius: 20,
  },
  likedItemText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#FBFCFE",
    marginTop: 10,
    paddingBottom: 10,
  },
  likedItemTitle: {
    marginBottom: 7.5,
    fontSize: 16,
    color: colors.black
  },
  likedItemPlace: {
    marginBottom: 7.5,
    color: colors.darkGray
  },
  likedItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 5,
  },
  likedItemLocationText: {
    marginLeft: 5,
    fontWeight: "400",
    fontSize: 15,
    color: "#FBFCFE",
    marginBottom: 5,
  },
  likedItemWrapper: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 5,
    width: "auto",
  },
  likedPostInnerWrapper: {
    marginBottom: 5,
  },
});

export default LikedScreen;
