import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  FlatList,
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

// const PostData = require('../assets/data/PostData');
const url = "https://jsonplaceholder.typicode.com/posts";

const HomeScreen = () => {
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
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  //const renderPostItem = () =>{
  //<TouchableOpacity/* onPress={() => navigation.navigate('PostDetails', {item: null})}*/>

  // const [isSelected, setIsSelected] = React.useState(false);

  const HomeScreen = ({ route, navigation }) => {
    const renderPostItem = ({ item }) => {
      return (
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map((data, id) => {
              return (
                <ScrollView>
                  <SafeAreaView>
                    <View style={styles.menuWrapper}>
                      <Feather
                        name="menu"
                        size={32}
                        style={{ elevation: 5, shadowRadius: 5 }}
                      ></Feather>
                      <ImageBackground
                        source={{ uri: "https://picsum.photos/700" }}
                        style={[
                          styles.postItem,
                          {
                            marginTop: item.id === "0" ? 20 : 0,
                          },
                          ,
                        ]}
                        imageStyle={styles.postItemImage}
                      />
                    </View>
                    <View style={styles.postWrapper}>
                      <View style={styles.postItemsWrapper}>
                        <FlatList
                          data={url}
                          // key={id}
                          keyExtractor={(item) => item.id}
                          renderItem={renderPostItem}
                          alwaysBounceVertical={true}
                          showsVerticalScrollIndicator={false}
                        />
                      </View>
                    </View>
                  </SafeAreaView>
                </ScrollView>
              );
            })
          )}
        </View>
      );
    };
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  card: {
    marginTop: 10,
    width: 350, // Don't forget to change this
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postWrapper: {
    marginHorizontal: 5,
    marginTop: 10,
  },
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
