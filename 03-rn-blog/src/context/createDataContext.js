//basic context creation process
import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions --> {addBlogPost: (dispatch) => { return () => {}}}
    //So here's the idea: We're going to loop through that actions object
    //for every key in this case like just "add a blog post" we're gonna take
    //that function right there we're going to call it with the dispatch
    //argument and that's going to give us back that function right there.
    //And that function right there is what we're going to pass on down into
    //our value prop right here in <Context.Provider value={{ state: state }}>{children}</Context.Provider>.
    //And it's essentially going to let all of our child components make
    //changes to our state object.

    const boundActions = {};
    for (let key in actions) {
      //key --> addBlogPost for example
      boundActions[key] = actions[key](dispatch);
    }

    // return <Context.Provider value={{ state: state }}>{children}</Context.Provider>;
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
