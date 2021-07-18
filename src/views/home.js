import React from 'react';
import { Piano } from '../Piano.js'
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { ProjectDisplay } from '../components/ProjectDisplay'
import { ProgressionInfoBar } from '../components/ProgressionInfoBar'
import { LoopBox } from '../components/Looper/LoopBox';

import { TestSound } from '../components/TestSound.js';

const statusBarHeight = Constants.statusBarHeight

export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                {/* Add spacing so avoid top navbar */}
                <View style={styles.topnav}></View>
                
                {/* Display the name of the App */}
                <View style={styles.title}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 25 }}>Chordeographer</Text>
                </View>

                {/* Display the piano */}
                <View style={styles.pianoContainer}>
                    {/* <Piano /> */}
                </View>

                <ProgressionInfoBar/>

                <TestSound />
                
                {/* <ProjectDisplay/> */}
                <LoopBox/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      flexDirection: 'column',
      backgroundColor: '#f5fcff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    topnav: {
      flex: 1,
      marginTop: statusBarHeight,
    },
  
    title: {
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
      width: '65%',
      margin: 10,
      backgroundColor: '#92dff3',
      borderRadius: 3,
    },
  
    pianoContainer:
    {
      flex: 3,
      backgroundColor: '#92dff3',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
      margin: 10,
    },
  });
  