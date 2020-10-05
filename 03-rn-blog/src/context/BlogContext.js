//useReducer solution
/*
Whenever people say to you hey let's manage our state with context or
something like that it's not quite a statement that makes a lot of sense,
again context is just about moving information and it doesn't necessarily
entirely replace a library like say redux or something like that.
*/
import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  // const [blogPosts, setBlogPosts] = useState([]);
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

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

//The problem is: Whenever you want to define new context (new data to keep in Context and share it with children)
//you need to follow same process done in here:
//-create context,
//-create provider
//-define actions/dispatching
//-return/export context provider
//So, we can use a generic structure (as defined in createDataContext.js)
//to make it all
