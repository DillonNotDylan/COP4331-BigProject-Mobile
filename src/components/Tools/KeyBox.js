import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
	Card,
	Switch,
	Text,
	Menu, 
	Button
} from 'react-native-paper'

export function KeyBox({currOption, grabKey, grabMode, status, switchStatus}) {

	const [currKey, setKey] = useState('C');

	const [visible, setVisible] = useState(false);

	const openMenu = () => setVisible(true);

	const onlyClose = () => setVisible(false); 
  
	const closeMenu = (key) => {
		setKey(key);
		setVisible(false);
	}

	const [isSwitchOn, setIsSwitchOn] = useState(false);

	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

	return(
		<View style={styles.root}>
			<Card style={styles.menu}>
				{/* <Button onPress={() => setVisible(true)}>Key</Button> */}
				<Menu
					visible={visible}
					onDismiss={onlyClose}
					anchor={<Button style={{}} onPress={openMenu}>{currKey}</Button>}>
					
						<Menu.Item onPress={() => closeMenu('C')} title="C" />
						<Menu.Item onPress={() => closeMenu('C#')} title="C#" />
						<Menu.Item onPress={() => closeMenu('D')} title="D" />
						<Menu.Item onPress={() => closeMenu('D#')} title="D#" />
						<Menu.Item onPress={() => closeMenu('E')} title="E" />
						<Menu.Item onPress={() => closeMenu('F')} title="F" />
						<Menu.Item onPress={() => closeMenu('F#')} title="F#" />
						<Menu.Item onPress={() => closeMenu('G')} title="G" />
						<Menu.Item onPress={() => closeMenu('G#')} title="G#" />
						<Menu.Item onPress={() => closeMenu('A')} title="A" />
						<Menu.Item onPress={() => closeMenu('A#')} title="A#" />
						<Menu.Item onPress={() => closeMenu('B')} title="B" />
				</Menu>
			</Card>

			<Card style={styles.quality}>
				<Text style={{}}>
					{isSwitchOn ? 'Minor' : 'Major'}
				</Text>
					<Switch style={{}} value={isSwitchOn} onValueChange={onToggleSwitch} />
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		display: "flex",
		backgroundColor: 'white'
	},

	menu: {
		width: '25%',
		padding: 5,
		alignItems: 'center',
		backgroundColor: 'white',
	},

	quality: {
		margin: 7,
		padding: 5,

		alignItems: 'center',
		width: '48.8%',
	},

});
