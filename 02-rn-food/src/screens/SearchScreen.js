import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = (props) => {
  //const {} = props;
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        // term: term,
        term,
        limit: 20,
        location: 'san jose',
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        //onTermSubmit={() => console.log('search term submitted:', term)}
        //onTermChange={(newTerm) => setTerm(newTerm)}
        onTermChange={setTerm} //WORKS? strangely
        onTermSubmit={searchApi}
      />
      <Text>{term}</Text>
      <Text>We have found {results.length} restaurants...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
