import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Pressable, StyleSheet, Text, View } from 'react-native';

const ColorBlock = () => {
  const [colour, setColour] = useState('green')
  return(
    <Pressable onPress = {() => {
      console.log("press")
    }}>
      <view style = {[styles.ColorCube, {backgroundColor: {colour}}]}>
        <Text>press</Text>
      </view>
    </Pressable>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
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
  },
  ColorCube:{
    height:50,
    width:50,
    backgroundColor:"blue",
    borderRadius:3,
    padding:5,
    margin:5,
  }
});
