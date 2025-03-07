import { React, useState } from "react";
import { Svg, Path, } from "react-native-svg"
import { StyleSheet, Dimensions, View, Pressable, TouchableOpacity, Modal, Text } from "react-native"
import { Button } from "react-native-paper";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const originalWidth = 612;
const originalHeight = 792;
const aspectRatio = originalWidth / originalHeight;

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
const default_options = [
  {option: 'Flushable Drain'}, 
  {option: 'Gravity Drain'}, 
  {option: 'Suction Drain'}
]

function TestSvgAvatar(){
  return (
    
    <View style={{ width: "120%", aspectRatio }}>
    {/* <TouchableOpacity onPress={(evt) => handlePress(evt) } >  */}
      <Svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%" 
            height="100%" 
            viewBox={`0 0 ${originalWidth} ${originalHeight}`}
            xmlSpace="preserve">
              <Button onPress={(evt) => handlePress(evt) }>
            <Path
                id="Legs"
                className="st0"
                d="M349.52 371.61c1.08 8.14 2.22 16.26 3.36 24.39 3.98 28.47 2.12 56.86-5.35 84.18-6.83 24.98-8.74 49.41-4.45 74.75 3.3 19.47-2.46 38.28-7.07 57.06-5.94 24.21-8.64 48.62-5.54 73.75.85 6.92 3.99 12.57 7.1 18.29 1.06 1.95 2.84 3.79 3.6 5.94 1.41 3.96-.68 10.81-6.16 11.02-4.45.17-12.08 1.33-17 0-6.36-1.71-11.23-11.44-11.37-13.96-.27-4.66-1.14-8.54-4.9-11.67-4.15-3.46-3.52-7.29-2.32-12.62 3.7-16.47 7.33-33.05 5.31-50.32-1.81-15.52-6.41-30.7-5.9-46.49.22-6.79-.35-13.55.83-20.37 2.07-11.94 3.83-23.99-.84-35.84-3.07-7.8-2.96-16-2.94-24.22.08-30.68.03-61.37.03-92.05 0-1.94.1-3.88-.03-5.81-.13-2.05 1.07-4.89-2.87-4.89-3.94 0-2.74 2.83-2.87 4.89-.12 1.93-.03 3.87-.03 5.81 0 29.71-.03 59.43.01 89.14.02 12.28-.35 24.33-5.51 35.98-1.79 4.04-1.27 9.81-.12 14.36 5.76 22.79 2.25 45.3-1.11 67.87-2.21 14.84-4.64 29.71-.02 44.57 2.16 6.98.05 14.72 4.58 21.48 1.67 2.49-.73 6.38-3.62 8.54-3.92 2.94-5.07 6.94-4.84 11.64.2 4.04-.56 8.4-3.72 10.72C270 722 270 723 260 722c-1.6-.16-2.15.08-5 0-8.79-.26-14.3-3.12-11.15-11.06.42-1.06 1.35-2.01 2.02-2.82 14.25-17.5 10.86-38.38 10.1-58.22-.49-12.68-2.66-24.5-5.97-36.9-6.32-23.72-9.57-48.32-5.34-72.63 3.12-17.93 1.05-35.99-3.96-53.2-8.92-30.65-11.42-61.65-7.32-93.07.87-6.65 1.74-13.29 2.59-19.93l113.55-2.56z"
                fill={styles.fills.fill}
                stroke={styles.fills.stroke}
                strokeWidth={styles.fills.strokeWidth}
                strokeLinecap={styles.fills.strokeLinecap}
                strokeLinejoin={styles.fills.strokeLinejoin}
                strokeMiterlimit={styles.fills.strokeMiterlimit}
            />
            </Button>
      </Svg>
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%" 
      height="100%" 
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      xmlSpace="preserve"
    //   enableBackground={`new 0 0 ${originalWidth} ${originalHeight}`}
    >
            <Path
                id="Legs"
                className="st0"
                d="M349.52 371.61c1.08 8.14 2.22 16.26 3.36 24.39 3.98 28.47 2.12 56.86-5.35 84.18-6.83 24.98-8.74 49.41-4.45 74.75 3.3 19.47-2.46 38.28-7.07 57.06-5.94 24.21-8.64 48.62-5.54 73.75.85 6.92 3.99 12.57 7.1 18.29 1.06 1.95 2.84 3.79 3.6 5.94 1.41 3.96-.68 10.81-6.16 11.02-4.45.17-12.08 1.33-17 0-6.36-1.71-11.23-11.44-11.37-13.96-.27-4.66-1.14-8.54-4.9-11.67-4.15-3.46-3.52-7.29-2.32-12.62 3.7-16.47 7.33-33.05 5.31-50.32-1.81-15.52-6.41-30.7-5.9-46.49.22-6.79-.35-13.55.83-20.37 2.07-11.94 3.83-23.99-.84-35.84-3.07-7.8-2.96-16-2.94-24.22.08-30.68.03-61.37.03-92.05 0-1.94.1-3.88-.03-5.81-.13-2.05 1.07-4.89-2.87-4.89-3.94 0-2.74 2.83-2.87 4.89-.12 1.93-.03 3.87-.03 5.81 0 29.71-.03 59.43.01 89.14.02 12.28-.35 24.33-5.51 35.98-1.79 4.04-1.27 9.81-.12 14.36 5.76 22.79 2.25 45.3-1.11 67.87-2.21 14.84-4.64 29.71-.02 44.57 2.16 6.98.05 14.72 4.58 21.48 1.67 2.49-.73 6.38-3.62 8.54-3.92 2.94-5.07 6.94-4.84 11.64.2 4.04-.56 8.4-3.72 10.72C270 722 270 723 260 722c-1.6-.16-2.15.08-5 0-8.79-.26-14.3-3.12-11.15-11.06.42-1.06 1.35-2.01 2.02-2.82 14.25-17.5 10.86-38.38 10.1-58.22-.49-12.68-2.66-24.5-5.97-36.9-6.32-23.72-9.57-48.32-5.34-72.63 3.12-17.93 1.05-35.99-3.96-53.2-8.92-30.65-11.42-61.65-7.32-93.07.87-6.65 1.74-13.29 2.59-19.93l113.55-2.56z"
                fill={styles.fills.fill}
                stroke={styles.fills.stroke}
                strokeWidth={styles.fills.strokeWidth}
                strokeLinecap={styles.fills.strokeLinecap}
                strokeLinejoin={styles.fills.strokeLinejoin}
                strokeMiterlimit={styles.fills.strokeMiterlimit}
            />
      <Path
        id="Head_00000101803823240589521680000011731070250191946928_"
        className="st0"
        d="M317.91 156.83c-2.46-3.86-3.17-8.68-2.43-13.67.91-6.11-1.53-13.84 7.19-17.99 2.79-1.33 5.77-11.98 4.33-13.17-1.9-1.57-4.15-2.33-5-4-1.96-3.85-.72-8.82-1-13-1-14.77-14.39-27.68-27.99-27.68-13.6 0-27.54 12.54-28 27.34-.14 4.53 1.06 11.6-1.23 13.12-9.12 6.02-.39 11.43-.72 16.92-.27 4.56 5.15 1.44 5.89 4.83 1.84 8.37 1.52 16.89.6 25.17-.09.79-.34 1.5-.71 2.13h49.07z"
        fill={styles.fills.fill}
        stroke={styles.fills.stroke}
        strokeWidth={styles.fills.strokeWidth}
        strokeLinecap={styles.fills.strokeLinecap}
        strokeLinejoin={styles.fills.strokeLinejoin}
        strokeMiterlimit={styles.fills.strokeMiterlimit}
      />
      <Path
        id="Rt_Arm_00000111151152957203379990000017666455806066775437_"
        className="st0"
        styles={styles.fills}
        d="M414.53 395.04c.27-.02 5.16 1.2 4.47-3.04-1.07-6.63-8.37-20.02-11.43-21.79-3.61-2.09-4.12-4.34-4.53-7.16-1.45-9.99-3.71-19.82-4.08-30.02-.61-16.9-.4-34.04-9.37-49.5-2.15-3.7-3.64-8.28-3.82-12.53-.79-18.46-5.99-36.47-4.2-55.24 1.95-20.41-9.02-37.83-31.62-43.63l.94 103.72c3.76 8.32 4.21 17.16 5.08 26.14 1.51 15.58 7.18 30.28 13.42 44.52 3.74 8.54 6.07 17.35 8.75 26.17 1.59 5.24-.13 9.81-.4 14.6-.58 10.34 3.36 20.79-.76 31.03-.7 1.74.6 3.37 1.93 3.72 1.59.41 2.05-1.53 2.98-2.66 1.96-2.38-.88-6.94 3.73-7.86v-7.75c.27 8.8 3.83 17.22 2.92 26.16-.28 2.74 5.41 1.67 5.71-.01.64-3.51-.94-7.25 1.02-10.65l1.93-.97c3.72 3.93 2.33 8.94 3.11 13.53.27 1.56 6.81 1.37 6.46-.92-1.14-7.41-.88-14.85-1.05-22.29-.04-1.8-.27-4.96-3.7-4.85l4.82 7.75c4.52 3.38 4.26 9.16 6.7 13.6 1.15 2.1 1.86 4.87 4.84 3.74 2.77-1.05 1.85-3.46 1.04-5.72-4.49-12.52-6.66-25.53-7.75-38.75l2.86 10.66z"
        fill={styles.fills.fill}
        stroke={styles.fills.stroke}
        strokeWidth={styles.fills.strokeWidth}
        strokeLinecap={styles.fills.strokeLinecap}
        strokeLinejoin={styles.fills.strokeLinejoin}
        strokeMiterlimit={styles.fills.strokeMiterlimit}
      />
      <Path
        id="Chest_00000119800963634994324050000016593277901707859587_"
        className="st0"
        styles={styles.fills}
        d="M236.16 372.7L349 371l-2.35-22.43c-1.43-12.6-1.61-25.3-3.55-37.82-1.17-7.56-1.58-14.93.99-22.31 3.16-9.09 6.12-18.26 5.82-28.09l-1.36-88.22h1.39c-.97-.25-1.96-.47-2.96-.68-7.69-1.56-14.18-5.25-21.11-8.14-3.59-1.5-6.21-3.76-7.94-6.49h-49.07c-1.82 3.1-6.59 4.44-9.71 6.45-6.69 4.31-14.18 7.46-22.08 8.83l-.95 88.25c2.18 4.52-.04 9.26 1.9 12.64 7.85 13.71 5.51 28.47 4.29 43.59-1.56 19.28-3.86 38.43-6.32 57.58"
        fill={styles.fills.fill}
        stroke={styles.fills.stroke}
        strokeWidth={styles.fills.strokeWidth}
        strokeLinecap={styles.fills.strokeLinecap}
        strokeLinejoin={styles.fills.strokeLinejoin}
        strokeMiterlimit={styles.fills.strokeMiterlimit}
      />
      <Path
        id="Lf_Arm_00000175306823400564718570000007555413580910667954_"
        className="st0"
        d="M172.07 393.04c-1.93-.17-.46 3.2-2.49 1.96-1.64-1.01-3.35-2.57-3-5 1.34-9.35 4.59-17.24 12.45-21.79 3.61-2.09 4.03-4.34 4.55-7.16 2.72-14.73 5.41-29.49 4.83-44.56-.31-8.08.57-16 4.01-23.21 7.47-15.7 8.77-32.7 11.59-49.45 1.86-11.02.98-21.98.79-32.96C204.43 190.04 214 176 237 174l-1.28 99.86c-3.76 8.32-4.21 17.16-5.08 26.14-1.51 15.58-7.18 30.28-13.42 44.52-3.74 8.54-6.07 17.35-8.75 26.17-1.59 5.24.13 9.81.4 14.6.58 10.34-3.36 20.79.76 31.03.7 1.74-.6 3.37-1.93 3.72-1.59.41-2.05-1.53-2.98-2.66-1.96-2.38.88-6.94-3.73-7.86v-7.75c-.27 8.8-3.83 17.22-2.92 26.16.28 2.74-.21 3.26-2.5 3.07-3.63-.3-2.96-2-3.25-4.04-.45-3.22.89-6.61-.97-9.69l-1.93-.97c-3.72 3.93-2.33 8.94-3.11 13.53-.27 1.56.59 2.47-2.73 2.17-3.74-.33-4.08-.81-3.72-3.09 1.14-7.41.88-14.85 1.05-22.29.04-1.8.27-4.96 3.7-4.85l-4.82 8.72c-5 2.71-3.78 8.74-6.66 12.67-1.37 1.87-1.57 2.98-4.55 1.85-2.77-1.05-2.19-1.62-1.37-3.87 4.6-12.5 6.66-25.53 7.75-38.75"
        fill={styles.fills.fill}
        stroke={styles.fills.stroke}
        strokeWidth={styles.fills.strokeWidth}
        strokeLinecap={styles.fills.strokeLinecap}
        strokeLinejoin={styles.fills.strokeLinejoin}
        strokeMiterlimit={styles.fills.strokeMiterlimit}
      />
      <Path
        id="Outline"
        d="M296.15 401.7h-6v117c0 10-11 22-6 32s3 49 3 49c-7 20-7 50.3-7 50.3.67 6.25 1.47 8.48 1.88 9.34.01.01.38.79 1.12 2.36 0 0 0 11 3 18s1 12 1 12c-1.37.65-3.36 1.85-5 4-4.27 5.61-2.28 12.63-2 13.56-6 13.56-15 13.44-15 13.44l-18-1s-7-8-3-12 12-24 12-24v-9-35s-3-27-10-45-1-54-1-54l-2-49c-11-13-10-93-10-93s8-61 8-62 2-51 2-51c-2 0-8-34-8-34v20s-6 21-6 34-18 45-20 57-1 38-1 38l1 15c-1 6-5 2-5 2l-5-15-1 23c-3 12-6 1-6 1l-1-23a95.145 95.145 0 00-5 25c.13 2.97-1.82 4.95-3.2 4.89-1.34-.06-3.02-2.08-2.8-4.89l1-25-8 18c-8 11-6-3.04-6-3.04s7-21.96 7-22.96v-14l-1.92 6.44c-4.92 15.44-5.08 0-5.08 0v-7.44c1.88-3.01 4.94-7.45 9.5-12.25 2.24-2.36 3.22-3.09 4.5-4.75 2.39-3.09 4.95-8.22 5-17l1-11 2-34c2-13 12-31 12-31l3-33c5-13-10-58 21-64s45-21 45-21l.02-26h-2.02c-10 0-11-21-7-21s5 5 5 5l-1-24c1.67-10.31 5.49-14.67 8.85-16.7 4.14-2.5 12.26-4.3 12.26-4.3s7.56-1.15 13.62.3c4.87 1.16 8.05 3.83 9.81 5.25C316.39 78.68 319 85.66 320 89v24s1-5 5-5 3 21-7 21h-2.02l.02 26s14 15 45 21 16 51 21 64l3 33s10 18 12 31l2 34 1 11c.05 8.78 2.61 13.91 5 17 1.28 1.66 2.26 2.39 4.5 4.75 4.56 4.8 7.62 9.24 9.5 12.25v7.44s-.16 15.44-5.08 0L412 384v14c0 1 7 22.96 7 22.96s2 14.04-6 3.04l-8-18 1 25c.22 2.81-1.46 4.83-2.8 4.89-1.38.06-3.33-1.92-3.2-4.89a95.145 95.145 0 00-5-25l-1 23s-3 11-6-1l-1-23-5 15s-4 4-5-2l1-15s1-26-1-38-20-44-20-57-6-34-6-34v-20s-6 34-8 34c0 0 2 50 2 51s8 62 8 62 1 80-10 93l-2 49s6 36-1 54-10 45-10 45v44s8 20 12 24-3 12-3 12l-18 1s-9 .12-15-13.44c.28-.92 2.27-7.95-2-13.56-1.64-2.15-3.63-3.35-5-4 0 0-2-5 1-12s3-18 3-18c.75-1.56 1.12-2.35 1.12-2.36.4-.86 1.21-3.09 1.88-9.34 0 0 0-30.3-7-50.3 0 0-2-39 3-49s-6-22-6-32V402h-6"
        fill="none"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
    </Svg>
    {/* </TouchableOpacity> */}
    </View>
  )
}
const regionsPressed = [
  {region: 'head', pressed: false},
  {region: 'chest', pressed: false},
  {region: 'rt_arm', pressed: false},
  {region: 'lf_arm', pressed: false},
  {region: 'legs', pressed: false},
]

