import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export class HowToScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>How To Use This App</Text>
            </View>
        );
    }
}