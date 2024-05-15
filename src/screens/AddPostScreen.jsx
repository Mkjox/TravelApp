import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import colors from '../assets/colors/colors';

const AddPostScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const handleSubmit = () => {

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-left' size={32} color={colors.black} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style={styles.textInput}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Enter Title' />
                    <TextInput style={styles.textInput}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Enter Description'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Enter Place'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Enter Price'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Enter Rating'
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Enter Duration'
                    />
                    <Button onPress={handleSubmit} title='Submit' style={styles.button} />
                </View>
            </View>
        </SafeAreaView>
    );
};

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginTop: 20,
        marginLeft: 20,
        position: 'relative'
    },
    textInput: {
        marginHorizontal: 10,
        marginVertical: 10,
        alignSelf: 'center',
        color: colors.teallight,
        width: 'auto'
    },
    button: {
        marginTop: 10
    }
});

export default AddPostScreen;