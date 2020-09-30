import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    //{ name: 'Friend #1', key: '1' },
    //if you define key object like that, directly on the object, you do not need to do anything when you rendering FlatList
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' },
    { name: 'Friend #10' },
  ];
  return (
    <FlatList
      data={friends}
      // renderItem={(element) => {
      //   //element --> {item: { name: 'Friend #1' }, index: 0}
      //   ...
      // }}
      keyExtractor={(friend) => friend.name}
      //friend.name is the key! (we decided here)
      renderItem={({ item }) => {
        //item --> { name: 'Friend #1' }
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    //flex: 1,
    width: '100%',
    height: 90,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListScreen;
