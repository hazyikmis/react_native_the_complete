import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowScreen = ({ route }) => {
  //route.params --> {id: number } //comes from IndexScreen.js
  // console.log(route);
  return (
    <View style={styles.container}>
      <Text>Show Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowScreen;
