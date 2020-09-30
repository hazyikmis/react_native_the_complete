import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = (props) => {
  const {} = props;
  return <Text style={styles.textStyle}>This is the components Screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
