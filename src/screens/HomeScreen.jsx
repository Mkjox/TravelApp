import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Category from "../components/Category";
import LikedData from "../assets/data/likedData";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { DrawerActions } from '@react-navigation/drawer';
import { Appbar } from '../components/Appbar';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      setData(LikedData);
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
            onPress={() => navigation.navigate("Appbar")}
          />
          {/* <FlatList horizontal={true} style={styles.categoryWrapper}>
            <Category />
          </FlatList> */}
        </View>
        <View style={styles.explore}>
          <View style={styles.exploreItem}>
            <Text>All</Text>
            <Text>Routes</Text>
            <Text>City</Text>
            <Text>Experiences</Text>
          </View>
        </View>
        <View style={styles.pinnedPostWrapper}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
              <View>
                <Card style={styles.pinnedPost}>
                  <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                  <Card.Title>{item.title}</Card.Title>
                  <View style={styles.pinnedPostLocation}>
                    <MaterialIcons name="place" size={15}/>
                    <Text>{item.place}</Text>
                  </View>
                </Card>
              </View>
            )} horizontal={true}/>
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
                      <Text style={styles.postItemTitle}>{item.title}</Text>
                      <Text style={styles.postPlace}>
                        <MaterialIcons
                          name="place"
                          size={15}
                          color={colors.darkGray}
                        />
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
  postItemTitle: {
    marginBottom: 7.5,
    fontSize: 16,
    color: colors.black,
  },
  postPlace: {
    marginBottom: 7.5,
    color: colors.darkGray,
  },
  postItemImage: {
    borderRadius: 20,
  },
});

export default HomeScreen;
