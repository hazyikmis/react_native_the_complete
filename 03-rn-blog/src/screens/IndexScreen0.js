import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  // const value = useContext(BlogContext);
  //const blogPosts = useContext(BlogContext);
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <Text>Index Screen!</Text>
      {/* <Text>{value}</Text> */}
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        // data={blogPosts}
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default IndexScreen;
