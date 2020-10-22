//This custom hook provides the connection between 2 contexts (LocationContext & TrackContext)
import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';

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
