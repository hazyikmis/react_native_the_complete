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
    case 'get_blogposts':
      return action.payload;
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
  /*
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    //in all scenarios we are calling addBlogPost with a callback parameter
    //but there is also a possibility to call this function without a callback
    if (callback) {
      callback(); //navigates index screen
    }
  };
  */
  //after adding a backend server (json-server via ngrok)
  return async (title, content, callback) => {
    //SIDE NOTE: json-server automatically adds "id"s
    const response = await jsonServer.post('/blogposts', { title, content });
    //rather than dispatching this action, its better to reload items in the IndexScreen using useEffect/focus !
    //IMPORTANT CHECK: IndexScreen.js / useEffect
    //dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
  //any time we call "dispatch", this object taken by react and automatically
  //provided to reducer function as the 2nd argument (which is action)
};

const deleteBlogPost = (dispatch) => {
  //return (id) => dispatch({ type: 'delete_blogpost', payload: id });
  //any time we call "dispatch", this object taken by react and automatically
  //provided to reducer function as the 2nd argument (which is action)

  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    //we are calling dispatch, because we are not changing the screen, doing this deletion on the same IndexPage!
    //because of that -not like addBlogPost above- dispatching the action, in order to delete this same blogpost from state
    //BUT SURE, PROBABLY SOME OTHER METHODS AVAILABLE
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  // return (id, title, content) => {
  //   dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
  // };
  /*
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    //in all scenarios we are calling editBlogPost with a callback parameter
    //but there is also a possibility to call this function without a callback
    if (callback) {
      callback(); //navigates previous screen - navigation.pop()
    }
  };
  */
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    //in all scenarios we are calling editBlogPost with a callback parameter
    //but there is also a possibility to call this function without a callback
    if (callback) {
      callback(); //navigates previous screen - navigation.pop()
    }
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  //{ addBlogPost },
  // { addBlogPost, deleteBlogPost },
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
  // [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }] //start with an initial dummy data
  //after adding jsonServer & getBlogPosts function, we do not need initial data
);
