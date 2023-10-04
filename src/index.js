import { registerRootComponent } from "expo";
import * as React from "react";
import * as ReactNative from "react-native";
import App from "../App";
import { NavigationContainer } from "@react-navigation/native";

if (ReactNative.Platform.OS == "android") {
  registerRootComponent(App);
} else {
  ReactNative.AppRegistry.registerComponent(() => {
    return App;
  });
}

export default function App() {
    return (
        <NavigationContainer>
          



            
        </NavigationContainer>
    );
}
