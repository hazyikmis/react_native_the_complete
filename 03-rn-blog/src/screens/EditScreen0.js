import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation, route }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.container}>
      {/* <Text>Edit Screen - {route.params?.id}</Text> */}
      <Text>Edit Title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EditScreen;
