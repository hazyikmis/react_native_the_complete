//import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = (props) => {
  //const {} = props;
  const [term, setTerm] = useState('');
  const [searchApi, results, errMsg] = useRestaurants();

  const filterResultsByPrice = (price) => {
    // price --> '$' | '$$' | '$$$'
    return results.filter((result) => result.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        //onTermSubmit={() => console.log('search term submitted:', term)}
        //onTermChange={(newTerm) => setTerm(newTerm)}
        onTermChange={setTerm} //WORKS? strangely
        //onTermSubmit={searchApi}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{term}</Text>
      {errMsg ? <Text>{errMsg}</Text> : null}
      <Text>We have found {results.length} restaurants...</Text>
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
      <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
