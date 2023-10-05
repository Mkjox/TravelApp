import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Post from '../components/Post';



function HomeScreen() {
    <View style={styles.container}>
        <Text style={styles.Text1}>Home Page</Text>
    </View>
    
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 200
    },
    Text1: {
        marginTop: 100
    }
});


export default HomeScreen;