// BlogContext.js
import React, { createContext, useReducer } from 'react';

const BlogContextReducer = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_Blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(reducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_Blogpost' });
  };

  const value = { blogPosts, addBlogPost };

  return (
    <BlogContextReducer.Provider value={value}>
      {children}
    </BlogContextReducer.Provider>
  );
};

export default BlogContextReducer;
