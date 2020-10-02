//"useReducer" hook used for state management WITH COMMUNITY CONVENTION TERMS
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INC = 20;

//const reducer = (state, howToChangeStateObject) => { //returns new(changed) state
const reducer = (state, action) => {
  //returns new(changed) state
  //state --> {red:number, green:number, blue:number}
  //action --> {colorToChange: 'red'|'green'|'blue', amount: COLOR_INC|-COLOR_INC}
  //action --> {type: 'change_red'|'change_green'|'change_blue', payload: COLOR_INC|-COLOR_INC}
  //switch (action.colorToChange) {

  switch (action.type) {
    case 'change_red':
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
      // return state.red + action.amount > 255 || state.red + action.amount < 0
      //   ? state
      //   : { ...state, red: state.red + action.amount };
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreenBetterComCon = (props) => {
  //const {} = props;

  //const [state, runReducer] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  //console.log(state) // initially {red:0, green: 0, blue: 0}

  return (
    <View style={styles.container}>
      <Button
        title="Reset Colors (UseReducer)(ComCon)"
        onPress={() => {
          setRed(0);
          setGreen(0);
          setBlue(0);
        }}
      />
      <ColorCounter
        color="Red"
        onIncrease={() =>
          //dispatch({ colorToChange: 'red', amount: COLOR_INC })
          dispatch({ type: 'change_red', payload: COLOR_INC })
        }
        onDecrease={() =>
          //dispatch({ colorToChange: 'red', amount: -1 * COLOR_INC })
          dispatch({ type: 'change_red', payload: -1 * COLOR_INC })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INC })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INC })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INC })}
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INC })
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

export default SquareScreenBetterComCon;
