import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    //{ name: 'Friend #1', key: '1' },
    //if you define key object like that, directly on the object, you do not need to do anything when you rendering FlatList
    { name: 'Friend #1', age: 99 },
    { name: 'Friend #2' },
    { name: 'Friend #3', age: 50 },
    { name: 'Friend #4', age: 20 },
    { name: 'Friend #5', age: 20 },
    { name: 'Friend #6', age: 20 },
    { name: 'Friend #7', age: 20 },
    { name: 'Friend #8', age: 20 },
    { name: 'Friend #9', age: 20 },
    { name: 'Friend #10', age: 20 },
  ];
  return (
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      data={friends}
      // renderItem={(element) => {
      //   //element --> {item: { name: 'Friend #1' }, index: 0}
      //   ...
      // }}
      keyExtractor={(friend) => friend.name}
      //friend.name is the key! (we decided here)
      renderItem={({ item }) => {
        //item --> { name: 'Friend #1' }
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
