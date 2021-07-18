import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Chordbox } from './Chordbox'
import { Card, Button } from 'react-native-paper';


export function ProgLoop ({loopData, id, deleteLoop}) {
	return (
		<View>
			<Card>
				<Card style={styles.card}>
					<Card.Content>
						<Button
							onClick={() => deleteLoop(id)}>
						</Button>
					</Card.Content>

					<Card.Content>
						<View style={styles.chordContainer}>
						{
							loopData.chords.map(singleChord =>
								{
									return (
										<View style={styles.chord}>
											<Chordbox chord={singleChord}/>
										</View>
									)
								}
							)
						}
						</View>
					</Card.Content>
				</Card>

			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#f5fcff'
	},

    chordContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'yellow',
    },

	chord: {
		flex: 1,
		backgroundColor: 'purple',
	}
})