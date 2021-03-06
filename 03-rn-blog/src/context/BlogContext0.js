//EXAMPLE OF SIMPLE CONTEXT CREATION
import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { title: 'Blog Post #1' },
    { title: 'Blog Post #2' },
    { title: 'Blog Post #3' },
  ];

  // return <BlogContext.Provider>{children}</BlogContext.Provider>;
  // return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
