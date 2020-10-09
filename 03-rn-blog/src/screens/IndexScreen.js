import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  // const value = useContext(BlogContext);
  //const blogPosts = useContext(BlogContext);
  //const { data, addBlogPost } = useContext(BlogContext);
  //we don't have data object anymore, we have state and all data inside the state
  // const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  //in order to fill context/state with existing blogposts (stored in db.json file in the jsonserver app, served by ngrok tunneling)
  //calling getBlogPosts() action DIRECTLY is not a good idea, because this causes an infinite loop - re-rendering this component
  //because of that, we are using useEffect hook!
  //getBlogPosts();

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Index Screen!</Text>
      {/* <Text>{value}</Text> */}
      {/* <Button title="Add Post" onPress={addBlogPost} /> */}
      <FlatList
        // data={blogPosts}
        // data={data}
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ScreenShow', { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              {/* <TouchableOpacity onPress={() => console.log(item.id)}> */}
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash-2" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    //borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
