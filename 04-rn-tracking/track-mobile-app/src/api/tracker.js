//FIRST VERSION
/*
import axios from 'axios';

export default axios.create({
  baseURL: 'http://1f196e8ff0f4.ngrok.io',
});
*/

//This first version above has been changed to append token every time to the axios request

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: 'http://1f196e8ff0f4.ngrok.io',
});

// instance.interceptors.request.use(
//   () => {}, //runs automatically any time when we made a request (before the request to intercept something)
//   () => {}  //runs if there is an error
// );
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@TrackerApp_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
