//useState solution
/*
Whenever people say to you hey let's manage our state with context or
something like that it's not quite a statement that makes a lot of sense,
again context is just about moving information and it doesn't necessarily
entirely replace a library like say redux or something like that.
*/
import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  //const deleteBlogPost = () => {};
  //const updateBlogPost = () => {};
  //We can send all these functions as props to other components which are consumers of BlogContext
  //But, there is a better way of doing that: RATHER THAN USING useState HOOK, try out "useReducer" HOOK instead.

  return (
    // <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
    //Now with the design of Context below, we are passing not only the data, but also the function how to add new data
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {/* <BlogContext.Provider value={{ data: blogPosts, addBlogPost, deleteBlogPost, updateBlogPost }}> */}
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
