import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export function Chordbox({chord}){
    return(
		<Card style={styles.chordBox}>
			<Card.Title>{chord}</Card.Title>
		</Card>      
    );
}

const styles = StyleSheet.create({
	chordBox: {
		flex: 1,
		backgroundColor: 'white',
		margin: 5,
	}
})