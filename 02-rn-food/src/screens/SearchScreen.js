//import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

// const SearchScreen = ({ navigation }) => {
const SearchScreen = () => {
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
      {/* <Text>{term}</Text> */}
      {errMsg ? <Text>{errMsg}</Text> : null}
      {/* <Text style={styles.textInfo}>
        We have found {results.length} restaurants...
      </Text> */}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
          // navigation={navigation}
          //we are passing "props.navigation" to child components, because we're gonna navigate another screen in the stack from child component
          //BUT NO NEED TO DO THAT: use "withNavigation"
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
          // navigation={navigation}
          //we are passing "props.navigation" to child components, because we're gonna navigate another screen in the stack from child component
          //BUT NO NEED TO DO THAT: use "withNavigation"
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
          // navigation={navigation}
          //we are passing "props.navigation" to child components, because we're gonna navigate another screen in the stack from child component
          //BUT NO NEED TO DO THAT: use "withNavigation"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 5,
    flex: 1,
  },
  textInfo: {
    marginLeft: 10,
  },
});

export default SearchScreen;
