import React from 'react';
import { LoggedInDisplay } from '../components/Login/LoggedInDisplay'
import { StyleSheet, View } from 'react-native';


export class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LoggedInDisplay/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});