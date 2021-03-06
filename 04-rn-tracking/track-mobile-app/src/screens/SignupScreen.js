import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  // const { state, signup, clearErrorMessage, tryAutoSignin } = useContext(
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  //trying auto signin (checking token) operations moved to SplashScreen!
  //Because, when the app loads, first this SignupScreen shown a couple of secs and then moves to mainFlow... thats not nice.
  //So, we designed a splash screen (nothing inside - just dispatches the tryAutoLogin action)
  // useEffect(() => {
  //   tryAutoSignin();
  // }, []);

  useEffect(() => {
    //This useEffects run once, and if user navigates back to this screen useEffect DO NOT runs again
    //If we want to run in any time this screen gets focus we should a listener to this component/screen
    //We need this, because we should clear "errorMessage" in the AuthContext when this screen get focus

    //when this screen completely destroyed then all the returned functions from useEffect hooks
    //on this component/screen called - to clean up. Because of that, to find what to clean up, we first
    //assign a const the called function (when this screen/component gets focus)
    const unsubscribe = navigation.addListener('focus', () => {
      clearErrorMessage();
    });

    //These cleanup functions will only run when the component unmounts, which in this app, never actually happens.
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        // onSubmit={({ email, password }) => signup({ email, password })}
        onSubmit={signup}
      />
      <NavLink
        navigation={navigation}
        text="Already have an account? Sign in instead!"
        routeName="Signin"
      />
    </View>
  );
};

export const navigationOptions = () => {
  return {
    // header: null,
    headerTitle: 'Sign Up',
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
    justifyContent: 'center', //vertically
    marginBottom: 80,
  },
});

export default SignupScreen;

//BEFORE creating AuthForm.js
/*
import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Your Email Address"
        value={email}
        // onChangeText={(newEmail) => setEmail(newEmail)}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        // errorMessage={state.errorMessage}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        // onChangeText={(newPwd) => setPassword(newPwd)}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead.
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

export const navigationOptions = () => {
  return {
    // header: null,
    headerTitle: 'Sign Up',
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
    justifyContent: 'center', //vertically
    marginBottom: 100,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },
  link: {
    color: 'blue',
  },
});

export default SignupScreen;

*/
