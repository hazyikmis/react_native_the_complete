import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(``);

  const { addBlogPost } = useContext(BlogContext);

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
      <Button
        title="Add Blog Post"
        onPress={() => {
          //this scenario below has some flaws, because adding a post is a async in nature
          //and there might be an error
          /*
              addBlogPost(title, content);
              navigation.navigate('ScreenIndex');
              */
          //we need to change addBlogPost to accept a callback function
          addBlogPost(title, content, () => {
            navigation.navigate('ScreenIndex');
          });
        }}
      />
    </View>
  );
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

export default CreateScreen;
