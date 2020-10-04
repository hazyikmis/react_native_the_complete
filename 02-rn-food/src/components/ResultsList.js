import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = (props) => {
  const { title, results } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
