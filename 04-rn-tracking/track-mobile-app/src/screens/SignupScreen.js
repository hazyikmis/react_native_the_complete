import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 48 }}>SignupScreen</Text>
        <Button
          title="Go to Signin"
          onPress={() => navigation.navigate('Signin')}
        />
        <Button
          title="Go to Main flow"
          onPress={() => navigation.navigate('mainFlow')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignupScreen;
