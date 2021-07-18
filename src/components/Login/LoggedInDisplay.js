import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Portal, Modal, HelperText, TextInput } from 'react-native-paper';

export function LoggedInDisplay(){
    // 
    const data = {
        email: 'azula@gmail.com',
        password: 'badaf',
    };

    const containerStyle = {
        backgroundColor: 'white', 
        paddingTop: 100, 
        paddingBottom: 100, 
        marginLeft: 25, 
        marginRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
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
                            label="Nickname"
                            selectionColor="blue"
                            placeholder="ex. MusicalDude2"
                            underlineColor="#651fff"
                            onChangeText={onNicknameChange}
                        />

                        <TextInput 
                            label="Email"
                            selectionColor="blue"
                            placeholder="Email@domain.com"
                            underlineColor="#651fff"
                            onChangeText={onSignupEmailChange}
                        />
                        <HelperText type="error" visible={emailRequirements()}>
                            Email address in invalid
                        </HelperText>

                        <TextInput 
                            label="Password"
                            placeholder="Password"
                            underlineColor="#651fff"
                            // secureTextEntry
                            // right={<TextInput.Icon name="eye"/>}
                            onChangeText={onSignupPassChange}
                        />
                        <HelperText type="error" visible={isValidPass()}>
                            Your passwords must contain -- ! --
                        </HelperText>

                        <TextInput 
                            label="Password"
                            placeholder="Password"
                            underlineColor="#651fff"
                            // secureTextEntry
                            // right={<TextInput.Icon name="eye"/>}
                            onChangeText={onVerifyPassChange}
                        />
                        <HelperText type="error" visible={hasValidationErrors()}>
                            Your passwords must match!
                        </HelperText>

                        <Button onPress={() => {doSignUp()}}>
                            Sign Up
                        </Button>

                    </View>
                </Modal>
            </Portal>
            <Text>{user}</Text>
            <View>
                <TextInput 
                    label="Email"
                    selectionColor="blue"
                    placeholder="Email@domain.com"
                    underlineColor="#651fff"
                    onChangeText={onEmailChange}
                />
                <HelperText type="error" visible={emailRequirements()}>
                    Email address in invalid
                </HelperText>

                <TextInput 
                    style=""
                    label="Password"
                    placeholder="Password"
                    underlineColor="#651fff"
                    secureTextEntry
                    right={<TextInput.Icon name="eye"/>}
                    onChangeText={onPasswordChange}
                />
                <HelperText>
                    
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
        marginBottom: 15,
    },

    username: {

    },
});