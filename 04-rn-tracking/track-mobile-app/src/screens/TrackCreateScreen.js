//MANY LOGIC INSIDE THIS FILE MOVED TO useLocation hook - check TrackCreateScreen0.js

import '../_mockLocation'; //for testing purposes
//IF I UNCOMMENT THE LINE ABOVE, AUTOMATICALLY LOCATION_CHANGE EVENTS EMITTED AND CAPTURED HERE
import React, { useContext, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  //isFocused helps us to stop/start tracking

  //const { addLocation } = useContext(LocationContext);
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  // const [err] = useLocation((location) => addLocation(location));
  // const [err] = useLocation(isFocused, addLocation);

  // const [err] = useLocation(isFocused, (location) => {
  //   addLocation(location, state.recording);
  // });
  //every time this screen re-renders the callback function sent to useLocation hook re-created again
  //the callback function I'm referring is  (location) => { addLocation(location, state.recording); } above
  //the problem is we don't want to re-create each time, causes to useEffect (in useLocation hook) re-run again again and again

  const callback = useCallback(
    (location) => {
      if (location.coords.longitude > 0) {
        //this check added only for escaping from an error (when recording starts, or tracking screen focuses, there is always first item in locations array which is we do not want??? It is the real time/location of the device actually)
        // addLocation(location, state.recording);
        addLocation(location, recording);
      }
    },
    // [state.recording]
    [recording]
  );

  //const [err] = useLocation(isFocused, callback); //No recording when user focus another screen
  const [err] = useLocation(isFocused || recording, callback); //Recording continues even user focus another screen, until pressing stop recording

  // const isFocused = useIsFocused();
  // if (isFocused) {
  //   console.log('focused');
  // }

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      //console.log('focused');
      setIsFocused(true);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        //console.log('un-focused');
        setIsFocused(false);
      };
    }, [])
  );

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services!</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
