import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
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
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
