import React from 'react'
import { Text, View } from 'react-native'
import { List, Button } from 'react-native-paper'

// TURN INTO STYLESHEET
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		float: 'left',
// 		maxWidth: "50%",
// 		backgroundColor: theme.palette.background.paper,
// 	},
// }));

const SuggestList = ({suggestions, selectedIndex, handleListClick}) => {
	// const classes = useStyles();

	return (
		<View>
			<List.Subheader>Suggestions</List.Subheader>
				{
					suggestions.map((chord, index) => {
						return (
							// <List.Item
							// 	button
							// 	key={index}
							// 	style={{width: "fit-content"}}
							// 	value={chord}
							// 	selected={selectedIndex === index}
							// 	onClick={(event) => handleListClick(event, index)}
							// >
							// 	<Text>{chord}</Text>
							// </List.Item>
							<Button 
								title={chord}
								onPress={(event) => handleListClick(event, index)}
							>
								{chord}
							</Button>
						)
					})
				}
		</View>
	)
}

export default SuggestList
