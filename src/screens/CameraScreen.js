import React, { useState, useEffect, useRef } from "react";
import { Text, Dimensions, Alert, Vibration, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraView } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { educationalMaterials } from '../httpClient';

export default function CameraScreen() {
    const [hasCameraPermission, setCameraPermission] = useState(null);
    const navigation = useNavigation(); // Navigation hook

    useEffect(() => {
        const requestPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setCameraPermission(status === "granted");
        };

        requestPermissions();
    }, []);

    useEffect(() => {
        if (hasCameraPermission === false) {
            Alert.alert(
                "Camera Permission Required",
                "Please enable camera access in settings to scan QR codes.",
                [
                    { text: "Go to settings", onPress: () => Linking.openSettings() },
                    { text: "Cancel", style: "cancel" },
                ]
            );
        }
    }, [hasCameraPermission]);

    //Ref object with initial value false. Essentially creating a bool that persists across renders. 
    const scanningRef = useRef(false);
    
    const handleBarCodeScanned = async ({ data }) => {
        if (scanningRef.current){
            return; // prevent duplicate scans
        }

        scanningRef.current = true;
        // setScanned(true);
        Vibration.vibrate();
    
        try {
            // Alert.alert("QR Code Scanned!", `Data: ${data}`);
            const [title, category] = data.split(":");
            const pdf = await educationalMaterials(title, category, true);
            navigation.navigate("PdfViewer", { pdfBase64: pdf });
        } catch (err) {
            console.error("QR scan error:", err);
        } finally {
            setTimeout(() => {
                scanningRef.current = false; // allow scanning again after short delay
            }, 2000); //2 seconds
        }
    };

    const handleCloseCamera = () => {
        navigation.goBack(); //close scanner and go back
    };

    if (hasCameraPermission === null) {
        return <Text>Requesting camera permission...</Text>;
    }
    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView
                onBarcodeScanned={ handleBarCodeScanned } //only scan once
                barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={handleCloseCamera}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    buttonContainer: {
        position: "absolute",
        top: 35,
        right: 20,
        zIndex: 1,
    },
    closeButton: {
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

