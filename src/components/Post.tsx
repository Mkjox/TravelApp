import * as React from "react";
import { StyleSheet, ScrollViewBase, View } from "react-native";

function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.postView}>
        <ScrollViewBase>
          
        </ScrollViewBase>
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

export default Post;
