import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    //both signup & signin actions are the same (up to now)
    case 'signup':
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

//QUICK NOTE: We can define like, %100 equal  (used in signin below)
//const signup = (dispatch) => async ({email, password}) => {...}

const signup = (dispatch) => {
  //1-make an API request to sign up with provided email & password
  //2-if signed up successfully then modify the state that we are authenticated
  //3-if not signed up, send an error message
  return async ({ email, password } /*, callback*/) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      // console.log(response.data);
      await AsyncStorage.setItem('@TrackerApp_token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
      /*
      //if we don't know what to do, but in this example we are sure we gonna navigate to somewhere
      if (callback) {
        callback();
      }
      */
      //navigate to mainFlow, BUT HOW? This file/component not being created/rendered by NavigationContainer
      //solution: use a clever function to get access to navigator (check navigationRef.js & App.js)
      //navigate('mainFlow');
      navigate('mainFlow');
    } catch (err) {
      //console.log(err.message);
      //console.log(err.response.data); //for real error message!

      //if we want to update state, we need to always dispatch an action,
      //here, we gonna update the "errorMessage" state portion
      //so signup screen easily can check and see if there is an error occurred or not
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up!',
      });
    }
  };
};

//QUICK NOTE: We can define like, %100 equal (used in signup above)
//const signin = (dispatch) => { return async ({email, password}) => {...}}

const signin = (dispatch) => async ({ email, password }) => {
  //make an API request to sign in with provided email & password
  //Handle success by updating the state
  //Handle failure by sending/showing an error message
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('@TrackerApp_token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('mainFlow');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in!',
    });
  }
};

const signout = (dispatch) => {
  return () => {
    //sign out (somehow!)
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  // { isSignedIn: false, errorMessage: '' }
  { token: '', errorMessage: '' }
);
