import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = (props) => {
  const { result } = props;
  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ResultsDetail;
