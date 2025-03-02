import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function MyScreen({ navigation }) {
  useEffect(() => {
    // Lock to portrait mode
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Thank You For Using Surgi-Vice!
        </Text>
      </View>

      
      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>NOT FEELING WELL?</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>FIND YOUR SURGERY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>PICK UP WHERE YOU LEFT OFF</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  textContainer: {
    flex: 1, // Reduced to move buttons closer
    justifyContent: 'flex-end', // Pushes text down
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20, // Adds space below text
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    flex: 1.5, // Reduced to bring buttons up
    justifyContent: 'flex-start', // Aligns buttons closer to text
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue', // Grey color
    paddingVertical: 20, // Increased size
    paddingHorizontal: 60, // Increased width
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 30, // Reduced spacing between buttons
    elevation: 5, // For Android shadow
    width: '80%',
  },
  buttonText: {
    color: 'black',
    fontSize: 22, // Increased text size
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
