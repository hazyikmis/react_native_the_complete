import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

//The problem in this function below is: There is no "dispatch" defined in here,
//its defined in "createDataContext". So its better to make it to accept dispatch as param
//and change it as far below
/*
const addBlogPost = () => {
  dispatch({ type: 'add_blogpost' });
};
*/
const addBlogPost = (dispatch) => {
  return () => dispatch({ type: 'add_blogpost' });
  //any time we call "dispatch", this object taken by react and automatically
  //provided to reducer function as the 2nd argument (which is action)
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: 'delete_blogpost', payload: id });
  //any time we call "dispatch", this object taken by react and automatically
  //provided to reducer function as the 2nd argument (which is action)
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  //{ addBlogPost },
  { addBlogPost, deleteBlogPost },
  []
);
