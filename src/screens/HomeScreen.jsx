import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Activity from "../components/Activity";
import LikedData from "../assets/data/likedData";
import colors from "../assets/colors/colors";
import { DrawerActions } from '@react-navigation/drawer';
import { Appbar } from '../components/Appbar';
import Explore from '../components/Explore';
import Post from '../components/Post';

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
    <ScrollView>
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
          {/* Explore component called here */}
          <Explore />
        </View>
        <View style={styles.activityWrapper}>
          <Text style={styles.activityTitle}>Activities</Text>
          <View style={styles.activityCategories}>
            {/* Activity component called here */}
            <Activity />
          </View>
        </View>
        <View style={styles.postWrapper}>
        {/* Post component called here */}
          <Post/>
        </View>
      </View>
      </ScrollView>
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
});

export default HomeScreen;
