//"useState" hook used for state management
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC = 20;

const SquareScreen = (props) => {
  //const {} = props;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red, green, blue);

  const setColor = (color, change) => {
    //color === 'red', 'green', 'blue'
    //change === +COLOR_INC, -COLOR_INC
    switch (color) {
      case 'red':
        // if (red + change > 255 || red + change < 0) return;
        // else setRed(red + change);
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Reset Colors"
        onPress={() => {
          setRed(0);
          setGreen(0);
          setBlue(0);
        }}
      />
      <ColorCounter
        color="Red"
        // onIncrease={() => setRed(red + COLOR_INC)}
        // onDecrease={() => setRed(red - COLOR_INC)}
        onIncrease={() => setColor('red', COLOR_INC)}
        onDecrease={() => setColor('red', -1 * COLOR_INC)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('green', COLOR_INC)}
        onDecrease={() => setColor('green', -1 * COLOR_INC)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor('blue', COLOR_INC)}
        onDecrease={() => setColor('blue', -1 * COLOR_INC)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SquareScreen;
