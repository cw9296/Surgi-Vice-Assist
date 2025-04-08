import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Navigation hook

export default function QRCodeScreen() {
    const navigation = useNavigation(); // Initialize navigation

    const handleScanCode = () => {
        navigation.navigate("CameraScreen"); // Navigate to CameraScreen when the button is pressed
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/QRCodeIcon.jpg')} style={styles.image} />
            <Text style={styles.text}>Please prepare to scan the QR Code provided by your discharging nurse to access information on your procedure.</Text>
            <Text style={styles.text}>Ensure the QR code is well-lit and fully visible in the camera frame.</Text>
            <TouchableOpacity style={styles.scanButton} onPress={handleScanCode}>
                <Text style={styles.scanButtonText}>Scan QR Code</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 60,
        backgroundColor: 'white',
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        paddingRight: 10,
    },
    scanButton: {
        backgroundColor: "blue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    scanButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
