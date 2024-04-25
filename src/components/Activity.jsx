// Entypo address
// FontAwesome map-signs / maybe motorcycle too
// FontAwesome5 bicycle or biking / car / hiking / running (?) / skiing / swimmer / campground
// Can add other sites' icons for adding contact by FontAwesome5Brands
// MaterialIcons kayaking
import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';


function Activity() {
    return (
        <View style={styles.activityWrapper}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.activityItem}>
                    <MaterialCommunityIcons name="hiking" size={40} color={colors.blue} />
                    <Text style={styles.activityText}>Hiking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <MaterialCommunityIcons name="bicycle" size={40} color={colors.blue} />
                    <Text style={styles.activityText}>Bicycle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <MaterialCommunityIcons name="car" size={40} color={colors.blue} />
                    <Text style={styles.activityText}>Drive</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <MaterialCommunityIcons name="kayaking" size={40} color={colors.blue} />
                    <Text style={styles.activityText}>Kayak</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <MaterialCommunityIcons name="ski" size={40} color={colors.blue} />
                    <Text style={styles.activityText}>Ski</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <MaterialCommunityIcons name="ski-water" size={40} color={colors.blue} />
                    <Text style={styles.activityText}>Water ski</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activityItem}>
                    <MaterialCommunityIcons name='swim' size={40} color={colors.blue}/>
                    <Text style={styles.activityText}>Swim</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    activityWrapper: {
        flexDirection: 'row',
    },
    activityItem: {
        marginVertical: 10,
        marginHorizontal: 15,
        alignItems:'center'
    },
    activityText: {
        color: colors.darkGray,
        fontWeight: '400'
    }
});

export default Activity;