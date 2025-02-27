import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Navigation hook

export default function QRCodeScreen() {
    const navigation = useNavigation(); // Initialize navigation

    const handleScanCode = () => {
        navigation.navigate("CameraScreen"); // Navigate to CameraScreen when the button is pressed
    };

    return (
        <View style={styles.container}>
            <Button title="Scan Code" onPress={handleScanCode} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
