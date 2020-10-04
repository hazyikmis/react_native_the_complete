import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = (props) => {
  //const {} = props;
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('search is being done');
    try {
      const response = await yelp.get('/search', {
        params: {
          //term // term: term,
          searchTerm,
          limit: 20,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      //console.log(err)
      setErrMsg('Something went wrong!');
    }
  };

  //searchApi('pasta');
  //--Call searchApi when component is first rendered //BAD CODE!
  //--BAD CODE because, the function which is making some changes on state are being called DIRECTLY!
  //--This causes an INFINITE LOOP!
  //--Solution: (If you want to call a function once at the first load use) useEffect hook!

  useEffect(() => {
    searchApi('pasta');
  }, []);

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
