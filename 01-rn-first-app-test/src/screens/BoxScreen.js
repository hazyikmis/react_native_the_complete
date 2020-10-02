import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = (props) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Box 1</Text>
      <Text style={styles.textStyleMiddle}>Box 2</Text>
      <Text style={styles.textStyle}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'black',
    //alignItems: 'stretch', //default
    //alignItems: 'flex-start',
    //flexDirection: 'column', //default
    flexDirection: 'row', //default
    height: 200,
    alignItems: 'center',
    //alignItems works based on flexDirection (VERTICALLY) - on "secondary axis"
    //justifyContent works based on flexDirection (HORIZONTALLY) - on "primary axis"
    justifyContent: 'center',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // marginVertical: 15,
    // marginHorizontal: 15,
    //marginBottom: 50,
  },
  absoluteFillObject: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textStyleMiddle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-end',
    bottom: 15,
    left: 25,
    //...StyleSheet.absoluteFillObject,
  },
});

export default BoxScreen;
