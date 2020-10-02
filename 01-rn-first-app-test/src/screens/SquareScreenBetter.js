//"useReducer" hook used for state management
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC = 20;

//const reducer = (state, howToChangeStateObject) => { //returns new(changed) state
const reducer = (state, action) => {
  //returns new(changed) state
  //state --> {red:number, green:number, blue:number}
  //action --> {colorToChange: 'red'|'green'|'blue', amount: COLOR_INC|-COLOR_INC}
  switch (action.colorToChange) {
    case 'red':
      /*
      //Never do: state.red = state.red - COLOR_INC
      //Instead, REBUILD entire state from scratch
      //AND ALWAYS RETURN SOMETHING (new/same STATE), OTHERWISE ERROR!!!
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        //return; // DO NOT DO THAT!
        return state;
      }
      return { ...state, red: state.red + action.amount };
    */
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreenBetter = (props) => {
  //const {} = props;

  //const [state, runReducer] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  //console.log(state) // initially {red:0, green: 0, blue: 0}

  return (
    <View style={styles.container}>
      <Button
        title="Reset Colors (UseReducer)"
        onPress={() => {
          setRed(0);
          setGreen(0);
          setBlue(0);
        }}
      />
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INC })}
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INC })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INC })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INC })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INC })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INC })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SquareScreenBetter;
