import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View, Button, Text} from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.jpg')} style={styles.image} />

      <Text style={styles.welcomeText}>Thank you for choosing</Text>
      <Text style={styles.brandText}>Surgi-Vice!</Text>

      <Button
        style={styles.brandText}
        title="Login"
        onPress={() => navigation.navigate('LoginScreen')}
        accessibilityLabel="Navigate to Login Screen"
      />

      <Button
        style={styles.brandText}
        title="Create Account"
        onPress={() => navigation.navigate('CreateAccountScreen')}
        accessibilityLabel="Navigate to Login Screen"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 65,
  },

  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555', // Slightly darker gray
    marginTop: 10,
  },

  brandText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF', // Apple blue color
    marginBottom: 20,
  },
});
