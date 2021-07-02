import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { Piano } from './Piano.js'
const statusBarHeight = Constants.statusBarHeight

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topnav}></View>
      <View style={styles.title}>
        <Text style={{ fontFamily: 'Roboto', fontSize: 25}}>Chordeographer</Text>
      </View>
      
      <View style={styles.pianoContainer}>
        <Piano />
      </View>

      <View style={styles.progressionInfo}>        
        <View style={styles.currentProgressionTop}>
        <TouchableOpacity onPress={()=>null}>
            <Text>Current Progression</Text>
          </TouchableOpacity>

          {/* <Button >Save</Button> */}
        </View>

        <View style={styles.currentProgressionBottom}>
          <TouchableOpacity onPress={()=>null}>
            <View style={{paddingLeft: 10, paddingRight: 10, borderWidth: 1, height: 50, justifyContent: 'center'}}>
              <Text>Key</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>null}>
            <View style={{paddingLeft: 10, paddingRight: 10, borderWidth: 1, height: 50, justifyContent: 'center'}}>
              <Text>Mode</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>null}>
            <View style={{paddingLeft: 10, paddingRight: 10, borderWidth: 1, height: 50, justifyContent: 'center'}}>
              <Text>Change</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progressionDisplay}>

        <View style={styles.loopContainer}>

          <TouchableOpacity onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

          <View style={styles.chordTransition}></View>

          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

          <View style={styles.chordTransition}></View>

          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

          
          <View style={styles.chordTransition}></View>

          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.loopContainer}>

          <TouchableOpacity onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

          <View style={styles.chordTransition}></View>

          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

          <View style={styles.chordTransition}></View>

          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}></View>
            </View>
          </TouchableOpacity>

          
          <View style={styles.chordTransition}></View>

          <TouchableOpacity  onPress={()=>null}>
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

      <StatusBar style="auto" />
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

  topnav:{
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

  progressionInfo:{
    flex: 4,
    backgroundColor: 'grey',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    margin: 10,
    borderRadius: 8, 
  },

  currentProgressionTop:{
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50, 
    borderRadius: 8, 
  },

  currentProgressionBottom:{
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0, 
    alignItems: 'center',
    borderRadius: 8, 
  },

  progressionDisplay:{
    flex: 14,
    backgroundColor: 'grey',
    flexDirection: 'column',
    alignItems: 'center',
    width: '95%',
    margin: 10,
    borderRadius: 8, 
  },

  loopContainer:{
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

  chordBoxDisplay:{
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

  addButton:{
    margin: 20,
    justifyContent: 'flex-end',
  },
});
