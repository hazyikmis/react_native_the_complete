import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = (props) => {
  //const {} = props;
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Enter Your Name: {name}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 0,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
