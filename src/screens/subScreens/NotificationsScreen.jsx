import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const NotificationsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>This is Notifications Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default NotificationsScreen;