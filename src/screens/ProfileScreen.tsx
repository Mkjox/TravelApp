import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Linking, Platform, View, Text } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import Materialicon from '@expo/vector-icons/MaterialIcons';
import Fontawesome from '@expo/vector-icons/FontAwesome5';

const isAndroid = Platform.OS === 'android';

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoScreen}>
        <View style={{flexDirection: 'row', marginTop: 15}}>

              <Avatar.Icon size={24} icon='folder' style={{marginRight: -5}}/>


            <View style={{marginLeft: 20}}>
              <CardTitle style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>
                <Text>Name surname</Text>
                <Text>Nickname - username</Text>
              </CardTitle>
            </View>
        </View>
      </View>

            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Materialicon name="place" size={20} color={'#777777'}/>
                <Text style={styles.text}>Location info</Text>
              </View>
              <View style={styles.row}>
                <Materialicon name="phone" size={20} color={'#777777'}/>
                <Text style={styles.text}>Phone number</Text>
              </View>
              <View style={styles.row}>
                <Materialicon name="email" size={20} color={'#777777'}/>
                <Text style={styles.text}>E-mail</Text>
              </View>
            </View>
      
            <View style={styles.infoBoxWrapper}>
              <View style={[styles.infoBox,
              {
                borderRightColor: '#dddddd',
                borderRightWidth: 1,
              }]}>
                <Title>Post Count Data</Title>
                <Caption>Post Count</Caption>
              </View>
              <View style = {styles.infoBox}>
                <Title>Liked Post Count Data</Title>
                <Caption>Liked Post Count</Caption>
              </View>
            </View>

              <View style={styles.menuWrapper}>
                <TouchableRipple>
                <View style={styles.menuItem}>
                  <Fontawesome name='heart' color='#FF6347' size={25}/>
                  <Text style={styles.menuItemText}>Liked</Text>
                  </View>
                </TouchableRipple>

                <TouchableRipple>
                  <View style={styles.menuItem}>
                    <Materialicon name='share' color='#FF6347' size={25} />
                    <Text style={styles.menuItemText}>Recommend it to your friend</Text>
                  </View>
                </TouchableRipple>
                
                <TouchableRipple>
                  <View style={styles.menuItem}>
                    <Fontawesome name='donate' color='#FF6347' size={25} />
                    <Text style={styles.menuItemText}>Donate</Text>
                  </View>
                </TouchableRipple>

                <TouchableRipple>
                  <View style={styles.menuItem}>
                    <Materialicon name='settings' color='#FF6347' size={25}/>
                    <Text style={styles.menuItemText}>Settings</Text>
                  </View>
                </TouchableRipple>
              </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption:{
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  text:{
    color: '#777777',
    marginLeft: 15,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 26,
  },
  userInfoScreen: {

  }
});

export default ProfileScreen;
