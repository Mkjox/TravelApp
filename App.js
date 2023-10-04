import { StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./src/Screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import HomeScreen from "./src/Screens/HomeScreen";
import GalleryScreen from "./src/Screens/GalleryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    // flex: 1,
    // textAlign: 'center',
    // alignContent: 'center',
    // marginTop: 50,
    // margin: 50,
    // alignSelf: 'center',
    // display: 'flex'
  },
});
