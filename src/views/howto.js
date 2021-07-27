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
                    <View style={{marginTop: 50}}>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text style={styles.titleText}>Step 1:</Text>
                        <Text>This is some description</Text>
                    </View>

                    <Divider style={styles.divider}/>

                    <View>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text style={styles.titleText}>Step 2:</Text>
                        <Text>This is some description</Text>
                    </View>

                    <Divider style={styles.divider}/>

                    <View>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text style={styles.titleText}>Step 2:</Text>
                        <Text>This is some description</Text>
                    </View>

                    <Divider style={styles.divider}/>

                    <View>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text style={styles.titleText}>Step 2:</Text>
                        <Text>This is some description</Text>
                    </View>

                    <Divider style={styles.divider}/>

                    <View>
                        <Image 
                            style={{width: 300, height: 100}}
                            source={require('../../assets/image/piano.png')}
                        />
                        <Text style={styles.titleText}>Step 2:</Text>
                        <Text>This is some description</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}