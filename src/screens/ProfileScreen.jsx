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
        <Caption style={{ fontSize: 14 }}>Post Count</Caption>
      </View>
      <View style={styles.options}>
        <FontAwesome name="heart" style={styles.optionItem} size={17}>
          <Text style={styles.optionItemText}> Shared Posts</Text>
        </FontAwesome>
        <FontAwesome name="comment" style={styles.optionItem} size={17}>
          <Text style={styles.optionItemText}> Comments</Text>
        </FontAwesome>
        <FontAwesome name="pencil" style={styles.optionItem} size={17}>
          <Text style={styles.optionItemText}> Customize Profile</Text>
        </FontAwesome>
        <FontAwesome name="share" style={styles.optionItem} size={17}>
          <Text style={styles.optionItemText}> Recommend the app to your friend</Text>
        </FontAwesome>
        <FontAwesome name="gear" style={styles.optionItem} size={17}>
          <Text style={styles.optionItemText}> Settings</Text>
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
    backgroundColor: colors.teallight,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    height: 300,
    shadowOpacity: 30,
  },
  avatar: {
    marginTop: 25,
    marginBottom: 10,
    alignSelf: 'center'
  },
  information: {
  },
  headerText: {
    fontFamily: 'Poppins_500Medium',
    color: colors.white,
    fontSize: 18,
    alignSelf: 'center'
  },
  profileDetails: {
    marginVertical: 4,
    marginLeft: 120
  },
  profileDetailsText: {
    fontFamily: 'Poppins_300Light',
  },
  countWrapper: {
    alignItems: 'center',
    marginVertical: 10,
    borderStyle: "dashed",
    borderBottomWidth: 2,
    borderBottomColor: colors.darkGray,
    height: 60,
    marginBottom: 15
  },
  options: {
    flexDirection: 'column',
    marginLeft: 40
  },
  optionItem: {
    marginVertical: 10,
    height: 20,
    color: colors.teallight,
  },
  optionItemText: {
    color: colors.black,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  }
});

export default ProfileScreen;
