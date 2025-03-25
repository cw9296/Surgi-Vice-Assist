import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ScrollView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function MyScreen({ navigation }) {
  useEffect(() => {
    // Lock to portrait mode
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Thank You For Using Surgi-Vice!
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EducationalMaterials')}
          >
            <Text style={styles.buttonText}>FIND YOUR SURGERY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>PICK UP WHERE YOU LEFT OFF</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,  // Adds space at the top
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 250,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
