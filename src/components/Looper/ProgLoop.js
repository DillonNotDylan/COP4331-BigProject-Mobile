import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Chordbox } from './Chordbox'
import { Card, Button, Provider } from 'react-native-paper';


export function ProgLoop ({loopData, id, deleteLoop}) {
	return (
		<View style={styles.chordContainer}>
			{/* <Button
				onClick={() => deleteLoop(id)}>
			</Button> */}
			{
				loopData.chords.map(singleChord =>
					{
						return (
							<TouchableOpacity style={styles.chordBox} onPress={() => null}>
							{/* <Card style={styles.chordBox}> */}
								<Text style={styles.chord}>{singleChord}</Text>
							</TouchableOpacity>
						)
					}
				)
			}
		</View>
	);
}

const styles = StyleSheet.create({
    chordContainer: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		width: '95%',
		backgroundColor: 'white',
		borderRadius: 10,
		marginTop: 3,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
    },

	chordBox: {
		display: 'flex',
		flex: 1,
		marginTop: '4%',
		height: '70%',

		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10,
			
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},

	chord: {
		display: 'flex',
		flex: 1,
		textAlignVertical: 'center'
	}
})