import _ from 'lodash';
import React from 'react';
import Soundfont from 'soundfont-player';
import { NOTE_TO_KEY } from './Constants';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


class Key extends React.Component {


    playNote = () => {
        console.log("Are we here")

		const ac = new AudioContext();
		let plyr = null;
	
		Soundfont.instrument(ac, 'acoustic_grand_piano', {loop: false,adsr: [0, 0, 1, 0]}, ).then(function (instrument) {
			instrument.schedule( ac.currentTime,
					[{ time: 0, note: "C4" }, { time: 0, note: "E4" }, { time: 0, note: "G4" }, 
					{ time: .5, note: "A4" }, { time: .5, note: "E4" }, { time: .5, note: "C4" },
					{ time: 1, note: "A4" }, { time: 1, note: "F4" }, { time: 1, note: "C4" }]
				)
			}
		
		).catch(function (err) {
			console.log('err', err);
		});

        return;

	}


    noteIsFlat = (note) => {
        return note.length > 1;
    }

    keyIsPressed = (note, pressedKey) => {
        return _.includes(pressedKey, NOTE_TO_KEY[note]);
    }

    render () {
        let keyClassName = this.props.note;
        const noteIsFlat = this.noteIsFlat(this.props.note);
        const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKey)
    
        if (noteIsFlat) {
            keyClassName += "flat";
        }
    
        if (keyIsPressed) {
            keyClassName += "pressed";
        }
    
        let key;


        if (noteIsFlat) {
            key = <Text style={styles.keyFlat}>{keyClassName}</Text>
        }
        else {
            if (this.props.note.includes('c') || this.props.note.includes('f')) {
                key = (
                    <View style={styles.keyClassName}>
                        <Text style={styles.keyTextForC}>
                        </Text>
                    </View>
                );
            }
            else {
                key = (
                    <View style={styles.keyClassName}>
                        <TouchableOpacity onPress={() => {
                            const ac = new AudioContext();
                            let plyr = null;

                            Soundfont.instrument(ac, 'acoustic_grand_piano', {loop: false,adsr: [0, 0, 1, 0]}, ).then(function (instrument) {
                                instrument.schedule( ac.currentTime,
                                        [{ time: 0, note: "C4" }, { time: 0, note: "E4" }, { time: 0, note: "G4" }, 
                                        { time: .5, note: "A4" }, { time: .5, note: "E4" }, { time: .5, note: "C4" },
                                        { time: 1, note: "A4" }, { time: 1, note: "F4" }, { time: 1, note: "C4" }]
                                    )
                                }

                            ).catch(function (err) {
                                console.log('err', err);
                            });
                        }}>
                            <Text style={styles.keyText}>
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            }
        }

        return key;
    }
}

export { Key };

const styles = StyleSheet.create({
    keyText: {
        margin: 10,
        backgroundColor: 'white',
        height: 100,
        width: 27,
        borderColor: 'grey',
        borderWidth: 1.5,
        borderRadius: 0,
    },

    keyTextForC: {
        margin: 10,
        backgroundColor: 'white',
        height: 100,
        width: 27,
        borderColor: 'grey',
        borderWidth: 1.5,
        borderRadius: 0,
        marginLeft: -12
    },  

    keyPressed:{
        backgroundColor: '#00d8ff',
    },

    keyFlat: {
        backgroundColor: 'black',
        marginTop: 11,
        marginLeft: -18,
        marginRight: -18,
        height: 65,
        width: 15,
        zIndex: 2,
    }


})