import * as react from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import colors from "../assets/colors/colors";
import LikedData from '../assets/data/likedData.json';
import { Avatar } from "react-native-paper";
import { Entypo } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [data, setData] = react.useState([]);
  const navigation = useNavigation();

  react.useEffect(() => {
    try {
      setData(LikedData);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={styles.headerText}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsWrapper}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <Entypo name="eye" size={22} />
                <Text style={styles.iconText}>Dark Mode</Text>
                <Entypo name="chevron-right" size={22} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <View style={styles.icon}>
                <Entypo name="bell" size={22} />
                <Text style={styles.iconText}>Notifications</Text>
                <Entypo name="chevron-right" size={22} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <View style={styles.icon}>
                <Entypo name="language" size={22} />
                <Text style={styles.iconText}>Language</Text>
                <Entypo name="chevron-right" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Avatar.Image size={70} style={styles.avatar} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    alignItems: "left",
    marginTop: 25,
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginLeft: 10
  },
  settingsWrapper: {
    alignItems: "center",
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    height: 500,
    width: 300,
    top: 80,
    borderRadius: 15,
  },
  avatar: {
    position: 'absolute',
    left: 150,
    top: 120,
  },
  iconWrapper: {
    marginTop: 150
  },
  icon: {
    marginVertical: 5,
    flexDirection: 'row'
  },
  iconText: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 10,
    fontFamily: 'Poppins_400Regular'
  }
});
export default SettingsScreen;
