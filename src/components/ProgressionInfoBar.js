import React from 'react';
import { ProgressionDropdown } from './ProgressionDropdown'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function ProgressionInfoBar() {
    return (
        <View style={styles.progressionInfo}>
            <View style={styles.currentProgressionTop}>

                <TouchableOpacity onPress={() => null}>
                    <Text>Current Progression</Text>
                    {/* <ProgressionDropdown /> */}
                </TouchableOpacity>

            </View>

            <View style={styles.currentProgressionBottom}>    
                <TouchableOpacity onPress={() => null}>
                    <View style={{ paddingLeft: 10, paddingRight: 10, borderWidth: 1, height: 50, justifyContent: 'center' }}>
                        <Text>Key</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => null}>
                    <View style={{ paddingLeft: 10, paddingRight: 10, borderWidth: 1, height: 50, justifyContent: 'center' }}>
                        <Text>Mode</Text>
                    </View>
                </TouchableOpacity>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    progressionInfo: {
        flex: 4,
        backgroundColor: '#92dff3',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        margin: 10,
        borderRadius: 8,
    },

    currentProgressionTop: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
    },
    
    currentProgressionBottom: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'center',
        borderRadius: 8,
    },
})