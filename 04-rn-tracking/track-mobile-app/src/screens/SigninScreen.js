import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

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
        headerText="Sign In to Your Tracker Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        // onSubmit={({ email, password }) => signin({ email, password })}
        onSubmit={signin}
      />
      <NavLink
        navigation={navigation}
        text="Don't you have an account? Sign up instead!"
        routeName="Signup"
      />
    </View>
  );
};

/*
export const navigationOptions = () => {
  return {
    // header: null,
    headerTitle: 'Sign Ip',
  };
};
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //vertically
    marginBottom: 40,
  },
});

export default SigninScreen;
