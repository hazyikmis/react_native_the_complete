import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

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
    marginBottom: 100,
  },
});

export default SigninScreen;
