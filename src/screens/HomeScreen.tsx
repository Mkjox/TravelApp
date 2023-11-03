import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Post from "../components/Post";
import {
  Chip,
  useTheme,
  Card,
  IconButton,
  ActivityIndicator,
  Button,
} from "react-native-paper";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { FlatList } from "react-native-gesture-handler";
import PostData from '../assets/data/PostData';

// const PostData = require('../assets/data/PostData');

const HomeScreen = ({route, navigation}) => {
   const renderPostItem = ({item}) =>{
    return (
      <TouchableOpacity onPress={() => navigation.navigate('PostDetails', {item: item})}>
        <ImageBackground source={{uri:'https://picsum.photos/700'}}
          style={[styles.postItem /*, {
            marginTop: item.id === id = 20 : 0,
          },*/
        ]}
        imageStyle = {styles.postItemImage}>
          
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  // const [data, setData] = useState("");

  // const [isSelected, setIsSelected] = React.useState(false);
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather name="menu" size={32}></Feather>
          </View>

          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View style = {styles.postWrapper}>
              <View style = {styles.postItemsWrapper}>
                <FlatList data={body}  />
              </View>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

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
    marginTop: 10
  },
  postItemsWrapper: {
    paddingVertical: 20,
    marginBottom: 10,
    marginLeft: 5
  },
  postItem: {
    width: 320,
    height: 120,
    justifyContent: 'flex-end',
    marginRight: 20,
    marginHorizontal: 10,
    marginVertical: 10
  },
  postItemImage: {
    borderRadius: 20
  }
});

export default HomeScreen;
