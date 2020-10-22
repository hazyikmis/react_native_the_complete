//LocationContext: All about tracking the user location + storing points
//TrackContext: All about saving + retrieving existing tracks from our API
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    //as you noticed we are not appending the existing state (like ...state)
    //because we are treating the trackerApi.get('/tracks') api call as a TOTAL SOURCE OF TRUTH !!!
    //means, throw away the existing state and accept this data (returning from api) as a new state
    //Because of that, we do not need also another reducer for like "add_track"
    //and we are not dispatching an action when we add a new track, but we fetching all tracks by navigating TrackListScreen
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: response.data });
};

const createTrack = (dispatch) => async (name, locations) => {
  //make a request to our API
  // console.log(name, locations.length);
  await trackerApi.post('/tracks', { name, locations });
  //side note: userId information appended to the posted data inside the server/backend (tracker-server) by requireAuth middleware
  //we are here adding just the token into the Authorization header inside the trackerApi for all requests through backend
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
