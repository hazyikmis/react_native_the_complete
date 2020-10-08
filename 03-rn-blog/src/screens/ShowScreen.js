import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
  //route.params --> {id: number } //comes from IndexScreen.js
  // console.log(route);
  const { state } = useContext(BlogContext);

  const blogPost = state.find((post) => post.id === route.params?.id);

  return (
    <View style={styles.container}>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowScreen;
