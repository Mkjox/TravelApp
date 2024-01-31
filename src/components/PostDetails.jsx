import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

function PostDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.postView}>
        <Text>
          Post Details
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postView: {
    marginTop: 50,
    marginBottom: 50,
    marginRight: 30,
    marginLeft: 30,
  },
});

export default PostDetails;
