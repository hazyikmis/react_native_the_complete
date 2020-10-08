import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          // title: `Blog Post #${state.length + 1}`,
          title: action.payload.title,
          content: action.payload.content,
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
  // return () => dispatch({ type: 'add_blogpost' });
  //return (title, content) => dispatch({type: 'add_blogpost', payload: {title, content}});
  //HERE IS BELOW YOU SEE THE NORMAL STRUCTURE IT SHOULD BE
  /*
  return async (title, content, callback) => {
    try {
      await axios.post('someapi', title, content);
      dispatch({ type: 'add_blogpost', payload: { title, content } });
      callback();
      
    } catch (error) {
        throw ...
        or some other things
    }
  };
  */
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback(); //navigates index screen
  };

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
  //[]
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }] //start with an initial dummy data
);
