//LocationContext: All about tracking the user location + storing points
//TrackContext: All about saving + retrieving existing tracks from our API
import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'add_location':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'change_name':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {
  dispatch({ type: 'start_recording' });
};

const stopRecording = (dispatch) => () => {
  dispatch({ type: 'stop_recording' });
};

// const addLocation = (dispatch) => (location) => {
const addLocation = (dispatch) => (location, recording) => {
  // console.log('add_current_location');
  dispatch({ type: 'add_current_location', payload: location });
  // console.log(recording);
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

const changeTrackName = (dispatch) => (name) => {
  dispatch({ type: 'change_name', payload: name });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeTrackName },
  // { recording: false, locations: [], currentLocation: null }
  { recording: false, name: '', locations: [], currentLocation: null }
);
