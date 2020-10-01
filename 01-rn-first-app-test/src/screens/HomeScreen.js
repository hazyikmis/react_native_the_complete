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
