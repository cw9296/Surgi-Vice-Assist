import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import { createAccount } from '../httpClient';
import { testGet } from '../httpClient';
export default function CreateAccountScreen({ navigation })
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
              <Image source={require('../../assets/logo.jpg')} style={styles.image} />

              <TextInput 
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="gray" 
                value={name}
                onChangeText={setName}
                autoCapitalize="none"
              />

              <TextInput 
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="gray" 
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />


              <TextInput 
                style={styles.input}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholderTextColor="gray" 
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />

              <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="gray" 
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />

              <Button
                title="Create Account"
                color="blue"
                onPress={() => {
                  if(!username || !email || !password || !name){
                    Alert.alert("Please fill out all fields!")
                  }
                  else{
                      createAccount(name, username, email, password);
                      // testGet();
                  }
                }}
                
              />

              
              <StatusBar style="auto" />
        </View>
    )
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

  input: {
    width: '80%',
    height: 55,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  }
})