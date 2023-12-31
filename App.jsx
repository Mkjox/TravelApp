import { StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import GalleryScreen from "./src/screens/GalleryScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Appbar from './src/components/Appbar';
import PostDetails from "./src/components/PostDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ tabBarActiveTintColor: "#e91e63" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="image-multiple"
                color={color}
                size={size}
              />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
            headerShown: false
          }}
        />
      </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
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

export default App;