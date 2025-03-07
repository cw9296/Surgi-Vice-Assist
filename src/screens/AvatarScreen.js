import {React, useState} from 'react';
import { Image, StyleSheet, View, Button, Text, ImageBackground, Pressable, Modal} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import SvgAvatar from '../../assets/avatar_svg_handler';

// const AntDesign = require('@expo/vector-icons/AntDesign');

// CURRENTLY ACCESSIBLE BY CLICKING "LOGIN" FROM LOGIN SCREEN ONLY

export default function AvatarScreen({ navigation }) {
  // defines the options for each menu for each part of the body
  // will associate a route with each of these options when educational materials page is ready
  const head_options = [
    {option: 'Flushable Drain'}, 
    {option: 'Gravity Drain'}, 
    {option: 'Suction Drain'}
  ]
  const chest_options = [
    {option: 'Port / Port-A-Cath'}, 
    {option: 'Flushable Drain'}, 
    {option: 'Gravity Drain'}, 
    {option: 'Suction Drain'}
  ]
  const arms_options = [
    {option: 'PICC Line'}, 
    {option: 'Flushable Drain'}, 
    {option: 'Gravity Drain'}, 
    {option: 'Suction Drain'}
  ]
    return (
        <View style={styles.container}>
            <Text style={styles.brandText}>Click on the area where your procedure was performed.</Text>

              {SvgAvatar()}
              {/* <ImageBackground source={require('../../assets/human_outline.jpg')} style={styles.image}>
                <IconButton options={head_options} locationstyle={styles.head_icon}/>
                <IconButton options={chest_options} locationstyle={styles.chest_icon}/>
                <IconButton options={arms_options} locationstyle={styles.arm_icon_l}/>
                <IconButton options={arms_options} locationstyle={styles.arm_icon_r}/>
              </ImageBackground> */}

            <Button
                title="<- Back"
                color='#007AFF'
                onPress={() => navigation.navigate('StartScreen')}
            />

        </View>

    );
}


// handles the logic for each black info button
const IconButton = ({ options, locationstyle }) => {
  // defines modalVisible (true/false) and its setter
  const [modalVisible, setModalVisible] = useState(false);
  // defines the info icon 
  const icon = <AntDesign name="infocirlce" style={locationstyle} color='black' size={25} />
  // iterates through the list of options and creates a button element for each option
  const modal_items = options.map((item) => 
    <View padding={2} key={item.option}>
  <Pressable key={item.option} style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(!modalVisible)}>
    <Text style={styles.textStyle} key={item.option}>{item.option}</Text>
  </Pressable>
  </View>
  )
  // returns modal which can be activated by clicking an info button
  return(
    <View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select procedure:</Text>
              {modal_items}
              <View padding={2}>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
              </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>{icon}</Pressable> */}
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: 65,
    },
    
    image: {
      width: 216,
      height: 540,
      // resizeMode: 'cover'
      alignItems: 'center'
    },
    brandText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#007AFF', // Apple blue color
        marginBottom: 20,
        textAlign: 'center',
    },
  
    input: {
      width: '80%',
      height: 55,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 10,
    },
    chest_icon:{
      top: 120,
    },
    head_icon:{
      top: 30,
    },
    arm_icon_l:{
      top: 140,
      left: -65
    },
    arm_icon_r:{
      top: 120,
      left: 65
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#007AFF',
    },
    buttonClose: {
      backgroundColor: 'red',
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  })