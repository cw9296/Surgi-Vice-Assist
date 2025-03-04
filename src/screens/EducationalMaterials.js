import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ScrollView, Alert } from 'react-native';
import { educationalMaterials } from '../httpClient';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

export default function MyScreen({ navigation }) {
  useEffect(() => {
    // Lock to portrait mode
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>PRE-SURGERY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>DAY OF</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={async () => {
              try {
                    //Calling packager to retrieve PDF
                    const pdf = await educationalMaterials();  

                    //send Base64 encoded pdf to PdfViewer Page
                    navigation.navigate('PdfViewer', { pdfBase64: pdf });
                    
                } catch (error) {
                    console.error("Error loading PDF:", error);
                    Alert.alert("Failed to load PDF");
                }
              }
            }
            
          >
            <Text style={styles.buttonText}>POST-SURGERY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>COMPLICATIONS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>TELEMEDICINE ADVICE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>NOT FEELING WELL?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>EMERGENT HELP</Text>
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
    paddingTop: 50,
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
    backgroundColor: 'lightblue',
    paddingVertical: 25,
    paddingHorizontal: 60,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 20,
    elevation: 5,
    width: '80%',
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
