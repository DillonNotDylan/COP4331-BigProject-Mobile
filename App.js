import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topnav}></View>
      <View style={styles.title}>
        <Text>Chordeographer</Text>
      </View>
      
      <View style={styles.pianoContainer}>
        <Text>Piano Placeholder</Text>
      </View>

      <View style={styles.progressionInfo}>        
        <View style={styles.currentProgressionTop}>
          <Text>Current Progression container</Text>

          {/* <Button >Save</Button> */}
        </View>

        <View style={styles.currentProgressionBottom}>
          <Text>Key</Text>
          <Text>Mode</Text>
        </View>
      </View>

      <View style={styles.progressionDisplay}>

        <View style={styles.loopContainer}>

            <TouchableOpacity  onPress={()=>null}>
              <View style={styles.chordBoxDisplay}>
                <Text>E#maj7</Text>
                <View style={styles.chordInfo}>
                </View>
                <View style={styles.chordTransition}></View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>null}>
              <View style={styles.chordBoxDisplay}>
                <Text>E#maj7</Text>
                <View style={styles.chordInfo}>
                </View>
                <View style={styles.chordTransition}></View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}>
              </View>
              <View style={styles.chordTransition}></View>
            </View>
          </TouchableOpacity>


            <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}>
              </View>
              <View style={styles.chordTransition}></View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.loopContainer}>

          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}>
              </View>
              <View style={styles.chordTransition}></View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}>
              </View>
              <View style={styles.chordTransition}></View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}>
              </View>
              <View style={styles.chordTransition}></View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity  onPress={()=>null}>
            <View style={styles.chordBoxDisplay}>
              <Text>E#maj7</Text>
              <View style={styles.chordInfo}>
              </View>
              <View style={styles.chordTransition}></View>
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
    flex: 1,
    //border:  '5px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: 10,
  },

  pianoContainer:
  {
    flex: 3,
    //border:  '5px solid black',
    backgroundColor: 'grey',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: 10,
  },

  progressionInfo:{
    flex: 4,
    //border:  '5px solid black',
    backgroundColor: 'grey',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: 10,
    borderRadius: 8, 
  },

  currentProgressionTop:{
    flex: 1,
    //border:  '5px solid purple',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50, 
    borderRadius: 8, 
  },

  currentProgressionBottom:{
    flex: 1,
    //border:  '5px solid purple',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50, 
    alignItems: 'center',
    borderRadius: 8, 
  },

  progressionDisplay:{
    flex: 14,
    //border:  '5px solid black',
    backgroundColor: 'grey',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    margin: 10,
    borderRadius: 8, 
  },

  loopContainer:{
    flex: 0.35,
   // border:  '5px solid green',
    backgroundColor: 'white',
    flexDirection: 'row', 
    margin: 10,
    marginTop: 20,
    borderRadius: 6, 
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  chordBoxDisplay:{
    //border:  '5px solid yellow',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 3, 
    margin: 5,
    padding: 5,
    paddingTop: 17,
    paddingBottom: 17,
  },

  chordInfo: {
    flex: 1,
    //border:  '5px solid red',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 12,
  },

  chordTransition: {
    flex: 1,
    //border:  '5px solid purple',
    backgroundColor: 'white',
    height: 12,
  },

  addButton:{
    margin: 20,
    justifyContent: 'flex-end',
  },
});
