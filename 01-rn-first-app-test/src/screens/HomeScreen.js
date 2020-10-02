import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

//const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
  //console.log(props);
  //console.log(props.navigation);

  //return <Text style={styles.text}>Hi there!!!</Text>;
  return (
    <View>
      <Text style={styles.text}>Hi there!!!</Text>
      <Button
        title="Go to Components Demo"
        //onPress={() => console.log('comp button pressed')}
        //onPress={() => props.navigation.navigate('Components')}
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        //onPress={() => console.log('comp button pressed')}
        //onPress={() => props.navigation.navigate('List')}
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Images"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo (UseState)"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Counter Demo (UseReducer)"
        onPress={() => navigation.navigate('CounterBetter')}
      />
      <Button
        title="Go to Colors Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Squares Demo (useState)"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Squares Demo (useReducer)"
        onPress={() => navigation.navigate('SquareBetter')}
      />
      <Button
        title="Go to Squares Demo (useReducer)(ComCon)"
        onPress={() => navigation.navigate('SquareBetterCC')}
      />
      <TouchableOpacity
        //onPress={() => console.log('list button pressed')}
        //onPress={() => props.navigation.navigate('List')}
        onPress={() => navigation.navigate('List')}
      >
        <Text>
          Go to List Demo (This is TouchableOpacity with multiple Texts)
        </Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
