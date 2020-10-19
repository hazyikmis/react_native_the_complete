//import '../_mockLocation'; //for testing purposes
//IF I UNCOMMENT THE LINE ABOVE, AUTOMATICALLY LOCATION_CHANGE EVENTS EMITTED AND CAPTURED HERE
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //1 sec
          distanceInterval: 10, //10 meters
          //we should get an update in every 1 sec OR 10 meters
        },
        (location) => {
          console.log(location);
          //if user pressed "Record Track" then all the locations need to be stored in somewhere
          //We need a another architecture (like AuthContext handling all auth-related events): LocationContext/LocationProvider
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  //we need to run startWatching only once at the beginning - to request permission for location services
  //if its the first time then a modal screen shown to accept/deny...
  //if already accepted/denied then it is gonna never again asks - THAT MIGHT BE A PROBLEM FOR REPETATIVE TESTING
  useEffect(() => {
    startWatching();
  }, []);

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
