import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  FlatList,
  ScrollView
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

const url = "https://jsonplaceholder.typicode.com/posts";

const HomeScreen = ({ route, navigation }) => {
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        setTitle(title);
        setBody(body);
        setId(id);
        setUserId(userId);
      })
      .catch((error) => console.error(error));
  }, []);


  const [data, setData] = useState([]);
  const [userId, setUserId] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

    const renderPostItem = ({ item }) => {
      data.map((data, id) => {
        return (
          <ScrollView>
            <SafeAreaView>
              {/* <ImageBackground
                source={{ uri: "https://picsum.photos/700" }}
                style={[
                  styles.postItem,
                  {
                    marginTop: item.id === "0" ? 20 : 0,
                  },
                  ,
                ]}
                imageStyle={styles.postItemImage}
              /> */}
            </SafeAreaView>
          </ScrollView>
        );
      });
    };
  return (
    <View style={styles.container}>
      <View style={styles.menuWrapper}>
        <Feather
          name="menu"
          size={32}
          style={{ elevation: 5, shadowRadius: 5 }}
        ></Feather>
      </View>
      <View style={styles.postWrapper}>
        <View style={styles.postItemsWrapper}>
        <FlatList data={url} keyExtractor={(item) => item.id} renderItem={({item}) => (
          <Card style={[styles.postItem,
                  {
                    marginTop: id === "0" ? 20 : 0,
                    marginBottom: 150,
                  }]}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Content style={styles.card}>
              <Text>{title}</Text>
              <Text>{body}</Text>
            </Card.Content>
          </Card>
          )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
  },
  card: {
    marginTop: 10,
    // width: 350, // Don't forget to change this
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
  },
  // postWrapper: {
  //   marginHorizontal: 5,
  //   marginTop: 10,
  // },
  postItemsWrapper: {
    paddingVertical: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
  postItem: {
    width: 320,
    height: 120,
    justifyContent: "flex-end",
    marginRight: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  postItemImage: {
    borderRadius: 20,
  },
});

export default HomeScreen;
