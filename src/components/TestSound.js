import React from 'react'
import Soundfont from 'soundfont-player';
import { View } from 'react-native';
import { Button } from 'react-native-paper';


export function TestSound() {

	const doThing = (tempFunction)=>
	{
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

	}


	return (
		<View>
			<Button onPress={ () => {
					doThing(['c2', 'e3', 'g4'])

				}
			}>
			    testaefwqpoefijaoperjafwori
			</Button>			
		</View>
	);
}