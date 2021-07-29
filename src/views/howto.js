import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20
    },
    divider: {
        marginBottom: 40
    },
});

export class HowToScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{width: '95%'}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                    {/* First view needs marginTop so it doesnt mess with phones notification bar*/}
                    <View style={{marginTop: 50}}>
                    <Text style={styles.titleText}>Getting Started with Chordeographer!</Text>
                    </View>

                    <Divider style={styles.divider}/>

                    <View style={{marginTop: 50}}>
                    
                        <Text style={styles.titleText}>Explaination the key and mode:</Text>
                        <Text style={styles.titleText}>Key</Text>
                        <Text>A key is a group of pitches in your music.</Text>
                        <Text>The choosen key of a song marks the most stable sound of the song, which will be considered the "Home note".</Text>

                        <Divider style={styles.divider}/>

                        <Text style={styles.titleText}>Mode</Text>
                        <Text>A mode is the scale of your music.</Text>
                        <Text>Modes are a way to reorganize the pitches of a scale so that the focal point of the scale changes.</Text>
                       
                        <Divider style={styles.divider}/>

                        <Text style={styles.titleText}>Key and mode pairs and explanations:</Text>

                        <Text style={styles.titleText}>C Major</Text>
                        <Text>A pure sound. Represents innocence, simplicity, and naivety</Text>
                        <Text style={styles.titleText}>C Minor</Text>
                        <Text>Decleration of love, yet while also representing the feeling of loss</Text>
                        <Text style={styles.titleText}>D Major</Text>
                        <Text>The key of triumph, war-cries, and rejoice</Text>
                        <Text style={styles.titleText}>Major Boner</Text>
                        <Text>More of these if you like the idea</Text>
                        
                    </View>
                    
                    <View style={{marginTop: 50}}>
                    
                        <Text style={styles.titleText}>Step 1: Selecting a key and mode</Text>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text>To select a key, click the current key and choose from the dropdown menu</Text>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text>To select a mode, adjust the slider from Major and Minor.</Text>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text>For more advanced users, select the "Advanced mode" checkbox, which will provide a dropdown of all 7 modes.</Text>
                    </View>

                    
                    

                    <Divider style={styles.divider}/>

                    <View style={{marginTop: 50}}>
                    
                        <Text style={styles.titleText}>Step 2: Playing and changing chords</Text>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text>To edit a chord in your current loop, select the "Edit" button. </Text>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text>Then click the chord you want to change, and select the new chord from the dropdown menu.</Text>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text>To play the chords from a loop, select the "Play" button.</Text>
                        <Text>To revert the changes, click the "Revert" button.</Text>
                        <Text>To save the chord changes, exit the edit window.</Text>
                    </View>

                    <Divider style={styles.divider}/>

                    <View style={{marginTop: 50}}>
                    
                        <Text style={styles.titleText}>Step 3: Managing Progressions</Text>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text>To add a loop to a current progression select the "New Loop" button. </Text>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text>To delete a loop from a current progression, access the "Edit" menu of the loop, and select "Delete".</Text>
                    </View>

                    <Divider style={styles.divider}/>

                    <View style={{marginTop: 50}}>
                    
                    <Text style={styles.titleText}>Advanced Features: Saving Projects</Text>
                    <Image 
                        style={{width: 300, height: 100}}
                        source={require('../../assets/image/piano.png')}
                    />
                    <Text>To use advanced features, sign in to the application by using the "Settings" page </Text>
                    <Image 
                        style={{width: 300, height: 100}}
                        source={require('../../assets/image/piano.png')}
                    />
                    <Text>To save the current progression as a project, select "Save Progression"</Text>
                    <Text>A pop up window will prompt you to name the project.</Text>
                    <Image 
                        style={{width: 300, height: 100}}
                        source={require('../../assets/image/piano.png')}
                    />
                    <Text>To select a previously created project, click the current project dropdown.</Text>
                </View>

                    <Divider style={styles.divider}/>

                    {/* Last view needs marginBottom so it doesnt merge into the bottom of the phone screen*/}
                    <View style={{marginBottom: 50}}>
                    <Text style={styles.titleText}>Enjoy using Chordeographer!</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}