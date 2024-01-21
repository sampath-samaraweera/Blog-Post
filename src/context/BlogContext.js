import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_Blogpost':
      return [...state, { id: Math.floor(Math.random() * 99999), title: `Blog Post #${state.length + 1}` }];
    case 'delete_Blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_Blogpost' });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_Blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(reducer, {addBlogPost, deleteBlogPost} , []);
