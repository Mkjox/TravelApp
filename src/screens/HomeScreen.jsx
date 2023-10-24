import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import Post from "../components/Post";
import {
  Chip,
  useTheme,
  Card,
  IconButton,
  ActivityIndicator,
  Button,
} from "react-native-paper";
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import axios from "axios";

function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const [id, setId] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response);
      })
      .then((json) => {
        // setData(json.data);
        setTitle(title);
        setBody(body);
        setId(id);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Card style={styles.card}>
            {/* <Card.Cover source={=require={}}/> */}
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Title
              // title={title}
              // subtitle={body}
              // right={RightContent}
              title="Card title"
              subtitle="subtitle"
              right={() => (
                <IconButton
                  icon={isSelected ? 'heart' : 'heart-outline'}
                  onPress={() => setIsSelected(!isSelected)}
                />
              )}
            />
            <Card.Content>
              <Text>Lorem ipsum dolor sit amet</Text>
              <Text>body</Text>
            </Card.Content>
            {/* <Card.Actions>
              <Button onPress={() => {}}>Cancel</Button>
            </Card.Actions> */}
          </Card>
        )}
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
});

export default HomeScreen;
