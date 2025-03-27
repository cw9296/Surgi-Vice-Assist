import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.jpg')} style={styles.image} />

      <Text style={styles.welcomeText}>Thank you for choosing</Text>
      <Text style={styles.brandText}>Surgi-Vice!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('CreateAccountScreen')}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

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

  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
  },

  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 25,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 20,
    elevation: 5,
    width: 300, 
    alignItems: 'center', // Center text horizontally
  },

  buttonText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
