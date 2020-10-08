import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const BlogPostForm = ({ onSubmit }) => {
//initialValues is coming from EditScreen, but not from CreateScreen
const BlogPostForm = ({ onSubmit, initialValues }) => {
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState(``);
  const [title, setTitle] = useState(initialValues?.title); //BlogPostForm.defaultProps could be used below
  const [content, setContent] = useState(initialValues?.content); //BlogPostForm.defaultProps could be used below
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.labelStyle}>Enter Content</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
