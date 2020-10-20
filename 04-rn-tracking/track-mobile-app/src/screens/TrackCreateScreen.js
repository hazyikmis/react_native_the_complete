//MANY LOGIC INSIDE THIS FILE MOVED TO useLocation hook - check TrackCreateScreen0.js

import '../_mockLocation'; //for testing purposes
//IF I UNCOMMENT THE LINE ABOVE, AUTOMATICALLY LOCATION_CHANGE EVENTS EMITTED AND CAPTURED HERE
import React, { useContext, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
  const [isFocused, setIsFocused] = useState(false);

  //const { addLocation } = useContext(LocationContext);
  //isFocused helps us to stop/start tracking
  const { addLocation } = useContext(LocationContext);
  // const [err] = useLocation((location) => addLocation(location));
  const [err] = useLocation(isFocused, addLocation);

  // const isFocused = useIsFocused();
  // if (isFocused) {
  //   console.log('focused');
  // }

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log('focused');
      setIsFocused(true);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('un-focused');
        setIsFocused(false);
      };
    }, [])
  );

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services!</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
