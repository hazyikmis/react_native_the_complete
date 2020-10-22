//This custom hook provides the connection between 2 contexts (LocationContext & TrackContext)
import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';

//IMPORTANT !!!
//We can include also AuthContext, and use the saved token when creating/saving the track.
//Rather than doing that way, handling token issue for each action separately, we've
//implemented a more clever design by using api/tracker.js file
//This tracker.js, handles all ours api calls, so when sending requests to backend,
//its very easy to append Authorization header with token (rather than sending token separately for each action)
//IMPORTANT !!!

export default () => {
  //We must pull the all location and the name of the track recorded from LocationContext
  //and push them to the TrackContext to save as a new track
  const {
    state: { locations, name },
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};
