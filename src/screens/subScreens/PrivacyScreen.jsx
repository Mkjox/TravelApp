import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import { List } from "react-native-paper";

const PrivacyScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.titleWrapper}>
                    <Entypo name='chevron-left' size={28} />
                    <Text style={styles.title}>Privacy Screen</Text>
                </TouchableOpacity>
                <View>
                    <List.Item
                        title="Make my post count private"
                        right={props => <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={!isEnabled}
                        />}
                    />

                    <List.Item
                        title="Make my comment count private"
                        right={props => <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={!isEnabled}
                        />}
                    />

                    <List.Item
                        title="Make my profile private"
                        right={props => <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={!isEnabled}
                        />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleWrapper: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5
    },
    title: {
        fontSize: 18,
        marginTop: 3
    }
})

export default PrivacyScreen;