import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_Blogpost':
      return [...state, { id: Math.floor(Math.random() * 99999), title: `Blog Post #${state.length + 1}` }];
    case 'delete_Blogpost':
      return 
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
  return () => {
    dispatch({ type: 'delete_Blogpost' });
  };
};

export const { Context, Provider } = createDataContext(reducer, {addBlogPost} , []);
