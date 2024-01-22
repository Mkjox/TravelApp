import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import Post from "../components/PostDetails";
import {
  Chip,
  useTheme,
  Card,
  IconButton,
  ActivityIndicator,
  Button,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Category from "../components/Category";

const HomeScreen = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }
  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.menuWrapper}>
          <Feather
            name="menu"
            size={32}
            style={{ elevation: 5, shadowRadius: 5 }}
          ></Feather>
          <FlatList horizontal={true} style={styles.categoryWrapper}>
            <Category/>
          </FlatList>
        </View>
        <View style={styles.postWrapper}>
          <View style={styles.postItemsWrapper}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Card style={styles.postInnerWrapper}>
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
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
  },
  categoryWrapper: {
    margin: 10,
    flexDirection: 'row',
  },
  postWrapper: {
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 10
  },
  postInnerWrapper:{
    marginBottom: 8
  },
  postItemsWrapper: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 5,
    width: 'auto'
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
    marginTop: 10,
  },
  postItemImage: {
    borderRadius: 20,
  },
});

export default HomeScreen;
