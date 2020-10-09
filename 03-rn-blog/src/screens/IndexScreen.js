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

  // useEffect(() => {
  //   getBlogPosts();
  // }, []);

  useEffect(() => {
    getBlogPosts();
    //This useEffects run once, and if user navigates back to this screen useEffect DO NOT runs again
    //If we want to run in any time this screen gets focus we should a listener to this component/screen
    //By doing that, we do not need to "dispatch" the "add_blogpost" action defined in the BlogContext.js
    //rather than dispatching "add_blogpost" action to add state new action and render it to screen
    //we are trying to call getBlogPost() to fill the state with all blogposts -including the newly added blogpost-
    //and show here, in IndexList when this screen gets focus (after adding new blogpost)
    /*
    navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    */

    //when this IndexScreen completely destroyed then all the returned functions from useEffect hooks
    //on this component/screen called - to clean up. Because of that, to find what to clean up, we first
    //assign a const the called function (when this screen/component gets focus)
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('getBlogPosts called on focus');
      getBlogPosts();
    });

    //These cleanup functions will only run when the component unmounts, which in this app, never actually happens.
    return unsubscribe;
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
