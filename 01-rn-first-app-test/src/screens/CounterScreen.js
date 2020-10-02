//Solution with useState
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = (props) => {
  const {} = props;
  //let counter = 0; //if we define like that, it changes when de buttons pressed, but its not reflected to the DOM
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      {/* <Button title="Increase" onPress={() => counter++} />
      <Button title="Decrease" onPress={() => counter--} /> */}
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CounterScreen;
