import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import colors from '../assets/colors/colors';

const PostAddScreen = ({ navigation }) => {
    <SafeAreaView>
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                <Entypo name='chevron-left' size={32} color={colors.white} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
};

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default PostAddScreen;