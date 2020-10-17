//with the help of this clever function & some changes on the App.js
//every file even if it is screen or not, even if under NavigationContainer or not
//can navigate to all screens!

import { CommonActions } from '@react-navigation/native';

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (name, params) => {
  console.log(name, params);
  navigator.dispatch(CommonActions.navigate({ name, params }));
};
