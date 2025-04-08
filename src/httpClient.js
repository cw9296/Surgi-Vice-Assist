//This file will act as the client to communicate with the backend API
//All calls to the backend should come from this file. 
import { Image, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import * as procedureMappings from './procedure_mappings.json';
//create account function 

const ip_addr = '10.47.50.50'
export const createAccount = async (Name, username, email, password) => {
    try{
        const response = await fetch('http://'+ip_addr+':4000/users/createAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({Name, username, email, password}),

        });

        

        if (response.ok) {
            const data = await response.json();
            Alert.alert('Success', `Account created`); // Display data in alert
          } else {
            console.warn('Response details: '+response.status+' '+response.statusText)
            Alert.alert('Error', 'Failed to create account');
          }

    }
    catch (error) {
        console.error("Error occured when communicating with API", error)
    }
};

export const testGet = async () => {
    try{
        const response = await fetch('http://'+ip_addr+':4000/users', {
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

//Auth packager
export const auth = async (username, password) => {
    try{
        const response = await fetch('http://'+ip_addr+':4000/auth/', {
            method: 'POST',
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({username, password}),
        });

        if (response.status === 401) {
            console.warn("Authentication Failed: 401 Unauthorized");
            return false;  
        }

        
        if (!response.ok) {
            console.warn(`Authentication Failed: ${response.status}`);
            return false;
        }

        
        const data = await response.json();
        console.log(" Authentication Successful:", data);
        return true;
        


        

    }
    catch (error) {
        console.error("Error occurred when communicating with API:", error.message); // Logs the error message
        console.error("Stack trace:", error.stack); // Logs the stack trace for debugging
    }
};

//Educational Materials packager
export const educationalMaterials = async (procedureName, infoRequested) => {

    const pdfName = procedureMappings["mappings"][procedureName][infoRequested]
    // const pdfName = 'Taking Care of Your Flushable Drain Tubes';
    //const infoRequested = 'post-surgery';
    try{
        const response = await fetch('http://'+ip_addr+':4000/materials/educational', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({pdfName, infoRequested}),
        });
        
        // Parse the JSON response
        const { pdfBase64 } = await response.json();
        
        
        if (!response.ok) {
            console.warn(`Something Failed: ${response.status}`);
            return false;
        }

        //Return the base64 PDF
        return pdfBase64;

        
        

    }
    catch (error) {
        console.error("Error occurred when communicating with API:", error.message); // Logs the error message
        console.error("Stack trace:", error.stack); // Logs the stack trace for debugging
    }
};

export const getProfileInfo = async () => {
    const pdfName = 'Taking Care of Your Flushable Drain Tubes';
    const infoRequested = 'post-surgery';
    try{
        const response = await fetch('http://'+ip_addr+':4000/profile/retrieve', {
            method: 'POST',
            credentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Parse the JSON response
        const { pdfBase64 } = await response.json();
        
        
        if (!response.ok) {
            console.warn(`Something Failed: ${response.status}`);
            return false;
        }

        //Return the base64 PDF
        return pdfBase64;
        

    }
    catch (error) {
        console.error("Error occurred when communicating with API:", error.message); // Logs the error message
        console.error("Stack trace:", error.stack); // Logs the stack trace for debugging
    }
}



