import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Piano() {

    // backgroundColor
    const state = {
        colorC : "white",
        colorCs: "black",
        colorD : "white",
        colorDs: "black",
        colorE : "white",
        colorF : "white",
        colorFs: "black",
        colorG : "white",
        colorGs: "black",
        colorA : "white",
        colorAs: "black",
        colorB : "white",
    }

    function stroke ( note ) {
        // change backgroundColor
        switch ( note ) {
          case "C":
            this.setState({ colorC: "rgba(1, 1, 1, 0.1)" })
            break;
          case "Cs":
            this.setState({ colorCs: "rgba(0, 0, 0, 0.5)" })
            break;
          case "D":
            this.setState({ colorD: "rgba(1, 1, 1, 0.1)" })
            break;
          case "Ds":
            this.setState({ colorDs: "rgba(0, 0, 0, 0.5)" })
            break;
          case "E":
            this.setState({ colorE: "rgba(1, 1, 1, 0.1)" })
            break;
          case "F":
            this.setState({ colorF: "rgba(1, 1, 1, 0.1)" })
            break;
          case "Fs":
            this.setState({ colorFs: "rgba(0, 0, 0, 0.5)" })
            break;
          case "G":
            this.setState({ colorG: "rgba(1, 1, 1, 0.1)" })
            break;
          case "Gs":
            this.setState({ colorGs: "rgba(0, 0, 0, 0.5)" })
            break;
          case "A":
            this.setState({ colorA: "rgba(1, 1, 1, 0.1)" })
            break;
          case "As":
            this.setState({ colorAs: "rgba(0, 0, 0, 0.5)" })
            break;
          case "B":
            this.setState({ colorB: "rgba(1, 1, 1, 0.1)" })
            break;
        }
    
        // // play sound
        // setTimeout( () => {
        //     this.sound[note].play(success => {
        //     if ( success ) {
        //         console.log("successfully finished playing.");
        //     } else {
        //         console.log("failed to play the sound.");
        //     }
        //     });
        // }, 1);
    }
    
    
    function stop( note ) {
        // change backgroundColor
        switch ( note ) {
          case "C":
            this.setState( { colorC: "white" } )
            break;
          case "Cs":
            this.setState( { colorCs: "black" } )
            break;
          case "D":
            this.setState( { colorD: "white" } )
            break;
          case "Ds":
            this.setState( { colorDs: "black" } )
            break;
          case "E":
            this.setState( { colorE: "white" } )
            break;
          case "F":
            this.setState( { colorF: "white" } )
            break;
          case "Fs":
            this.setState( { colorFs: "black" } )
            break;
          case "G":
            this.setState( { colorG: "white" } )
            break;
          case "Gs":
            this.setState( { colorGs: "black" } )
            break;
          case "A":
            this.setState( { colorA: "white" } )
            break;
          case "As":
            this.setState( { colorAs: "black" } )
            break;
          case "B":
            this.setState( { colorB: "white" } )
            break;
        }
    
        // // stop sound
        // setTimeout( () => {
        //   // gradually decrease the volume
        //   for (let i=0; i<2000; i++) {
        //     this.sound[note].setVolume( 1.0-i/2000. );
        //   }
        //   this.sound[note].stop();
        //   this.sound[note].setVolume( 1.0 );
        // }, 1 )
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
                <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: "white", height: 50, width: 32, borderLeftWidth: 1, borderTopWidth: 1,}} ></View >
                    <View
                        onTouchStart={() => this.stroke("Cs")}
                        onTouchEnd={() => this.stop("Cs")}
                        style={{ backgroundColor: state.colorCs, height: 50, width: 32, borderTopWidth: 1, borderLeftWidth: 1,}} >
                    </View >
                    <View
                        style={{ backgroundColor: "white", height: 50, width: 16, borderTopWidth: 1, }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}
                        style={{ backgroundColor: state.colorDs, height: 50, width: 32, borderTopWidth: 1, borderLeftWidth: 1,}} >
                    </View >
                    <View
                        style={{ backgroundColor: "white", height: 50, width: 32, borderTopWidth: 1, }} >
                    </View >
                    <View
                        style={{ backgroundColor: "white", height: 50, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}
                        style={{ backgroundColor: state.colorFs, height: 50, width: 32, borderTopWidth: 1, }} >
                    </View >
                    <View
                        style={{ backgroundColor: "white", height: 50, width: 16, borderTopWidth: 1, }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}
                        style={{ backgroundColor: state.colorGs, height: 50, width: 32, borderTopWidth: 1, }} >
                    </View >
                    <View
                        style={{ backgroundColor: "white", height: 50, width: 16, borderTopWidth: 1, }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}
                        style={{ backgroundColor: state.colorAs, height: 50, width: 32, borderTopWidth: 1, }} >
                    </View >
                    <View
                        style={{ backgroundColor: "white", height: 50, width: 32, borderRightWidth: 1, borderTopWidth: 1, }} >
                    </View >

                </View>

                <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center" }}>

                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}
                        style={{ backgroundColor: state.colorC, height: 50, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}
                        style={{ backgroundColor: state.colorD, height: 50, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}                     
                        style={{ backgroundColor: state.colorE, height: 50, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}                          
                        style={{ backgroundColor: state.colorF, height: 50, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}                           
                        style={{ backgroundColor: state.colorG, height: 50, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}                          
                        style={{ backgroundColor: state.colorA, height: 50, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                    </View >
                    <View
                        onTouchStart={() => null}
                        onTouchEnd={() => null}                         
                        style={{ backgroundColor: state.colorB, height: 50, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }} >
                    </View >

                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: "row",
    },
});