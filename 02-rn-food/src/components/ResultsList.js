import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = (props) => {
  //navigation sent from parent component(its a screen on the stack navigator) to be able to navigate from this child component
  //BUT NO NEED TO DO THAT: use "withNavigation" - BUT IN EITHER WAY, STILL WE NEED TO EXTRACT/de-structure IT FROM "props"
  const { title, results, navigation } = props;

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleGroupStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.textInfo}>Results: {results.length}</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          // return <ResultsDetail result={item} />;
          return (
            <TouchableOpacity
              onPress={
                () => navigation.navigate('ScreenResultsShow', { id: item.id })
                //item.id is the ID of the Business
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInfo: {
    marginLeft: 10,
  },
  titleGroupStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 5,
    alignItems: 'flex-end',
  },
});

export default withNavigation(ResultsList);
//mow ResultsList can access to navigation & other params
