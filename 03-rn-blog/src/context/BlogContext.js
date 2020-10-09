import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

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
    case 'edit_blogpost':
      return state.map((blogPost) => {
        // if (blogPost.id === action.payload.id) {
        //   return action.payload;
        // } else {
        //   return blogPost;
        // }
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
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
    //in all scenarios we are calling addBlogPost with a callback parameter
    //but there is also a possibility to call this function without a callback
    if (callback) {
      callback(); //navigates index screen
    }
  };

  //any time we call "dispatch", this object taken by react and automatically
  //provided to reducer function as the 2nd argument (which is action)
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: 'delete_blogpost', payload: id });
  //any time we call "dispatch", this object taken by react and automatically
  //provided to reducer function as the 2nd argument (which is action)
};

const editBlogPost = (dispatch) => {
  // return (id, title, content) => {
  //   dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
  // };
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    //in all scenarios we are calling editBlogPost with a callback parameter
    //but there is also a possibility to call this function without a callback
    if (callback) {
      callback(); //navigates previous screen - navigation.pop()
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  //{ addBlogPost },
  // { addBlogPost, deleteBlogPost },
  { addBlogPost, deleteBlogPost, editBlogPost },
  //[]
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }] //start with an initial dummy data
);
