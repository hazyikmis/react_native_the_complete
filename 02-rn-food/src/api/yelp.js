import axios from 'axios';
import KEYS from '../../keys';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 'Bearer ' + KEYS.YELP_API,
  },
});

//HOW TO CALL FROM OTHER FILES:
//yelp.get('/search')
