import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { KeyBox } from './KeyBox'
import { ModeBox } from './ModeBox'

export function ToolPage(props) {
    const [currOption, setOption] = useState(true);
    const[status, switchStatus] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.keyBox}>
                <KeyBox currOption={!currOption} grabKey={props.grabKey} grabMode={props.grabMode} status={status} switchStatus={switchStatus}/>
            </View>

            <View style={styles.modeBox}>
                <ModeBox setOption={setOption} currOption={currOption} grabMode={props.grabMode} status={status} switchStatus={switchStatus}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    // root: {
    //     display: 'flex',
    //     flexDirection: 'row'
    // },

    container: {
        display: 'flex',
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    // keyBox: {
    //     display: 'flex',
    //     flex: 1
    // },

    // modeBox: {
    //     display: 'flex',
    //     flex: 1,
    //     marginLeft: 50
    // },
})