import * as react from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import colors from "../assets/colors/colors";
import LikedData from '../assets/data/likedData.json';
import { Avatar, List } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';

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
          <View style={styles.listWrapper}>
            <TouchableOpacity>
              <List.Item
                title="Dark Mode"
                left={props => <List.Icon{...props} icon={() => <Icon name="dark-mode" size={24} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <List.Item
                title="Notifications"
                left={props => <List.Icon {...props} icon={() => <Icon name="notifications" size={24} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <List.Item
                title="Language"
                left={props => <List.Icon {...props} icon={() => <Icon name="language" size={24} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <List.Item
                title="Privacy"
                left={props => <List.Icon {...props} icon={() => <Icon name="privacy-tip" size={24} />} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            </TouchableOpacity>
          </View>
        </View>
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
    padding: 20,
    marginTop: 80
  },
  listWrapper: {
    marginTop: 50,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 25,
    elevation: 2
  },
});
export default SettingsScreen;
