import {React, useState} from 'react';
import { Image, StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';
import * as questionData from '../../flowchart_questions/hierarchy.json';

export default function FlowchartScreen({ navigation }) {
  // using a state variable as this seems to be the most simple way to make the page refresh upon selection of a new question.
  const [current_question, setQuestion] = useState("root");

  // dynamically display questions from JSON
  return(
    <View style={styles.centeredView} key={current_question}>
      <Text style={styles.text}>{questionData[current_question].question_text}</Text>
        {questionData[current_question].responses.map((response) => ( // create list of buttons based on responses to the question
          <TouchableOpacity style={styles.button} key={response.text} onPress={() => {
                          if(!response.is_endpoint) {setQuestion(response.next_question)} else { navigation.navigate(response.next_question)}
                        }}>
            <Text style={styles.buttonText}>{response.text}</Text>
          </TouchableOpacity>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
  