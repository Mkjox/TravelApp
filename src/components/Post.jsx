import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../assets/colors/colors";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";


import LikedData from "../assets/data/likedData";

function Post() {
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        try {
            setData(LikedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    return (
        <View style={styles.postWrapper}>
            <View style={styles.postItemsWrapper}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Card
                                style={styles.postInnerWrapper}
                                onPress={() =>
                                    navigation.navigate("PostDetails", { item: item })
                                }
                            >
                                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                                <Card.Content style={styles.postText}>
                                    <Text style={styles.postItemTitle}>{item.title}</Text>
                                    <Text style={styles.postPlace}>
                                        <MaterialIcons
                                            name="place"
                                            size={15}
                                            color={colors.darkGray}
                                        />
                                        {item.place}
                                    </Text>
                                    <Text>{item.body}</Text>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    )}
                    alwaysBounceVertical={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postWrapper: {
        marginHorizontal: 5,
        marginBottom: 10,
      },
      postInnerWrapper: {
        marginBottom: 5,
      },
      postItemsWrapper: {
        paddingVertical: 20,
        marginBottom: 10,
        marginHorizontal: 5,
        width: "auto",
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
        fontWeight: "400",
        fontSize: 16,
        color: "#FBFCFE",
        marginTop: 10,
        paddingBottom: 10,
      },
      postItemTitle: {
        marginBottom: 7.5,
        fontSize: 16,
        color: colors.black,
      },
      postPlace: {
        marginBottom: 7.5,
        color: colors.darkGray,
      },
      postItemImage: {
        borderRadius: 20,
      },
});

export default Post;