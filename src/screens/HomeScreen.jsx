import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Activity from "../components/Activity";
import LikedData from "../assets/data/likedData";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { DrawerActions } from '@react-navigation/drawer';
import { Appbar } from '../components/Appbar';
import Entypo from '@expo/vector-icons/Entypo';

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
        </View>
        <View>
          <Text style={styles.explore}>Explore</Text>
          <View style={styles.exploreItem}>
            <Text style={styles.exploreItemText}>All</Text>
            <Text style={styles.exploreItemText}>Routes</Text>
            <Text style={styles.exploreItemText}>City</Text>
            <Text style={styles.exploreItemText}>Experiences</Text>
          </View>
        </View>
        <View style={styles.pinnedPostWrapper}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('PostDetails', {
                item: item
              })}>
                <ImageBackground src={item.image} style={styles.pinnedPost} imageStyle={styles.pinnedPostImage}>
                  <Text style={styles.pinnedPostTitle}>{item.title}</Text>
                  <View style={styles.pinnedPostLocationWrapper}>
                    <Entypo name="location-pin" size={18} color={colors.white} />
                    <Text style={styles.pinnedPostLocationText}>{item.place}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )} horizontal={true} showsHorizontalScrollIndicator={false} />
        </View>
        <View style={styles.activityWrapper}>
          <Text style={styles.activityTitle}>Activities</Text>
          <View style={styles.activityCategories}>
            <Activity/>
          </View>
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
  explore: {
    lineHeight: 80,
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '700',
  },
  exploreItem: {
    fontSize: 24,
    alignContent: 'center',
    width: 343,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  exploreItemText: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.gray
  },
  pinnedPostWrapper: {
    paddingVertical: 20,
    marginHorizontal: 12,
    // width: 'auto',
    // height: 300,
    // borderRadius: 12,
    // marginVertical: 10
  },
  pinnedPost: {
    width: 180,
    height: 270,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20
  },
  pinnedPostImage: {
    borderRadius: 15
  },
  pinnedPostTitle: {
    fontWeight: '400',
    fontSize: 18,
    color: colors.white
  },
  pinnedPostLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  pinnedPostLocationText: {
    marginLeft: 5,
    fontWeight: '400',
    fontSize: 14,
    color: colors.white
  },
  activityWrapper: {

  },
  activityTitle: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '700'
  },
  activityCategories: {
    flexDirection: 'row',
    marginHorizontal: 20,
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
