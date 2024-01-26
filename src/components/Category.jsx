// Entypo address
// FontAwesome map-signs / maybe motorcycle too
// FontAwesome5 bicycle or biking / car / hiking / running (?) / skiing / swimmer / campground
// Can add other sites' icons for adding contact by FontAwesome5Brands
// MaterialIcons kayaking
import * as React from 'react';
import {View} from 'react-native';
import { Entypo, FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons';


function Category () {
    <View>
        <Entypo name="address" size={24} color="black" />
        <FontAwesome name="map" size={24} color="black"/>
        <FontAwesome5 name="bicycle" size={24} color="black"/>
        <FontAwesome5 name="hiking" size={24} color="black"/>
        <FontAwesome5 name="running" size={24} color="black"/>
        <FontAwesome5 name="swimmer" size={24} color="black"/>
        <FontAwesome5 name="campground" size={24} color="black"/>
        <MaterialIcons name="kayaking" size={24} color="black"/>
    </View>
};

export default Category;