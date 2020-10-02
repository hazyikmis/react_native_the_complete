//Solution with useReducer
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state --> {counter: number}
  // action --> {type: 'increment' | 'decrement'} //no payload required in action, if you want: payload: 1
  switch (action.type) {
    case 'increment':
      //return { ...state, counter: state.counter + 1 };
      return { counter: state.counter + 1 }; //THIS ALSO WORKS, but in the future, if you add new items to state...
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreenBetter = (props) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View style={styles.container}>
      {/* <Button title="Increase" onPress={() => counter++} />
      <Button title="Decrease" onPress={() => counter--} /> */}
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment' })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement' })}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CounterScreenBetter;
