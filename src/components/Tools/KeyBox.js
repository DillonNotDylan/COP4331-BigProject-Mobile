import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';

export function KeyBox({currOption}) {

	// const boxClasses = boxStyles();
	// const cardClasses = cardStyles();
	const [currKey, setKey] = useState('');
	const [currQuality, setQuality] = useState(false);
	const [checked, setChecked] = useState('Major');

	const handleChange = (event) => {
		setKey(event.target.value);
	};

	const handleQuality = () =>{
		setQuality(!currQuality);
	}


	return(
		<View style={styles.container}>
			{/* <Card> */}
				{/* <FormControl variant="outlined" className={boxClasses.formControl}>
					<InputLabel className={boxClasses.formControl} id="key-label">Key</InputLabel>
					<Select className={boxClasses.formControl}
						value={currKey}
						onChange={handleChange}
						label="Key"
					>
						<MenuItem value={1}>C</MenuItem>
						<MenuItem value={2}>C#</MenuItem>
						<MenuItem value={3}>D</MenuItem>
						<MenuItem value={4}>D#</MenuItem>
						<MenuItem value={5}>E</MenuItem>
						<MenuItem value={6}>F</MenuItem>
						<MenuItem value={7}>F#</MenuItem>
						<MenuItem value={8}>G</MenuItem>
						<MenuItem value={9}>G#</MenuItem>
						<MenuItem value={10}>A</MenuItem>
						<MenuItem value={11}>A#</MenuItem>
						<MenuItem value={12}>B</MenuItem>
					</Select>
				</FormControl> */}

			{/* </Card> */}

			<Card style={styles.majMinCard}> 
				<Text>TESTING</Text>
				
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
    container: {
      	alignItems: 'center',
      	justifyContent: 'center',
		height: 10,
    },

	// card: {
		// 	display: 'flex',
		// 	flex: 1,
		// },
		
	majMinCard: {

	},

	majMinRadio: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
	}
});