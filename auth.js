// auth.js (Now a Function, NOT a Component)
import * as LocalAuthentication from "expo-local-authentication";
import { StyleSheet, Text, View, Alert} from "react-native";
import { useState } from "react";



export async function bioAuth() {
    try{
        const IsBiometricsSupported = await LocalAuthentication.hasHardwareAsync();

        if(!IsBiometricsSupported){
            Alert.alert("Your device does not support biometrics, please use username and password");
            return;
        }   

        // console.log(supportedBiometrics[0]);

        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if(!savedBiometrics){
            Alert.alert("Biometric Record not found. Please login with your password");
        }

        // const biometricTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
        // const supportsFaceID = biometricTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);

        // console.log(supportsFaceID);

        // if (!supportsFaceID) {
        //     Alert.alert("Error", "Your device does not support Face ID. Please use Touch ID or password.");
        //     return;
        // }

        // console.log(supportsFaceID);


        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: "Login to Surgi-Vice",
            cancelLabel: "Cancel",
            disableDeviceFallback: true,
        });

        if (biometricAuth.success) {
            Alert.alert("Success", "Welcome to Surgi-Vice!");
            return;
        } else {
            Alert.alert("Failed", "Authentication Failed. Login using your username and password.");
            return;
        }

    }

    catch(error){
        console.error("Biometric authentication error:", error);
        Alert.alert("Error", "An unexpected error occurred. Please try again.");
    }
    
}

