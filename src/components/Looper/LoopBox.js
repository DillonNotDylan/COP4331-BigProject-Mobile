import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Avatar, Button, Grid, Provider } from 'react-native-paper';
import { ProgLoop } from './ProgLoop';

const loopTemp = [
	{
		placement: 0,
		name: "Verse",
		chords: ["Am", "C", "B", "F"]
	},
	{
		placement: 1,
		name: "Chorus",
		chords: ["Gm", "C7", "Bm", "F#m"]
	},
	{
		placement: 2,
		name: "Bridge",
		chords: ["Am", "C", "Bb", "Fm"]
	},
	// {
	// 	placement: 3,
	// 	name: "Chorus",
	// 	chords: ["Gm", "C7", "Bm", "F#m"]
	// },
	// {
	// 	placement: 4,
	// 	name: "Chorus",
	// 	chords: ["Gm", "C7", "Bm", "F#m"]
	// },
]

export function LoopBox(){


	const [currProj, setProj] = useState(loopTemp)

	function addNewLoop() {
		console.log("in here")
		let temp = [...currProj]
		// let temp = currProj
		let len = temp.length
		temp.push(
			{
				placement: len,
				name: "Another Loop",
				chords: ["Am", "C", "Bb", "Fm"]
			}
		)

		console.log(temp)
		setProj(temp)
	}

	function deleteLoop (index) {
		console.log("In delete loop")
		let temp = [...currProj]

		if (index === -1)
			return
			
		temp.splice(index, 1)
		setProj(temp)
	}

	// 'user/${userID}/get-projects'
	// 60e3a8a3b2bfc802215b2535
	function getData() {
		let userID = "60ebdf0a171f280086b81f57"
		const res = axios.get(`https://chordeographer.herokuapp.com/${userID}/get-projects`)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		})  
	}

	
	async function getProjectById () {
		let userID = "60ebdf0a171f280086b81f57"

		const res = await axios.post("https://chordeographer.herokuapp.com/get-project",
			{
				pid: "60ebdfaa171f280086b81f5f"

				
			}
		)
		
		// console.log(res)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		})
	}

    return(
			<View style={styles.container}>
				<Card style={styles.loopBoxContainer}>
				{
					currProj.map((loop, index) => {
						console.log(loop)
						return (
							<ProgLoop loopData={loop} id={index} deleteLoop={deleteLoop}/>
						)
					})
				}
				<Button onPress={() => console.log("new loop")}> New Loop</Button>		
				</Card> 
			</View>
    );
}


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		flex: 1,
		width: '100%',
	},

    loopBoxContainer: {
		backgroundColor: 'white',
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