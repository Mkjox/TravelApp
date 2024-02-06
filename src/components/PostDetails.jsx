import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import likedData from "../assets/data/likedData.json";

const PostDetails = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(PostDetails);
  }, []);

  const [heart, setHeart] = useState("heart-outlined");
  const toggleHeart = () => {
    setHeart(heart === "heart-outlined" ? "heart" : "heart-outlined");
  };

  return (
    <View style={styles.container}>
      <View style={styles.postView}>
        <ImageBackground src={item.image} style={styles.backgroundImage} />
        <View>
          <Text>{item.title}</Text>
          {/* <MaterialIcons name="place" size={24} color="black">
            <Text>{item.place}</Text>
          </MaterialIcons> */}
          <TouchableOpacity onPress={toggleHeart} style={styles.heart}>
            <Entypo name={heart} size={28} color={colors.orange} />
          </TouchableOpacity>

          <View style={styles.descriptionWrapper}>
            {/*  Can add another languages later and make this more dynamic  */}
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>{item.body}</Text>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <View style={styles.title}>Price</View>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.price}</Text>
                <Text style={styles.infoSubText}>/per</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  postView: {
    marginTop: 50,
    marginBottom: 50,
    marginRight: 30,
    marginLeft: 30,
  },
  backgroundImage: {},
  title: {
    fontSize: 24,
  },
  heart: {},
  description: {
    fontSize: 16,
  },
  descriptionWrapper: {

  },
  description: {

  },
  descriptionText: {

  },
  infoTextWrapper: {

  },
  infoText: {

  },
  infoSubText: {

  },
});

export default PostDetails;
