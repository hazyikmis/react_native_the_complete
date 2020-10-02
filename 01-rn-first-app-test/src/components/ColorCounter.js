import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = (props) => {
  const { color, onIncrease, onDecrease } = props;
  return (
    <View style={styles.container}>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ColorCounter;
