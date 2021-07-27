import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
	Card,
	Switch,
	Text,
	Menu, 
	Button,
	Checkbox
} from 'react-native-paper'

export function KeyBox({currOption, grabKey, grabMode, status, switchStatus}) {

	const [currKey, setKey] = useState('C');
	const [keyVis, setKeyVis] = useState(false);
	const openKeyMenu = () => setKeyVis(true);
	const onlyCloseKey = () => setKeyVis(false); 
	const closeKeyMenu = (key) => {
		switch(key) {
			case 'C' : {
				grabKey('C');
				setKey('C');
				setKeyVis(false);
				return
			}
			case 'Cs' : {
				grabKey('C_sharp');
				setKey('C#');
				setKeyVis(false);
				return
			}
			case 'D' : {
				grabKey('D');
				setKey('D');
				setKeyVis(false);
				return
			}
			case 'Ds' : {
				grabKey('D_sharp');
				setKey('D#');
				setKeyVis(false);
				return
			}
			case 'E' : {
				grabKey('E');
				setKey('E');
				setKeyVis(false);
				return
			}
			case 'F' : {
				grabKey('F');
				setKey('F');
				setKeyVis(false);
				return
			}
			case 'Fs' : {
				grabKey('F_sharp');
				setKey('F#');
				setKeyVis(false);
				return
			}
			case 'G' : {
				grabKey('G');
				setKey('G');
				setKeyVis(false);
				return
			}
			case 'Gs' : {
				grabKey('G_sharp');
				setKey('G#');
				setKeyVis(false);
				return
			}
			case 'A' : {
				grabKey('A');
				setKey('A');
				setKeyVis(false);
				return
			}
			case 'As' : {
				grabKey('A_sharp');
				setKey('A#');
				setKeyVis(false);
				return
			}
			case 'B' : {
				grabKey('B');
				setKey('B');
				setKeyVis(false);
				return
			}
		}
		setKeyVis(false);
	}

	const [currMode, setMode] = useState('Aolian');
	const [modeVis, setModeVis] = useState(false);
	const openModeMenu = () => setModeVis(true);
	const onlyCloseMode = () => setModeVis(false); 
	const closeModeMenu = (mode) => {
		switch(mode) {
			case 'Aolian' : grabMode(1)
			case 'Dorian' : grabMode(2)
			case 'Phrygian' : grabMode(3)
			case 'Lydian' : grabMode(4)
			case 'Mixolydian' : grabMode(5)
			case 'Ionain' : grabMode(6)
			case 'Locrian' : grabMode(7)
		}
		setMode(mode);
		setModeVis(false);
	}

	
	const [isSwitchOn, setIsSwitchOn] = useState(false);
	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
	
	
	const [basicView, setBasic] = useState('flex');
	const [advView, setAdv] = useState('none');
	const [checked, setChecked] = useState(false);
	const advancedClick = () => {
		if (basicView == 'flex') {
			setBasic('none')
			setAdv('flex')
		}
		else {
			setBasic('flex')
			setAdv('none')
		}
	}

	return(
		<View style={styles.root}>
			<Card style={styles.menu}>
				<Menu
					visible={keyVis}
					onDismiss={onlyCloseKey}
					anchor={<Button style={{marginTop: 5}} onPress={openKeyMenu}>{currKey}</Button>}>
					
						<Menu.Item onPress={() => closeKeyMenu('C')} title="C" />
						<Menu.Item onPress={() => closeKeyMenu('Cs')} title="C#" />
						<Menu.Item onPress={() => closeKeyMenu('D')} title="D" />
						<Menu.Item onPress={() => closeKeyMenu('Ds')} title="D#" />
						<Menu.Item onPress={() => closeKeyMenu('E')} title="E" />
						<Menu.Item onPress={() => closeKeyMenu('F')} title="F" />
						<Menu.Item onPress={() => closeKeyMenu('Fs')} title="F#" />
						<Menu.Item onPress={() => closeKeyMenu('G')} title="G" />
						<Menu.Item onPress={() => closeKeyMenu('Gs')} title="G#" />
						<Menu.Item onPress={() => closeKeyMenu('A')} title="A" />
						<Menu.Item onPress={() => closeKeyMenu('As')} title="A#" />
						<Menu.Item onPress={() => closeKeyMenu('B')} title="B" />
				</Menu>
			</Card>

			<Card style={styles.quality}>
				<View style={{display: basicView}}>
					<TouchableOpacity onPress={() => setIsSwitchOn(!isSwitchOn)}>
						<Button style={{}}>
							{isSwitchOn ? 'Minor' : 'Major'}
						</Button>
					</TouchableOpacity>
				</View>

				<View style={{display: advView}}>
					<Menu
						visible={modeVis}
						onDismiss={onlyCloseMode}
						anchor={<Button style={{marginTop: 10}} onPress={openModeMenu}>{currMode}</Button>}>
						
							<Menu.Item onPress={() => closeModeMenu("Aolian")} title="Aolian" />
							<Menu.Item onPress={() => closeModeMenu("Dorian")} title="Dorian" />
							<Menu.Item onPress={() => closeModeMenu("Phrygian")} title="Phrygian" />
							<Menu.Item onPress={() => closeModeMenu("Lydian")} title="Lydian" />
							<Menu.Item onPress={() => closeModeMenu("Mixoydian")} title="Mixoydian" />
							<Menu.Item onPress={() => closeModeMenu("Ionian")} title="Ionian" />
							<Menu.Item onPress={() => closeModeMenu("Locrian")} title="Locrian" />
					</Menu>
				</View>
			</Card>


			<Card style={styles.advanced}>
				<Text>
					Advanced				
				</Text>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Checkbox
						status={checked ? 'checked' : 'unchecked'}
						onPress={() => {
						setChecked(!checked);
						advancedClick();
						}}/>
				</View>
			</Card>

		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		display: "flex",
		backgroundColor: 'white',
		justifyContent: 'center',
		marginLeft: 17.5,
	},

	menu: {
		width: '25%',
		padding: 5,
		alignItems: 'center',
		backgroundColor: 'white',
		display: 'flex',
		marginTop: 10,
		marginBottom: 10,
		shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
	},

	quality: {
		margin: 7,
		marginLeft: 15,
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
		width: '35%',
		shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
	},

	advanced: {
		margin: 7,
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
		width: '27%',
		shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
	},

});
