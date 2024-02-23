import React from "react";
import { StyleSheet } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import LikedScreen from "./src/screens/LikedScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Appbar from "./src/components/Appbar";
import PostDetails from "./src/components/PostDetails";
import SettingsScreen from "./src/screens/SettingsScreen";
import DonateScreen from "./src/screens/DonateScreen";
import Post from "./src/components/Post";
import Explore from "./src/components/Explore";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: { borderTopStartRadius: 15, borderTopEndRadius: 15 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

// const Sidebar = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Appbar">
//       <Drawer.Screen name="Appbar" component={Appbar}/>
//       <Drawer.Screen name="Settings" component={SettingsScreen}/>
//     </Drawer.Navigator>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={styles.header}
        />

        {/* <Stack.Screen name="Sidebar" component={Sidebar} /> */}

        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={styles.header}
        />

        <Stack.Screen
          name="Appbar"
          component={Appbar}
          options={styles.header}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={styles.header}
        />

        <Stack.Screen
          name="Donate"
          component={DonateScreen}
          options={styles.header}
        />

        <Stack.Screen
          name="Post"
          component={Post}
          options={styles.header} />

        <Stack.Screen
          name="Explore"
          component={Explore}
          options={styles.header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
  header: {
    headerShown: false,
  },
});

export default App;
