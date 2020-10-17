import createDataContext from './createDataContext';

const authReducer = (state, action) = {
  switch (action.type) {
    default:
      return state
  }
}

export const {Provider, Context} = createDataContext(
  authReducer,
  {}, //actions, not defined at the beginning
  {isSignedIn: false}
)