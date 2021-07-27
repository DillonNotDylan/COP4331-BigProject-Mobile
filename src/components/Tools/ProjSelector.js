
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-paper';
import { Autocomplete } from 'react-native-paper-autocomplete';
import axios from 'axios';

export function ProjSelector (props) {

    async function getData () {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
          if(value !== null) {
            console.log("value is "+value)
            return value
          }
        } catch(e) {
            console.log("No values captured " + e)
        }
	}

	const [projects, setProjects] = useState([]);
	const [project, setProject] = useState({});

	//get User cookie info
	// const inf = Cookie.cToJson(Cookie.getCookie("userSession"));

    const inf = getData

	useEffect(() => {


		let userID = inf;
		axios.post(`https://chordeo-grapher.herokuapp.com/user/get-projects`,
		{
			id: userID
		})
		.then(function (response) {
			// console.log("api call in project selector");
			// console.log(response.data.projects);
		
			response.data.projects.sort(function(a, b) {
				var titleA = a.title.toUpperCase();
				var titleB = b.title.toUpperCase();
				if (titleA < titleB) {
					return -1;
				}
				if (titleA > titleB) {
					return 1;
				}
			
				return 0;
			});

			setProjects(response.data.projects);
		})
		.catch(function (error) {
			console.log("Error in api call in project selector.");
			console.log(error);
		})

	}, []) // dependency list

	const handleChange = (event, newValue) => {
		
		console.log("handle change in project selector");
		console.log(newValue);
		localStorage.setItem('newPID', newValue.pid);
		
		axios.post("https://chordeo-grapher.herokuapp.com/user/get-project",
			{
				pid: getData,
			}
		)
		.then(function (response) {
			console.log("api call to get a specific project in project selector");
			console.log(response.data);

			setProject(response.data);
		})
		.catch(function (error) {
			console.log("error in api call in project selector to get a specific project");
			console.log(error);
		})
	};

	return (
		// <Autocomplete
		// 	freeSolo
		// 	id="free-solo-2"
		// 	style={{ width: 500 }}
		// 	disableClearable
		// 	options={projects}
		// 	getOptionLabel={(option) => option.title}
		// 	onChange={handleChange}
		// 	renderInput={(params) => (
		// 		<TextField
		// 			{...params}
		// 			label="Project"
		// 			margin="normal"
		// 			variant="outlined"
		// 			InputProps={{ ...params.InputProps, type: 'search' }}
		// 		/>
		// 	)}
		// />
        <View>
            <Autocomplete 
                options={projects}
            	getOptionLabel={(option) => option.title}
            	onChange={handleChange}
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="Project"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
            )}/>
        </View>
	)
};