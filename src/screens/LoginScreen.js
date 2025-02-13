import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
export default function LoginScreen({ navigation })
{
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    return (
        <View style={styles.container}>
              <Image source={require('../../assets/logo.jpg')} style={styles.image} />

              <TextInput 
                style={styles.input}
                placeholder="Username"
                value={Username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />

              <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={Password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />

              <Button
                title="Login"
                color="blue"
                // onPress={() => navigation.navigate('LoginScreen')}
                
              />

               <Button
                    title="<- Back"
                    color="blue"
                    onPress={() => navigation.navigate('StartScreen')}
                
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  }
})