export default function SvgAvatar(props) {

  const [isPressed, setIsPressed] = useState(regionsPressed);
  const [modalVisible, setModalVisible] = useState(false);

  const RegionModal = () => {
    let options = null;
    region = getPressedRegion()
    console.warn('selected region: '+region)
    if (region === 'chest'){
      options = chest_options
    }
    else if (region === 'rt_arm' || region === 'lf_arm'){
      options = arms_options
    }
    else{
      options = default_options
    }
    const modal_items = options.map((item) => 
        <View padding={2} key={item.option}>
      <Pressable key={item.option} style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.textStyle} key={item.option}>{item.option}</Text>
      </Pressable>
      </View>
    )
    return (      <Modal
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
                  <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {setModalVisible(!modalVisible);setPressStatus(region, false);}}>
                    <Text style={styles.textStyle}>Back</Text>
                  </Pressable>
                  </View>
              </View>
            </View>
          </Modal>);
  };

  function handlePress(region) {
    console.log(`pressed ` + region);

    // if the region is already pressed
    if (getPressStatus(region)){
      //un press it
      setPressStatus(region, false)
      setModalVisible(modalVisible)
    }
    else{
      setPressStatus(region, true)
      setModalVisible(!modalVisible)
    }

    
    
  }
  function getPressedRegion(){
    const statusToGet = isPressed.find(
      temp => temp.pressed === true
    );
    if (statusToGet == null){
      console.warn(' no buttons currently pressed')
      return null;
    }
    else{
      return statusToGet.region;
      //console.warn(statusToGet+' no buttons currently pressed')
      //return "chest";
    }
  }
  function getPressStatus(region){
    // locate the region in the state array
    const regionToGet = isPressed.find(
      temp => temp.region === region
    );
    if (regionToGet == null){
      console.warn(region+' is null')
      return false
    }
    // return its status
    return regionToGet.pressed;
  }
  function setPressStatus(region, status){
    // // get current state values
    const updatedIsPressed = [...isPressed];
    // // get region to update
    // const regionToUpdate = updatedIsPressed.find(
    //   temp => temp.region === region
    // );

    const regionsToUpdate = updatedIsPressed.map(temp => {
      if (temp.region === region) {
        // set clicked region to clicked or unclicked
        return {...temp, pressed: status}
      } else {
        // unset everything else
        return {...temp, pressed: false};
      }
    });


    if (regionsToUpdate == null){
      console.warn(region+' is null')
    }
    //set the state of the region & update state array
    else{
      setIsPressed(regionsToUpdate);
    }

  }

  return (
    
    <View style={{ width: "120%", aspectRatio }}>
    {/* <TouchableOpacity onPress={(evt) => handlePress(evt) } >  */}
    <RegionModal/>
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%" 
      height="100%" 
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      xmlSpace="preserve"
    //   enableBackground={`new 0 0 ${originalWidth} ${originalHeight}`}
      {...props}
    >
            <Path
                id="Legs"
                className="st0"
                d="M349.52 371.61c1.08 8.14 2.22 16.26 3.36 24.39 3.98 28.47 2.12 56.86-5.35 84.18-6.83 24.98-8.74 49.41-4.45 74.75 3.3 19.47-2.46 38.28-7.07 57.06-5.94 24.21-8.64 48.62-5.54 73.75.85 6.92 3.99 12.57 7.1 18.29 1.06 1.95 2.84 3.79 3.6 5.94 1.41 3.96-.68 10.81-6.16 11.02-4.45.17-12.08 1.33-17 0-6.36-1.71-11.23-11.44-11.37-13.96-.27-4.66-1.14-8.54-4.9-11.67-4.15-3.46-3.52-7.29-2.32-12.62 3.7-16.47 7.33-33.05 5.31-50.32-1.81-15.52-6.41-30.7-5.9-46.49.22-6.79-.35-13.55.83-20.37 2.07-11.94 3.83-23.99-.84-35.84-3.07-7.8-2.96-16-2.94-24.22.08-30.68.03-61.37.03-92.05 0-1.94.1-3.88-.03-5.81-.13-2.05 1.07-4.89-2.87-4.89s-2.74 2.83-2.87 4.89c-.12 1.93-.03 3.87-.03 5.81 0 29.71-.03 59.43.01 89.14.02 12.28-.35 24.33-5.51 35.98-1.79 4.04-1.27 9.81-.12 14.36 5.76 22.79 2.25 45.3-1.11 67.87-2.21 14.84-4.64 29.71-.02 44.57 2.16 6.98.05 14.72 4.58 21.48 1.67 2.49-.73 6.38-3.62 8.54-3.92 2.94-5.07 6.94-4.84 11.64.2 4.04-.56 8.4-3.72 10.72-5.76 4.23-5.76 5.23-15.76 4.23-1.6-.16-2.15.08-5 0-8.79-.26-14.3-3.12-11.15-11.06.42-1.06 1.35-2.01 2.02-2.82 14.25-17.5 10.86-38.38 10.1-58.22-.49-12.68-2.66-24.5-5.97-36.9-6.32-23.72-9.57-48.32-5.34-72.63 3.12-17.93 1.05-35.99-3.96-53.2-8.92-30.65-11.42-61.65-7.32-93.07.87-6.65 1.74-13.29 2.59-19.93l113.54-2.56z"
                fill={getPressStatus('legs') ? styles.fills.fill : styles.outlines.fill}
                stroke={styles.fills.stroke}
                strokeWidth={styles.fills.strokeWidth}
                strokeLinecap={styles.fills.strokeLinecap}
                strokeLinejoin={styles.fills.strokeLinejoin}
                strokeMiterlimit={styles.fills.strokeMiterlimit}
                onPress={() => {handlePress('legs');}}
            />
      <Path
        id="Head"
        className="st0"
        d="M317.91 156.83c-2.46-3.86-3.17-8.68-2.43-13.67.91-6.11-1.53-13.84 7.19-17.99 2.79-1.33 5.77-11.98 4.33-13.17-1.9-1.57-4.15-2.33-5-4-1.96-3.85-.72-8.82-1-13-1-14.77-14.39-27.68-27.99-27.68-13.6 0-27.54 12.54-28 27.34-.14 4.53 1.06 11.6-1.23 13.12-2.42 1.6-4.4 3.03-4.18 4.56.4 2.67-1.44 10.05 3.4 11.67 3 1 6.73 6.79 7 8 1.84 8.37.47 14.42-.45 22.7-.09.79-.34 1.5-.71 2.13h49.07z"
        fill={getPressStatus('head') ? styles.fills.fill : styles.outlines.fill}
        stroke={styles.fills.stroke}
        strokeWidth={styles.fills.strokeWidth}
        strokeLinecap={styles.fills.strokeLinecap}
        strokeLinejoin={styles.fills.strokeLinejoin}
        strokeMiterlimit={styles.fills.strokeMiterlimit}
        onPress={() => {handlePress('head');}}
      />
      <Path
        id="Rt_Arm"
        className="st0"
        styles={styles.fills}
        d="M420.89 397.88l.16.15c.54.42 4.83 4.94 5.95 4.97 1.25.03 4.03-1.03-2.66-11.35-4.85-7.47-14.25-19.98-16.78-21.44-3.61-2.09-4.12-4.34-4.53-7.16-1.45-9.99-3.71-19.82-4.08-30.02-.61-16.9-.4-34.04-9.37-49.5-2.15-3.7-3.64-8.28-3.82-12.53-.79-18.46-5.99-36.47-4.2-55.24 1.91-20.04-8.62-37.2-30.41-43.3a.96.96 0 00-1.21.93l.93 102.28c0 .12.03.25.08.36 3.69 8.27 4.14 17.04 5 25.96 1.51 15.58 7.18 30.28 13.42 44.52 3.74 8.54 6.07 17.35 8.75 26.17 1.59 5.24 4.16 9.53 3.89 14.32-.58 10.34-.93 21.07-5.05 31.31-.7 1.74-.28 3.34 1.05 3.69 1.59.41 2.07-1.87 3-3 .73-.89 1.81-5.74 3-8 1.03-1.97 2.33-4.03 3.34-5.57.51-.78 1.72-.43 1.74.5.2 7.89.24 16.04-.57 24-.15 1.44.99 4.28 2.49 4.07 1.35-.18 1.86-2.2 2-3 .31-1.69.11-8.11 1-13 .59-3.26 1.6-5.92 2.28-7.49.32-.74 1.36-.75 1.72-.03 2.63 5.26 2.29 17.39 3 21.51.13.76 1.41 3.12 3 3s2.18-2.83 2-4c-.9-5.84.24-16.75.76-21.12.1-.82 1.14-1.14 1.66-.5 3.35 4.05 4.42 11.69 6.57 15.62 1.15 2.1 1.03 4.13 4 3 2.77-1.05 1.19-2.61.38-4.87-4.16-11.6-7.27-18.37-8.38-30.13-.09-.91 3.39-2.68 4-2l5.89 6.88z"
        fill={getPressStatus('rt_arm') ? styles.fills.fill : styles.outlines.fill}
        stroke={styles.fills.stroke}
        strokeWidth={styles.fills.strokeWidth}
        strokeLinecap={styles.fills.strokeLinecap}
        strokeLinejoin={styles.fills.strokeLinejoin}
        strokeMiterlimit={styles.fills.strokeMiterlimit}
        onPress={() => {handlePress('rt_arm');}}
      />
      <Path
        id="Chest"
        className="st0"
        styles={styles.fills}
        d="M236.16 372.7L349 371l-2.35-22.43c-1.43-12.6-1.61-25.3-3.55-37.82-1.17-7.56-1.58-14.93.99-22.31 3.16-9.09 6.12-18.26 5.82-28.09l-1.36-88.22h1.39c-.97-.25-1.96-.47-2.96-.68-7.69-1.56-14.18-5.25-21.11-8.14-3.59-1.5-6.21-3.76-7.94-6.49h-49.07c-1.82 3.1-6.59 4.44-9.71 6.45-6.69 4.31-14.18 7.46-22.08 8.83l-.95 88.25c2.18 4.52-.04 9.26 1.9 12.64 7.85 13.71 5.51 28.47 4.29 43.59-1.56 19.28-3.86 38.43-6.32 57.58"
        fill={getPressStatus('chest') ? styles.fills.fill : styles.outlines.fill}
        stroke={styles.fills.stroke}
        strokeWidth={styles.fills.strokeWidth}
        strokeLinecap={styles.fills.strokeLinecap}
        strokeLinejoin={styles.fills.strokeLinejoin}
        strokeMiterlimit={styles.fills.strokeMiterlimit}
        onPress={() => {handlePress('chest');}}
      />
      <Path
        id="Lf_Arm"
        className="st0"
        d="M166.05 397.74l-.16.15c-.54.42-4.83 4.94-5.95 4.97-1.25.03-4.03-1.03 2.66-11.35 4.85-7.47 14.25-19.98 16.78-21.44 3.61-2.09 4.12-4.34 4.53-7.16 1.45-9.99 3.71-19.82 4.08-30.02.61-16.9.4-34.04 9.37-49.5 2.15-3.7 3.64-8.28 3.82-12.53.79-18.46 5.99-36.47 4.2-55.24-1.91-20.04 8.62-37.2 30.41-43.3a.96.96 0 011.21.93l-.93 102.28c0 .12-.03.25-.08.36-3.69 8.27-4.14 17.04-5 25.96-1.51 15.58-7.18 30.28-13.42 44.52-3.74 8.54-6.07 17.35-8.75 26.17-1.59 5.24-4.16 9.53-3.89 14.32.58 10.34.93 21.07 5.05 31.31.7 1.74.28 3.34-1.05 3.69-1.59.41-2.07-1.87-3-3-.73-.89-1.81-5.74-3-8-1.03-1.97-2.33-4.03-3.34-5.57-.51-.78-1.72-.43-1.74.5-.2 7.89-.24 16.04.57 24 .15 1.44-.99 4.28-2.49 4.07-1.35-.18-1.86-2.2-2-3-.31-1.69-.11-8.11-1-13-.59-3.26-1.6-5.92-2.28-7.49-.32-.74-1.36-.75-1.72-.03-2.63 5.26-2.29 17.39-3 21.51-.13.76-1.41 3.12-3 3s-2.18-2.83-2-4c.9-5.84-.24-16.75-.76-21.12-.1-.82-1.14-1.14-1.66-.5-3.35 4.05-4.42 11.69-6.57 15.62-1.15 2.1-1.03 4.13-4 3-2.77-1.05-1.19-2.61-.38-4.87 4.16-11.6 7.27-18.37 8.38-30.13.09-.91-3.39-2.68-4-2l-5.89 6.88z"
        fill={getPressStatus('lf_arm') ? styles.fills.fill : styles.outlines.fill}
        stroke={styles.fills.stroke}
        strokeWidth={styles.fills.strokeWidth}
        strokeLinecap={styles.fills.strokeLinecap}
        strokeLinejoin={styles.fills.strokeLinejoin}
        strokeMiterlimit={styles.fills.strokeMiterlimit}
        onPress={() => {handlePress('lf_arm');}}
      />
      {/* <Path
        id="Outline"
        d="M296.15 401.7h-6v117c0 10-11 22-6 32s3 49 3 49c-7 20-7 50.3-7 50.3.67 6.25 1.47 8.48 1.88 9.34.01.01.38.79 1.12 2.36 0 0 0 11 3 18s1 12 1 12c-1.37.65-3.36 1.85-5 4-4.27 5.61-2.28 12.63-2 13.56-6 13.56-15 13.44-15 13.44l-18-1s-7-8-3-12 12-24 12-24v-9-35s-3-27-10-45-1-54-1-54l-2-49c-11-13-10-93-10-93s8-61 8-62 2-51 2-51c-2 0-8-34-8-34v20s-6 21-6 34-18 45-20 57-1 38-1 38l1 15c-1 6-5 2-5 2l-5-15-1 23c-3 12-6 1-6 1l-1-23a95.145 95.145 0 00-5 25c.13 2.97-1.82 4.95-3.2 4.89-1.34-.06-3.02-2.08-2.8-4.89l1-25-8 18c-8 11-6-3.04-6-3.04s7-21.96 7-22.96v-14l-1.92 6.44c-4.92 15.44-5.08 0-5.08 0v-7.44c1.88-3.01 4.94-7.45 9.5-12.25 2.24-2.36 3.22-3.09 4.5-4.75 2.39-3.09 4.95-8.22 5-17l1-11 2-34c2-13 12-31 12-31l3-33c5-13-10-58 21-64s45-21 45-21l.02-26h-2.02c-10 0-11-21-7-21s5 5 5 5l-1-24c1.67-10.31 5.49-14.67 8.85-16.7 4.14-2.5 12.26-4.3 12.26-4.3s7.56-1.15 13.62.3c4.87 1.16 8.05 3.83 9.81 5.25C316.39 78.68 319 85.66 320 89v24s1-5 5-5 3 21-7 21h-2.02l.02 26s14 15 45 21 16 51 21 64l3 33s10 18 12 31l2 34 1 11c.05 8.78 2.61 13.91 5 17 1.28 1.66 2.26 2.39 4.5 4.75 4.56 4.8 7.62 9.24 9.5 12.25v7.44s-.16 15.44-5.08 0L412 384v14c0 1 7 22.96 7 22.96s2 14.04-6 3.04l-8-18 1 25c.22 2.81-1.46 4.83-2.8 4.89-1.38.06-3.33-1.92-3.2-4.89a95.145 95.145 0 00-5-25l-1 23s-3 11-6-1l-1-23-5 15s-4 4-5-2l1-15s1-26-1-38-20-44-20-57-6-34-6-34v-20s-6 34-8 34c0 0 2 50 2 51s8 62 8 62 1 80-10 93l-2 49s6 36-1 54-10 45-10 45v44s8 20 12 24-3 12-3 12l-18 1s-9 .12-15-13.44c.28-.92 2.27-7.95-2-13.56-1.64-2.15-3.63-3.35-5-4 0 0-2-5 1-12s3-18 3-18c.75-1.56 1.12-2.35 1.12-2.36.4-.86 1.21-3.09 1.88-9.34 0 0 0-30.3-7-50.3 0 0-2-39 3-49s-6-22-6-32V402h-6"
        fill="none"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      /> */}
    </Svg>
    {/* </TouchableOpacity> */}
    </View>
  )
}
const styles = StyleSheet.create({    
    fills: {
        fill: '#FFFFFF',
        stroke: '#2E3192',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
    },
    outlines:{
      fill: '#2E3192'
    },
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
}
)
//export default SvgAvatar
