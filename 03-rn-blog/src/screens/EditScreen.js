import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Edit Screen - {route.params?.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EditScreen;
