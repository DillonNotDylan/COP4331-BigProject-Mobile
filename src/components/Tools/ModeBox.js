// import React, { useState } from 'react'
// import { View } from 'react-native';
// import { Card } from 'react-native-paper';

// const cardStyles = makeStyles({
// 	root: {
// 		alignContent: 'center',
// 		padding: '25px',
// 		minWidth: '150px',
// 		display: 'flex',
// 		width: 750,
// 		height: '56px'
// 	},

// 	child: {
// 		height: 45,
// 		width: 200,
// 		minWidth: '150px',
// 		display: 'auto',
// 		marginLeft: 45,
// 		marginRight: 70,
// 	},

// 	check: {
// 		alignItems: 'center',
// 		padding: '25px',
// 		minWidth: '150px',
// 		display: 'flex',
// 		width: 150,
// 		height: '56',
// 		marginLeft: 18
// 	}	
// });

// const boxStyles = makeStyles({
// 	sectionBox: {
// 		display: 'flex',
// 		height: 10,
// 	},

// 	divBox: {
// 		display: "flex",
// 		justifyContent: 'flex-end',
// 		// height: '106px',
// 		// alignContent: "auto",
// 	},

// 	advanced: {
// 		justifyContent:"auto",
// 		width: 50,
// 		height: 40,
// 		marginLeft: 20,
// 		// marginRight: 50
// 	},

// 	modeLabel: {
// 		height: 1,
// 		marginLeft: 25
// 	},

// 	slide: {
// 		display: 'center',
// 		marginLeft: 10,
// 		marginTop: 15,
// 		width: 400,
// 		// height: 1

// 	}
// });

// const marks = [
// 	{
// 		value: 0,
// 		label: 'Sad',
// 		mode: 'Locrian'
// 	},
// 	{
// 		value: 1,
// 		mode: 'Phrygian'
// 	},
// 	{
// 		value: 2,
// 		mode: 'Aeolian'
// 	},
// 	{
// 		value: 3,
// 		mode: 'Dorian'
// 	},
// 	{
// 		value: 4,
// 		mode: 'Myxolydian'
// 	},
// 	{
// 		value: 5,
// 		mode: 'Ionian'
// 	},
// 	{
// 		value: 6,
// 		label: 'Happy',
// 		mode: 'Lydian'
// 	}
// ]

// export default function ModeBox ({setOption}){

// 	const boxClasses = boxStyles();
// 	const cardClasses = cardStyles();
// 	const [currMode, setMode] = React.useState(''); // lists options of modes
// 	const [modeState, modeSwitch] = React.useState(false); // enables option for mode

// 	const handleOption = (event, val) => {
// 		let temp = marks[val].mode;
// 		setMode(temp);
// 	};

// 	const handleCheck = () => {
// 		modeSwitch(!modeState);

// 		if (!modeState)
// 			setMode('');
		
// 		setOption(modeState);
// 	}

// 	return(
// 		<div className={boxClasses.divBox} style={{marginTop: -15, marginBottom: -15, marginBottom: 5}}>
// 			<Grow in={modeState} timeout={500}>
// 				<Card className={cardClasses.root}>
// 					<section className={boxClasses.sectionBox}>
// 						<Card className={cardClasses.child}>
// 							<FormControlLabel
// 								value="Mode"
// 								control={
// 									<Typography 
// 										variant="body1"
// 										className={boxClasses.modeLabel}
// 									>
// 										{currMode}
// 									</Typography>
// 								}		
// 							/>
// 						</Card>
						
// 						<Slider
// 							className={boxClasses.slide}
// 							color="secondary"
// 							defaultValue={3}
// 							min={0}
// 							max={6}
// 							aria-labelledby="discrete-slider-restrict"
// 							step={null}
// 							marks={marks}
// 							track='false'
// 							onChange={handleOption}
// 						/>
// 					</ section>
// 				</Card>
// 			</Grow>

// 			<Card className={cardClasses.check}>
// 				<FormControlLabel
// 					className={boxClasses.advanced}
// 					value="ModeCheck"
// 					control={
// 						<Checkbox
// 							color="secondary"
// 							onChange={handleCheck}
// 							checked={modeState}
// 						/>
// 					}
// 					label="Mode"
// 					labelPlacement="end"
// 				/>
// 			</Card>
// 		</div>
// 	)
// }