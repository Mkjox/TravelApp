import React, { useState, useEffect } from "react";
import { StyleSheet, Linking, Platform, View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import LikedData from '../assets/data/likedData.json';
import colors from "../assets/colors/colors";


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
      <View style={styles.profileTopWrapper}>
        <Avatar.Image size={70} style={styles.avatar} />
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={[styles.headerText, { marginBottom: 5 }]}>@</Text>
        <Entypo name="location-pin" size={18} color={'#F5F5F5'} style={styles.profileDetails}>
          <Text style={styles.profileDetailsText}>Location</Text>
        </Entypo>
        <Entypo name="phone" size={18} color={'#F5F5F5'} style={styles.profileDetails}>
          <Text style={styles.profileDetailsText}>Phone Number</Text>
        </Entypo>
        <Entypo name="mail" size={18} color={'#F5F5F5'} style={styles.profileDetails}>
          <Text style={styles.profileDetailsText}>Email</Text>
        </Entypo>
      </View>
      <View style={styles.countWrapper}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileTopWrapper: {
    backgroundColor: '#3CB2D8',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    height: 300,
    alignItems: 'center',
    shadowOpacity: 30,
  },
  information: {
  },
  headerText: {
    fontWeight: '800',
    color: colors.white,
    fontSize: 18
  },
  avatar: {
    marginTop: 15,
    marginBottom: 10
  },
  profileDetails: {
    marginVertical: 5,
  },
  profileDetailsText: {
    fontWeight: '400',
  }
});

export default ProfileScreen;
