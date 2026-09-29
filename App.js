import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Pressable, FlatList, StyleSheet, Text, View } from 'react-native';

const ColorBlock = (props) => {
  const [colourS, setColourS] = useState('green');
  const [number, setNumber] = useState(0);
  return(
    <Pressable onPress = {() => {
      if(colourS =='green' || colourS == props.player){
    setColourS('blue')
    setNumber(number +1)
    if(number > 2){
        setColourS('green');
        setNumber(0);
    }

  }
    }}>
      <View style = {[styles.ColorCube, {backgroundColor: colourS}]}>
        <Text>{number}</Text>
      </View>
    </Pressable>
  );
}

export default function App() {
  const numCol = 5;
  const [player, setPlayer] = useState('blue')
  const [boxes, setBoxes] = useState([,,,,,,,,,,,,,,,,,,,,,,,,,])
  return (
    <View style={styles.container}>
      <FlatList
        data = {boxes}
        numColumns={numCol}
        renderItem={(BoxData) => {
          return(
            <ColorBlock info = {BoxData} />
          );
        }}
      />
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
    height:150,
    width: 150,
    backgroundColor:"#575353",
    borderRadius:30,
    padding:5,
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple',
  }
});
