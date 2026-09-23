import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Pressable, StyleSheet, Text, View } from 'react-native';

const ColorBlock = (props) => {
  const [colourS, setColourS] = useState('green')
  return(
    <Pressable onPress = {() => {
      console.log("press")
    }}>
      <View style = {[styles.ColorCube, {backgroundColor: colourS}]}>
        <Text>0</Text>
      </View>
    </Pressable>
  );
}

const pressSquare = (player) =>{
  if(colourS = "#575353" || colourS == player){
    setColourS({player})

  }
}
export default function App() {
  return (
    <View style={styles.container}>
      <ColorBlock />
      <ColorBlock />
      <ColorBlock />
      <ColorBlock />
      <ColorBlock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ColorCube:{
    height:175,
    width: 175,
    backgroundColor:"#575353",
    borderRadius:3,
    padding:5,
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  }
});
