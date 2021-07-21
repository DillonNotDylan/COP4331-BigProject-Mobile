import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { ProjectDisplay } from '../components/ProjectDisplay'
import { ProgressionInfoBar } from '../components/ProgressionInfoBar'
import { LoopBox } from '../components/Looper/LoopBox';
import { ToolPage } from '../components/Tools/ToolPage.js';

import { Piano } from '../components/Piano/Piano';

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
                    <Text style={{ fontFamily: 'Roboto', fontSize: 25 , marginBottom: -15, marginTop: -15}}>Chordeographer</Text>
                </View>

                {/* Display the piano */}
                <View style={styles.pianoContainer}>
                  <Piano/>
                </View>

                {/* <ProgressionInfoBar/> */}
                <View style={styles.toolPageContainer}>
                  <ToolPage/>
                </View>
                {/* <TestSound /> */}
                
                {/* <ProjectDisplay/> */}
                <View style={styles.loopContainer}>
                  <LoopBox/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f5fcff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    topnav: {
      flex: 0,
      marginTop: -15,
    },
  
    title: {
      flex: 0.075,
      alignItems: 'center',
      justifyContent: 'center',
      width: '65%',
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 3,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4.62,
      elevation: 6,
    },
  
    pianoContainer:
    {
      flex: 0.15,
      backgroundColor: 'grey',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
      margin: 10,


      shadowColor: "#000",
		  shadowOffset: {
			  width: 0,
			  height: 5,
		  },
		  shadowOpacity: 0.22,
		  shadowRadius: 2.22,
		  elevation: 10,
    },

    loopContainer: {
      display: 'flex',
      flex: 0.5,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
      margin: 10,
      maxHeight: '90%', 
    },

    toolPageContainer: {
      display: 'flex',
      flex: 0.1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
      margin: 10,
      maxHeight: '90%', 

      shadowColor: "#000",
		  shadowOffset: {
			  width: 0,
			  height: 1,
		  },
		  shadowOpacity: 0.22,
		  shadowRadius: 2.22,
		  elevation: 3,
    },
  });
  