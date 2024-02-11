import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { Card, ActivityIndicator, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Category from "../components/Category";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import postData from "../assets/data/postData";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      setData(postData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.menuWrapper}>
          <Feather
            name="menu"
            size={32}
            style={styles.menuButton}
            // onPress={() => navigation.toggleDrawer()}
          />
          <FlatList horizontal={true} style={styles.categoryWrapper}>
            <Category />
          </FlatList>
        </View>
        <View style={styles.postWrapper}>
          <View style={styles.postItemsWrapper}>
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
                    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                    <Card.Content style={styles.postText}>
                      <Text>{item.title}</Text>
                      <Text>{item.body}</Text>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              )}
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
    // justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
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
  categoryWrapper: {
    margin: 10,
    flexDirection: "row",
  },
  postWrapper: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  postInnerWrapper: {
    marginBottom: 5,
  },
  postItemsWrapper: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 5,
    width: "auto",
  },
  postItem: {
    width: 300,
    height: 120,
    justifyContent: "flex-end",
    marginRight: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  postText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#FBFCFE",
    marginTop: 10,
    paddingBottom: 10,
  },
  postItemImage: {
    borderRadius: 20,
  },
});

export default HomeScreen;
