import {React, useState} from 'react';
import { Image, StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';
import * as questionData from '../../flowchart_questions/hierarchy.json';


export default function FlowchartScreen({ navigation }) {
    return(renderQuestionContent(questionData["root"]))
}

//write a function that takes as input the question to render
//for each response in the question, render a button
//assign each button an onpress function that re-renders the screen with a new question
//see my modal example for dynamically generating buttons
//what to do if a question is an endpoint?
function renderQuestionContent(question){
  return(
    <View style={styles.centeredView}>
      <Text style={styles.text}>{question.question_text}</Text>
        {question.responses.map((response) => (
          <TouchableOpacity style={styles.button} onPress={() => {if(!response.endpoint){renderQuestionContent(questionData[response.question])}}}>
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
  