import React from 'react';
import Constants from 'expo-constants';
import { Card, Title, Paragraph, Grid } from 'react-native-paper';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const statusBarHeight = Constants.statusBarHeight

export function ProjectDisplay(){
    return(
        <View style={styles.progressionDisplay}>

        <View style={styles.loopContainer}>

          <Card>
            <Card>
              <Card.Content>
                <Title>A</Title>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Title>A</Title>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Title>A</Title>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Title>A</Title>
              </Card.Content>
            </Card>
          </Card>

        </View>

        <View style={styles.loopContainer}>

          <TouchableOpacity onPress={() => null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

          <View style={styles.chordTransition}></View>

          <TouchableOpacity onPress={() => null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

          <View style={styles.chordTransition}></View>

          <TouchableOpacity onPress={() => null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>


          <View style={styles.chordTransition}></View>

          <TouchableOpacity onPress={() => null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.addButton}>
          {/* <Button></Button> */}
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      flexDirection: 'column',
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
      //border: '2px solid red',
    },
  
    topnav: {
      flex: 1,
      height: statusBarHeight,
    },
  
    title: {
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
      width: '65%',
      margin: 10,
      backgroundColor: 'grey',
      borderRadius: 3,
    },
  
    pianoContainer:
    {
      flex: 3,
      backgroundColor: 'grey',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
      margin: 10,
    },
  
    progressionDisplay: {
      flex: 14,
      backgroundColor: '#92dff3',
      flexDirection: 'column',
      alignItems: 'center',
      width: '95%',
      margin: 10,
      borderRadius: 8,
    },
  
    loopContainer: {
      flex: 0.35,
      backgroundColor: 'white',
      flexDirection: 'row',
      margin: 10,
      marginTop: 20,
      borderRadius: 6,
      width: '95%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    chordBoxDisplay: {
      backgroundColor: 'white',
      flexDirection: 'row',
      borderWidth: 2,
      borderRadius: 3,
      margin: 5,
      padding: 10,
      paddingTop: 17,
      paddingBottom: 17,
    },
  
    chordInfo: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'red',
      backgroundColor: 'red',
      flexDirection: 'row',
      height: 12,
      width: 20,
      justifyContent: 'flex-end',
      marginTop: -12,
      marginRight: -10,
      marginBottom: 2,
    },
  
    chordTransition: {
      flex: 0.5,
      borderColor: 'purple',
      backgroundColor: 'purple',
      height: 12,
      paddingRight: 0,
      marginRight: -6,
      marginLeft: -5,
    },
  
    addButton: {
      margin: 20,
      justifyContent: 'flex-end',
    },

  });