//In this screen, auto signin is being tried.
//This screen could be named as LoadingScreen or ResolveAuthScreen or InitialScreen etc...
import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const SplashScreen = () => {
  const { tryAutoSignin } = useContext(AuthContext);

  useEffect(() => {
    tryAutoSignin();
  }, []);

  return null; //this screen shows nothing! if you want you can show something meaningful
};

export default SplashScreen;
