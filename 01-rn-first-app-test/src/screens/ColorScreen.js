import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = (props) => {
  //const {} = props;
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View style={styles.container}>
      <Button
        title="Add a Color Box"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  container: {},
});

export default ColorScreen;
