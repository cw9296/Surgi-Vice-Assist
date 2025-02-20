//This file will act as the client to communicate with the backend API
//All calls to the backend should come from this file. 
import { Image, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
//create account function 
export const createAccount = async (Name, username, email, password) => {
    try{
        const response = await fetch('http://10.47.166.154:4000/users/createAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({Name, username, email, password}),

        });

        if (response.ok) {
            const data = await response.json();
            Alert.alert('Success', `Account created: ${data.username}`); // Display data in alert
          } else {
            Alert.alert('Error', 'Failed to create account');
          }

    }
    catch (error) {
        console.error("Error occured when communicating with API", error)
    }
};

export const testGet = async () => {
    try{
        const response = await fetch('http://192.168.1.46:4000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }, 
            

        });

        

    }
    catch (error) {
        console.error("Error occurred when communicating with API:", error.message); // Logs the error message
        console.error("Stack trace:", error.stack); // Logs the stack trace for debugging
    }
};




