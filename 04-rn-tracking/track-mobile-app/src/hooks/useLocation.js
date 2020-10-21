import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    console.log('start watching');
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      //await watchPositionAsync(
      //to stop this background process
      // if you check watchPositionAsync, there is an sub.remove(); function available
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //1 sec
          distanceInterval: 10, //10 meters
          //we should get an update in every 1 sec OR 10 meters
        },
        // (location) => {
        //   addLocation(location);
        // }
        callback
      );

      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  const stopWatching = () => {
    console.log('stop watching');
    if (subscriber) subscriber.remove();
    setSubscriber(null);
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      //stopWatching
      stopWatching();
      // setSubscriber(null);
    }
  }, [shouldTrack, callback]);

  return [err];
};
