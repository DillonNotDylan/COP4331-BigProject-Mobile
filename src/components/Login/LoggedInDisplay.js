import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Portal, Modal, HelperText, TextInput } from 'react-native-paper';

export function LoggedInDisplay(){
    const data = {
        email: '',
        password: '',
    };

    const containerStyle = {
        backgroundColor: 'white', 
        paddingTop: 5, 
        paddingBottom: 5, 
        marginLeft: '5%', 
        width: '90%',

        shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 6.62,
		elevation: 8,
    }
    
    // Open/Close Sign Up Panel
    function showModal () { 
        setVisibility(true)
    }
    
    function hideModal () { 
        setVisibility(false)
    }
    
    // LOGIN
    const [emailText, setEmailText] = useState('@');
    const onEmailChange = emailText => setEmailText(emailText);

    const [passwordText, setPasswordText] = useState('');
    const onPasswordChange = passwordText => setPasswordText(passwordText);

    // SIGNUP
    const [nicknameText, setNicknameText] = useState('@');
    const onNicknameChange = nicknameText => setNicknameText(nicknameText);

    const [signupEmailText, setSignupEmailText] = useState('@');
    const onSignupEmailChange = signupEmailText => setSignupEmailText(signupEmailText);

    const [signupPassText, setSignupPassText] = useState('!');
    const onSignupPassChange = signupPassText => setSignupPassText(signupPassText);

    const [verifyPassText, setVerifyPassText] = useState('');
    const onVerifyPassChange = verifyPassText => setVerifyPassText(verifyPassText);

    // Display users nickname when Logged in
    const [user, setUser] = useState("You are not signed in");
    const [visible, setVisibility] = useState(false);

    // Helper functions
    function emailRequirements(){
        return !emailText.includes('@');
    }

    function hasValidationErrors(){
        if(signupPassText != verifyPassText)
            return true

        return false;
    }

    function isValidPass(){
        if (!signupPassText.includes('!'))
            return true

        return false
    }

    // function loggers(){
    //     console.log("sign Up "+signupPassText)
    //     console.log("Verify Pass "+verifyPassText)
    //     console.log("Nickname "+nicknameText)
    //     console.log("email "+signupEmailText)
    // }

    function doLogin(){
        const tempUser =
        {
            email: emailText,
            password: passwordText,
        }

        console.log(emailText)
        console.log(passwordText)

        axios.post("https://chordeo-grapher.herokuapp.com/user/signin", tempUser)
        .then(function (response) {
            if (response.data.hasOwnProperty('message'))
            {
                console.log("Something went wrong")
            }
            else
            {
                console.log(response)
                console.log(response.data.nickname)
                setUser("Welcome " + response.data.nickname)
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    function doSignUp(){
        const tempUser =
        {
            nickname: nicknameText,
            email: signupEmailText,
            password: signupPassText,
        }

        axios.post("https://chordeo-grapher.herokuapp.com/user/signup", tempUser)
        .then( response =>
            {
                if(response.data.hasOwnProperty('message'))
                {
                    if (response.data.message.length == 43)
                    {
                        handleClose();
                        return;
                    }
                    setErr(response.data.message);
                }
                else
                {
                    handleClose();
                }
                
            }
        )
        .catch( err => console.log("somethings wrong mate"))

        hideModal();
    }

    return(
        <View style={styles.container}>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View>  
                        <TextInput 
                            style={styles.nicknameInput}
                            label="Nickname"
                            selectionColor="blue"
                            placeholder="ex. MusicalDude2"
                            underlineColor="#651fff"
                            onChangeText={onNicknameChange}
                        />

                        <TextInput 
                            style={styles.modalInput}
                            label="Email"
                            selectionColor="blue"
                            placeholder="Email@domain.com"
                            underlineColor="#651fff"
                            onChangeText={onSignupEmailChange}
                        />
                        <HelperText style={styles.helperInput} type="error" visible={emailRequirements()}>
                            Email address in invalid
                        </HelperText>

                        <TextInput 
                            style={styles.modalInput}
                            label="Password"
                            placeholder="Password"
                            underlineColor="#651fff"
                            // secureTextEntry
                            // right={<TextInput.Icon name="eye"/>}
                            onChangeText={onSignupPassChange}
                        />
                        <HelperText style={styles.helperInput} type="error" visible={isValidPass()}>
                            Your passwords must contain -- ! --
                        </HelperText>

                        <TextInput 
                            style={styles.modalInput}
                            label="Password"
                            placeholder="Password"
                            underlineColor="#651fff"
                            // secureTextEntry
                            // right={<TextInput.Icon name="eye"/>}
                            onChangeText={onVerifyPassChange}
                        />
                        <HelperText style={styles.helperInput} type="error" visible={hasValidationErrors()}>
                            Your passwords must match!
                        </HelperText>

                        <Button onPress={() => {doSignUp()}}>
                            Sign Up
                        </Button>

                    </View>
                </Modal>
            </Portal>
            <Text style={styles.nicknameDisplay}>{user}</Text>
            <View style={styles.loginInput}>
                <TextInput 
                    label="Email"
                    placeholder="Email@domain.com"
                    underlineColor="#009dff"
                    onChangeText={onEmailChange}
                    style={styles.inputField}
                />
                <HelperText style={{marginBottom: 20}} type="error" visible={emailRequirements()}>
                    Email address in invalid
                </HelperText>

                <TextInput 
                    label="Password"
                    placeholder="Password"
                    underlineColor="#009dff"
                    secureTextEntry
                    right={<TextInput.Icon name="eye"/>}
                    onChangeText={onPasswordChange}
                    style={styles.inputField}
                />
                <HelperText style={{marginBottom: 20}}>
                    
                </HelperText>
                <Button style={styles.button1} icon="login" mode="contained" onPress={() => {doLogin()}}>
                    Sign In
                </Button>
                <Button style={styles.button2} onPress={showModal}>
                    Don't have an account? Create one here!
                </Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button1: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 100,
        marginRight: 100,
        alignItems: 'center',
    },

    button2: {
        marginTop: 15,
    },

    nicknameDisplay: {
        marginBottom: 20,
    },

    loginInput: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },  

    inputField: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5fcff',
        width: 300
    },

    modalInput: {
        marginRight: '10%',
        marginLeft: '10%',
    },

    nicknameInput: {
        marginRight: '10%',
        marginLeft: '10%',
        marginBottom: '10%',
        marginTop: '5%',
    },

    helperInput: {
        marginRight: '10%',
        marginLeft: '10%',
        marginBottom: '5%',
    }

});