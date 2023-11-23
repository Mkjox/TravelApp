import { registerRootComponent } from "expo";
import * as React from "react";
import * as ReactNative from "react-native";
import App from "../App";

if (ReactNative.Platform.OS == "android") {
  registerRootComponent(App);
} else {
  ReactNative.AppRegistry.registerComponent(() => {
    return App;
  });
}

export default index;