import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
//import { BarCodeScanner } from "expo-barcode-scanner";  // Correct import for barcode scanning
import { Camera, CameraView } from "expo-camera";  // Correct import for accessing camera
import { useNavigation } from "@react-navigation/native";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState("");
    const navigation = useNavigation(); //initialize navigation

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData(data);
        alert(`QR Code Scanned! Data: ${data}`);
    };

    const handleCloseCamera = () => {
        navigation.goBack(); //close camera and go back to QRCodeScreen
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission...</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}  // Only scan once
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.buttonContainer}>
                <Button title="Close" onPress={handleCloseCamera} style={styles.closeButton} />
            </View>
            {scanned && (
                <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
            )}
            {scannedData ? <Text style={styles.scannedText}>{scannedData}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    buttonContainer: {
        position: "absolute",
        top: 30,
        right: 20,
        zIndex: 1,
    },
    closeButton: {

    },
    scannedText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "bold",
    },
});

