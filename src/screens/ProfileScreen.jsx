import React, { useState, useEffect } from "react";
import { StyleSheet, Linking, Platform, View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import LikedData from '../assets/data/likedData.json';


const ProfileScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      setData(LikedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.profileTopWrapper}>
          <Avatar.Image size={70} source={"https://picsum.photos/400"} />
          <Text>@</Text>
          <Entypo name="location-pin" size={18}>
            <Text>Location</Text>
          </Entypo>
          <Entypo name="phone" size={18}>
            <Text>Phone Number</Text>
          </Entypo>
          <Entypo name="mail" size={18}>
            <Text>Email</Text>
          </Entypo>
        </View>
        <View style={styles.CountWrapper}>
            <Text>Count</Text>
            <Caption>Post Count</Caption>
        </View>
        <View style={styles.options}>
          <FontAwesome name="heart">
            <Text>Liked Posts</Text>
          </FontAwesome>
          <FontAwesome name="comment">
            <Text>Comments</Text>
          </FontAwesome>
          <FontAwesome name="pencil">
            <Text>Customize Profile</Text>
          </FontAwesome>
          <FontAwesome name="share">
            <Text>Recommend the app to your friend</Text>
          </FontAwesome>
          <FontAwesome name="gear">
            <Text>Settings</Text>
          </FontAwesome>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default ProfileScreen;
