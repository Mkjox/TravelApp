import React, { useState, useEffect } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

const height = Dimensions.get("window").height;

const PostDetails = ({ route, navigation }) => {
  const { item } = route.params;

  const [heart, setHeart] = useState("heart-outlined");
  const toggleHeart = () => {
    setHeart(heart === "heart-outlined" ? "heart" : "heart-outlined");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        src={item.image}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <MaterialIcons name="place" size={24} color="white" />
            <Text style={styles.locationText}>{item.place}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <TouchableOpacity onPress={toggleHeart} style={styles.heart}>
          <Entypo name={heart} size={32} color={colors.orange}/>
        </TouchableOpacity>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.body}</Text>
        </View>
        {/*  Can add another languages later and make this more dynamic  */}

        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Price</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.price}</Text>
              <Text style={styles.infoSubText}>/per</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Rating</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}>/per</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Duration</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}>/ hour</Text>
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
    backgroundColor: colors.white,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backgroundImage: {
    height: height * 0.499,
    justifyContent: "space-between",
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginTop: 50,
    marginLeft: 20,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontWeight: "400",
    fontSize: 24,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    fontWeight: "400",
    fontSize: 16,
    color: colors.white,
  },
  heart: {
    position: "absolute",
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20
  },
  descriptionTitle: {
    fontWeight: "400",
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontWeight: "normal",
    fontSize: 16,
    color: colors.darkGray,
    height: 200,
  },
  infoWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },
  infoTitle: {
    fontWeight: "400",
    fontSize: 24,
    color: colors.orange,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5
  },
  infoText: {
    fontWeight: '400',
    fontSize: 24,
    color: colors.orange
  },
  infoSubText: {
    fontWeight: "400",
    fontSize: 14,
    color: colors.darkGray,
  },
});

export default PostDetails;
