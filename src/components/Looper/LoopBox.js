import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Avatar, Button, Grid, Provider } from 'react-native-paper';
import { ProgLoop } from './ProgLoop';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loopTemp = [
	{
		placement: 0,
		name: "Verse",
		chords: ["A_min", "C_maj", "B_maj", "F_maj"]
	},
	{
		placement: 1,
		name: "Chorus",
		chords: ["G_min", "C_dom_7", "B_min", "F_sharp_min"]
	},
	{
		placement: 2,
		name: "Bridge",
		chords: ["A_min", "C_maj", "C_sharp_maj", "F_min"]
	},
]

export function LoopBox(props){


	const [currProj, setProj] = useState(loopTemp)

	function addNewLoop() {
		console.log("in here")
		let temp = [...currProj]
		let len = temp.length
		temp.push(
			{
				placement: len,
				name: "Another Loop",
				chords: ["A_min", "C_maj", "C_sharp_maj", "F_min"]
			}
		)

		console.log(temp)
		setProj(temp)
	}

	function deleteLoop (index) {
		console.log("In delete loop, index: "+ { index })
		let temp = [...currProj]

		if (index === -1)
			return
			
		temp.splice(index, 1)
		setProj(temp)
	}

    return(
		<View style={styles.container}>
			<Card style={styles.loopBoxContainer}>
			{
				currProj.map((loop, index) => {
					// console.log(loop)
					return (
						<ProgLoop loopData={loop} id={index} deleteLoop={deleteLoop} triggerNote={props.triggerNote}/>
					)
				})
			}
			<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
				<Button onPress={addNewLoop}> New Loop</Button>		
			</View>
			</Card> 
		</View>
    );
}


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		flex: 100,
		width: '100%',
		margin: 100,
	},

    loopBoxContainer: {
		backgroundColor: 'white',
		flex: 10,
      	alignItems: 'center',
      	justifyContent: 'center',
	  	borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
    },
})