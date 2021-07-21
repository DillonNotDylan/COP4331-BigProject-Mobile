import _ from 'lodash';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Key } from './Key';
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from './Constants'


class Piano extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pressedKeys: [],
      };
    }
  
    // playNote = (note) => {
    //   if (!_.isEmpty(note)) {
    //     const noteAudio = new Audio(document.getElementById(note).src);
    //     noteAudio.play();
    //   }
    // }
  
    // handleKeyDown = (event) => {
    //   if (event.repeat) {
    //     return;
    //   }
    //   const key = event.key;
    //   const updatedPressedKeys = [...this.state.pressedKeys];
    //   if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
    //     updatedPressedKeys.push(key);
    //   }
    //   this.setState({
    //     pressedKeys: updatedPressedKeys,
    //   });
    //   this.playNote(KEY_TO_NOTE[key]);
    // }
  
    // handleKeyUp = (event) => {
    //   const index = this.state.pressedKeys.indexOf(event.key);
    //   if (index > -1) {
    //     this.setState(state => ({
    //       pressedKeys: state.pressedKeys.splice(index, 1)
    //     }));
    //   }
    // }
  
    // componentDidMount = () => {
    //   window.addEventListener('keydown', this.handleKeyDown);
    //   window.addEventListener('keyup', this.handleKeyUp);
    // }
  
    render() {
      const keys = _.map(NOTES, (note, index) => {
        return (
          <Key
            key={index}
            note={note}
            pressedKeys={this.state.pressedKeys}
          />
        );
      });
  
    //   const audioFiles = _.map(NOTES, (note, index) => {
    //     return (
    //       <audio
    //         id={note}
    //         key={index}
    //         src={`../../notes/${note}.mp3`}
    //       />
    //     );
    //   });
  
      return (
        <View>
          <View style={styles.piano}>
            {keys}
          </View>
          {/* <div>
            {audioFiles}
          </div> */}
        </View>
      );
    }
  }
  
  export { Piano };









// export function Piano() {
//     return (
//         <View style={styles.piano}>
//             <Key note="c4"/>
//             <Key note="df4"/>
//             <Key note="d4"/>
//         </View>
//     );
// }

const styles = StyleSheet.create({
    piano: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 22.5,
    },
})