import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('search is being done');
    try {
      const response = await yelp.get('/search', {
        params: {
          //term // term: term,
          term: searchTerm,
          limit: 50,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      //console.log(err)
      setErrMsg('Something went wrong!');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errMsg];
};
