import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LanguageScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>This is Language Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default LanguageScreen;